"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.burgerMenu = burgerMenu;
exports.mediaAnim = mediaAnim;
exports.payment = payment;
exports.userSearch = userSearch;
exports.progressLine = progressLine;
exports["default"] = void 0;
var menuBtn;
var menu;
var cartMenu;
var menuItem;
var menuBtnSpan;

var animation = function animation() {
  userSearch();
  mediaAnim();
  burgerMenu();
  payment();
  progressLine();
};

var catalog = document.querySelector(".catalog-menu");

function burgerMenu() {
  menuBtn = document.querySelector('.menu-btn');
  menu = document.querySelector(".menu--burger-list");
  cartMenu = document.querySelector(".cart-menu");
  var documentHTML = document.querySelector("html");
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menu.style.display = "flex";
    cartMenu.classList.remove("cart-active");
    documentHTML.style.position = "static";

    if (menuBtn.classList.contains("active")) {
      menuBtn.classList.add("fixed");
      menuBtn.classList.add("left");
    } else {
      menuBtn.classList.remove("fixed");
      menuBtn.classList.remove("left");
    }
  });
  return burgerMenu;
}

function mediaAnim() {
  var wrapperIconTg = document.querySelector("#telegram");

  wrapperIconTg.onmouseenter = function () {
    wrapperIconTg.style.transition = "1s";
    wrapperIconTg.style.width = "100px";
    iconTg.style.fill = "#0085FF";
  };

  wrapperIconTg.onmouseleave = function () {
    wrapperIconTg.style.transition = "1s";
    wrapperIconTg.style.width = "40px";
    iconTg.style.fill = "black";
  };

  var wrapperIconFacebook = document.querySelector(".svg-logo__wrapper-facebook");

  wrapperIconFacebook.onmouseenter = function () {
    wrapperIconFacebook.style.width = "100px";
    wrapperIconFacebook.style.transition = "1s";
    iconFacebook.style.fill = "#0057FF";
  };

  wrapperIconFacebook.onmouseleave = function () {
    wrapperIconFacebook.style.width = "40px";
    wrapperIconFacebook.style.transition = "1s";
    iconFacebook.style.fill = "black";
  };

  var wrapperIconInst = document.querySelector(".svg-logo__wrapper-inst");

  wrapperIconInst.onmouseenter = function () {
    wrapperIconInst.style.width = "100px";
    wrapperIconInst.style.transition = "1s";

    for (var i = 0; i < iconInst.length; i++) {
      iconInst[i].style.fill = "#3049CA";
    }
  };

  wrapperIconInst.onmouseleave = function () {
    wrapperIconInst.style.width = "40px";
    wrapperIconInst.style.transition = "1s";

    for (var i = 0; i < iconInst.length; i++) {
      iconInst[i].style.fill = "black";
    }
  };

  var iconTg = document.querySelector(".tg-logo__path");
  var iconFacebook = document.querySelector(".facebook-logo__path");
  var iconInst = document.querySelectorAll(".inst-logo__path");
  return mediaAnim;
}

function payment() {
  document.getElementById("imagePreview").addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });
  document.getElementById("fileInput").addEventListener("change", function (event) {
    var file = event.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById("imagePreview").style.display = "block";
        document.getElementById("imagePreview").src = e.target.result;
        document.querySelector(".image-input").style.display = "none";
      };

      reader.readAsDataURL(file);
    }
  });
}

function userSearch() {
  var btnSearch = document.querySelector(".button-search");
  var closeSearch = document.querySelector(".close-search");
  var searchStroke = document.querySelector(".search-stroke__container");
  var searchStrokeInput = document.querySelector(".search-input");
  var searchList = document.querySelector(".search-stroke__list");
  var header = document.querySelector(".full-screen__header__container ");
  btnSearch.addEventListener("click", function () {
    searchStroke.classList.add("search-stroke__active");
    btnSearch.style.display = "none";
    header.style.display = 'none';
  });

  searchStroke.ondblclick = function () {
    searchStroke.classList.remove("search-stroke__active");
    btnSearch.style.display = "block";
    searchList.style.display = "none";
    header.style.display = 'flex';
  };

  searchStrokeInput.addEventListener('input', function () {
    if (searchStrokeInput.value !== '') {
      closeSearch.style.display = 'none';
      searchList.style.display = "flex";
    } else {
      closeSearch.style.display = 'block';
      searchList.style.display = "none";
    }
  });
  return userSearch;
}

function progressLine() {
  function startTimer(duration, display) {
    var timer = duration;
    var timerBar = document.querySelector(".timer-bar");
    var width = 100;
    var timerInterval = setInterval(function () {
      timer--;
      width = timer / duration * 100;
      timerBar.style.width = width + "%";
      timerBar.style.borderRadius = "0" + "px";

      if (timer <= 0) {
        clearInterval(timerInterval);
        document.querySelector(".succes__popup").classList.remove("active-popup");
      }
    }, 1000);
    timerBar.addEventListener("animationend", function () {
      document.querySelector(".succes__popup").classList.remove("active-popup");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var timerContainer = document.querySelector(".succes__popup");
    document.querySelector(".send-data").addEventListener("click", function () {
      timerContainer.classList.add("active-popup");
      startTimer(7, timerContainer);
    });
  });
} // export function showCatalog() {
//     menuItem = document.querySelectorAll('.catalog')
//     let closeCatalog = document.querySelector(".catalog__close-btn")
//     menuItem.forEach((item) => {
//         item.addEventListener("click" ,  () => {
//             catalog.classList.add("catalog-menu__active")
//             if (catalog.classList.contains("catalog-menu__active")) {
//                 menu.classList.remove('active');
//                 menuBtn.classList.remove('active');
//                 menuBtn.classList.remove("fixed")
//                 menuBtn.classList.remove("left")
//             }
//         })
//     })
//     closeCatalog.onclick = () => {
//         catalog.classList.remove("catalog-menu__active")
//     }
//     return showCatalog
// }


animation();
var _default = animation;
exports["default"] = _default;