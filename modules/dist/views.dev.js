"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

var _cart = require("../modules/cart.js");

var cartMenu = document.querySelector(".cart-menu");
var menuBtn;
var menu;
var cartItems = [];
var cartWrapper = document.querySelector(".isntclear");
var errorCount = document.querySelector(".popup__cart-count");
var isclear = document.querySelector(".isclear");
var isntclear = document.querySelector(".isntclear");
var totalPrice = document.querySelector(".total-price__wrapper");
var formWrap = document.querySelector(".form-order__background");

function views() {
  document.addEventListener("DOMContentLoaded", function () {
    // Проверка на тему браузеру
    //? const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    $(window).on('load', function () {
      var images = [];
      $('img').each(function () {
        images.push($(this).attr('src'));
      });
      var imagesLoaded = 0;

      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];

        img.onload = function () {
          imagesLoaded++;

          if (imagesLoaded == images.length) {
            $('#preloader').fadeOut();
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
        totalPrice.style.display = "flex";

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
        var itemInCart = "\n                    <div class=\"item\">\n                        <img src=\"".concat(productInfo.imgSrc, "\" alt=\"\" class=\"item-image\">\n                        <p class=\"item-name\">").concat(productInfo.title, "</p>\n                        <p class=\"item-price\">").concat(productInfo.price, "</p>\n                        <div class=\"item__button__add-delete\">\n                            <button class=\"button-primary__plus\" data-id=\"\">+</button>\n                            <p class=\"item-count\" data-counter=\"").concat(productInfo.id, "\">").concat(productInfo.count, "</p>\n                            <button class=\"button-primary__minus\" data-id=\"\" id=\"minus\">-</button>\n                        </div>\n                    </div>");
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(productInfo); //? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        var btnPlus = document.querySelectorAll(".button-primary__plus");
        var btnMinus = document.querySelectorAll(".button-primary__minus");
        var counts = document.querySelectorAll(".item-count");
        btnPlus.forEach(function (button, index) {
          button.addEventListener("click", function () {
            counts[index].textContent = Number(counts[index].textContent) + 1;
          });
        });
        btnMinus.forEach(function (button, index) {
          button.addEventListener("click", function () {
            var currentCount = Number(counts[index].textContent);

            if (currentCount > 1) {
              counts[index].textContent = currentCount - 1;
            } else {
              var item = button.closest(".item");
              item.remove();
              cartItems.splice(index, 1);
            }
          });
        });
      }
    });

    function formOrder() {
      var closeForm = document.querySelector(".close-form");
      closeForm.addEventListener("click", function () {
        formWrap.style.display = "none";
      });
      totalPrice.addEventListener("click", function () {
        var documentHTML = document.querySelector("html");
        formWrap.style.display = "flex";
        formWrap.style.overflowY = "scroll";

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

    formOrder();
  });
  return views;
}

views();