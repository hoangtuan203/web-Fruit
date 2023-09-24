const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");

let currentIndex = 0;

function updateSlider() {
  const translateX = -currentIndex * 100; // Translate by percentage
  slider.style.transform = `translateX(${translateX}%)`;
}

function previousSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

// Initial setup
updateSlider();
