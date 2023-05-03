"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

var _animation = require("./animation.js");

var _pageCatalog = require("../modules/pageCatalog.js");

function views() {
  var href = 1;

  var productTemplate = function productTemplate(product) {
    return "\n    <div class=\"product__content\">\n      <div class=\"product__top-content\">\n        <img class=\"product-image\" src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">  \n        <div class=\"product__top-content__info\">\n            <h3 class=\"product-name\">").concat(product.name, "</h3>\n            <p class=\"product-articul\">").concat(product.articul, "</p>\n            <p class=\"product-status\">").concat(product.status, "</p>\n            <div class=\"product-buy__btn\">\n                <p class=\"price\">").concat(product.price, "\u0433\u0440\u043D</p>\n                <button class=\"buy-button\" >").concat(product.buy, "</button>\n            </div>\n        </div>\n      </div>\n        <div class=\"product__bottom-content\">\n            <h2 class=\"product__bottom-content__title\">\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438</h2>\n            <table class=\"characteristic-table\">\n\n                <tr class = \"table-block\">\n                    <th class = \"table-item\">").concat(product.firstCh, "</th>\n                    <td class = \"table-item\">").concat(product.firstChMean, "</td>\n                </tr>\n\n            </table>\n\n        </div>   \n      </div>\n    </div>\n  ");
  };

  var productsContainer = document.querySelector('.products__container');

  _pageCatalog.productsPopular.forEach(function (product) {
    var productHTML = productTemplate(product);
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  return views;
}

views();