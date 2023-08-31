"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var titleCode = document.querySelector(".title-code").textContent;
  var price = document.querySelector(".product-price__grn").textContent;
  var priceHtml = document.querySelector(".product-price__grn");
  fetch('/get-api').then(function (response) {
    return response.json();
  }).then(function (data) {
    var transformedData = data.data.map(function (item) {
      return {
        name: item["maker"],
        id: item["code"],
        description: item["name"],
        price: item["price"],
        count: item["count"],
        analogue: item["analogue"],
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
    var priceNumb = parseFloat(price.replace(",", "."));
    transformedData.forEach(function (item) {
      if (titleCode === item.id) {
        var priceD = priceNumb * exchangePrice;
        priceHtml.innerHTML = "".concat(priceD.toFixed(2), " \u0433\u0440\u043D");
      }
    });
  });
});
var popup = document.querySelector(".popup-wrapper");
var htmlDoc = document.querySelector("html");
var unloginnedBtn = document.querySelector(".unloginned-btn");

try {
  unloginnedBtn.addEventListener("click", function () {
    popup.style.display = "flex";
    htmlDoc.style.overflow = "hidden";
  });
} catch (_unused) {}