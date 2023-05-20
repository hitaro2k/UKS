"use strict";
const chooseProduct = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const markWrapper = document.querySelector(".mark-wrapper");
    const itemsWrapper = document.querySelectorAll(".item-wrapper");
    const selectBlock = document.querySelector(".selected-mark");

    const markItemsBlock = document.querySelector(
      ".full-screen__body__mark-items"
    );
   
    const yearItemsBlock = document.querySelector(
      ".full-screen__body__year-items"
    );
    const yearItems = document.querySelectorAll(".year-item");
    const yearWrapper = document.querySelector(".year-columns");

    const modelItemsBlock = document.querySelector(
      ".full-screen__body__model-items"
    );
    const modelItems = document.querySelectorAll(".model-item");
    const modelWrapper = document.querySelector(".model-wrapper");

    const bodyItemsBlock = document.querySelector(
      ".full-screen__body__body-items"
    );
    const bodyItems = document.querySelectorAll(".body-item");
    const bodyWrapper = document.querySelector(".body-wrapper");

    const engineItemsBlock = document.querySelector(
      ".full-screen__body__engine-items"
    );
    const engineWrapper = document.querySelector(".engine-wrapper")
    const engineItems = document.querySelectorAll(".engine-item");

    /* -------------------------------------------------------------------------- */
    /*                                   Buttons                                  */
    /* -------------------------------------------------------------------------- */
    const markBtn = document.querySelector(".mark-items__markbtn");
    const backMarkBtn = document.getElementById("to-mark");
    const yearBtn = document.querySelector(".mark-items__yearbtn");
    const backYearBtn = document.getElementById("to-year");
    const backModelBtn = document.getElementById("to-model");
    const modelBtn = document.querySelector(".mark-items__autobtn");
    const bodyBtn = document.querySelector(".mark-items__bodybtn");
    const backBodyBtn = document.getElementById("to-body");
    const engineBtn = document.querySelector(".mark-items__enginebtn")
    const backEngineBtn = document.getElementById("to-engine")
    const allBtn = [
      markBtn,
      yearBtn,
      modelBtn,
      bodyBtn,
      backMarkBtn,
      backModelBtn,
      backBodyBtn,
    ];

    /* -------------------------------------------------------------------------- */
    /*                                    Block                                   */
    /* -------------------------------------------------------------------------- */
    
    const markBlock = document.querySelector(".select-item");
    const yearBlock = document.querySelector(".selected-item__year");
    const modelBlock = document.querySelector(".selected-item__model");
    const bodyBlock = document.querySelector(".selected-item__body");
    const engineBlock = document.querySelector(".selected-item__engine")

    function searchAuto() {
      function returnAutoJSon(item) {
        let suitableAuto = {
          mark: "",
          year: "",
          model: "",
          body: "",
          engine: ""
        };
    
    
       
        let itemAttr = null;
        itemsWrapper.forEach((item) => {
          item.addEventListener("click", () => {
            itemAttr = item.getAttribute("data-mark");
            suitableAuto.mark = itemAttr;
            item.style.border = "2px solid orange";
            markWrapper.style.display = "none";
            selectBlock.style.display = "flex";
  
            returnMark()
            const markItemSrc = item
              .querySelector(".mark-item")
              .getAttribute("src");
            let markItem = `  
            <div class="item-wrapper" data-mark = "${itemAttr}">
                <img class="mark-item" src="${markItemSrc}" alt="">
            </div>
            `;
            // roadMarkSrc = roadMapMark.document.querySelector(".map__image").getAttribute("src")

            backMarkBtn.style.display = "block";
            markBtn.style.display = "block";
            markBtn.addEventListener("click", () => {
              yearItemsBlock.style.display = "flex";
              markItemsBlock.style.display = "none";
            });

            backMarkBtn.addEventListener("click", () => {
              item.style.border = "2px solid gray";
              markWrapper.style.display = "block";
              selectBlock.style.display = "none";
              markBlock.innerHTML = "";
              suitableAuto.mark = "";
            });
            markBlock.insertAdjacentHTML("beforeend", markItem);
          });
        });
       
        
        yearItems.forEach((item) => {
          item.addEventListener("click", () => {
            let yearValue = item.textContent;
            suitableAuto.year = yearValue ;
            yearBtn.style.display = "block";
            backYearBtn.style.display = "block";
            let yearItemSrc = `
                        <p class="year__text-select">${yearValue}</p>
                        `;
            yearBlock.insertAdjacentHTML("beforeend", yearItemSrc);
            yearBlock.style.display = "flex";

            yearWrapper.style.display = "none";
            backYearBtn.addEventListener("click", () => {
              yearWrapper.style.display = "flex";
              yearBlock.style.display = "none";
              yearBlock.innerHTML = "";
              yearBtn.style.display = "none";
              backYearBtn.style.display = "none";
              suitableAuto.year = ""
            });
            yearBtn.addEventListener("click", function () {
              yearItemsBlock.style.display = "none";
              modelItemsBlock.style.display = "flex";
              console.log(suitableAuto.year)
            });

          });
        });
        
        function returnMark(){
          let resAuto = fetch("js/auto.json")
          .then((res) => res.json())
          .then((data) => {
            const findEl = data.find((item) => item[suitableAuto.mark]);
            if (findEl) {
              const selectedCar = findEl[suitableAuto.mark];
              console.log(selectedCar);
            }
          })
        }
        
  
        
        
        modelItems.forEach((item) => {
          item.addEventListener("click", () => {
            let modelAttr = item.getAttribute("data-model");
  
            suitableAuto.model = modelAttr;

            modelBtn.style.display = "block";
            backModelBtn.style.display = "block";
            let modelItemSrc = `
                        <p class="model-item__selected">${modelAttr}</p>
            `;




            modelBlock.insertAdjacentHTML("beforeend", modelItemSrc);
            modelBlock.style.display = "flex";
            modelWrapper.style.display = "none";
            modelBtn.addEventListener("click" , function(){
              modelItemsBlock.style.display = "none"
              bodyItemsBlock.style.display = "flex"
            });
            backModelBtn.addEventListener("click" , function(){
              modelWrapper.style.display = "block";
              modelBlock.style.display = "none";
              modelBlock.innerHTML = "";
              suitableAuto.model = ""
              modelBtn.style.display = "none";
              backModelBtn.style.display = "none";
            });

 
          });
        });

        bodyItems.forEach((item) => {
          item.addEventListener("click", function () {
            let bodyAttr = item.getAttribute("data-body");

            suitableAuto.body = bodyAttr;


            let bodyText = item.textContent;
            bodyBtn.style.display = "block";
            backBodyBtn.style.display = "block";
            bodyWrapper.style.display = "none";
            bodyBlock.style.display = "flex"
            let bodyItemSrc = `
                        <p class="body-item">${bodyText}</p>
                        `;
            bodyBlock.insertAdjacentHTML("beforeend", bodyItemSrc);
            bodyBtn.addEventListener("click" , function(){
              bodyItemsBlock.style.display = "none"
              engineItemsBlock.style.display = "flex"
            })
            backBodyBtn.addEventListener("click" , function(){
              bodyWrapper.style.display = "flex";
              bodyBlock.style.display = "none";
              bodyBlock.innerHTML = "";
              suitableAuto.model = ""
              bodyBtn.style.display = "none";
              backBodyBtn.style.display = "none";
            }) 
          });
        });

        engineItems.forEach((item) => {
          item.addEventListener("click", () => {
            item.addEventListener("click", function () {
              let engineText = item.textContent;
             
              suitableAuto.engine = engineText;


              engineBtn.style.display = "block";
              backEngineBtn.style.display = "block";
              engineWrapper.style.display = "none";
              engineBlock.style.display = "flex"
              let engineItemSrc = `
                          <p class="engine-item">${engineText}</p>
                          `;
              engineBlock.insertAdjacentHTML("beforeend", engineItemSrc);

              engineBtn.addEventListener("click" , function(){
                engineItemsBlock.style.display = "none"
                engineItemsBlock.style.display = "flex"
              })
              backEngineBtn.addEventListener("click" , function(){
                engineWrapper.style.display = "flex";
                engineBlock.style.display = "none";
                engineBlock.innerHTML = "";
                suitableAuto.engine = ""
                engineBtn.style.display = "none";
                backEngineBtn.style.display = "none";
              }) 
            });
          });
        });

        allBtn.forEach((item) => {
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

      returnAutoJSon()
    }

    searchAuto();

  });
};

chooseProduct();
export default chooseProduct;
