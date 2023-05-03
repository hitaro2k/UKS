"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countScroll = countScroll;

function countScroll() {
  var calcScrollValue = function calcScrollValue() {
    var scrollProgress = document.getElementById("progress");
    var progressValue = document.getElementById("progress-value");
    var pos = document.documentElement.scrollTop;
    var calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollValue = Math.round(pos * 100 / calcHeight);

    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", function () {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = "conic-gradient(#ffa600 ".concat(scrollValue, "%, #d7d7d7 ").concat(scrollValue, "%)");
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  return countScroll;
}

countScroll();