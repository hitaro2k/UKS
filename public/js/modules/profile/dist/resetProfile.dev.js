"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeEditer = closeEditer;

function closeEditer() {
  var closeBtn = document.querySelector("#close-editor");

  closeBtn.onclick = function () {
    window.location.href = "/profile";
  };
}

closeEditer();