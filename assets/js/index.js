// HERO SECTION ANIMATION............

document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const slides = document.querySelectorAll(".purpose-slide");
  const images = document.querySelectorAll(".hero-image .slide");
  const dots = document.querySelectorAll(".nav-dot");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  const mainTitle = document.getElementById("mainTitle");
  const subtitle = document.getElementById("subtitle");
  const heroLayout = document.querySelector(".hero-layout");
  const searchToggle = document.getElementById("searchToggle");
  const searchForm = document.getElementById("searchForm");
  const searchSection = document.querySelector(".search-section");

  // Swipe detection variables
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  // Slide control variables
  let currentIndex = 0;
  let slideInterval;
  let isFirstTransition = true;
  let isAutoSliding = true;

  // Animation timing
  const INITIAL_DELAY = 8000;
  const NORMAL_INTERVAL = 5000;
  const TRANSITION_DURATION = 1000;

  // Slide content configuration
  const slideConfig = [
    {
      mainTitle: "Professional",
      subtitle: "Real Estate Services - Since 2015",
      content:
        "<i>Leading the Future</i> of Real Estate in Ghana and across Africa.",
    },
    {
      mainTitle: "Dream Home Solutions",
      subtitle: "Your perfect home awaits",
      content:
        "<i>Empowering Communities</i> with Innovative Property Solutions.",
    },
    {
      mainTitle: "Innovative",
      subtitle: "Property Solutions for Tomorrow",
      content:
        "<i>Building Wealth</i> through Strategic Real Estate Investments.",
    },
  ];

  // ======================
  // HAMBURGER MENU FUNCTIONALITY
  // ======================
  function setupHamburgerMenu() {
    if (!searchToggle || !searchForm) return;

    searchToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSearchForm();
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !searchSection.contains(e.target) &&
        searchForm.classList.contains("expanded")
      ) {
        closeSearchForm();
      }
    });

    // Prevent closing when clicking inside form
    searchForm.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  function toggleSearchForm() {
    const isExpanding = !searchForm.classList.contains("expanded");

    if (isExpanding) {
      openSearchForm();
    } else {
      closeSearchForm();
    }
  }

  function openSearchForm() {
    // Expand the search form
    searchForm.classList.add("expanded");
    searchSection.style.overflow = "visible";
    updateHamburgerIcon();
  }

  function closeSearchForm() {
    // Collapse the search form
    searchForm.classList.remove("expanded");
    searchSection.style.overflow = "";
    updateHamburgerIcon();
  }

  function updateHamburgerIcon() {
    searchToggle.innerHTML = searchForm.classList.contains("expanded")
      ? "&times;"
      : "&#9776;";
  }

  // ======================
  // SLIDESHOW FUNCTIONALITY
  // ======================
  function initSlideshow() {
    updateSlideContent(0);
    setupEventListeners();
    startSlideTimer(true);
  }

  function updateSlideContent(index) {
    const config = slideConfig[index];

    // Update titles
    if (mainTitle) mainTitle.textContent = config.mainTitle;
    if (subtitle) subtitle.textContent = config.subtitle;

    // Update content slides
    slides.forEach((slide, i) => {
      slide.innerHTML = slideConfig[i].content;
      slide.classList.toggle("active", i === index);
    });

    // Update images
    images.forEach((image, i) => {
      image.classList.toggle("active", i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function goToSlide(index) {
    if (index === currentIndex) return;

    // Animation classes
    const currentTitle = document.querySelector(".hero-heading");
    const currentContent = document.querySelector(".purpose-slide.active");
    const currentImage = document.querySelector(".hero-image .slide.active");

    currentTitle.classList.add("title-fade-out");
    currentContent.classList.add("content-fade-out-down");
    if (currentImage) currentImage.classList.add("image-fade-out");

    setTimeout(() => {
      currentIndex = index;
      updateSlideContent(currentIndex);

      currentTitle.classList.remove("title-fade-out");
      currentTitle.classList.add("title-fade-in");

      currentContent.classList.remove("content-fade-out-down");
      document
        .querySelector(`.purpose-slide:nth-child(${currentIndex + 1})`)
        .classList.add("content-fade-in-down");

      if (currentImage) {
        currentImage.classList.remove("image-fade-out");
        if (images[currentIndex]) {
          images[currentIndex].classList.add("image-fade-in");
        }
      }

      setTimeout(() => {
        currentTitle.classList.remove("title-fade-in");
        document
          .querySelector(`.purpose-slide:nth-child(${currentIndex + 1})`)
          .classList.remove("content-fade-in-down");
        if (images[currentIndex]) {
          images[currentIndex].classList.remove("image-fade-in");
        }
      }, TRANSITION_DURATION);

      if (isFirstTransition) {
        isFirstTransition = false;
        startSlideTimer(false);
      }
    }, TRANSITION_DURATION);
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slideConfig.length;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex =
      (currentIndex - 1 + slideConfig.length) % slideConfig.length;
    goToSlide(prevIndex);
  }

  function startSlideTimer(initialDelay) {
    clearInterval(slideInterval);

    if (initialDelay) {
      slideInterval = setTimeout(() => {
        nextSlide();
        slideInterval = setInterval(nextSlide, NORMAL_INTERVAL);
      }, INITIAL_DELAY);
    } else {
      slideInterval = setInterval(nextSlide, NORMAL_INTERVAL);
    }
  }

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
      prevSlide();
    } else if (deltaX < -swipeThreshold) {
      nextSlide();
    }
    startSlideTimer(false);
  }

  function setupEventListeners() {
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index);
        startSlideTimer(false);
      });
    });

    // Arrow navigation
    if (leftArrow) {
      leftArrow.addEventListener("click", () => {
        prevSlide();
        startSlideTimer(false);
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", () => {
        nextSlide();
        startSlideTimer(false);
      });
    }

    // Pause on hover
    // if (heroLayout) {
    //   heroLayout.addEventListener("mouseenter", () => {
    //     clearInterval(slideInterval);
    //   });
    //   heroLayout.addEventListener("mouseleave", () => {
    //     if (isAutoSliding) {
    //       startSlideTimer(false);
    //     }
    //   });
    // }

    // Touch events
    if (heroLayout) {
      heroLayout.addEventListener("touchstart", handleTouchStart, false);
      heroLayout.addEventListener("touchend", handleTouchEnd, false);
    }
  }

  // Initialize everything
  setupHamburgerMenu();
  initSlideshow();
});



// ======================
// PERLOADER SCRIPT
// ======================

// window.addEventListener("load", function () {
//   const delay = 2000; // Adjust delay (in milliseconds)
//   setTimeout(() => {
//     document.getElementById("preloader").style.display = "none";
//     document.getElementById("hero-content").style.display = "block";
//   }, delay);
// });
















