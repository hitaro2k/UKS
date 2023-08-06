"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;
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
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    console.log(productInfo);
                    updateTotalPrice();
                    countElem.textContent = element.count;
                    console.log(element);
                    console.log(itemNum);
                    console.log(countElemNum);

                    if (itemNum <= countElemNum) {
                      handleClick(productInfo);
                      countElem.innerHTML = itemNum;
                      element.count = itemNum;
                      localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
              var countElemAttr = countElem.getAttribute("data-counter");
              localStorage.setItem("counterElem", countElemAttr);

              if (countElemAttr == productInfo.data) {
                item.count--;
                handleClick(productInfo);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
    }

    function removeDataAddedAttribute() {
      var products = document.querySelectorAll(".product");
      products.forEach(function (product) {
        if (product.hasAttribute("data-added")) {
          product.removeAttribute("data-added");
        }
      });
    }

    showForm.addEventListener("click", function () {
      window.location.href("/app/html/inputsSend.php");
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
  });
  return views;
}

views();