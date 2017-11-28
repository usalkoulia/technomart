var button_buy = document.querySelector(".button-buy");
var basket_popup = document.querySelector(".basket-popup");

button_buy.addEventListener("click", function(){
  basket_popup.classList.add("write-us-modal-show");
});
