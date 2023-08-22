"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formRegister = formRegister;
exports.editProfile = editProfile;

function formRegister() {
  var selectRegister = document.querySelector("#register");
  var selectLogin = document.querySelector("#auth");
  var popupRegister = document.querySelector(".popup-register");
  var popupLogin = document.querySelector(".popup-login");
  var closePopup = document.querySelectorAll(".close-popup");
  var popup = document.querySelector(".popup-wrapper");
  var profileIcon = document.querySelector(".button-profile");
  profileIcon.addEventListener("click", function () {
    popup.style.display = "flex";
  });
  closePopup.forEach(function (item) {
    item.onclick = function () {
      popup.style.display = "none";
    };
  });

  selectRegister.onclick = function () {
    popupRegister.style.display = "flex";
    popupLogin.style.display = "none";
  };

  selectLogin.onclick = function () {
    popupLogin.style.display = "flex";
    popupRegister.style.display = "none";
  };
}

formRegister();

function editProfile() {
  var mailEdit = document.querySelector(".mail-edit");
  var mailTitle = document.querySelector(".title-mail");
  mailEdit.addEventListener("click", function () {
    mailTitle.contentEditable = true;
    mailTitle.focus();
  });
}

editProfile();