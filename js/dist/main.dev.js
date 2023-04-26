"use strict"; // import chooseProduct from "../modules/choose.js"

var _animation = _interopRequireDefault(require("../modules/animation.js"));

var _views = require("../modules/views.js");

var _scrollIcon = require("../modules/scrollIcon.js");

var _renderCatalog = require("../modules/renderCatalog.js");

var _choose = _interopRequireDefault(require("../modules/choose.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener("DOMContentLoaded", function () {
  function validate() {
    var btnSubmit = document.querySelector(".form-footer__submit");

    btnSubmit.onmouseenter = function () {
      btnSubmit.style.color = "white";
      btnSubmit.style.background = "black";
      btnSubmit.style.border = "1px solid #ffffff69";
      btnSubmit.style.transition = "1s";
    };

    btnSubmit.onmouseleave = function () {
      btnSubmit.style.color = "black";
      btnSubmit.style.background = "white";
      btnSubmit.style.border = "none";
      btnSubmit.style.transition = "1s";
    };

    return validate;
  }

  validate();
});