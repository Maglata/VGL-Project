
// Spring 2023 Carousel 
const springcarousel = document.querySelector(".spring-game-carousel");
const springcards = springcarousel.querySelectorAll("li");
const arrowright = document.querySelector(".arrow-button--right")
const arrowleft = document.querySelector(".arrow-button--left")
const cardWidth = springcards[0].offsetWidth;

arrowright.addEventListener("click", () => {
  scrollCarousel(springcarousel, cardWidth);
  checkScrollLimits(springcarousel, cardWidth, arrowleft, arrowright);
});

arrowleft.addEventListener("click", () => {
  scrollCarousel(springcarousel, -cardWidth);
  checkScrollLimits(springcarousel, -cardWidth, arrowleft, arrowright);
});

// Carousel Scrolling
function scrollCarousel(carousel, amount) {
  const scrollLeftPos = carousel.scrollLeft;
  const duration = 500; // Adjust this value to control the scrolling duration (in milliseconds)
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const scrollDistance = amount * progress; // Calculate scroll distance based on the amount parameter
    carousel.scrollLeft = scrollLeftPos + scrollDistance;

    if (progress < 1) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  window.requestAnimationFrame(scrollStep);
}
// Scroll Checking
function checkScrollLimits(carousel, cardWidth, leftArrow, rightArrow) {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const scrollLeftPos = carousel.scrollLeft;
  console.log(maxScrollLeft, scrollLeftPos);

  if (scrollLeftPos > 0) {
    leftArrow.style.display = "flex";
  } else {
    leftArrow.style.display = "none";
  }

  if (scrollLeftPos < maxScrollLeft - cardWidth) {
    rightArrow.style.display = "flex";
  } else {
    rightArrow.style.display = "none";
  }
}