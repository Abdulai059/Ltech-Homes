// Throttle scroll events for better performance
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Helper function to check if device is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  const toggleButton = document.getElementById("mobileToggle");
  const overlay = document.getElementById("menuOverlay");
  if (!navMenu || !toggleButton || !overlay) return;
  navMenu.classList.toggle("active");
  toggleButton.classList.toggle("active");
  overlay.classList.toggle("active");
  // Toggle aria-expanded for accessibility
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", !isExpanded);
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
}

function closeMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  const toggleButton = document.getElementById("mobileToggle");
  const overlay = document.getElementById("menuOverlay");
  if (!navMenu || !toggleButton || !overlay) return;
  navMenu.classList.remove("active");
  toggleButton.classList.remove("active");
  overlay.classList.remove("active");
  toggleButton.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  // Also close any open dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
}

// Navbar scroll effect with throttling
const handleScroll = throttle(function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
}, 100);

window.addEventListener("scroll", handleScroll);

// Initialize navbar state on load
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar && window.scrollY > 50) {
    navbar.classList.add("scrolled");
  }
  // Set initial aria-expanded state
  const toggleButton = document.getElementById("mobileToggle");
  if (toggleButton) {
    toggleButton.setAttribute("aria-expanded", "false");
  }
});

// Handle dropdown on mobile
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    if (isMobile()) {
      e.preventDefault();
      const dropdown = this.parentElement;
      dropdown.classList.toggle("active");
      // Close other dropdowns
      document.querySelectorAll(".dropdown").forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
        }
      });
    }
  });
});

// Handle search functionality
const searchInput = document.querySelector(".search-input");
if (searchInput) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      alert(
        "Search functionality would be implemented here for: " + this.value
      );
      this.blur();
    }
  });
}

// Handle all nav link clicks - close mobile menu if open
document.querySelectorAll(".nav-link:not(.dropdown-toggle)").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Only prevent default if href is '#', otherwise allow navigation
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
    }
    // Remove active class from all links
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    // Add active class to clicked link
    this.classList.add("active");
    // Always close mobile menu when any nav link is clicked on mobile
    if (isMobile()) {
      closeMobileMenu();
    }
  });
});

// Handle dropdown items - close mobile menu when clicked
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    // Only prevent default if href is '#', otherwise allow navigation
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
    }
    // Remove active class from all nav links
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    // Add active class to parent dropdown toggle
    const dropdownToggle = this.closest(".dropdown")?.querySelector(".dropdown-toggle");
    if (dropdownToggle) {
      dropdownToggle.classList.add("active");
    }
    // Always close mobile menu when dropdown item is clicked on mobile
    if (isMobile()) {
      closeMobileMenu();
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const toggleButton = document.getElementById("mobileToggle");
  if (!navMenu || !toggleButton) return;
  // Close mobile menu if clicking outside of it
  if (
    isMobile() &&
    !navMenu.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    closeMobileMenu();
  }
  // Close dropdowns when clicking outside (for desktop)
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!isMobile()) {
        dropdown.classList.remove("active");
      }
    });
  }
});

// Handle window resize - close mobile menu if switching to desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Handle escape key to close mobile menu
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && isMobile()) {
    closeMobileMenu();
  }
});

// // Handle logo click - close mobile menu if open
// document.querySelector(".logo").addEventListener("click", function (e) {
//   e.preventDefault();

//   // Remove active class from all nav links
//   document
//     .querySelectorAll(".nav-link")
//     .forEach((l) => l.classList.remove("active"));

//   // Add active class to Home link
//   document.querySelector(".nav-link").classList.add("active");

//   // Close mobile menu if open
//   if (isMobile()) {
//     closeMobileMenu();
//   }

//   // Scroll to top
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
