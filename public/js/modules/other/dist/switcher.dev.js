"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switcher = switcher;

function switcher() {
  try {
    var showSlide = function showSlide(index) {
      slides.forEach(function (slide, i) {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
      videos.forEach(function (video, i) {
        if (i === index) {
          video.style.display = 'block';
        } else {
          video.style.display = 'none';
        }
      });
      currentSlideSpan.textContent = index + 1;
    };

    var btnDecoration = function btnDecoration() {
      moreBtnChevrolet.onmouseenter = function () {
        moreBtnChevrolet.style.background = "#ffae19b3";
        moreBtnChevrolet.style.transition = "1s";
        btnLine.forEach(function (item) {
          item.style.width = "65px";
          item.style.marginRight = "5" + "px";
          item.style.transition = "1s";
        });
      };

      moreBtnChevrolet.onmouseleave = function () {
        moreBtnChevrolet.style.background = "#ffae194f";
        moreBtnChevrolet.style.transition = "1s";
        btnLine.forEach(function (item) {
          item.style.width = "50px";
          item.style.marginRight = "20" + "px";
          item.style.transition = "1s";
        });
      };

      moreBtnDodge.onmouseenter = function () {
        moreBtnDodge.style.background = "#a91313e7";
        moreBtnDodge.style.transition = "1s";
        btnLine.forEach(function (item) {
          item.style.width = "65px";
          item.style.marginRight = "5" + "px";
          item.style.transition = "1s";
        });
      };

      moreBtnDodge.onmouseleave = function () {
        moreBtnDodge.style.background = "#ff1f1f54";
        moreBtnDodge.style.transition = "1s";
        btnLine.forEach(function (item) {
          item.style.width = "50px";
          item.style.marginRight = "20" + "px";
          item.style.transition = "1s";
        });
      };

      moreBtnFord.onmouseenter = function () {
        moreBtnFord.style.background = "#050dfdfb";
        moreBtnFord.style.transition = "1s";
        btnLine.forEach(function (item) {
          item.style.width = "65px";
          item.style.marginRight = "5" + "px";
          item.style.transition = "1s";
        });
      };

      moreBtnFord.onmouseleave = function () {
        moreBtnFord.style.background = "#050dfd50";
        moreBtnFord.style.transition = "1s";
        btnLine.forEach(function (item) {
          item.style.width = "50px";
          item.style.marginRight = "20" + "px";
          item.style.transition = "1s";
        });
      };
    };

    var contentSwitcher = document.querySelectorAll(".content__img");
    contentSwitcher.forEach(function (item) {
      item.onmouseenter = function () {
        var sideImg = item.querySelector("#img_side");
        var frontImg = item.querySelector("#img_front");

        if (sideImg.classList.contains('active-car')) {
          sideImg.classList.remove("active-car");
          sideImg.classList.add("unactive-car");
          frontImg.classList.add("active-car");
          frontImg.classList.remove("unactive-car");
        } else {
          sideImg.classList.add("active-car");
          sideImg.classList.remove("unactive-car");
          frontImg.classList.remove("active-car");
          frontImg.classList.add("unactive-car");
        }
      };
    });
    var markImg = document.querySelectorAll("#mark-img");
    markImg.forEach(function (item) {
      item.onmouseenter = function () {
        item.style.width = "40" + "%";
        item.style.transition = "1s";
      };

      item.onmouseleave = function () {
        item.style.width = "30" + "%";
        item.style.transition = "1s";
      };
    });
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var slides = document.querySelectorAll('.container__switcher');
    var videos = document.querySelectorAll('.full-screen__bg');
    var currentSlideSpan = document.getElementById('currentSlide');
    var slideOrder = ['chevrolet', 'dodge', 'ford'];
    var currentSlideIndex = 0;
    prevButton.addEventListener('click', function () {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      showSlide(currentSlideIndex);
    });
    nextButton.addEventListener('click', function () {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    });
    showSlide(currentSlideIndex);
    var moreBtnChevrolet = document.querySelector('#chevrolet-btn');
    var moreBtnDodge = document.querySelector('#dodge-btn');
    var moreBtnFord = document.querySelector('#ford-btn');
    var btnLine = document.querySelectorAll("#line");
    btnDecoration();
  } catch (_unused) {}
}

switcher();