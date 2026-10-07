function startAutoplayVideos() {
  document.querySelectorAll('video[autoplay]').forEach(video => {
    video.defaultMuted = true;
    video.muted = true;

    const start = () => {
      video.play().catch(error => {
        console.debug('Video autoplay could not start:', video.currentSrc, error.name);
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      start();
    } else {
      video.addEventListener('canplay', start, { once: true });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startAutoplayVideos, { once: true });
} else {
  startAutoplayVideos();
}
