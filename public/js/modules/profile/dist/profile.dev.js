"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelProfile = panelProfile;

function panelProfile() {
  var listItem = document.querySelectorAll(".list-item");
  var spanItem = document.querySelectorAll(".span-header");
  var userMail = document.querySelector("#user-mail").textContent;
  localStorage.setItem("mail", userMail);
  listItem.forEach(function (item) {
    item.onmouseenter = function () {
      item.style.color = "orange";
      item.style.transition = "1s";
    };

    item.onmouseleave = function () {
      item.style.color = "white";
      item.style.transition = "1s";
    };

    item.onclick = function () {
      var dataItem = item.getAttribute("data-item");
      spanItem.forEach(function (item) {
        var spanDataItem = item.getAttribute("data-item");

        if (dataItem === spanDataItem) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
      var panel = document.querySelectorAll(".panel");
      panel.forEach(function (item) {
        var panelDataItem = item.getAttribute("data-item");

        if (dataItem == panelDataItem) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    };
  });
  var cash = document.querySelectorAll(".price");
  fetch('/get-api').then(function (response) {
    return response.json();
  }).then(function (data) {
    var transformedData = data.data.map(function (item) {
      return {
        exchange: item["exchange"]
      };
    });
    var transformedDataExchange = transformedData.map(function (item) {
      var arrayPrices = [];
      arrayPrices.push(item.exchange);
      var arrayTrash = arrayPrices.shift();
      return arrayTrash;
    });
    var arrayClear = transformedDataExchange.filter(function (str) {
      return str !== '';
    });
    var exchangePriceStr = arrayClear[0];
    var exchangePrice = Number(exchangePriceStr);
    cash.forEach(function (item) {
      var price = item.textContent;
      var priceNumb = parseFloat(price.replace(",", "."));
      item.innerHTML = "".concat(priceNumb * exchangePrice, " \u0433\u0440\u043D");
    });
  });
}

panelProfile();