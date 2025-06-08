const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const images = document.querySelectorAll('.gallery img');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});


closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});


const filterBtns = document.querySelectorAll('.filter-buttons button');
const cards = document.querySelectorAll('.image-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');

    cards.forEach(card => {
      const match = card.getAttribute('data-category');
      card.style.display = (category === 'all' || match === category) ? 'block' : 'none';
    });
  });
});
