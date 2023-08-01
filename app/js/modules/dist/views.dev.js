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
var transferredItems = [];

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
    var card;

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

      if (item.count <= 0) {
        localStorage.removeItem(key);
      }
    }

    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data")) {
        var start = function start() {
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

          var productInfo = {
            id: productId,
            imgSrc: _card.querySelector(".product-image").getAttribute("src"),
            title: _card.querySelector(".product-title").innerText,
            status: _card.querySelector(".product-status").innerText,
            price: _card.querySelector(".product-price__grn").innerText,
            count: 0,
            data: "".concat(productId)
          };
          productInfo.count++;
          var itemInCart = "<div class=\"item\" data-id=\"".concat(productInfo.data, "\" >\n                    <img src=\"").concat(productInfo.imgSrc, "\" alt=\"\" class=\"item-image\">\n                    <p class=\"item-name\">").concat(productInfo.title, "</p>\n                    <p class=\"item-price\">").concat(productInfo.price, "</p>\n                    <div class=\"item__button__add-delete\">\n                        <button class=\"button-primary__plus\" data-id=\"").concat(productInfo.data, "\">+</button>\n                        <p class=\"item-count\" data-counter=\"").concat(productInfo.id, "\">").concat(productInfo.count, "</p>\n                        <button class=\"button-primary__minus\" data-id=\"").concat(productInfo.data, "\" id=\"minus\">-</button>\n                    </div>\n                </div>\n            ");
          cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
          cartItems.push(productInfo);
          handleClick(productInfo);
          /* -------------------------------------------------------------------------*/

          /*                                  Buttons                                 */

          /* -------------------------------------------------------------------------*/

          var btnPlus = document.querySelectorAll(".button-primary__plus");
          var btnMinus = document.querySelectorAll(".button-primary__minus");
          /* --------------------------------------------------------------------------*/

          /*                                  Btn Plus                                 */

          /* --------------------------------------------------------------------------*/

          btnPlus.forEach(function (button) {
            button.addEventListener("click", function (event) {
              var productId = event.target.dataset.id;
              var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
              fetch("/app/server/api.php").then(function (res) {
                return res.json();
              }).then(function (data) {
                var transformedData = data.map(function (item) {
                  return {
                    name: item["Производитель"],
                    id: item["Код"],
                    description: item["Описание"],
                    price: item["Цена у.е."],
                    count: item["Наличие"],
                    image: item["Фото"]
                  };
                });
                transformedData.forEach(function (item) {
                  if (item.id == productId) {
                    var element = findCartItem(productId);
                    var itemNum = Number(item.count);
                    var countElemNum = Number(element.count);
                    element.count++;
                    handleClick(productInfo);
                    updateTotalPrice();
                    countElem.textContent = element.count;
                    console.log(element);
                    console.log(itemNum);
                    console.log(countElemNum);

                    if (itemNum <= countElemNum) {
                      countElem.innerHTML = itemNum;
                      element.count = itemNum;
                      updateTotalPrice();
                    }
                  }
                });
              });
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
              console.log(cartItems);
              var countElemAttr = countElem.getAttribute("data-counter");
              localStorage.setItem("counterElem", countElemAttr);

              if (countElemAttr == productInfo.data) {
                item.count--;
                handleClick(productInfo);
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
        };

        var _card = event.target.closest(".product");

        var productId = _card.dataset.id;
        fetch("/app/server/api.php").then(function (res) {
          return res.json();
        }).then(function (data) {
          var transformedData = data.map(function (item) {
            return {
              name: item["Производитель"],
              id: item["Код"],
              description: item["Описание"],
              price: item["Цена у.е."],
              count: item["Наличие"],
              image: item["Фото"]
            };
          });
          transformedData.forEach(function (product) {
            if (product.id == productId && product.count >= 1) {
              start();
            }
          });
        });
      }
    });

    function generateId() {
      var randomNumber = '';

      for (var i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 10);
      }

      return randomNumber;
    }

    var randomNum = generateId();
    var uniqueInput = document.getElementById('unique-value');
    var uniqueInputImg = document.getElementById("unique-value__img");
    uniqueInput.value = randomNum; // uniqueInputImg.value = randomNum

    window.addEventListener("load", function () {
      // var images = [];
      // document.querySelectorAll("img").forEach(function (img) {
      //   images.push(img.src);
      // });
      // var imagesLoaded = 0;
      // for (var i = 0; i < images.length; i++) {
      //   var img = new Image();
      //   img.src = images[i];
      //   img.onload = function () {
      //     imagesLoaded++;
      //     if (imagesLoaded == images.length) {
      //       document.querySelector("#preloader").style.display = "none";
      //     }
      //   };
      // }
      var savedItems = getAllItemsFromStorage();

      function updateAvailability(productId, count) {
        var getProductInfo = localStorage.getItem("key_" + productId);
        var productInfo = JSON.parse(getProductInfo);
        console.log(productInfo);
        productInfo["Наличие"] = String(Number(productInfo["Наличие"]) - count);
        localStorage.setItem("key_" + productId, JSON.stringify(productInfo));
      }

      savedItems.forEach(function (item) {
        var itemInCart = "<div class=\"item\" data-id=\"".concat(item.data, "\">\n          <img src=\"").concat(item.imgSrc, "\" alt=\"\" class=\"item-image\">\n          <p class=\"item-name\">").concat(item.title, "</p>\n          <p class=\"item-price\">").concat(item.price, "</p>\n          <div class=\"item__button__add-delete\">\n              <button class=\"button-primary__plus\" data-id=\"").concat(item.data, "\">+</button>\n              <p class=\"item-count\" data-counter=\"").concat(item.id, "\">").concat(item.count, "</p>\n              <button class=\"button-primary__minus\" data-id=\"").concat(item.data, "\" id=\"minus\">-</button>\n          </div>\n        </div>");

        function buttons() {
          var btnPlus = document.querySelectorAll(".button-primary__plus");
          var btnMinus = document.querySelectorAll(".button-primary__minus");
          btnPlus.forEach(function (button) {
            button.removeEventListener("click", handlePlusClick);
            button.addEventListener("click", handlePlusClick);
          });
          btnMinus.forEach(function (button) {
            button.removeEventListener("click", handleMinusClick);
            button.addEventListener("click", handleMinusClick);
          });

          function handlePlusClick(event) {
            if (event.target.dataset.clicked === "true") {
              return;
            }

            event.target.dataset.clicked = "true";
            var productId = event.target.dataset.id;
            var getProductInfo = localStorage.getItem("key_" + productId);
            var productInfo = JSON.parse(getProductInfo);
            var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
            fetch("/app/server/api.php").then(function (res) {
              return res.json();
            }).then(function (data) {
              var transformedData = data.map(function (item) {
                return {
                  name: item["Производитель"],
                  id: item["Код"],
                  description: item["Описание"],
                  price: item["Цена у.е."],
                  count: item["Наличие"],
                  image: item["Фото"]
                };
              });
              transformedData.forEach(function (item) {
                if (item.id == productId) {
                  var element = findCartItem(productId);
                  var itemNum = Number(item.count);
                  var countElemNum = Number(element.count);
                  element.count++;
                  countElem.innerHTML = element.count;
                  handleClick(productInfo);
                  updateTotalPrice();

                  if (itemNum <= countElemNum) {
                    countElem.innerHTML = itemNum;
                    element.count = itemNum;
                    updateTotalPrice();
                  }
                }
              });
            });
            console.log(productId);
            console.log(productInfo);
            console.log(item);
            console.log(countElem);
            var countElemAttr = countElem.getAttribute("data-counter");

            if (countElemAttr == productInfo.data) {
              console.log(item.count);
              item.count++;
              handleClick(item);
              updateAvailability(productId, 1);
            }

            countElem.textContent = item.count;
            updateTotalPrice();
            setTimeout(function () {
              event.target.removeAttribute("data-clicked");
            }, 100);
          }

          function handleMinusClick(event) {
            if (event.target.dataset.clicked === "true") {
              return;
            }

            event.target.dataset.clicked = "true";
            var productId = event.target.dataset.id;
            var item = findCartItem(productId);
            var getProductInfo = localStorage.getItem("key_" + productId);
            var productInfo = JSON.parse(getProductInfo);
            var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
            var countElemAttr = countElem.getAttribute("data-counter");
            localStorage.setItem("counterElem", countElemAttr);

            if (countElemAttr == productInfo.data) {
              item.count--;
              handleClick(item);
              updateAvailability(productId, -1);
            }

            if (item.count === 0) {
              removeCartItem(productId);
              getProductInfo;

              if (cartItems.length <= 0) {
                isclear.style.display = "flex";
                cartWrapper.style.display = "none";
                totalPrice.style.display = "none";
              }
            } else {
              countElem.textContent = item.count;
              updateTotalPrice();
            }

            setTimeout(function () {
              event.target.removeAttribute("data-clicked");
            }, 100);
          }
        }

        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(item);
        buttons();
      });
    });

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
    } // imageInput.addEventListener('change', function() {
    //   const file = imageInput.files[0]; 
    //   if (file && file.type.startsWith('image/')) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function() {
    //       const imageUrl = reader.result;
    //       imagePreview.innerHTML = `<img src="${imageUrl}" alt="Предпросмотр">`;
    //     };
    //   } else {
    //     imagePreview.innerHTML = '';
    //   }
    // });


    var formPayment = document.querySelector(".form-payment");
    var form = document.querySelector('.form-order');
    var checkedForm = document.querySelector(".checked-form");
    var formBtns = document.querySelector(".form__btn");
    var inputName = document.getElementById("name");
    var inputPatronymic = document.getElementById("patronymic");
    var inputSurname = document.getElementById("surname");
    var inputPhone = document.getElementById("phone");
    var inputDelivery = document.getElementById("delivery-department");

    function forms() {
      var showPayment = document.querySelector(".to-checked");
      var backOrderBtn = document.querySelector(".to-order");
      var checkedPayment = document.querySelector(".to-response");
      var formOrder = document.querySelector(".form-content");
      var formBtn = document.querySelector(".form__btn");
      var userNameChecked = document.querySelector(".user-name");
      var userPatronymicChecked = document.querySelector(".user-patronymic");
      var userSurnameChecked = document.querySelector(".user-surname");
      var userPhoneChecked = document.querySelector(".user-phone");
      var userDeliveryChecked = document.querySelector(".user-delivery");
      var sendData = document.querySelector(".send-data");
      sendData.addEventListener("click", function (e) {
        e.preventDefault();
        sendAllData();
      });
      var paymentItem = document.querySelectorAll(".payment__item");
      paymentItem.forEach(function (item) {
        item.addEventListener("click", function () {
          item.style.height = "90" + "px";

          if (item.hasAttribute("data-crypto")) {
            item.style.height = "150" + "px";
          }
        });
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        fetch('server/personalData.php', {
          method: 'POST',
          body: formData
        }).then(function (response) {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Помилка: ' + response.status);
          }
        })["catch"](function (Error) {
          throw new Error();
        });
      });
      var verifWrapper = document.querySelector(".verification");
      var accesBtn = document.querySelector(".acces-btn");
      var abortBtn = document.querySelector(".abort-btn");
      showForm.addEventListener("click", function () {
        verifWrapper.style.display = "flex";
        var priceToForm = document.querySelector(".total-price__text").textContent;
        var checkedFormItems = [];

        if (formProductPrice.children.length === 0) {
          var buyPrice = " \n            <div class=\"price-block\">\n              <p class=\"title\">\u0421\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438</p>\n              <p class=\"total-price\">".concat(priceToForm, "</p>\n            </div>\n            ");
          formProductPrice.insertAdjacentHTML("beforeend", buyPrice);
        }

        if (formProductItem.children.length === 0) {
          cartItems.forEach(function (item) {
            var inCartProduct = "\n                  <div class=\"product-block\" data=\"".concat(item.id, "\">\n                    <div class=\"product\">\n                      <div class=\"image\"><img class=\"image\" src=\"").concat(item.imgSrc, "\" alt=\"\"></div>\n                      <p class=\"name\">").concat(item.title, "</p>\n                      <p class=\"product-price\">").concat(item.price, "</p>\n                    </div>\n                  </div>\n                ");
            formProductItem.insertAdjacentHTML("beforeend", inCartProduct);
            checkedFormItems.push([item.id, item.price, item.count]);
          });
        }

        checkedFormItems.forEach(function (item) {
          var _transferredItems;

          (_transferredItems = transferredItems).push.apply(_transferredItems, _toConsumableArray(item));
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
      accesBtn.addEventListener("click", function () {
        form.style.display = "flex";
        verifWrapper.style.display = "none";
        formOrder.style.display = "flex";
      });
      abortBtn.addEventListener("click", function () {
        form.style.display = "none";
        formWrap.style.display = "none";
        pagessReset();
      });
      var closeForm = document.querySelector(".close-form");
      var warnWrapper = document.querySelector(".warn-wrapper");
      var warnAcces = document.querySelector(".abort-warn");
      var warnAbort = document.querySelector(".accept-warn");
      warnAcces.addEventListener("click", function () {
        form.style.display = "none";
        formWrap.style.display = "none";
        warnWrapper.style.display = "none";
        pagessReset();
      });
      warnAbort.addEventListener("click", function () {
        warnWrapper.style.display = "none";
      });
      closeForm.addEventListener("click", function () {
        warnWrapper.style.display = "flex";
      });
      showPayment.addEventListener("click", function () {
        checkedForm.style.display = "flex";
        formOrder.style.display = "none";
        showPayment.style.display = "none";
        formBtns.style.display = "flex";
        userNameChecked.textContent = inputName.value;
        userPatronymicChecked.textContent = inputPatronymic.value;
        userSurnameChecked.textContent = inputSurname.value;
        userPhoneChecked.textContent = inputPhone.value;
        userDeliveryChecked.textContent = inputDelivery.value;
      });
      checkedPayment.addEventListener("click", function () {
        formPayment.style.display = "flex";
      });
      backOrderBtn.addEventListener("click", function () {
        checkedForm.style.display = "none";
        formBtn.style.display = "none";
        formOrder.style.display = "flex";
      });
    }

    function sendDataToServer(data) {
      var url = "server/changeDb.php";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      fetch(url, options).then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log("Успешно", result);
      })["catch"](function (error) {});
    }

    function sendAllData() {
      if (transferredItems.length > 0) {
        transferredItems.push(randomNum);
        var itemJson = {
          items: transferredItems.flat()
        };
        console.log(itemJson);
        sendDataToServer(itemJson);
      }

      formProductPrice.innerHTML = "";
      isclear.style.display = "flex";
      cartWrapper.style.display = "none";
      totalPrice.style.display = "none";
      formWrap.style.display = "none";
      formPayment.style.display = 'none';
      form.style.display = "none";
      checkedForm.style.display = 'none';
      formBtns.style.display = 'none';
      inputName.value = "";
      inputPatronymic.value = "";
      inputSurname.value = "";
      inputPhone.value = "";
      inputDelivery.value = "";
      pagessReset();
    }

    function removeDataAddedAttribute() {
      var products = document.querySelectorAll(".product");
      products.forEach(function (product) {
        if (product.hasAttribute("data-added")) {
          product.removeAttribute("data-added");
        }
      });
    }

    function pagessReset() {
      documentHTML.style.position = "static";
      documentHTML.style.overflowY = "scroll";
      cartMenu.classList.remove("cart-active");
      document.querySelector(".succes__popup").classList.add("active-popup");
      transferredItems = [];
      cartWrapper.innerHTML = "";
      removeDataAddedAttribute();
      cartItems = [];
      formProductItem.innerHTML = "";
      localStorage.clear();
      document.querySelector(".total-price__text").innerHTML = "0 грн";
    }

    forms();

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

    forms();
  });
  return views;
}

views();