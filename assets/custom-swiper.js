document.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector(".product-gallery");
  if (!swiperEl) return;

  const slidesDesktop = swiperEl.dataset.slidesDesktop || 3;
  const slidesTablet = swiperEl.dataset.slidesTablet || 2;
  const slidesMobile = swiperEl.dataset.slidesMobile || 1;
  const spaceBetween = parseInt(swiperEl.dataset.spaceBetween) || 10;
  const pagination = swiperEl.dataset.pagination === "true";
  const navigation = swiperEl.dataset.navigation === "true";

  new Swiper(".product-gallery", {
    slidesPerView: parseInt(slidesDesktop),
    spaceBetween: spaceBetween,
    pagination: pagination
      ? {
          el: ".swiper-pagination",
          clickable: true,
        }
      : false,
    navigation: navigation
      ? {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      : false,
    breakpoints: {
      1024: { slidesPerView: parseInt(slidesDesktop) },
      768: { slidesPerView: parseInt(slidesTablet) },
      480: { slidesPerView: parseInt(slidesMobile) },
    },
  });
});
