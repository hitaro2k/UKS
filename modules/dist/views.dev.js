"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

var _cart = require("../modules/cart.js");

var documentHTML = document.querySelector("html");
var cartItems = [];
var countCartItems = 0;

function views() {
  var cartMenu = document.querySelector(".cart-menu");
  var menuBtn;
  var menu;
  var cartWrapper = document.querySelector(".isntclear");
  var isclear = document.querySelector(".isclear");
  var isntclear = document.querySelector(".isntclear");
  var totalPrice = document.querySelector(".total-price__wrapper");
  var showForm = document.querySelector(".total-price__button-buy");
  var formWrap = document.querySelector(".form-order__background");
  var formProduct = document.querySelector(".block__product-price");
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {
      var images = [];
      document.querySelectorAll('img').forEach(function (img) {
        images.push(img.src);
      });
      var imagesLoaded = 0;

      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];

        img.onload = function () {
          imagesLoaded++;

          if (imagesLoaded == images.length) {
            document.querySelector('#preloader').style.display = 'none';
          }
        };
      }
    });

    function findCartItem(id) {
      return cartItems.find(function (item) {
        return item.id === id;
      });
    }

    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data")) {
        var card = event.target.closest(".product");
        var productId = card.dataset.id;
        var existingItem = findCartItem(productId);
        cartMenu.classList.add("cart-active");
        isclear.style.display = 'none';
        isntclear.style.display = 'flex';
        totalPrice.style.display = 'flex';
        countCartItems++; // ? CARD ITEM --------------------------------------------------------------------------------------------

        if (existingItem) {
          var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
          countElem.textContent = Number(countElem.textContent) + 1;
          return;
        }

        var productInfo = {
          id: productId,
          imgSrc: card.querySelector(".product-image").getAttribute("src"),
          title: card.querySelector(".product-title").innerText,
          status: card.querySelector(".product-status").innerText,
          price: card.querySelector(".product-price").innerText,
          count: "1"
        };
        var itemInCart = "   <div class=\"item\">\n                <img src=\"".concat(productInfo.imgSrc, "\" alt=\"\" class=\"item-image\">\n                <p class=\"item-name\">").concat(productInfo.title, "</p>\n                <p class=\"item-price\">").concat(productInfo.price, "</p>\n                <div class=\"item__button__add-delete\">\n                    <button class=\"button-primary__plus\" data-id=\"\">+</button>\n                    <p class=\"item-count\" data-counter=\"").concat(productInfo.id, "\">").concat(productInfo.count, "</p>\n                    <button class=\"button-primary__minus\" data-id=\"\" id=\"minus\">-</button>\n                </div>\n            </div>\n        ");
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(productInfo);
        var itemPrices = document.querySelectorAll('.item-price');
        var totalPriceCash = 0;
        itemPrices.forEach(function (item) {
          totalPriceCash += parseFloat(item.textContent);
        });
        document.querySelector('.total-price__text').innerHTML = totalPriceCash + " " + "грн"; // ? BUTTONS --------------------------------------------------------------------------------------------

        var btnPlus = document.querySelectorAll(".button-primary__plus");
        var btnMinus = document.querySelectorAll(".button-primary__minus");
        var counts = document.querySelectorAll(".item-count");
        btnPlus.forEach(function (item, index, arr) {
          item.onclick = function () {
            console.log(index, arr);
          };
        });
      }
    }); // ? --------------------------------------------------------------------------------------------

    function formOrder() {
      var closeForm = document.querySelector(".close-form");

      var price = function price() {};

      closeForm.addEventListener("click", function () {
        formWrap.style.display = "none";
        documentHTML.style.overflowY = "scroll";
      });
      showForm.addEventListener("click", function () {
        var buyProduct;
        var totalProductPrice = " \n        <div class=\"price-block\">\n          <p class=\"title\">Title</p>\n          <p class=\"total-price\">".concat(price, "</p>\n        </div>\n        ");
        cartItems.forEach(function (item) {
          buyProduct = "\n          <div class=\"product-block\">\n            <div class=\"product\">\n                <div class=\"image\"><img class=\"image\" src=\"".concat(item.imgSrc, "\" alt=\"\"></div>\n                  <div class=\"name\">").concat(item.title, "</div>\n                  <div class=\"product-price\">").concat(item.price, "</div>\n            </div>\n          </div>\n        ");
          formProduct.insertAdjacentHTML("beforeend", buyProduct);
          formProduct.insertAdjacentHTML("beforeend", totalProductPrice);
        });
        formWrap.style.display = "flex";

        if (formWrap.style.display = "flex") {
          documentHTML.style.position = "fixed";
          documentHTML.style.height = "100vh";
          documentHTML.style.width = "100%";
          documentHTML.style.overflowY = "hidden";
          documentHTML.style.top = "0";
          documentHTML.style.margin = "0 auto";
        } else {
          documentHTML.style.overflowY = "scroll";
        }
      });
    }

    ;
    formOrder();
  });
  return views;
}

views(); // btnPlus.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     counts[index].textContent = Number(counts[index].textContent) + 1;
//   });
// });
// btnMinus.forEach((button, index) => {
//   button.addEventListener("click", (event) => {
//     event.stopPropagation()
//     const currentCount = Number(counts[index].textContent);
//     if (currentCount > 1) {
//       counts[index].textContent = currentCount - 1;
//     }else{
//       const item = button.closest(".item");
//       console.log(item)
//       item.remove();
//       cartItems.splice(index, 1);
//     }
//     countCartItems--
//     console.log(counts[index])
//     // if(cartItems.length <= 0){
//     //   isclear.style.display = 'flex'
//     //   isntclear.style.display = 'none'
//     //   totalPrice.style.display = 'none'
//     // }
//   });
// });