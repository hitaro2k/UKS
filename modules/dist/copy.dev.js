"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

var _cart = require("../modules/cart.js");

var productsPopular = [{
  name: 'Двигун',
  price: 20000,
  image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
  articul: "A78D12RR",
  buy: "В кошик",
  status: "В наявності",
  id: "2B"
}, {
  name: 'Двигун',
  price: 20000,
  image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
  articul: "A78D12RR",
  buy: "В кошик",
  status: "В наявності",
  id: "3B"
}];

var productTemplate = function productTemplate(product) {
  return "\n      <div class=\"product\" data-id =\"".concat(product.id, "\">\n        <img class=\"product-image\" src=\"").concat(product.image, "\" alt=\"").concat(product.name, "\">\n            <div class = \"product-description\">\n              <a href = \"/product.html\" class=\"product-title\">").concat(product.name, "</a>\n              <p class=\"product-articul\">").concat(product.articul, "</p>\n            </div>\n            <div class =\"product-info\">\n              <div class =\"product-info__price\"> \n                <p class=\"product-price\">").concat(product.price, " \u0433\u0440\u043D</p>\n                <p class=\"product-status\">").concat(product.status, "</p>\n              </div>\n            <button class=\"product-button\" data > ").concat(product.buy, "</button>\n            \n          </div>\n      </div>\n    ");
};

productsPopular.forEach(function (product) {
  var productHTML = productTemplate(product);
  productsContainer.insertAdjacentHTML('beforeend', productHTML);
}); //   ? ACTUAL PRODUCTS

var productsActual = [{
  name: 'Двигун',
  price: 20000,
  image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
  articul: "A78D12RR",
  buy: "В кошик",
  status: "В наявності",
  id: "2B"
}, {
  name: 'Двигун',
  price: 20000,
  image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
  articul: "A78D12RR",
  buy: "В кошик",
  status: "В наявності",
  id: "3B"
}];
var productsContainerActual = document.querySelector('.products__container__actual');
productsActual.forEach(function (product) {
  var productHTML = productTemplate(product);
  productsContainerActual.insertAdjacentHTML('beforeend', productHTML);
});
"use strict";

var cartMenu = document.querySelector(".cart-menu");
var menuBtn;
var menu;
var cartItems = [];
var cartWrapper = document.querySelector(".isntclear");
var errorCount = document.querySelector(".popup__cart-count");
var isclear = document.querySelector(".isclear");
var isntclear = document.querySelector(".isntclear");
var totalPrice = document.querySelector(".total-price__wrapper");
var showForm = document.querySelector(".total-price__button-buy");
var formWrap = document.querySelector(".form-order__background");
var formProduct = document.querySelector(".block__product-price");

function views() {
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
        cartItems.push(productInfo);
        var itemPrices = document.querySelectorAll('.item-price');
        var totalPriceCash = 0;
        itemPrices.forEach(function (item) {
          totalPriceCash += parseFloat(item.textContent);
        });
        document.querySelector('.total-price__text').innerHTML = totalPriceCash; //? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
      showForm.addEventListener("click", function () {
        var buyProduct;
        var documentHTML = document.querySelector("html");
        var totalProductPrice = " \n        <div class=\"price-block\">\n          <p class=\"title\">Title</p>\n          <p class=\"total-price\">b</p>\n        </div>\n        ";
        cartItems.forEach(function (item) {
          buyProduct = "\n          <div class=\"product-block\">\n            <div class=\"product\">\n                <div class=\"image\"><img class=\"image\" src=\"".concat(item.imgSrc, "\" alt=\"\"></div>\n                  <div class=\"name\">").concat(item.title, "</div>\n                  <div class=\"product-price\">").concat(item.price, "</div>\n            </div>\n          </div>\n        ");
          formProduct.insertAdjacentHTML("beforeend", buyProduct);
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

    formOrder();
  });
  return views;
}

views();
views(); //? Выбор марки 

var companyWrappers = document.querySelectorAll('.choose-company__wrapper');
var selectModelBtn = document.querySelector('.select-model');
var selectedModels = [];
companyWrappers.forEach(function (wrapper) {
  wrapper.addEventListener('click', function () {
    var value = wrapper.getAttribute('data-value');

    if (selectedModels.includes(value)) {
      selectedModels = selectedModels.filter(function (model) {
        return model !== value;
      });
    } else {
      selectedModels.push(value);
    }

    if (selectedModels.length > 0) {
      selectModelBtn.style.display = 'block';
    } else {
      selectModelBtn.style.display = 'none';
    }
  });
});
selectModelBtn.addEventListener('click', function () {
  var selectedModelsStr = encodeURIComponent(JSON.stringify(selectedModels));
  window.location.href = "selected-products.html?models=".concat(selectedModelsStr);
});
var currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; // Logics total price

if (isntclear.style.display = "flex") {
  totalPrice.classList.add('price-active');
}

isntclear.style.display = "none";
isclear.style.display = "flex";

if (isntclear.style.display = "none") {
  totalPrice.classList.remove('price-active');
}