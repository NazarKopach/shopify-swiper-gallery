document.addEventListener('DOMContentLoaded', function () {
  const colorSelect = document.querySelector('[name="options[Color]"]');
  const slides = document.querySelectorAll('.swiper-slide');

  if (!colorSelect) return;

  colorSelect.addEventListener('change', function (e) {
    const selectedColor = e.target.value.toLowerCase();

    slides.forEach(slide => {
      if (slide.dataset.color === selectedColor) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    const swiper = document.querySelector('.product-gallery').swiper;
    if (swiper) swiper.update();
  });
});