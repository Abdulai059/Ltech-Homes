// Handle form input states
document
  .querySelectorAll(
    ".ltech-contact-form .form-input, .ltech-contact-form .form-select, .ltech-contact-form .form-textarea"
  )
  .forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("filled");
      } else {
        this.classList.remove("filled");
      }
    });

    input.addEventListener("change", function () {
      if (this.value.trim() !== "") {
        this.classList.add("filled");
      } else {
        this.classList.remove("filled");
      }
    });
  });

// Handle form submission with popup
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show success popup
  const successMessage = document.getElementById("successMessage");
  const successBackdrop = document.getElementById("successBackdrop");

  successBackdrop.classList.add("show");
  successMessage.classList.add("show");

  // Hide success popup after 3 seconds
  setTimeout(function () {
    successMessage.classList.remove("show");
    successBackdrop.classList.remove("show");
  }, 2000);

  // Reset form
  this.reset();

  // Remove filled classes from inputs
  document
    .querySelectorAll(
      ".ltech-contact-form .form-input, .ltech-contact-form .form-select, .ltech-contact-form .form-textarea"
    )
    .forEach((input) => {
      input.classList.remove("filled");
    });
});

// Close popup when clicking backdrop
document
  .getElementById("successBackdrop")
  .addEventListener("click", function () {
    const successMessage = document.getElementById("successMessage");
    const successBackdrop = document.getElementById("successBackdrop");

    successMessage.classList.remove("show");
    successBackdrop.classList.remove("show");
  });
