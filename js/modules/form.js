"use strict"
export function form(){
    let deliveryLabel1 = document.querySelector("#checkbox1")
    let deliveryCheck1 = document.querySelector("#form-check1")
    let deliveryLabel2 = document.querySelector("#checkbox2")
    let deliveryCheck2 = document.querySelector("#form-check2")
    deliveryLabel1.addEventListener("click", ()=>{
        deliveryCheck1.style.display = "block"
    })
    deliveryLabel2.addEventListener("click", ()=>{
        deliveryCheck2.style.display = "block"
    })
    
  
}
form()