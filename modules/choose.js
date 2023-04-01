"use strict"
const chooseProduct = () => {
  
    function arrCompany() {




        return arrCompany
    }
    arrCompany()


    function openChoose() {
        chooseBtnMark.onclick = () => {
            chooseLeft.classList.add("active")
            chooseBody.style.borderRadius = "0px"
        }
        chooseBtnYear.onclick = () => {
            chooseRight.classList.add("active")

        }

        closeLeftSide.forEach((item) => {
            item.onclick = () => {
                chooseLeft.classList.remove("active")
                chooseBody.style.borderRadius = "5px"
            }
        })
        closeRightSide.forEach((item) => {
            item.onclick = () => {
                chooseRight.classList.remove("active")
            }
        })

        return openChoose
    }

    openChoose()
    return chooseProduct
}

chooseProduct()
export default chooseProduct