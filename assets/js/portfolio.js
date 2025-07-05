document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".portfolio-swiper", {
    slidesPerView: "auto",
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: "auto", spaceBetween: 30 },
    },
  });

  // Project view function
  window.viewProject = function (projectId) {
    console.log("Viewing project:", projectId);
    // Your implementation
  };

  // View all projects function
  window.viewAllProjects = function () {
    console.log("View all projects clicked");
    // Your implementation
  };
});
