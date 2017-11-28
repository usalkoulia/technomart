var slide_button_arrow_left = document.querySelector(".button-arrow-left");
var slide_button_arrow_right = document.querySelector(".button-arrow-right");
var slide_1 = document.querySelector(".features-slide-1");
var slide_2 = document.querySelector(".features-slide-2");


slide_button_arrow_left.addEventListener("click", function() {
  slide_button_arrow_left.classList.add("arrow-active");
  slide_1.classList.add(".active-slide");
  slide_2.classList.remove(".active-slide");
});

slide_button_arrow_right.addEventListener("click", function() {
  slide_button_arrow_right.classList.add("arrow-active");
  slide_2.classList.add(".active-slide");
  slide_1.classList.remove(".active-slide");
});
