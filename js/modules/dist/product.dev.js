"use strict";

var _views = require("../modules/views.js");

var _search = require("../modules/search.js");

var _form = require("../modules/form.js");

var _render = require("../modules/render.js");

function getProductData() {
  var productContainer = document.querySelector(".products__container");
  var urlParams = new URLSearchParams(window.location.search);
  var cartData = urlParams.get("cartData");

  if (cartData) {
    var parsedCartData = JSON.parse(decodeURIComponent(cartData));
    var product = "\n        <div class=\"product\">\n        <img src=\"".concat(parsedCartData.image, "\" alt=\"\" class=\"product-img\">\n        <div class=\"product-content\">\n            <p class=\"product-name\">").concat(parsedCartData.name, "</p>\n            <p class=\"product__articul\">").concat(parsedCartData.articul, "</p>\n            <div class=\"product-buy\">\n                <p class=\"product__price\">").concat(parsedCartData.price, "</p>\n                <button class=\"product-btn\">").concat(parsedCartData.button, "</button>\n            </div>\n        </div>\n    </div>\n      ");
    productContainer.insertAdjacentHTML("beforeend", product);
  }
}

getProductData();