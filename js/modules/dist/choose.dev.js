"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var chooseProduct = function chooseProduct() {
  document.addEventListener("DOMContentLoaded", function () {
    var markWrapper = document.querySelector(".mark-wrapper");
    var itemsWrapper = document.querySelectorAll(".item-wrapper");
    var selectBlock = document.querySelector(".selected-mark");
    var markItemsBlock = document.querySelector(".full-screen__body__mark-items");
    var yearItemsBlock = document.querySelector(".full-screen__body__year-items");
    var selectYear = document.querySelector(".selected-year");
    var yearItems = document.querySelectorAll(".year-item");
    var yearWrapper = document.querySelector(".year-columns");
    var modelItemsBlock = document.querySelector(".full-screen__body__model-items");
    var modelWrapper = document.querySelector(".model-wrapper");
    var bodyItemsBlock = document.querySelector(".full-screen__body__body-items");
    var bodyItems = document.querySelectorAll(".body-item");
    var bodyWrapper = document.querySelector(".body-wrapper");
    var engineItemsBlock = document.querySelector(".full-screen__body__engine-items");
    var engineWrapper = document.querySelector(".engine-wrapper");
    var engineItems = document.querySelectorAll(".engine-item");
    /* -------------------------------------------------------------------------- */

    /*                                   Buttons                                  */

    /* -------------------------------------------------------------------------- */

    var markBtn = document.querySelector(".mark-items__markbtn");
    var backMarkBtn = document.getElementById("to-mark");
    var yearBtn = document.querySelector(".mark-items__yearbtn");
    var backYearBtn = document.getElementById("to-year");
    var backModelBtn = document.getElementById("to-model");
    var modelBtn = document.querySelector(".mark-items__autobtn");
    var bodyBtn = document.querySelector(".mark-items__bodybtn");
    var backBodyBtn = document.getElementById("to-body");
    var engineBtn = document.querySelector(".mark-items__enginebtn");
    var backEngineBtn = document.getElementById("to-engine");
    var allBtn = [markBtn, yearBtn, modelBtn, bodyBtn, backMarkBtn, backModelBtn, backBodyBtn];
    /* -------------------------------------------------------------------------- */

    /*                                    Block                                   */

    /* -------------------------------------------------------------------------- */

    var markBlock = document.querySelector(".select-item");
    var yearBlock = document.querySelector(".selected-item__year");
    var modelBlock = document.querySelector(".selected-item__model");
    var bodyBlock = document.querySelector(".selected-item__body");
    var engineBlock = document.querySelector(".selected-item__engine");
    var selectModelBlock = document.querySelector(".selected-model");

    function searchAuto() {
      function returnAutoJSon(item) {
        var suitableAuto = {
          mark: "",
          year: "",
          model: "",
          body: "",
          engine: ""
        };
        var itemAttr = null;
        itemsWrapper.forEach(function (item) {
          item.addEventListener("click", function () {
            itemAttr = item.getAttribute("data-mark");
            suitableAuto.mark = itemAttr;
            item.style.border = "2px solid orange";
            markWrapper.style.display = "none";
            selectBlock.style.display = "flex";
            var markItemSrc = item.querySelector(".mark-item").getAttribute("src");
            var markItem = "  \n            <div class=\"item-wrapper\" data-mark = \"".concat(itemAttr, "\">\n                <img class=\"mark-item\" src=\"").concat(markItemSrc, "\" alt=\"\">\n            </div>\n            "); // roadMarkSrc = roadMapMark.document.querySelector(".map__image").getAttribute("src")

            backMarkBtn.style.display = "block";
            markBtn.style.display = "block";
            markBtn.addEventListener("click", function () {
              yearItemsBlock.style.display = "flex";
              markItemsBlock.style.display = "none";
            });
            backMarkBtn.addEventListener("click", function () {
              item.style.border = "2px solid gray";
              markWrapper.style.display = "block";
              selectBlock.style.display = "none";
              markBlock.innerHTML = "";
              suitableAuto.mark = "";
            });
            markBlock.insertAdjacentHTML("beforeend", markItem);
          });
        });
        yearItems.forEach(function (item) {
          item.addEventListener("click", function () {
            var yearValue = item.textContent;
            suitableAuto.year = yearValue;
            yearBtn.style.display = "block";
            backYearBtn.style.display = "block";
            var yearItemSrc = "\n                          <p class=\"year__text-select\">".concat(yearValue, "</p>\n                          ");
            yearBlock.insertAdjacentHTML("beforeend", yearItemSrc);
            yearBlock.style.display = "flex";
            selectYear.style.display = "flex";
            yearWrapper.style.display = "none";
            backYearBtn.addEventListener("click", function () {
              yearWrapper.style.display = "flex";
              yearBlock.style.display = "none";
              yearBlock.innerHTML = "";
              yearBtn.style.display = "none";
              backYearBtn.style.display = "none";
              suitableAuto.year = "";
              selectYear.style.display = "none";
            });
            yearBtn.addEventListener("click", function _callee() {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      yearItemsBlock.style.display = "none";
                      modelItemsBlock.style.display = "flex";
                      returnModel();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            });
          });
        });

        function returnModel() {
          var resAuto;
          return regeneratorRuntime.async(function returnModel$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return regeneratorRuntime.awrap(fetch("js/auto.json").then(function (res) {
                    return res.json();
                  }).then(function (data) {
                    var findMark = data.find(function (item) {
                      return item[suitableAuto.mark];
                    });

                    if (findMark) {
                      var selectedCar = findMark[suitableAuto.mark];

                      var _loop = function _loop(car) {
                        selectedCar[car].forEach(function (item) {
                          if (item.year == suitableAuto.year) {
                            var modelItem = "<p class = \"model-item\"> ".concat(car, "</p>");
                            modelWrapper.insertAdjacentHTML("beforeend", modelItem);
                          }
                        });
                      };

                      for (var car in selectedCar) {
                        _loop(car);
                      }
                    }
                  }));

                case 2:
                  resAuto = _context2.sent;
                  selectModel();

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          });
        }

        function selectModel() {
          var modelItems = document.querySelectorAll(".model-item");
          console.log(modelItems);
          modelItems.forEach(function (item) {
            item.addEventListener("click", function () {
              var userSelectedModel = "<p class = \"model-item__selected\"> ".concat(item.textContent, "</p>");
              suitableAuto.model = item.textContent;
              modelBtn.style.display = "block";
              backModelBtn.style.display = "block";
              modelBlock.insertAdjacentHTML("beforeend", userSelectedModel);
              modelBlock.style.display = "flex";
              modelWrapper.style.display = "none";
              selectModelBlock.style.display = 'flex';
              modelBtn.addEventListener("click", function () {
                modelItemsBlock.style.display = "none";
                bodyItemsBlock.style.display = "flex";
              });
              backModelBtn.addEventListener("click", function () {
                modelWrapper.style.display = "flex";
                modelBlock.style.display = "none";
                modelBlock.innerHTML = "";
                suitableAuto.model = "";
                modelBtn.style.display = "none";
                backModelBtn.style.display = "none";
                selectModelBlock.style.display = 'none';
              });
            });
          });
        }

        bodyItems.forEach(function (item) {
          item.addEventListener("click", function () {
            var bodyAttr = item.getAttribute("data-body");
            suitableAuto.body = bodyAttr;
            var bodyText = item.textContent;
            bodyBtn.style.display = "block";
            backBodyBtn.style.display = "block";
            bodyWrapper.style.display = "none";
            bodyBlock.style.display = "flex";
            var bodyItemSrc = "\n                        <p class=\"body-item\">".concat(bodyText, "</p>\n                        ");
            bodyBlock.insertAdjacentHTML("beforeend", bodyItemSrc);
            bodyBtn.addEventListener("click", function () {
              bodyItemsBlock.style.display = "none";
              engineItemsBlock.style.display = "flex";
            });
            backBodyBtn.addEventListener("click", function () {
              bodyWrapper.style.display = "flex";
              bodyBlock.style.display = "none";
              bodyBlock.innerHTML = "";
              suitableAuto.model = "";
              bodyBtn.style.display = "none";
              backBodyBtn.style.display = "none";
            });
          });
        });
        engineItems.forEach(function (item) {
          item.addEventListener("click", function () {
            item.addEventListener("click", function () {
              var engineText = item.textContent;
              suitableAuto.engine = engineText;
              engineBtn.style.display = "block";
              backEngineBtn.style.display = "block";
              engineWrapper.style.display = "none";
              engineBlock.style.display = "flex";
              var engineItemSrc = "\n                          <p class=\"engine-item\">".concat(engineText, "</p>\n                          ");
              engineBlock.insertAdjacentHTML("beforeend", engineItemSrc);
              engineBtn.addEventListener("click", function () {
                engineItemsBlock.style.display = "none";
                engineItemsBlock.style.display = "flex";
              });
              backEngineBtn.addEventListener("click", function () {
                engineWrapper.style.display = "flex";
                engineBlock.style.display = "none";
                engineBlock.innerHTML = "";
                suitableAuto.engine = "";
                engineBtn.style.display = "none";
                backEngineBtn.style.display = "none";
              });
            });
          });
        });
        allBtn.forEach(function (item) {
          item.addEventListener("mouseover", function () {
            this.style.backgroundColor = "white";
            this.style.color = "#ff5e00";
            this.style.fontWeight = "600";
          });
          item.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#d28711";
            this.style.color = "white";
            this.style.fontWeight = "400";
          });
        });
      }

      returnAutoJSon();
    }

    searchAuto();
  });
};

chooseProduct();
var _default = chooseProduct;
exports["default"] = _default;