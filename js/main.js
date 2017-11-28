var slide_button_circle_left = document.querySelector(".button-circle-left");
var slide_button_circle_right = document.querySelector(".button-circle-right");
var features_slide_1 = document.querySelector(".features-slide-1");
var features_slide_2 = document.querySelector(".features-slide-2");
var slide_button_arrow_left = document.querySelector(".button-arrow-left");
var slide_button_arrow_right= document.querySelector(".button-arrow-right");
var services_item_1 = document.querySelector("#services-item-1");
var services_item_2 = document.querySelector("#services-item-2");
var services_item_3 = document.querySelector("#services-item-3");
var services_slide_1 = document.querySelector(".services-slide-1");
var services_slide_2 = document.querySelector(".services-slide-2");
var services_slide_3 = document.querySelector(".services-slide-3");
var contacts_link = document.querySelector(".contacts-link");
var write_us_modal = document.querySelector(".write-us-modal");
var feedback_button = document.querySelector(".feedback-modal-button");


slide_button_circle_left.addEventListener("click", function() {
  slide_button_circle_left.classList.add("circle-active");
  slide_button_circle_right.classList.remove("circle-active");
  features_slide_1.classList.add("active-slide");
  features_slide_2.classList.remove("active-slide");
});

slide_button_circle_right.addEventListener("click", function() {
  slide_button_circle_right.classList.add("circle-active");
  slide_button_circle_left.classList.remove("circle-active");
  features_slide_2.classList.add("active-slide");
  features_slide_1.classList.remove("active-slide");
});

slide_button_arrow_left.addEventListener("click", function() {
  slide_button_circle_left.classList.add("circle-active");
  slide_button_circle_right.classList.remove("circle-active");
  features_slide_1.classList.add("active-slide");
  features_slide_2.classList.remove("active-slide");
});

slide_button_arrow_right.addEventListener("click", function() {
  slide_button_circle_right.classList.add("circle-active");
  slide_button_circle_left.classList.remove("circle-active");
  features_slide_2.classList.add("active-slide");
  features_slide_1.classList.remove("active-slide");
});

services_item_1.addEventListener("click", function() {
  services_item_1.classList.add("item-active");
  services_item_2.classList.remove("item-active");
  services_item_3.classList.remove("item-active");
  services_slide_1.classList.add("active-slide");
  services_slide_2.classList.remove("active-slide");
  services_slide_3.classList.remove("active-slide");
});

services_item_2.addEventListener("click", function() {
  services_item_2.classList.add("item-active");
  services_item_1.classList.remove("item-active");
  services_item_3.classList.remove("item-active");
  services_slide_2.classList.add("active-slide");
  services_slide_1.classList.remove("active-slide");
  services_slide_3.classList.remove("active-slide");
});

services_item_3.addEventListener("click", function() {
  services_item_3.classList.add("item-active");
  services_item_1.classList.remove("item-active");
  services_item_2.classList.remove("item-active");
  services_slide_3.classList.add("active-slide");
  services_slide_1.classList.remove("active-slide");
  services_slide_2.classList.remove("active-slide");
});

contacts_link.addEventListener("click", function() {
  write_us_modal.classList.add("write-us-modal-show");
});

feedback_button.addEventListener("click", function() {
  write_us_modal.classList.remove("write-us-modal-show");
});
