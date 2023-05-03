"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var chooseProduct = function chooseProduct() {
  document.addEventListener("DOMContentLoaded", function () {
    function arrCompany() {
      var selectedItems = [];
      var selectedYears = [];
      var markItems = document.querySelector(".full-screen__body__mark-items");
      var itemsWrapper = document.querySelectorAll('.item-wrapper');
      var markBtn = document.querySelector('.mark-items__markbtn');
      var yearItems = document.querySelector(".full-screen__body__year-items");
      var marksBtn = document.querySelector(".mark-items__markbtn");
      var markListItems = document.querySelectorAll(".year-items");
      var selectModel = document.querySelector(".select-model");
      var backToMark = document.querySelector(".back");
      itemsWrapper.forEach(function (item) {
        item.addEventListener('click', function () {
          var mark = item.getAttribute('data-mark');
          var index = selectedItems.indexOf(mark);
          console.log(selectedItems);

          if (index === -1) {
            selectedItems.push(mark);
            item.classList.add('selected');
          } else {
            selectedItems.splice(index, 1);
            item.classList.remove('selected');
          }

          if (selectedItems.length > 0) {
            markBtn.style.display = 'block';
          } else {
            markBtn.style.display = 'none';
          }
        });
      });
      markListItems.forEach(function (item) {
        item.addEventListener("click", function () {
          console.log(selectedYears);
          var year = item.getAttribute("data-year");
          var index = selectedYears.indexOf(year);

          if (index === -1) {
            selectedYears.push(year);
            item.classList.add("selected-year");
          } else {
            selectedYears.splice(index, 1);
            item.classList.remove("selected-year");
          }

          if (selectedYears.length > 0) {
            selectModel.style.display = "flex";
          } else {
            selectModel.style.display = "none";
          }
        });
      });
      selectModel.addEventListener('click', function (e) {
        e.preventDefault();
        var result = selectedItems.concat(selectedYears);
      });
      markBtn.addEventListener("click", function () {
        yearItems.style.display = "flex";
        markItems.style.display = "none";
      });
      backToMark.addEventListener("click", function () {
        yearItems.style.display = "none";
        markItems.style.display = "flex";
      });
      marksBtn.addEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
        this.style.color = "#ff5e00";
        this.style.fontWeight = "600";
      });
      marksBtn.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#d28711";
        this.style.color = "white";
        this.style.fontWeight = "400";
      });
    }

    arrCompany();
  });
};

chooseProduct();
var _default = chooseProduct;
exports["default"] = _default;