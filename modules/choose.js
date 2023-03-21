const chooseProduct = () =>{
    let chooseBody = document.querySelector(".full-screen__choose")
    let chooseLeft = document.querySelector(".full-screen__choose-left")
    let chooseRight = document.querySelector(".full-screen__choose-right")
    let chooseBtnMark = document.querySelector("#markSide")
    let chooseBtnYear = document.querySelector("#yearSide")
    let closeLeftSide  = document.querySelectorAll(".close-screen__left")
    let closeRightSide  = document.querySelectorAll(".close-screen__right")
    
    chooseBtnMark.onclick = () =>{
        chooseLeft.classList.add("active")
        chooseBody.style.borderRadius = "0px"
    }
    chooseBtnYear.onclick = () =>{
        chooseRight.classList.add("active")
        
    }

    for(let i = 0 ; i < closeLeftSide.length; i++ ){
        closeLeftSide[i].onclick = () =>{
            chooseLeft.classList.remove("active")
            chooseBody.style.borderRadius = "5px"
        } 
    }
    for(let i = 0 ; i <closeRightSide.length; i++){
        closeRightSide[i].onclick = () =>{
            chooseRight.classList.remove("active")
        }
    }

    return chooseProduct
}
chooseProduct()

export default chooseProduct