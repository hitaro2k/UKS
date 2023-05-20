"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsPopular = getProductsPopular;
var popularContainer = document.querySelector("#popular__container");
getProductsPopular();

function getProductsPopular() {
  var response, productArray;
  return regeneratorRuntime.async(function getProductsPopular$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("./js/modules/popular.json"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          productArray = _context.sent;
          renderProductsPopular(productArray);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderProductsPopular(productArray) {
  productArray.forEach(function (item) {
    var productHTML = "\n         <div class=\"product\" data-id =\"".concat(item.id, "\">\n           <img class=\"product-image\" src=\"").concat(item.image, "\" alt=\"img\">\n               <div class = \"product-description\">\n                 <a href = \"/product.html\" class=\"product-title\">").concat(item.title, "</a>\n                 <p class=\"product-articul\">").concat(item.articul, "</p>\n               </div>\n               <div class =\"product-info\">\n                 <div class =\"product-info__price\"> \n                   <p class=\"product-price\">").concat(item.price, " \u0433\u0440\u043D</p>\n                   <p class=\"product-status\">").concat(item.status, "</p>\n                 </div>\n               <button class=\"product-button\" data > ").concat(item.buy, "</button>\n               \n             </div>\n         </div>");
    popularContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}