// Add smooth scrolling effect for the View Properties button
document
  .querySelector(".ps-view-properties-btn")
  .addEventListener("click", function () {
    document.querySelector(".ps-properties-grid").scrollIntoView({
      behavior: "smooth",
    });
  });

// Add parallax effect to floating elements
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".ps-floating-element");

  parallax.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

function psIsElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;
}

function psCheckVisibility() {
  const propertyCards = document.querySelectorAll(".ps-property-card");

  propertyCards.forEach((card) => {
    if (psIsElementInViewport(card)) {
      card.classList.add("ps-mobile-visible");
    } else {
      card.classList.remove("ps-mobile-visible");
    }
  });
}

window.addEventListener("scroll", psCheckVisibility);
window.addEventListener("load", psCheckVisibility);
