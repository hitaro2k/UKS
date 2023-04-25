"use strict"
const chooseProduct = () => {
    document.addEventListener("DOMContentLoaded", function () {
        function arrCompany() {
            const selectedItems = [];
            const selectedYears = [];

            const markItems = document.querySelector(".full-screen__body__mark-items")
            const itemsWrapper = document.querySelectorAll('.item-wrapper');
            const markBtn = document.querySelector('.mark-items__markbtn');
            const yearItems = document.querySelector(".full-screen__body__year-items")
            const marksBtn = document.querySelector(".mark-items__markbtn");
            const markListItems = document.querySelectorAll(".year-items")
            const yearBtn = document.querySelector(".year-items__markbtn")
            const backToMark = document.querySelector(".back")
            itemsWrapper.forEach((item) => {
                item.addEventListener('click', () => {
                    const mark = item.getAttribute('data-mark');
                    const index = selectedItems.indexOf(mark);
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

            markListItems.forEach((item) => {
                item.addEventListener("click",() => {
                    const year = item.getAttribute("data-year");
                    const index = selectedYears.indexOf(year);
                    if (index === -1) {
                        selectedYears.push(year);
                        item.classList.add("selected-year")
                    } else {
                        selectedYears.splice(index, 1);
                        item.classList.remove("selected-year")
                    }

                    if (selectedYears.length > 0) {
                        yearBtn.style.display = "flex"
                    } else {
                        yearBtn.style.display = "none"
                    }


                })
            })

            yearBtn.onclick = function () {

                
                 
            }    
            markBtn.addEventListener("click", () => {
                yearItems.style.display = "flex"
                markItems.style.display = "none"
            })
            backToMark.addEventListener("click", () => {
                yearItems.style.display = "none"
                markItems.style.display = "flex"
            })

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
        arrCompany()
    })




}

chooseProduct()
export default chooseProduct

    // let abc = selectedItems.find(function(item){
    //     return  item === "chevrolet"
    // })
  