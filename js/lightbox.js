const images = document.querySelectorAll('.gallery img');
if (images.length === 0) return;

let current = 0;

// Build lightbox DOM
const overlay = document.createElement('div');
overlay.id = 'lightbox';
overlay.innerHTML =
  '<button id="lb-close" aria-label="Close">&times;</button>' +
  '<button id="lb-prev" aria-label="Previous">&#8249;</button>' +
  '<img id="lb-img" src="" alt="">' +
  '<button id="lb-next" aria-label="Next">&#8250;</button>';
document.body.appendChild(overlay);

const lbImg = document.getElementById('lb-img');

function open(index) {
  current = index;
  lbImg.src = images[current].src;
  lbImg.alt = images[current].alt;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function close() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function prev() { open((current - 1 + images.length) % images.length); }
function next() { open((current + 1) % images.length); }

images.forEach(function (img, i) {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function () { open(i); });
});

document.getElementById('lb-close').addEventListener('click', close);
document.getElementById('lb-prev').addEventListener('click', function (e) { e.stopPropagation(); prev(); });
document.getElementById('lb-next').addEventListener('click', function (e) { e.stopPropagation(); next(); });
overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

document.addEventListener('keydown', function (e) {
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape')      close();
  if (e.key === 'ArrowLeft')   prev();
  if (e.key === 'ArrowRight')  next();
});
