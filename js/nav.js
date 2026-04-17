// --- Hamburger toggle ---
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', function () {
  nav.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
});

// Close nav when a link is tapped
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Close nav when clicking outside
document.addEventListener('click', function (e) {
  if (!nav.contains(e.target)) {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// --- Back to top button ---
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.textContent = '↑ Top';
backToTop.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', function () {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
