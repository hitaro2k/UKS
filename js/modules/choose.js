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
    const selectYear = document.querySelector(".selected-year")
    const yearItems = document.querySelectorAll(".year-item");
    const yearWrapper = document.querySelector(".year-columns");

    const modelItemsBlock = document.querySelector(
      ".full-screen__body__model-items"
    );
    
    const modelWrapper = document.querySelector(".model-wrapper");

    const bodyItemsBlock = document.querySelector(
      ".full-screen__body__body-items"
    );
    const bodyWrapper = document.querySelector(".body-wrapper");

    const engineItemsBlock = document.querySelector(
      ".full-screen__body__engine-items"
    );
    const engineWrapper = document.querySelector(".engine-wrapper")

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
    const selectModelBlock = document.querySelector(".selected-model")
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
        itemsWrapper.forEach( (item) => {
          item.addEventListener("click",()=>{
            itemAttr = item.getAttribute("data-mark");
            suitableAuto.mark = itemAttr;
            item.style.border = "2px solid orange";
            markWrapper.style.display = "none";
            selectBlock.style.display = "flex";

          
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
            suitableAuto.year = yearValue;
            yearBtn.style.display = "block";
            backYearBtn.style.display = "block";
            let yearItemSrc = `<p class="year__text-select">${yearValue}</p>`;
            yearBlock.insertAdjacentHTML("beforeend", yearItemSrc);
            yearBlock.style.display = "flex";
        
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
          
        }
        
        function handleYearBtnClick() {
          yearItemsBlock.style.display = "none";
          modelItemsBlock.style.display = "flex";
        
          returnModel();
        }
        
        async function returnModel() {
         await fetch("js/auto.json")
            .then((res) => res.json())
            .then((data) => {
              const findMark = data.find((item) => item[suitableAuto.mark]);
              if (findMark) {
                const selectedCar = findMark[suitableAuto.mark];
                for (let car in selectedCar) {
                  selectedCar[car].forEach((item) => {
                    if (item.year == suitableAuto.year) {
                      let modelItem = `<p class="model-item">${car}</p>`;
                      modelWrapper.insertAdjacentHTML("beforeend", modelItem);
                    }
                  });
                }
              }
            });
          selectModel();
        }
        function selectModel() {
          const modelItems = document.querySelectorAll(".model-item");
          modelItems.forEach((item) => {
            item.removeEventListener("click", handleModelItemClick); 
            item.addEventListener("click", handleModelItemClick); 
          });
        }
        
        function handleModelItemClick() {
          let userSelectedModel = `<p class="model-item__selected">${this.textContent}</p>`; 
          suitableAuto.model = this.textContent;
          modelBtn.style.display = "block";
          backModelBtn.style.display = "block";
          modelBlock.insertAdjacentHTML("beforeend", userSelectedModel);
        
          modelBlock.style.display = "flex";
          modelWrapper.style.display = "none";
          selectModelBlock.style.display = "flex";
          modelBtn.addEventListener("click", handleModelBtnClick);
          backModelBtn.addEventListener("click", handleBackModelBtnClick);
        }
        
        function handleModelBtnClick() {
          modelItemsBlock.style.display = "none";
          bodyItemsBlock.style.display = "flex";
          returnBody();
        }
        
        function handleBackModelBtnClick() {
          modelWrapper.style.display = "flex";
          modelBlock.style.display = "none";
          modelBlock.innerHTML = "";
          suitableAuto.model = "";
          modelBtn.style.display = "none";
          backModelBtn.style.display = "none";
          selectModelBlock.style.display = "none";
         
        }
        
        async function returnBody() {
          await fetch("js/auto.json")
            .then((res) => res.json())
            .then((data) => {
              const findMark = data.find((item) => item[suitableAuto.mark]);
              if (findMark) {
                const selectedCar = findMark[suitableAuto.mark];
                if (suitableAuto.model in selectedCar) {
                  const result = selectedCar[suitableAuto.model];
                  result.forEach((item)=>{
                    let bodyItem = `<p class="body-item">${item.body}</p>`;
                    bodyWrapper.insertAdjacentHTML("beforeend", bodyItem);
                  })
                }
                
              }
            });
          selectBody();
        }

        function selectBody(){
          const bodyItem = document.querySelectorAll(".body-item");
          bodyItem.forEach((item) => {
            item.removeEventListener("click", handleBodyItemClick); 
            item.addEventListener("click", handleBodyItemClick); 
          });
        } 
        
        function handleBodyItemClick() {
          let bodyText = this.textContent;
          suitableAuto.body =bodyText;
          bodyBtn.style.display = "block";
          backBodyBtn.style.display = "block";
          bodyWrapper.style.display = "none";
          bodyBlock.style.display = "flex"
          let bodyItemSrc = `
                      <p class="body-item">${bodyText}</p>
                      `;
          bodyBlock.insertAdjacentHTML("beforeend", bodyItemSrc);
          bodyBtn.addEventListener("click", handleBodyBtnClick);
          backBodyBtn.addEventListener("click", handleBackBodyBtnClick);
        }
        function handleBodyBtnClick() {
          bodyItemsBlock.style.display = "none"
          engineItemsBlock.style.display = "flex"
          returnEngine()
        }
        function handleBackBodyBtnClick() {
          bodyWrapper.style.display = "flex";
          bodyBlock.style.display = "none";
          bodyBlock.innerHTML = "";
          suitableAuto.model = ""
          bodyBtn.style.display = "none";
          backBodyBtn.style.display = "none";
          
         
        }
       
 
        async function returnEngine() {
          await fetch("js/auto.json")
            .then((res) => res.json())
            .then((data) => {
              const findMark = data.find((item) => item[suitableAuto.mark]);
              if (findMark) {
                const selectedCar = findMark[suitableAuto.mark];
                if (suitableAuto.model in selectedCar) {
                  const result = selectedCar[suitableAuto.model];
                  console.log(result)
                  result.forEach((item)=>{
                    let engineType = `
                    <ul class="type-engine">
                      <li class="type-engine">${item.fuel}:</li>
                      <li class="engine-item">${item.engine}</li>
                    </ul>
              
                    `;
                    engineWrapper.insertAdjacentHTML("beforeend", engineType);
                  })
                }
              }
            });
            selectEngine();
        }

        function selectEngine(){
        const engineItems = document.querySelectorAll(".engine-item");
        engineItems.forEach((item) => {
          item.removeEventListener("click", handleEngineItemClick); 
          item.addEventListener("click", handleEngineItemClick); 
         
          });
        }

        function handleEngineItemClick(){
          let engineText = this.textContent;
          suitableAuto.engine = engineText;
          
          engineBtn.style.display = "block";
          backEngineBtn.style.display = "block";
          engineWrapper.style.display = "none";
          engineBlock.style.display = "flex"
          let engineItemSrc = `
                      <p class="engine-item">${engineText}</p>
                      `;
          engineBlock.insertAdjacentHTML("beforeend", engineItemSrc);
          engineBtn.addEventListener("click", handleEngineBtnClick);
          backEngineBtn.addEventListener("click", handleBackEngineBtnClick);
        }
     
        function handleEngineBtnClick() {
          console.log(suitableAuto)
          returnCar()
        }
        function handleBackEngineBtnClick() {
          engineWrapper.style.display = "flex";
          engineBlock.style.display = "none";
          engineBlock.innerHTML = "";
          suitableAuto.engine= ""
          engineBtn.style.display = "none";
          backEngineBtn.style.display = "none";
          console.log(suitableAuto)
         
        }
        async function returnCar(){
          console.log("Машина в поиске")
        }


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
