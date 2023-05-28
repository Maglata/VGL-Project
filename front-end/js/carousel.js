// Combination Carousel
// Spring 2023 Carousel 
const springcarousel = document.querySelector(".spring-game-carousel");
const springcards = springcarousel.querySelectorAll("li");
const arrowright = document.querySelector(".arrow-button--right")
const arrowleft = document.querySelector(".arrow-button--left")
const cardWidth = springcards[0].offsetWidth;
let springcarouselScrollPos = springcarousel.scrollLeft;

arrowright.addEventListener("click", () => {
  move(springcarousel,springcarousel.clientWidth);
  checkScrollLimits(springcarousel, arrowleft, arrowright);
});

arrowleft.addEventListener("click", () => {
  move(springcarousel,-springcarousel.clientWidth);
  checkScrollLimits(springcarousel, arrowleft, arrowright);
});

// Carousel Scrolling
function move(carousel, amount) {
  carousel.scrollLeft += amount;
  springcarouselScrollPos = carousel.scrollLeft += amount;
}

// Scroll Checking
function checkScrollLimits(carousel, leftArrow, rightArrow) {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  const scrollLeftPos = springcarouselScrollPos;

  if (scrollLeftPos <= 0) {
    leftArrow.style.display = "none";
  } else{
    leftArrow.style.display = "flex";
  }
  if (scrollLeftPos < maxScrollLeft) {
    rightArrow.style.display = "flex";
  } else {
    rightArrow.style.display = "none";
  }
}