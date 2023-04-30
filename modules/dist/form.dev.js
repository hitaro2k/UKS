"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.form = form;

function form() {
  var deliveryLabel1 = document.querySelector("#checkbox1");
  var deliveryCheck1 = document.querySelector("#form-check1");
  var deliveryLabel2 = document.querySelector("#checkbox2");
  var deliveryCheck2 = document.querySelector("#form-check2");
  deliveryLabel1.addEventListener("click", function () {
    deliveryCheck1.style.display = "block";
  });
  deliveryLabel2.addEventListener("click", function () {
    deliveryCheck2.style.display = "block";
  });
}

form();