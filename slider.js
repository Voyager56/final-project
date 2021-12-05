const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;

let activeIndex = 0;

function renderSlider() {
    slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}
renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
}
  renderSlider();
}
let intervalId = null;
function startAutoSliding() {
    intervalId = setInterval(() => {
    nextSlide();
    }, 3000);
}

startAutoSliding()