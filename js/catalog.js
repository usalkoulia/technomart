var button_buy = document.querySelector(".button-buy");
var basket_popup = document.querySelector(".basket-popup");
var feedback_button_basket_popup = document.querySelector(".feedback-button-basket-popup");

button_buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  basket_popup.classList.add("basket-popup-show");
});

document.querySelectorAll(".button-buy").forEach(function (el) {
  el.addEventListener("click", function(evt) {
    evt.preventDefault();
    basket_popup.classList.add("basket-popup-show");
  });
});

feedback_button_basket_popup.addEventListener("click", function() {
  basket_popup.classList.remove("basket-popup-show");
});
