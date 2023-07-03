"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsPopular = getProductsPopular;
exports.renderData = renderData;
var popularContainer = document.querySelector("#popular__container");

function getProductsPopular() {
  var response, productArray, productTitle;
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
          productArray.forEach(function (item) {
            var productHTML = "\n        <div class=\"product\" data-id =\"".concat(item.id, "\">\n          <img class=\"product-image\" src=\"").concat(item.image, "\" alt=\"img\">\n              <div class = \"product-description\">\n                <a class=\"product-title\">").concat(item.title, "</a>\n                <p class=\"product-articul\">").concat(item.articul, "</p>\n              </div>\n              <div class =\"product-info\">\n                <div class =\"product-info__price\"> \n                  <p class=\"product-price\">").concat(item.price, " \u0433\u0440\u043D</p>\n                  <p class=\"product-status\">").concat(item.status, "</p>\n                </div>\n              <button class=\"product-button\" data > ").concat(item.buy, "</button>\n            </div>\n        </div>");
            popularContainer.insertAdjacentHTML("beforeend", productHTML);
          });
          productTitle = document.querySelectorAll(".product-title");
          renderData(productTitle);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderData(data) {
  data.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var closestCard = e.target.closest(".product");
      var cartAlready = {
        "image": closestCard.querySelector(".product-image").src,
        "name": closestCard.querySelector(".product-title").textContent,
        "articul": closestCard.querySelector(".product-articul").textContent,
        "price": closestCard.querySelector(".product-price").textContent,
        "id": closestCard.getAttribute("data-id")
      };
      var url = "product.html?cartData=".concat(encodeURIComponent(JSON.stringify(cartAlready)));
      window.location.href = url;
    });
  });
}