(function () {
  // DOM elements
  const sliderTrack = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.querySelectorAll(".indicator-dot");
  const mobileYearSlides = document.querySelectorAll(".mobile-year-slide");
  const desktopSlides = document.querySelectorAll(".timeline-slide");

  // State
  let currentSlide = 0;
  let isAnimating = false;
  let startX = 0;
  let isDragging = false;
  let totalSlides;

  // Initialize
  updateSlideCount();
  updateSlider();
  setupEventListeners();

  function updateSlideCount() {
    // Show/hide slides based on screen size
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Mobile - show individual year slides (6 slides)
      desktopSlides.forEach((slide) => (slide.style.display = "none"));
      mobileYearSlides.forEach((slide) => (slide.style.display = "flex"));
      totalSlides = 6;

      // Show all 6 indicators on mobile
      indicators.forEach((indicator, index) => {
        indicator.style.display = "block";
      });
    } else {
      // Desktop - show paired year slides (3 slides)
      desktopSlides.forEach((slide) => (slide.style.display = "flex"));
      mobileYearSlides.forEach((slide) => (slide.style.display = "none"));
      totalSlides = 3;

      // Only show 3 indicators on desktop
      indicators.forEach((indicator, index) => {
        indicator.style.display = index < 3 ? "block" : "none";
      });
    }
  }

  function setupEventListeners() {
    // Button navigation
    prevBtn.addEventListener("click", () => changeSlide(-1));
    nextBtn.addEventListener("click", () => changeSlide(1));

    // Indicator navigation
    indicators.forEach((indicator) => {
      indicator.addEventListener("click", function () {
        const slideIndex = parseInt(this.getAttribute("data-slide"));
        goToSlide(slideIndex);
      });
    });

    // Touch events
    sliderTrack.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    sliderTrack.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    sliderTrack.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Mouse events
    sliderTrack.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Window resize
    window.addEventListener("resize", handleResize);
  }

  function changeSlide(direction) {
    if (isAnimating) return;

    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < totalSlides) {
      goToSlide(newSlide);
    }
  }

  function goToSlide(slideIndex) {
    if (isAnimating || slideIndex === currentSlide) return;

    isAnimating = true;
    currentSlide = slideIndex;

    // Update slider position
    sliderTrack.style.transition = "transform 0.4s ease-in-out";
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update UI after transition completes
    setTimeout(() => {
      updateSlider();
      isAnimating = false;
    }, 400);
  }

  function updateSlider() {
    // Update navigation buttons
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;

    // Update indicators
    indicators.forEach((indicator, index) => {
      const isActive = index === currentSlide;
      indicator.classList.toggle("active", isActive);
      indicator.setAttribute("aria-selected", isActive);
    });

    // Update ARIA live region
    sliderTrack.setAttribute("aria-live", "polite");
  }

  // Touch handlers
  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    sliderTrack.style.transition = "none";
  }

  function handleTouchMove(e) {
    if (!startX) return;

    const x = e.touches[0].clientX;
    const diff = startX - x;
  }

  function handleTouchEnd(e) {
    if (!startX) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50;

    sliderTrack.style.transition = "transform 0.4s ease-in-out";

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        changeSlide(1); // Swiped left - next
      } else {
        changeSlide(-1); // Swiped right - prev
      }
    }

    startX = 0;
  }

  // Mouse drag handlers
  function handleMouseDown(e) {
    isDragging = true;
    startX = e.clientX;
    sliderTrack.style.cursor = "grabbing";
    sliderTrack.style.transition = "none";
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
  }

  function handleMouseUp(e) {
    if (!isDragging) return;

    isDragging = false;
    const endX = e.clientX;
    const diff = startX - endX;
    const threshold = 50;

    sliderTrack.style.cursor = "grab";
    sliderTrack.style.transition = "transform 0.4s ease-in-out";

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        changeSlide(1); // Dragged left - next
      } else {
        changeSlide(-1); // Dragged right - prev
      }
    }
  }

  function handleResize() {
    // Store the current year before resize
    const currentYear = currentSlide;

    // Update slide count and reset to first slide
    updateSlideCount();
    currentSlide = 0;

    // Try to go back to the equivalent year
    if (window.innerWidth <= 768) {
      // Mobile - if we were on desktop slide 1 (years 1-2), go to mobile slide 2 (year 2)
      // This is just an example logic, adjust as needed
      if (currentYear === 0)
        currentSlide = 0; // First desktop slide -> first mobile slide
      else if (currentYear === 1)
        currentSlide = 2; // Second desktop slide -> third mobile slide
      else if (currentYear === 2) currentSlide = 4; // Third desktop slide -> fifth mobile slide
    } else {
      // Desktop - if we were on mobile slide 2 (year 2), go to desktop slide 1 (years 1-2)
      if (currentYear <= 1) currentSlide = 0;
      else if (currentYear <= 3) currentSlide = 1;
      else currentSlide = 2;
    }

    // Reset slider position
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update UI
    updateSlider();
  }
})();
