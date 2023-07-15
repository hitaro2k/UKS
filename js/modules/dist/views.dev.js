"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cartItems = [];

function views() {
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
  var cartIcon = document.querySelector(".shopping-card__link");
  var cartClose = document.getElementById("close-cart");
  var documentHTML = document.querySelector("html");
  menuBtn = document.querySelector('.menu-btn');
  menu = document.querySelector(".menu--burger-list");
  document.querySelector(".total-price__text").innerHTML = localStorage.getItem("price") + "грн";
  document.addEventListener("DOMContentLoaded", function () {
    if (cartItems.length > 0) {
      isclear.style.display = "none";
      cartWrapper.style.display = "flex";
      totalPrice.style.display = "flex";
    }

    cartIcon.onclick = function () {
      cartMenu.classList.add("cart-active");

      if (cartItems.length <= 0) {
        isclear.style.display = "flex";
        cartWrapper.style.display = "none";
        totalPrice.style.display = "none";
      } else {
        isclear.style.display = "none";
        cartWrapper.style.display = "flex";
        totalPrice.style.display = "flex";
      }

      if (window.innerWidth < 560) {
        documentHTML.style.position = "fixed";
        documentHTML.style.height = "100vh";
        documentHTML.style.width = "100%";
        documentHTML.style.top = "0";
        documentHTML.style.margin = "0 auto";
      } else if (window.innerWidth < 560) {
        documentHTML.style.position = "static";
      }
    };

    cartClose.addEventListener("click", function () {
      cartMenu.classList.remove("cart-active");
      documentHTML.style.position = "static";
      localStorage.setItem("stateActive", "flex");
      localStorage.setItem("statePassive", "none");
    });

    function handleClick(item) {
      var key = 'key_' + item.data;
      var value = JSON.stringify(item);
      localStorage.setItem(key, value);
    }

    function getAllItemsFromStorage() {
      var items = [];

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (key.startsWith('key_')) {
          var value = localStorage.getItem(key);
          var item = JSON.parse(value);
          items.push(item);
        }
      }

      return items;
    }

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
            var checkedFormItems = [];
            var transferredItems = [];

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
                  console.log(image.src);
                  console.log(formData);
                }); // ЧИТАЮ ФОТКУ

                reader.readAsDataURL(file);
              } else {
                alert("Выберите файл-изображение");
              }
            });
          });
          showPayment.style.display = "block";
          var paymentAccept = document.querySelector(".accept-btn");
          var formAcces = document.querySelector(".form-response");
          paymentAccept.addEventListener("click", function (e) {
            e.preventDefault();
            formAcces.style.display = "flex";
            setTimeout(function () {
              formAcces.style.display = "none";
              formProductPrice.innerHTML = "";
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
          _productInfo.count = 0;
          var itemInCount = document.querySelector(".item-count");
          itemInCount.innerHTML = _productInfo.count;
          formProductItem.innerHTML = "";

          _card.removeAttribute("data-added");

          removeCartItem(productId);
          updateTotalPrice();
          localStorage.clear();
        };
        /* -------------------------------------------------------------------------*/

        /*                                  Buttons                                 */

        /* -------------------------------------------------------------------------*/


        var _card = event.target.closest(".product");

        var productId = _card.dataset.id;
        var existingItem = findCartItem(productId);
        cartMenu.classList.add("cart-active");
        cartWrapper.style.display = "flex";
        totalPrice.style.display = "flex";
        isclear.style.display = "none";
        var formPrice;

        var added = _card.getAttribute("data-added");

        localStorage.setItem("isclear", "none");
        localStorage.setItem("isntclear", "flex");

        if (added === "true") {
          return;
        }

        added = "true";

        _card.setAttribute("data-added", added);
        /* -----------------------------------------------------------------------*/

        /*                                Card Item                               */

        /* -----------------------------------------------------------------------*/


        if (existingItem) {
          var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
          countElem.textContent = Number(countElem.textContent) + 1;
          return;
        }

        var _productInfo = {
          id: productId,
          imgSrc: _card.querySelector(".product-image").getAttribute("src"),
          title: _card.querySelector(".product-title").innerText,
          status: _card.querySelector(".product-status").innerText,
          price: _card.querySelector(".product-price").innerText,
          count: 0,
          data: "".concat(productId)
        };

        cartClose.onclick = function () {
          handleClick(_productInfo);
        };

        _productInfo.count++;
        var itemInCart = "<div class=\"item\" data-id=\"".concat(_productInfo.data, "\" >\n                <img src=\"").concat(_productInfo.imgSrc, "\" alt=\"\" class=\"item-image\">\n                <p class=\"item-name\">").concat(_productInfo.title, "</p>\n                <p class=\"item-price\">").concat(_productInfo.price, "</p>\n                <div class=\"item__button__add-delete\">\n                    <button class=\"button-primary__plus\" data-id=\"").concat(_productInfo.data, "\">+</button>\n                    <p class=\"item-count\" data-counter=\"").concat(_productInfo.id, "\">").concat(_productInfo.count, "</p>\n                    <button class=\"button-primary__minus\" data-id=\"").concat(_productInfo.data, "\" id=\"minus\">-</button>\n                </div>\n            </div>\n        ");
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(_productInfo);
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

            if (countElemAttr == _productInfo.data) {
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
            localStorage.setItem("counterElem", countElemAttr);

            if (countElemAttr == _productInfo.data) {
              item.count--;
            }

            if (item.count === 0) {
              removeCartItem(productId);

              if (cartItems.length <= 0) {
                isclear.style.display = "flex";
                cartWrapper.style.display = "none";
                totalPrice.style.display = "none";
              }

              _card.removeAttribute("data-added");
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

      var btnPlus = document.querySelectorAll(".button-primary__plus");
      var btnMinus = document.querySelectorAll(".button-primary__minus");
      var savedItems = getAllItemsFromStorage();
      savedItems.forEach(function (item) {
        var itemInCart = "<div class=\"item\" data-id=\"".concat(item.data, "\">\n          <img src=\"").concat(item.imgSrc, "\" alt=\"\" class=\"item-image\">\n          <p class=\"item-name\">").concat(item.title, "</p>\n          <p class=\"item-price\">").concat(item.price, "</p>\n          <div class=\"item__button__add-delete\">\n              <button class=\"button-primary__plus\" data-id=\"").concat(item.data, "\">+</button>\n              <p class=\"item-count\" data-counter=\"").concat(item.id, "\">").concat(item.count, "</p>\n              <button class=\"button-primary__minus\" data-id=\"").concat(item.data, "\" id=\"minus\">-</button>\n          </div>\n        </div>");
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(item);
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
        btnMinus.forEach(function (button) {
          button.addEventListener("click", function (event) {
            var productId = event.target.dataset.id;
            var item = findCartItem(productId);
            var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
            var countElemAttr = countElem.getAttribute("data-counter");
            localStorage.setItem("counterElem", countElemAttr);

            if (countElemAttr == productInfo.data) {
              item.count--;
            }

            if (item.count === 0) {
              removeCartItem(productId);

              if (cartItems.length <= 0) {
                isclear.style.display = "flex";
                cartWrapper.style.display = "none";
                totalPrice.style.display = "none";
              }

              card.removeAttribute("data-added");
            } else {
              countElem.textContent = item.count;
              updateTotalPrice();
            }
          });
        });
      });
    });

    function removeCartItem(id) {
      var index = cartItems.findIndex(function (item) {
        return item.id === id;
      });
      cartItems.splice(index, 1);
      var item = document.querySelector("[data-id=\"".concat(id, "\"]")).closest(".item");
      item.parentNode.removeChild(item);
      updateTotalPrice();
    }

    function updateTotalPrice() {
      var itemPrices = document.querySelectorAll(".item-price");
      var totalPriceCash = 0;
      itemPrices.forEach(function (item) {
        var productId = item.closest(".item").querySelector(".button-primary__plus").dataset.id;
        var itemInfo = findCartItem(productId);
        totalPriceCash += parseFloat(item.textContent) * itemInfo.count;
      });
      document.querySelector(".total-price__text").innerHTML = totalPriceCash + " грн";

      function stateMoney() {
        localStorage.setItem("price", totalPriceCash);
      }

      stateMoney();
    }

    function handleAddCount(event) {
      var productId = event.target.dataset.id;
      var item = findCartItem(productId);
      var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
      var countElemAttr = countElem.getAttribute("data-counter");

      if (countElemAttr == productInfo.data) {
        item.count++;
      }

      countElem.textContent = item.count;
      updateTotalPrice();
    }

    function handleRemoveCount() {}
  });
  return views;
}

views();