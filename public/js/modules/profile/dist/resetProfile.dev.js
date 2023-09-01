"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeEditer = closeEditer;
exports.abortDelete = abortDelete;
exports.openDelete = openDelete;

function closeEditer() {
  var closeBtn = document.querySelector("#close-editor");

  closeBtn.onclick = function () {
    window.location.href = "/profile";
  };
}

function abortDelete() {
  var closeBtn = document.querySelector(".button-cancel");

  closeBtn.onclick = function () {
    window.location.href = "/profile/edit";
  };
}

function openDelete() {
  var delBtn = document.querySelector(".btn-del");
  var formDel = document.querySelector(".form-wrapper__delete");

  delBtn.onclick = function () {
    formDel.style.display = "flex";
  };
}

abortDelete();
closeEditer();
openDelete();