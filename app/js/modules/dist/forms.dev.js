"use strict";

var _validation = require("../modules/validation.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var showForm = document.querySelector(".total-price__button-buy");
var formWrap = document.querySelector(".form-order__background");
var documentHTML = document.querySelector("html");
var verifWrapper = document.querySelector(".verification");
var accesBtn = document.querySelector(".acces-btn");
var abortBtn = document.querySelector(".abort-btn");
var transferredItems = []; // const uniqueInput = document.getElementById('unique-value')
// const uniqueInputImg = document.getElementById("unique-value__img")
// uniqueInput.value = randomNum
// uniqueInputImg.value = randomNum

function forms() {
  var inputName = document.getElementById("name");
  var inputPatronymic = document.getElementById("patronymic");
  var inputSurname = document.getElementById("surname");
  var inputPhone = document.getElementById("phone");
  var inputDelivery = document.getElementById("delivery-department");
  var sendData = document.querySelector(".send-data");

  function submitForms() {
    var form1Data = new FormData(document.getElementById('form'));
    var form2Data = new FormData(document.getElementById('form-payment'));
    var photoInput = document.getElementById('fileInput');
    var photoFile = photoInput.files[0];
    var photoFormData = new FormData();
    photoFormData.append('file', photoFile);
    Promise.all([fetch('/app/server/personalData.php', {
      method: 'POST',
      body: form1Data
    }), fetch('/app/server/getImage.php', {
      method: 'POST',
      body: form2Data
    })]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {});
  }

  function generateId() {
    var randomNumber = '';

    for (var i = 0; i < 10; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }

    return randomNumber;
  }

  var randomNum = generateId();

  function sendDataToServer(data) {
    var url = "app/server/changeDb.php";
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
    inputName.value = "";
    inputPatronymic.value = "";
    inputSurname.value = "";
    inputPhone.value = "";
    inputDelivery.value = "";
    window.location.href = "http://uk";
    localStorage.clear();
  }

  sendData.addEventListener("click", function (e) {
    e.preventDefault();
    sendAllData();
  }); // form.addEventListener('submit', function(e) {
  //     e.preventDefault();
  //     var formData = new FormData(form);
  //     fetch('server/personalData.php', {
  //     method: 'POST',
  //     body: formData
  //     })
  //     .then(function(response) {
  //     if (response.ok) {
  //         return response.text();
  //     } else {
  //         throw new Error('Помилка: ' + response.status);
  //     }
  //     })
  //     .catch(function(Error) {
  //     throw new Error
  //     });
  // });

  var checkedFormItems = [];
  var formProductPrice = document.querySelector(".block__product-price");
  var formProductItem = document.querySelector(".block__product-item");
  var priceToForm = localStorage.getItem("price");

  if (formProductPrice.children.length === 0) {
    var buyPrice = " \n        <div class=\"price-block\">\n        <p class=\"title\">\u0421\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438</p>\n        <p class=\"total-price\">".concat(priceToForm, " \u0433\u0440\u043D</p>\n        </div>\n        ");
    formProductPrice.insertAdjacentHTML("beforeend", buyPrice);
  }

  var cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (formProductItem.children.length === 0) {
    cartItems.forEach(function (item) {
      var inCartProduct = "\n            <div class=\"product-block\" data=\"".concat(item.id, "\">\n                <div class=\"product\">\n                <div class=\"image\"><img class=\"image\" src=\"").concat(item.imgSrc, "\" alt=\"\"></div>\n                <p class=\"name\">").concat(item.title, "</p>\n                <p class= \"count\">").concat(item.count, "</p>\n                <p class=\"product-price\">").concat(item.price, "</p>\n                </div>\n            </div>\n            ");
      formProductItem.insertAdjacentHTML("beforeend", inCartProduct);
      checkedFormItems.push([item.id, item.price, item.count]);
    });
  }

  checkedFormItems.forEach(function (item) {
    transferredItems.push.apply(transferredItems, _toConsumableArray(item));
  }); // function submitForms() {
  //   const form1Data = new FormData(document.getElementById('form1'));
  //   const form2Data = new FormData(document.getElementById('form2'));
  //   const combinedData = new FormData();
  //   for (const [name, value] of form1Data) {
  //     combinedData.append(name, value);
  //   }
  //   for (const [name, value] of form2Data) {
  //     combinedData.append(name, value);
  //   }
  //   fetch('/your-server-url', {
  //     method: 'POST',
  //     body: combinedData
  //   })
  //   .then(response => {
  //   })
  //   .catch(error => {
  //   });
  // }

  selectPayment();
}

function selectPayment() {
  var privatPayment = document.querySelector("#privat-wrapper");
  var monoPayment = document.querySelector("#mono-wrapper");
  var privatPaymentImg = document.querySelector("#privat");
  var monoPaymentImg = document.querySelector("#mono");
  var privatNum = document.querySelector(".privat-number");
  var monoNum = document.querySelector(".monobank-number");
  var bankPayment = document.getElementById("bank-payment");
  var overlayPayment = document.getElementById("overlay-payment");
  var tetherPayment = document.querySelector("#tether-wrapper");
  var tetherPaymentImg = document.querySelector("#tether");
  var tetherNum = document.querySelector(".tether-number");
  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');
  checkbox1.addEventListener('change', function () {
    if (checkbox1.checked) {
      checkbox2.checked = false;
    }
  });
  checkbox2.addEventListener('change', function () {
    if (checkbox2.checked) {
      checkbox1.checked = false;
    }
  });
  document.querySelectorAll(".copy-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = event.target.dataset.target;
      var textToCopy = document.querySelector("[data-id=\"".concat(targetId, "\"]")).innerText;
      copyToClipboard(textToCopy);
    });
  });

  function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  try {
    bankPayment.addEventListener("click", function (e) {
      var targetId = e.target.dataset.id;
      var otherTarget = document.querySelector('[data-pay="2"]');
      var paymentModel = document.querySelector("[data-pay=\"".concat(targetId, "\"]"));

      if (paymentModel) {
        paymentModel.style.display = "flex";
      }

      otherTarget.style.display = "none";
    });
    overlayPayment.addEventListener("click", function (e) {
      var targetId = e.target.dataset.id;
      var otherTarget = document.querySelector('[data-pay="1"]');
      var paymentModel = document.querySelector("[data-pay=\"".concat(targetId, "\"]"));

      if (paymentModel) {
        paymentModel.style.display = "flex";
      }

      otherTarget.style.display = "none";
    });
  } catch (error) {
    console.error = function () {};
  }

  privatPayment.addEventListener("click", function () {
    privatPayment.style.width = "100" + "%";
    privatPayment.style.transition = "ease 1s";
    privatPaymentImg.style.width = "10" + "%";
    privatPaymentImg.style.marginLeft = "20" + "px";
    privatPayment.style.justifyContent = "flex-start";
    privatNum.style.display = "flex";
    privatNum.style.transition = "ease 2s";
  });
  monoPayment.addEventListener("click", function () {
    monoNum.style.display = "flex";
    monoNum.style.transition = "ease 2s";
    monoPayment.style.width = "100" + "%";
    monoPayment.style.transition = "ease 1s";
    monoPaymentImg.style.width = "10" + "%";
    monoPaymentImg.style.marginLeft = "20" + "px";
    monoPayment.style.justifyContent = "flex-start";
  });
  tetherPayment.addEventListener("click", function () {
    tetherPayment.style.width = "80" + "%";
    tetherPayment.style.transition = "ease 1s";
    tetherPaymentImg.style.width = "10" + "%";
    tetherPaymentImg.style.marginLeft = "20" + "px";
    tetherPayment.style.justifyContent = "flex-start";

    if (window.innerWidth < 1000) {
      tetherPayment.style.flexDirection = "column";
      tetherPayment.style.height = "100" + "%";
    }

    tetherNum.style.display = "flex";
    tetherNum.style.transition = "ease 2s";
  });
}

forms();