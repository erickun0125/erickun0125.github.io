function enhanceProjectCarousels() {
  document.querySelectorAll('.featured-carousel').forEach(carousel => {
    const track = carousel.querySelector('.featured-grid');
    const cards = [...track.querySelectorAll('.featured-card')];
    const toggle = carousel.querySelector('[data-carousel-toggle]');
    if (cards.length < 2) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const interval = Number(carousel.dataset.carouselInterval) || 6000;
    let paused = motion.matches;
    let visible = false;
    let hovered = false;
    let focused = false;
    let timer;
    let scrollTimer;

    const syncToggle = () => {
      toggle.textContent = paused ? 'Play' : 'Pause';
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.setAttribute('aria-label', paused ? 'Resume automatic project scrolling' : 'Pause automatic project scrolling');
    };

    const move = direction => {
      const max = track.scrollWidth - track.clientWidth;
      const position = track.scrollLeft;
      const positions = [...new Set(cards.map(card => Math.min(max, card.offsetLeft - cards[0].offsetLeft)))];
      const target = direction > 0
        ? (positions.find(point => point > position + 4) ?? 0)
        : (positions.reverse().find(point => point < position - 4) ?? max);
      track.scrollTo({ left: target, behavior: motion.matches ? 'auto' : 'smooth' });
    };

    const schedule = () => {
      clearTimeout(timer);
      if (paused || !visible || hovered || focused || document.hidden || track.scrollWidth <= track.clientWidth + 2) return;
      timer = setTimeout(() => {
        move(1);
        schedule();
      }, interval);
    };

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => move(-1));
    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => move(1));
    toggle.addEventListener('click', () => {
      paused = !paused;
      syncToggle();
      schedule();
    });
    carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
    carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
    track.addEventListener('focusin', () => { focused = true; schedule(); });
    track.addEventListener('focusout', event => {
      if (track.contains(event.relatedTarget)) return;
      focused = false;
      schedule();
    });
    track.addEventListener('keydown', event => {
      if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    });
    track.addEventListener('scroll', () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(schedule, 180);
    }, { passive: true });
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.15 }).observe(carousel);
    document.addEventListener('visibilitychange', schedule);
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', event => {
      if (event.matches) paused = true;
      syncToggle();
      schedule();
    });
    syncToggle();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', enhanceProjectCarousels, { once: true });
} else {
  enhanceProjectCarousels();
}
