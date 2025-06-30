// ADD WHY YOU CHOOSE-US SECCTION

const sidebarItems = document.querySelectorAll(".wcd-sidebar-item");
const contentSections = document.querySelectorAll(".wcd-content-section");

sidebarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const sectionIndex = index + 1;

    // Remove active class from all items and sections
    sidebarItems.forEach((i) => i.classList.remove("active"));
    contentSections.forEach((section) => {
      section.classList.remove("active");
      section.classList.remove("wcd-zoom-in");
    });

    // Add active class to clicked item
    item.classList.add("active");

    // Show corresponding section with zoom animation
    const targetSection = document.getElementById(
      `wcd-section-${sectionIndex}`
    );
    if (targetSection) {
      setTimeout(() => {
        targetSection.classList.add("active");
        targetSection.classList.add("wcd-zoom-in");

        // Animate service items
        const serviceItems =
          targetSection.querySelectorAll(".wcd-service-item");
        serviceItems.forEach((el, itemIndex) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          setTimeout(() => {
            el.style.transition = "all 0.5s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, itemIndex * 100 + 200);
        });
      }, 50);
    }

    // Add click effect to sidebar item
    item.style.transform = "scale(0.95)";
    setTimeout(() => {
      item.style.transform = "";
    }, 150);
  });
});

// Add smooth scrolling animation on load for initial section
window.addEventListener("load", () => {
  const activeSection = document.querySelector(".wcd-content-section.active");
  if (activeSection) {
    const elements = activeSection.querySelectorAll(".wcd-service-item");
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "all 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 100);
    });
  }
});
