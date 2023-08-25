"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelProfile = panelProfile;
exports.setProfile = setProfile;

function panelProfile() {
  var listItem = document.querySelectorAll(".list-item");
  var spanItem = document.querySelectorAll(".span-header");
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
}

panelProfile();

function setProfile() {
  document.addEventListener("DOMContentLoaded", function () {
    var resetProfile = document.querySelector(".reset-profile");
    var formReset = document.querySelector(".popup__set-profile");
    var closeForm = document.querySelector(".close-popup-reset");
    console.log(closeForm);

    resetProfile.onclick = function () {
      formReset.style.display = "flex";
    };

    closeForm.onclick = function () {
      formReset.style.display = "none";
    };
  });
}

setProfile();