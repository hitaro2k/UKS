"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeEditer = closeEditer;
exports.openDelete = openDelete;

function closeEditer() {
  var closeBtn = document.querySelector("#close-editor");

  closeBtn.onclick = function () {
    window.location.href = "/profile";
  };
}

function openDelete() {
  var delBtn = document.querySelector(".btn-del");
  var formDel = document.querySelector(".form-wrapper__delete");

  delBtn.onclick = function () {
    formDel.style.display = "flex";
  };
}

closeEditer();
openDelete();