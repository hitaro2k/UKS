"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

var _cart = require("./cart.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var documentHTML = document.querySelector("html");
var cartItems = [];

function views() {
  /* -------------------------------------------------------------------------- */

  /*                                  Variables                                 */

  /* -------------------------------------------------------------------------- */
  var cartMenu = document.querySelector(".cart-menu");
  var menuBtn;
  var menu;
  var cartWrapper = document.querySelector(".isntclear");
  var isclear = document.querySelector(".isclear");
  var totalPrice = document.querySelector(".total-price__wrapper");
  var showForm = document.querySelector(".total-price__button-buy");
  var formWrap = document.querySelector(".form-order__background");
  var formProductPrice = document.querySelector(".block__product-price");
  var formProductItem = document.querySelector(".block__product-item");
  /* -------------------------------------------------------------------------- */

  /*                                Main scripts                                */

  /* -------------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    /* -------------------------------------------------------------------------- */

    /*                                  Preloader                                 */

    /* -------------------------------------------------------------------------- */
    window.addEventListener("load", function () {
      var images = [];
      document.querySelectorAll("img").forEach(function (img) {
        images.push(img.src);
      });
      var imagesLoaded = 0;

      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];

        img.onload = function () {
          imagesLoaded++;

          if (imagesLoaded == images.length) {
            document.querySelector("#preloader").style.display = "none";
          }
        };
      }
    });
    /* -------------------------------------------------------------------------- */

    /*                                Functionality                               */

    /* -------------------------------------------------------------------------- */

    function findCartItem(id) {
      return cartItems.find(function (item) {
        return item.id === id;
      });
    }

    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data")) {
        /* -----------------------------------------------------------------------*/

        /*                                  FORM                                  */

        /* -----------------------------------------------------------------------*/
        var formOrder = function formOrder() {
          var closeForm = document.querySelector(".close-form");
          closeForm.addEventListener("click", function () {
            formWrap.style.display = "none";
            documentHTML.style.overflowY = "scroll";
            cartMenu.style.overflowY = "scroll";
            formProductItem.innerHTML = "";
            formProductPrice.innerHTML = "";
          });
          showForm.addEventListener("click", function () {
            var priceToForm = document.querySelector(".total-price__text").textContent;
            /* -------------------------------------------------------------------------- */

            /*                              Arr for database                              */

            /* -------------------------------------------------------------------------- */

            var checkedFormItems = [];
            var transferredItems = [];
            /* -------------------------------------------------------------------------- */

            /*                              Arr for database                              */

            /* -------------------------------------------------------------------------- */

            if (formProductPrice.children.length === 0) {
              var buyPrice = " \n              <div class=\"price-block\">\n                <p class=\"title\">Title</p>\n                <p class=\"total-price\">".concat(priceToForm, "</p>\n              </div>\n              ");
              formProductPrice.insertAdjacentHTML("beforeend", buyPrice);
            }

            if (formProductItem.children.length === 0) {
              cartItems.forEach(function (item) {
                var inCartProduct = "\n                    <div class=\"product-block\" data=\"".concat(item.id, "\">\n                      <div class=\"product\">\n                        <div class=\"image\"><img class=\"image\" src=\"").concat(item.imgSrc, "\" alt=\"\"></div>\n                        <div class=\"name\">").concat(item.title, "</div>\n                        <div class=\"product-price\">").concat(item.price, "</div>\n                      </div>\n                    </div>\n                  ");
                formProductItem.insertAdjacentHTML("beforeend", inCartProduct);
                checkedFormItems.push([item.id, item.price, item.count]);
              });
            }

            checkedFormItems.forEach(function (item) {
              transferredItems.push.apply(transferredItems, _toConsumableArray(item));
            });
            /* -------------------------------------------------------------------------- */

            /*                            JSON with id product                            */

            /* -------------------------------------------------------------------------- */

            function sendDataToServer(data) {
              var url = 'server/data.php';
              var options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              };
              fetch(url, options).then(function (response) {
                return response.json();
              }).then(function (result) {
                console.log('Успешно', result);
              })["catch"](function (error) {
                console.error('Ошибка', error);
              });
            }

            if (transferredItems.length > 0) {
              var itemJson = {
                items: transferredItems
              };
              console.log(itemJson);
              sendDataToServer(itemJson);
            }

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
          var showPayment = document.querySelector(".to-response");
          var formPayment = document.querySelector(".form-payment");
          showPayment.addEventListener("click", function (e) {
            e.preventDefault();
            formPayment.style.display = "flex";
            var fileInput = document.querySelector(".pay-input");
            fileInput.addEventListener("change", function (event) {
              var file = event.target.files[0];

              if (file && file.type.startsWith("image/")) {
                var reader = new FileReader();
                fileInput.style.display = "none";
                reader.addEventListener("load", function (loadEvent) {
                  var image = new Image();
                  image.src = loadEvent.target.result;
                  var imageContainer = document.getElementById("image-container");
                  imageContainer.insertAdjacentHTML("beforeend", "<img class= \"user-img\" src=\"".concat(image.src, "\" alt=\"\u0424\u043E\u0442\u043E\">"));
                  var formData = new FormData();
                  formData.append("photo", file);
                  console.log(image.src); // ОТПРАВЛЯЮ ФОТОЧКУ

                  console.log(formData);
                }); // ЧИТАЮ ФОТКУ

                reader.readAsDataURL(file);
              } else {
                alert("Выберите файл-изображение");
              }
            });
          });
          var paymentAccept = document.querySelector(".accept-btn");
          var formAcces = document.querySelector(".form-response");
          paymentAccept.addEventListener("click", function (e) {
            e.preventDefault();
            formAcces.style.display = "flex";
            setTimeout(function () {
              formAcces.style.display = "none";
              formProductPrice.innerHTML = "";
              formProductItem.innerHTML = "";
              isclear.style.display = "flex";
              cartWrapper.style.display = "none";
              totalPrice.style.display = "none";
              showPayment.style.display = "none";
              formWrap.style.display = "none";
              counterReset();
            }, 2000);
            formPayment.style.display = "none";
            documentHTML.style.overflowY = "scroll";
          });
        };

        var counterReset = function counterReset() {
          productInfo.count = 0;
          var itemInCount = document.querySelector(".item-count");
          itemInCount.innerHTML = productInfo.count;
        };
        /* -------------------------------------------------------------------------*/

        /*                                  Buttons                                 */

        /* -------------------------------------------------------------------------*/


        var removeCartItem = function removeCartItem(id) {
          var index = cartItems.findIndex(function (item) {
            return item.id === id;
          });
          cartItems.splice(index, 1);
          var item = document.querySelector("[data-id=\"".concat(id, "\"]")).closest(".item");
          item.parentNode.removeChild(item);
          updateTotalPrice();
        };

        var updateTotalPrice = function updateTotalPrice() {
          var itemPrices = document.querySelectorAll(".item-price");
          var totalPriceCash = 0;
          itemPrices.forEach(function (item) {
            var productId = item.closest(".item").querySelector(".button-primary__plus").dataset.id;
            var itemInfo = findCartItem(productId);
            totalPriceCash += parseFloat(item.textContent) * itemInfo.count;
          });
          document.querySelector(".total-price__text").innerHTML = totalPriceCash + " грн";
        };

        var card = event.target.closest(".product");
        var productId = card.dataset.id;
        var existingItem = findCartItem(productId);
        cartMenu.classList.add("cart-active");
        cartWrapper.style.display = "flex";
        totalPrice.style.display = "flex";
        isclear.style.display = "none";
        var formPrice;
        var added = card.getAttribute("data-added");

        if (added === "true") {
          return;
        }

        added = "true";
        card.setAttribute("data-added", added);
        /* -----------------------------------------------------------------------*/

        /*                                Card Item                               */

        /* -----------------------------------------------------------------------*/

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
          count: 0,
          data: "".concat(productId)
        };
        productInfo.count++;
        var itemInCart = "   <div class=\"item\" data-id=\"".concat(productInfo.data, "\" >\n                <img src=\"").concat(productInfo.imgSrc, "\" alt=\"\" class=\"item-image\">\n                <p class=\"item-name\">").concat(productInfo.title, "</p>\n                <p class=\"item-price\">").concat(productInfo.price, "</p>\n                <div class=\"item__button__add-delete\">\n                    <button class=\"button-primary__plus\" data-id=\"").concat(productInfo.data, "\">+</button>\n                    <p class=\"item-count\" data-counter=\"").concat(productInfo.id, "\">").concat(productInfo.count, "</p>\n                    <button class=\"button-primary__minus\" data-id=\"").concat(productInfo.data, "\" id=\"minus\">-</button>\n                </div>\n            </div>\n        ");
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(productInfo);
        var btnPlus = document.querySelectorAll(".button-primary__plus");
        var btnMinus = document.querySelectorAll(".button-primary__minus");
        /* --------------------------------------------------------------------------*/

        /*                                  Btn Plus                                 */

        /* --------------------------------------------------------------------------*/

        btnPlus.forEach(function (button) {
          button.addEventListener("click", function (event) {
            var productId = event.target.dataset.id;
            var item = findCartItem(productId);
            var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
            var countElemAttr = countElem.getAttribute("data-counter");

            if (countElemAttr == productInfo.data) {
              item.count++;
            }

            countElem.textContent = item.count;
            updateTotalPrice();
          });
        });
        /* --------------------------------------------------------------------------*/

        /*                                  Btn Minus                                */

        /* --------------------------------------------------------------------------*/

        btnMinus.forEach(function (button) {
          button.addEventListener("click", function (event) {
            var productId = event.target.dataset.id;
            var item = findCartItem(productId);
            var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
            var countElemAttr = countElem.getAttribute("data-counter");

            if (countElemAttr == productInfo.data) {
              item.count--;
            }

            if (item.count === 0) {
              removeCartItem(productId);
              card.removeAttribute("data-added");
            } else {
              countElem.textContent = item.count;
              updateTotalPrice();
            }
          });
        });
        updateTotalPrice();
        formOrder();
      }
    });
  });
  return views;
}

views();