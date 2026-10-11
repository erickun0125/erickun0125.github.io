// Play muted, looping videos only while they are on screen. With preload="none",
// a video downloads nothing until it is first scrolled into view.
function setupAutoplayVideos() {
  const videos = [...document.querySelectorAll('video[data-autoplay]')];
  if (!videos.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  const userPaused = new WeakSet();
  const autoPausing = new WeakSet();

  const play = video => {
    if (reducedMotion.matches || document.hidden || userPaused.has(video)) return;
    video.play().catch(error => {
      console.debug('Video autoplay could not start:', video.currentSrc, error.name);
    });
  };

  const pause = video => {
    if (video.paused) return;
    autoPausing.add(video);
    video.pause();
  };

  videos.forEach(video => {
    video.defaultMuted = true;
    video.muted = true;
    // Keep a pause made with the controls; browsers also pause video in hidden tabs.
    video.addEventListener('pause', () => {
      if (autoPausing.delete(video)) return;
      if (!document.hidden && !video.ended) userPaused.add(video);
    });
    video.addEventListener('play', () => userPaused.delete(video));
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        visible.add(target);
        play(target);
      } else {
        visible.delete(target);
        pause(target);
      }
    });
  }, { threshold: 0.25 });
  videos.forEach(video => observer.observe(video));

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) visible.forEach(play);
  });
  reducedMotion.addEventListener('change', () => {
    visible.forEach(video => (reducedMotion.matches ? pause(video) : play(video)));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAutoplayVideos, { once: true });
} else {
  setupAutoplayVideos();
}
