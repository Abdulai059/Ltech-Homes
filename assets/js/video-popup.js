// POP UP VIDEO PLAYER

const videoPopup = document.getElementById("wcdVideoPopup");
const popupVideo = document.getElementById("wcdPopupVideo");

function wcdOpenVideoPopup() {
  videoPopup.classList.add("show");

  // Small delay to ensure smooth animation
  setTimeout(() => {
    popupVideo.play();
  }, 200);
}

function wcdCloseVideoPopup() {
  popupVideo.pause();
  popupVideo.currentTime = 0;
  videoPopup.classList.remove("show");
}

// Close popup with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && videoPopup.classList.contains("show")) {
    wcdCloseVideoPopup();
  }
});

// Prevent video from closing popup when clicked
popupVideo.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Close when clicking outside the video popup
document.addEventListener("click", function (event) {
  if (
    videoPopup.classList.contains("show") &&
    !videoPopup.contains(event.target) &&
    !event.target.closest(".wcd-play-button")
  ) {
    wcdCloseVideoPopup();
  }
});
