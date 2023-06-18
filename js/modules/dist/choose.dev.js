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
    var bodyWrapper = document.querySelector(".body-wrapper");
    var engineItemsBlock = document.querySelector(".full-screen__body__engine-items");
    var engineWrapper = document.querySelector(".engine-wrapper");
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
    var markSelected = document.querySelector(".mark-selected");
    var yearSelected = document.querySelector(".year-selected");
    var modelSelected = document.querySelector(".model-selected");
    var bodySelected = document.querySelector(".body-selected");
    var engineSelected = document.querySelector(".engine-selected");

    function searchAuto() {
      function returnAutoJson(item) {
        var suitableAuto = {
          mark: "",
          year: "",
          model: "",
          body: "",
          engine: ""
        };
        var itemAttr = null;
        itemsWrapper.forEach(function (item) {
          item.removeEventListener("click", handleMark);
          item.addEventListener("click", handleMark);
        });

        function handleMark() {
          itemAttr = this.getAttribute("data-mark");
          suitableAuto.mark = itemAttr;
          markWrapper.style.display = "none";
          selectBlock.style.display = "flex";
          var markItemSrc = this.querySelector(".mark-item").getAttribute("src");
          var markItem = "  \n          <div class=\"item-wrapper\" data-mark = \"".concat(itemAttr, "\">\n              <img class=\"mark-item\" src=\"").concat(markItemSrc, "\" alt=\"\">\n          </div>\n          ");
          backMarkBtn.style.display = "block";
          markBtn.style.display = "block";
          markSelected.addEventListener("click", function () {
            markItemsBlock.style.display = "flex";
            markBlock.style.display = "flex";
            suitableAuto.mark = "";
            yearItemsBlock.style.display = "none";
            modelItemsBlock.style.display = "none";
            bodyItemsBlock.style.display = "none";
            engineItemsBlock.style.display = "none";
            yearBlock.style.display = "none";
            modelBlock.style.display = "none";
            bodyBlock.style.display = "none";
            engineBlock.style.display = "none";
            markSelected.classList.add("active");
          });
          markSelected.insertAdjacentHTML("beforeend", markItem);
          markBlock.insertAdjacentHTML("beforeend", markItem);
          markBtn.addEventListener("click", handleMarkBtnClick);
          backMarkBtn.addEventListener("click", handleBackMarkBtnClick);
        }

        function handleBackMarkBtnClick() {
          console.log(suitableAuto);
          markWrapper.style.display = "block";
          selectBlock.style.display = "none";
          markBlock.innerHTML = "";
          suitableAuto.mark = "";
          markSelected.innerHTML = "";
        }

        function handleMarkBtnClick() {
          yearItemsBlock.style.display = "flex";
          markItemsBlock.style.display = "none";
          yearBlock.style.display = "flex";
          console.log(suitableAuto);
        }

        yearItems.forEach(function (item) {
          item.addEventListener("click", function () {
            var yearValue = item.textContent;
            suitableAuto.year = yearValue;
            yearBtn.style.display = "block";
            backYearBtn.style.display = "block";
            var yearItemSrc = "<p class=\"year__text-select\">".concat(yearValue, "</p>");
            yearSelected.insertAdjacentHTML("beforeend", yearItemSrc);
            yearBlock.insertAdjacentHTML("beforeend", yearItemSrc);
            yearBlock.style.display = "flex";
            yearSelected.addEventListener("click", function () {
              yearItemsBlock.style.display = "flex";
              yearBlock.style.display = "flex";
              suitableAuto.year = "";
              markItemsBlock.style.display = "none";
              modelItemsBlock.style.display = "none";
              bodyItemsBlock.style.display = "none";
              engineItemsBlock.style.display = "none";
              markBlock.style.display = "none";
              modelBlock.style.display = "none";
              bodyBlock.style.display = "none";
              engineBlock.style.display = "none";
              console.log(suitableAuto);
            });
            selectYear.style.display = "flex";
            yearWrapper.style.display = "none";
            backYearBtn.addEventListener("click", handleBackYearBtnClick);
          });
        });
        yearBtn.addEventListener("click", handleYearBtnClick);

        function handleBackYearBtnClick() {
          yearWrapper.style.display = "flex";
          yearBlock.style.display = "none";
          yearBlock.innerHTML = "";
          yearBtn.style.display = "none";
          backYearBtn.style.display = "none";
          suitableAuto.year = "";
          selectYear.style.display = "none";
          yearSelected.innerHTML = "";
          modelWrapper.innerHTML = "";
          console.log(suitableAuto);
        }

        function handleYearBtnClick() {
          yearItemsBlock.style.display = "none";
          modelItemsBlock.style.display = "flex";
          modelBlock.style.display = "flex";
          console.log(suitableAuto);
          returnModel();
        }

        function returnModel() {
          return regeneratorRuntime.async(function returnModel$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
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
                            var modelItem = "<p class=\"model-item\">".concat(car, "</p>");
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
                  selectModel();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          });
        }

        function selectModel() {
          var modelItems = document.querySelectorAll(".model-item");
          modelItems.forEach(function (item) {
            item.removeEventListener("click", handleModelItemClick);
            item.addEventListener("click", handleModelItemClick);
          });
        }

        function handleModelItemClick() {
          var userSelectedModel = "<p class=\"model-item__selected\">".concat(this.textContent, "</p>");
          suitableAuto.model = this.textContent;
          modelBtn.style.display = "block";
          backModelBtn.style.display = "block";
          modelSelected.insertAdjacentHTML("beforeend", userSelectedModel);
          modelBlock.insertAdjacentHTML("beforeend", userSelectedModel);
          modelSelected.addEventListener("click", function () {
            modelItemsBlock.style.display = "flex";
            modelBlock.style.display = "flex";
            suitableAuto.model = "";
            yearItemsBlock.style.display = "none";
            bodyItemsBlock.style.display = "none";
            engineItemsBlock.style.display = "none";
            yearBlock.style.display = "none";
            bodyBlock.style.display = "none";
            engineBlock.style.display = "none";
            console.log(suitableAuto);
          });
          modelBlock.style.display = "flex";
          modelWrapper.style.display = "none";
          selectModelBlock.style.display = "flex";
          modelBtn.addEventListener("click", handleModelBtnClick);
          backModelBtn.addEventListener("click", handleBackModelBtnClick);
        }

        function handleModelBtnClick() {
          modelItemsBlock.style.display = "none";
          bodyItemsBlock.style.display = "flex";
          bodyBlock.style.display = "flex";
          console.log(suitableAuto);
          returnBody();
        }

        function handleBackModelBtnClick() {
          modelWrapper.style.display = "flex";
          bodyWrapper.innerHTML = "";
          modelBlock.style.display = "none";
          modelBlock.innerHTML = "";
          suitableAuto.model = "";
          modelBtn.style.display = "none";
          backModelBtn.style.display = "none";
          selectModelBlock.style.display = "none";
          modelSelected.innerHTML = "";
        }

        function returnBody() {
          return regeneratorRuntime.async(function returnBody$(_context2) {
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

                      if (suitableAuto.model in selectedCar) {
                        var result = selectedCar[suitableAuto.model];
                        result.forEach(function (item) {
                          var bodyItem = "<p class=\"body-item\">".concat(item.body, "</p>");
                          bodyWrapper.insertAdjacentHTML("beforeend", bodyItem);
                        });
                      }
                    }
                  }));

                case 2:
                  selectBody();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          });
        }

        function selectBody() {
          var bodyItem = document.querySelectorAll(".body-item");
          bodyItem.forEach(function (item) {
            item.removeEventListener("click", handleBodyItemClick);
            item.addEventListener("click", handleBodyItemClick);
          });
        }

        function handleBodyItemClick() {
          var bodyText = this.textContent;
          suitableAuto.body = bodyText;
          bodyBtn.style.display = "block";
          backBodyBtn.style.display = "block";
          bodyWrapper.style.display = "none";
          bodyBlock.style.display = "flex";
          bodySelected.addEventListener("click", function () {
            bodyItemsBlock.style.display = "flex";
            bodyBlock.style.display = "flex";
            suitableAuto.body = "";
            markItemsBlock.style.display = "none";
            modelItemsBlock.style.display = "none";
            yearItemsBlock.style.display = "none";
            engineItemsBlock.style.display = "none";
            markBlock.style.display = "none";
            yearBlock.style.display = "none";
            modelBlock.style.display = "none";
            engineBlock.style.display = "none";
          });
          console.log(suitableAuto);
          var bodyItemSrc = "\n                      <p class=\"body-item\">".concat(bodyText, "</p>\n                      ");
          bodySelected.insertAdjacentHTML("beforeend", bodyItemSrc);
          bodyBlock.insertAdjacentHTML("beforeend", bodyItemSrc);
          bodyBtn.addEventListener("click", handleBodyBtnClick);
          backBodyBtn.addEventListener("click", handleBackBodyBtnClick);
        }

        function handleBodyBtnClick() {
          bodyItemsBlock.style.display = "none";
          engineItemsBlock.style.display = "flex";
          engineBlock.style.display = "flex";
          console.log(suitableAuto);
          returnEngine();
        }

        function handleBackBodyBtnClick() {
          bodyWrapper.style.display = "flex";
          bodyBlock.style.display = "none";
          bodyBlock.innerHTML = "";
          bodyBtn.style.display = "none";
          backBodyBtn.style.display = "none";
          bodySelected.innerHTML = "";
          engineWrapper.innerHTML = "";
        }

        function returnEngine() {
          return regeneratorRuntime.async(function returnEngine$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return regeneratorRuntime.awrap(fetch("js/auto.json").then(function (res) {
                    return res.json();
                  }).then(function (data) {
                    var findMark = data.find(function (item) {
                      return item[suitableAuto.mark];
                    });

                    if (findMark) {
                      var selectedCar = findMark[suitableAuto.mark];

                      if (suitableAuto.model in selectedCar) {
                        var result = selectedCar[suitableAuto.model];
                        result.forEach(function (item) {
                          var engineType = "\n                    <ul class=\"type-engine\">\n                      <li class=\"type-engine\">".concat(item.fuel, ":</li>\n                      <li class=\"engine-item\">").concat(item.engine, "</li>\n                    </ul>\n              \n                    ");
                          engineWrapper.insertAdjacentHTML("beforeend", engineType);
                        });
                      }
                    }
                  }));

                case 2:
                  selectEngine();

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          });
        }

        function selectEngine() {
          var engineItems = document.querySelectorAll(".engine-item");
          engineItems.forEach(function (item) {
            item.removeEventListener("click", handleEngineItemClick);
            item.addEventListener("click", handleEngineItemClick);
          });
        }

        function handleEngineItemClick() {
          var engineText = this.textContent;
          suitableAuto.engine = engineText;
          engineBtn.style.display = "block";
          backEngineBtn.style.display = "block";
          engineWrapper.style.display = "none";
          engineBlock.style.display = "flex";
          engineSelected.addEventListener("click", function () {
            engineItemsBlock.style.display = "flex";
            engineBlock.style.display = "flex";
            suitableAuto.engine = "";
            markItemsBlock.style.display = "none";
            modelItemsBlock.style.display = "none";
            yearItemsBlock.style.display = "none";
            bodyItemsBlock.style.display = "none";
            markBlock.style.display = "none";
            yearBlock.style.display = "none";
            bodyBlock.style.display = "none";
            modelBlock.style.display = "none";
          });
          var engineItemSrc = "\n                      <p class=\"engine-item\">".concat(engineText, "</p>\n                      ");
          engineSelected.insertAdjacentHTML("beforeend", engineItemSrc);
          engineBlock.insertAdjacentHTML("beforeend", engineItemSrc);
          engineBtn.addEventListener("click", handleEngineBtnClick);
          backEngineBtn.addEventListener("click", handleBackEngineBtnClick);
        }

        function handleEngineBtnClick() {
          returnCar();
        }

        function handleBackEngineBtnClick() {
          engineWrapper.style.display = "flex";
          engineBlock.style.display = "none";
          engineBlock.innerHTML = "";
          suitableAuto.engine = "";
          engineBtn.style.display = "none";
          backEngineBtn.style.display = "none";
          engineSelected.innerHTML = "";
        }

        function returnCar() {
          return regeneratorRuntime.async(function returnCar$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return regeneratorRuntime.awrap(fetch("js/auto.json").then(function (res) {
                    return res.json();
                  }).then(function (data) {
                    var findMark = data.find(function (item) {
                      return item[suitableAuto.mark];
                    });

                    if (findMark) {
                      var selectedCar = findMark[suitableAuto.mark];

                      if (suitableAuto.model in selectedCar) {
                        var result = selectedCar[suitableAuto.model];
                        result.forEach(function (item) {
                          if (item.year == suitableAuto.year) {
                            window.location.href = item.redirect;
                          }
                        });
                      }
                    }
                  }));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          });
        }

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

      function returnAuto() {}

      returnAutoJson();
      returnAuto();
    }

    searchAuto();
  });
};

chooseProduct();
var _default = chooseProduct;
exports["default"] = _default;