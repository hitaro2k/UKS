"use strict";

var _views = require("../modules/views.js");

var _localSearch = require("./localSearch.js");

var _render = require("../modules/render.js");

var _animation = _interopRequireDefault(require("../modules/animation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getProductData() {
  var productContainer = document.querySelector(".products__container");
  var urlParams = new URLSearchParams(window.location.search);
  var cartData = urlParams.get("cartData");

  if (cartData) {
    var parsedCartData = JSON.parse(decodeURIComponent(cartData));
    var priceNumber = parseFloat(parsedCartData.price.replace(',', '.'));
    var setPrice = priceNumber * parsedCartData.exchange;
    var priceNumberFixed = setPrice.toFixed(2);
    var product = "\n        <div class=\"product\" data-id =\"".concat(parsedCartData.id, "\">\n        <img src=\"").concat(parsedCartData.image !== '' ? parsedCartData.image : 'app/img/UK.svg', "\" alt=\"\" class=\"product-image\">\n        <div class=\"product-content\">\n            <p class=\"product-title\">").concat(parsedCartData.name, "</p>\n            <p class=\"product__articul\">").concat(parsedCartData.articul, "</p>\n            <p class= \"product-status\"> </p>\n            <div class=\"product-buy\">\n                <p class=\"product-price__grn\">").concat(priceNumberFixed, " \u0433\u0440\u043D</p>\n                <button class=\"product-btn\" data>\u041A\u0443\u043F\u0438\u0442\u044C </button>\n            </div>\n        </div>\n    </div>\n      ");
    productContainer.insertAdjacentHTML("beforeend", product);
  }
}

getProductData();