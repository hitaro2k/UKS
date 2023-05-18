"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = select;

function select() {
  var mark = [];
  var year = [];
  var model = [];
  var engine = [];
  var markItems = document.querySelector(".full-screen__body__mark-items");
  var itemsWrapper = document.querySelectorAll('.item-wrapper');
  var markBtn = document.querySelector('.mark-items__markbtn');
  var yearItems = document.querySelector(".full-screen__body__year-items");
  var marksBtn = document.querySelector(".mark-items__markbtn");
  var markListItems = document.querySelectorAll(".year-items");
  var selectModel = document.querySelector(".select-model");
  var backToMark = document.querySelector(".back"); // const modelBtn = document.querySelector(".")

  itemsWrapper.forEach(function (element) {
    element.addEventListener("click", function () {
      var markitem = element.getAttribute('data-mark');
      var index = mark.indexOf(markitem);

      if (index === -1) {
        mark.push(markitem);
        element.classList.add('selected');
      } else {
        mark.splice(index, 1);
        element.classList.remove('selected');
      }

      if (mark.length > 0) {
        markBtn.style.display = 'block';
      } else {
        markBtn.style.display = 'none';
      }

      console.log(mark);
    });
  });
}

select();