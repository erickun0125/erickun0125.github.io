// Add keyboard and screen reader support to the theme's checkbox menu.
function enhanceProfileNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const control = document.querySelector('label[for="nav-toggle"]');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !control || !menu) return;

  control.setAttribute('role', 'button');
  control.setAttribute('tabindex', '0');
  control.setAttribute('aria-controls', menu.id);
  control.querySelectorAll('svg').forEach(icon => icon.setAttribute('aria-hidden', 'true'));

  const sync = () => {
    control.setAttribute('aria-expanded', String(toggle.checked));
    control.setAttribute('aria-label', toggle.checked ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('change', sync);
  control.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle.click();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.checked) {
      event.preventDefault();
      toggle.click();
      control.focus();
    }
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) requestAnimationFrame(sync);
  });
  sync();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', enhanceProfileNavigation, { once: true });
} else {
  enhanceProfileNavigation();
}
