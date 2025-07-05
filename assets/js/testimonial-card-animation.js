const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true, // Center the active slide
  slideToClickedSlide: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // When window width is >= 0px (mobile)
    0: {
      slidesPerView: 1,
      centeredSlides: true, // Force centering on mobile
      spaceBetween: 20, // Reduce space between slides
    },
    // When window width is >= 768px (tablet)
    768: {
      slidesPerView: 2,
      centeredSlides: false, // Disable centering on larger screens
    },
    // When window width is >= 992px (desktop)
    992: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
