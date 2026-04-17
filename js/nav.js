const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', function () {
  nav.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
});
