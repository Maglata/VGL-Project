// Combination Carousel
const sections = document.querySelectorAll("section");

sections.forEach(section =>{
  const carousel = section.querySelector("ul");
  const cards = carousel.querySelectorAll(".card");
  const arrowright = section.querySelector(".arrow-button--right")
  const arrowleft = section.querySelector(".arrow-button--left")
  let carouselScrollPos = carousel.scrollLeft;

  // Arrow Scrolling 
  arrowright.addEventListener("click", () => {
    carouselScrollPos = move(carousel,carousel.clientWidth);
    checkScrollLimits(carousel, arrowleft, arrowright,carouselScrollPos);
  });
  arrowleft.addEventListener("click", () => {
    carouselScrollPos = move(carousel,-carousel.clientWidth);
    checkScrollLimits(carousel, arrowleft, arrowright,carouselScrollPos);
  });

  // Hover Animation for each card
  cards.forEach(card =>{

    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.1)";
      card.style.transition = "0.3s ease";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  })
})

// Carousel Scrolling
function move(carousel, amount) {
  carousel.scrollLeft += amount;
  return carousel.scrollLeft += amount;
}

// Scroll Checking
function checkScrollLimits(carousel, leftArrow, rightArrow, scrollLeftPos) {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

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