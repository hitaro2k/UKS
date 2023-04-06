"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.burgerMenu = burgerMenu;
exports.smoothScroll = smoothScroll;
exports.mediaAnim = mediaAnim;
exports.userSearch = userSearch;
exports.showCatalog = showCatalog;
exports.switchTheme = switchTheme;
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
  showCatalog();
  smoothScroll();
};

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

function smoothScroll() {
  var links = document.querySelectorAll("a[href*='#']");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var link = _step.value;
      link.addEventListener("click", function (event) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");

        if (!menu.classList.contains("active")) {
          menuBtn.classList.remove("fixed");
          menuBtn.classList.remove("left");
        }

        event.preventDefault();
        var blockID = link.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
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

function userSearch() {
  var btnSearch = document.querySelector(".button-search");
  var closeSearch = document.querySelector(".close-search");
  var searchStroke = document.querySelector(".search-stroke");
  var searchStrokeInput = document.querySelector(".search-stroke__input");

  btnSearch.onclick = function () {
    searchStroke.classList.add("isactive");
    btnSearch.style.display = "none";
  };

  searchStroke.ondblclick = function () {
    searchStroke.classList.remove("isactive");
    btnSearch.style.display = "block";
  };

  searchStrokeInput.addEventListener('input', function () {
    if (searchStrokeInput.value !== '') {
      closeSearch.style.display = 'none';
    } else {
      closeSearch.style.display = 'block';
    }
  });
  return userSearch;
}

function showCatalog() {
  menuItem = document.querySelectorAll("#catalog");
  var catalog = document.querySelector(".catalog-menu");
  var closeCatalog = document.querySelector(".catalog__close-btn");
  menuItem.forEach(function (item) {
    item.onclick = function () {
      catalog.classList.add("catalog-menu__active");

      if (catalog.classList.contains("catalog-menu__active")) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.classList.remove("fixed");
        menuBtn.classList.remove("left");
      }
    };
  });

  closeCatalog.onclick = function () {
    catalog.classList.remove("catalog-menu__active");
  };

  return showCatalog;
}

function switchTheme() {}

animation();
var _default = animation;
exports["default"] = _default;