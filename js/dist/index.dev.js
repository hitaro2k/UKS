"use strict"; // import chooseProduct from "../modules/choose.js"

var _animation = _interopRequireDefault(require("../modules/animation.js"));

var _views = require("../modules/views.js");

var _scrollIcon = require("../modules/scrollIcon.js");

var _search = require("../modules/search.js");

var _renderCatalog = require("../modules/renderCatalog.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.JustValidate;
document.addEventListener("DOMContentLoaded", function () {
  function validate() {
    var validator = new JustValidate('.form-footer', undefined, [{
      key: 'Email is required',
      dict: {
        Spanish: 'Correo electronico es requerido',
        French: "L'e-mail est requis"
      }
    }, {
      key: 'Email is invalid',
      dict: {
        Spanish: 'El correo electrónico es invalido',
        French: 'Le courriel est invalide'
      }
    }]);
    validator.addField('.form-footer__input', [{
      rule: 'required',
      errorMessage: 'Email is required'
    }, {
      rule: 'email',
      errorMessage: 'Email is invalid'
    }]);
    validator.setCurrentLocale('English');
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