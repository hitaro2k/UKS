"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forms = forms;

var _validation = require("./validation.js");

var showForm = document.querySelector(".total-price__button-buy");
var formWrap = document.querySelector(".form-order__background");
var documentHTML = document.querySelector("html");
var verifWrapper = document.querySelector(".verification");
var accesBtn = document.querySelector(".acces-btn");
var abortBtn = document.querySelector(".abort-btn"); // const uniqueInput = document.getElementById('unique-value')
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

  function sendAllData() {
    formProductPrice.innerHTML = "";
    inputName.value = "";
    inputPatronymic.value = "";
    inputSurname.value = "";
    inputPhone.value = "";
    inputDelivery.value = "";
    window.location.href = "http://uk";
    localStorage.clear();
  } // form.addEventListener('submit', function(e) {
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
    });
  }

  var userId = JSON.stringify(localStorage.getItem("userId"));
  var formPayment = document.querySelector(".form-payment");
  var sendPhoto = document.querySelector(".send-photo");
  var succesPopup = document.querySelector('.popup-success__img');
  var fileInput = document.getElementById('fileInput');
  var imageContainer = document.getElementById('imageContainer');
  var deleteButton = document.getElementById('deleteButton');
  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('uploaded-image');
        imageContainer.innerHTML = '';
        imageContainer.setAttribute("image-add", "true");
        imageContainer.appendChild(img);
        deleteButton.style.display = 'inline';
      };

      reader.readAsDataURL(file);
    }
  });
  deleteButton.addEventListener('click', function () {
    imageContainer.innerHTML = '';
    deleteButton.style.display = 'none';
    fileInput.value = null;
    sendPhoto.removeAttribute('sended');
  });
  var imageElement = imageContainer.querySelector("img");
  var errorPopup = document.querySelector(".popup-error__img");
  formPayment.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    if (imageContainer.hasAttribute("image-add")) {
      succesPopup.style.left = "0" + "px";
      setTimeout(function () {
        succesPopup.style.left = "-300" + "px";
      }, 2000);
    } else {
      errorPopup.style.left = "0" + "px";
      setTimeout(function () {
        errorPopup.style.left = "-300" + "px";
      }, 2000);
    }

    if (sendPhoto.hasAttribute('sended')) {
      formPayment.removeEventListener("submit", handleSubmit);
    } else {
      formPayment.addEventListener('submit', handleSubmit);
    }

    var formData = new FormData(formPayment);
    var imageFile = document.querySelector('#fileInput').files[0];
    formData.append('image', imageFile);
    sendPhoto.setAttribute("sended", "true");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'app/server/getImage.php', true);

    xhr.onload = function () {
      if (xhr.status === 200) {} else {}
    };

    xhr.send(formData);
  }

  sendData.addEventListener('click', function () {
    var personalInfoForm = document.getElementById('form');
    var personalInfoData = new FormData(personalInfoForm);
    var xhr1 = new XMLHttpRequest();
    var url1 = 'app/server/personalData.php';
    xhr1.open('POST', url1, true);

    xhr1.onload = function () {
      if (xhr1.status === 200) {
        console.log('Данные первой формы отправлены успешно.');
      } else {
        console.error('Ошибка отправки данных первой формы. Код ошибки:', xhr1.status);
      }
    };

    xhr1.onerror = function () {
      console.error('Произошла ошибка сети при отправке данных первой формы.');
    };

    xhr1.send(personalInfoData);
    sendAllData();
  });
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