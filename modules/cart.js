"use strict"

export function cartVisible(){
    let cartIcon = document.querySelector(".shopping-card__link");
    let cartMenu = document.querySelector(".cart-menu");
    let cartClose = document.getElementById("close-cart")
    let documentHTML = document.querySelector("html")

    cartIcon.onclick = () =>{
        cartMenu.classList.add("cart-active")
        if(window.innerWidth < 560){
            documentHTML.style.position = "fixed"
        }else if(window.innerWidth > 560){
            documentHTMLdocument.style.position = "relative"
        }
    }
    cartClose.onclick = () =>{
        cartMenu.classList.remove("cart-active")
    }
    
   

    return cartVisible
}
cartVisible()