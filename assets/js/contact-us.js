// Custom Select Dropdown Implementation
function createCustomSelect(selectElement) {
  const options = Array.from(selectElement.options);
  const customSelect = document.createElement("div");
  customSelect.className = "contact-custom-select";

  // Create trigger element
  const trigger = document.createElement("div");
  trigger.className = "contact-custom-select-trigger";
  trigger.innerHTML = `
                <span class="contact-custom-select-text">${selectElement.options[0].text}</span>
                <div class="contact-custom-select-arrow"></div>
            `;

  // Create options container
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "contact-custom-select-options";

  // Create options
  options.forEach((option, index) => {
    if (index === 0) return; // Skip placeholder

    const optionElement = document.createElement("div");
    optionElement.className = "contact-custom-select-option";
    optionElement.textContent = option.text;
    optionElement.dataset.value = option.value;

    optionElement.addEventListener("click", () => {
      // Update selected value
      selectElement.value = option.value;
      trigger.querySelector(".contact-custom-select-text").textContent =
        option.text;
      trigger.style.color = "#333";

      // Update visual state
      optionsContainer
        .querySelectorAll(".contact-custom-select-option")
        .forEach((opt) => {
          opt.classList.remove("selected");
        });
      optionElement.classList.add("selected");

      // Close dropdown
      closeDropdown();

      // Trigger change event
      selectElement.dispatchEvent(new Event("change"));
    });

    optionsContainer.appendChild(optionElement);
  });

  // Toggle dropdown
  function toggleDropdown() {
    trigger.classList.toggle("active");
    optionsContainer.classList.toggle("active");
  }

  function closeDropdown() {
    trigger.classList.remove("active");
    optionsContainer.classList.remove("active");
  }

  // Event listeners
  trigger.addEventListener("click", toggleDropdown);

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      closeDropdown();
    }
  });

  // Keyboard navigation
  let focusedIndex = -1;
  trigger.addEventListener("keydown", (e) => {
    const optionElements = optionsContainer.querySelectorAll(
      ".contact-custom-select-option"
    );

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (trigger.classList.contains("active")) {
          if (focusedIndex >= 0) {
            optionElements[focusedIndex].click();
          }
        } else {
          toggleDropdown();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!trigger.classList.contains("active")) {
          toggleDropdown();
        } else {
          focusedIndex = Math.min(focusedIndex + 1, optionElements.length - 1);
          updateFocus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (trigger.classList.contains("active")) {
          focusedIndex = Math.max(focusedIndex - 1, 0);
          updateFocus();
        }
        break;
      case "Escape":
        closeDropdown();
        break;
    }
  });

  function updateFocus() {
    const optionElements = optionsContainer.querySelectorAll(
      ".contact-custom-select-option"
    );
    optionElements.forEach((opt, index) => {
      opt.style.background = index === focusedIndex ? "#f8f9fa" : "";
    });
  }

  // Make trigger focusable
  trigger.tabIndex = 0;

  // Assemble custom select
  customSelect.appendChild(trigger);
  customSelect.appendChild(optionsContainer);

  // Replace original select
  selectElement.parentNode.insertBefore(customSelect, selectElement);
  selectElement.classList.add("replaced");

  return customSelect;
}

// Initialize custom selects
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".contact-form-select").forEach((select) => {
    createCustomSelect(select);
  });
});

// Form submission
document
  .getElementById("contact-enquiryForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    // Show success toast
    showToast("Thank you for your enquiry! We will get back to you soon.");

    // Reset form
    this.reset();

    // Reset custom selects
    document
      .querySelectorAll(".contact-custom-select-trigger")
      .forEach((trigger) => {
        const firstOption = trigger
          .closest(".contact-form-group")
          .querySelector(".contact-form-select").options[0];
        trigger.querySelector(".contact-custom-select-text").textContent =
          firstOption.text;
        trigger.style.color = "#6c757d";
        trigger.parentNode
          .querySelectorAll(".contact-custom-select-option")
          .forEach((opt) => {
            opt.classList.remove("selected");
          });
      });
  });

// Enhanced Toast notification function
function showToast(message) {
  // Remove any existing toasts
  const existingToast = document.querySelector(".contact-toast");
  if (existingToast) {
    existingToast.remove();
  }

  // Create new toast
  const toast = document.createElement("div");
  toast.className = "contact-toast";
  toast.innerHTML = `
                <div class="contact-toast-content">
                    <div class="contact-toast-icon">✓</div>
                    <div class="contact-toast-message">${message}</div>
                </div>
            `;

  // Add to page
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 400);
  }, 4000);
}

// Add smooth focus animations for other inputs
document
  .querySelectorAll(".contact-form-input, .contact-form-textarea")
  .forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 4px 12px rgba(220, 53, 69, 0.15)";
    });

    input.addEventListener("blur", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
