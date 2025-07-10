document.addEventListener("DOMContentLoaded", function () {
  // Hero Background Slideshow
  const slides = document.querySelectorAll(".hero .background-slide");
  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Start slideshow
  setInterval(changeSlide, 5000);

  // DOM Elements
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const categoryDescriptions = document.querySelectorAll(".category");

  // Filter Functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      // Filter gallery items
      galleryItems.forEach((item) => {
        const categories = item.dataset.category.split(" ");
        if (filter === "all" || categories.includes(filter)) {
          item.style.display = "block";
          item.style.animation = "fadeIn 0.5s ease";
        } else {
          item.style.display = "none";
        }
      });

      // Update category descriptions
      categoryDescriptions.forEach((desc) => {
        desc.classList.remove("active");
        if (desc.dataset.category === filter) {
          desc.classList.add("active");
        }
      });

      // Scroll to first visible item on mobile
      if (window.innerWidth <= 768) {
        const firstVisible = document.querySelector(
          '.gallery-item[style*="display: block"]'
        );
        if (firstVisible) {
          firstVisible.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
      }
    });
  });

  // Initialize with all filter
  galleryItems.forEach((item) => {
    item.style.display = "block";
  });
});
