"use strict"
import {
    views
} from "./views.js";
export function cartVisible() {
    let cartMenu = document.querySelector(".cart-menu");
    let menuBtn;
    let menu;
    let cartIcon = document.querySelector(".shopping-card__link");
    let cartClose = document.getElementById("close-cart")
    let documentHTML = document.querySelector("html")
    menuBtn = document.querySelector('.menu-btn');
    menu = document.querySelector(".menu--burger-list");


    cartIcon.onclick = () => {
        cartMenu.classList.add("cart-active")
        if (window.innerWidth < 560) {
            documentHTML.style.position = "fixed"
            documentHTML.style.height = "100vh";
            documentHTML.style.width = "100%";
            documentHTML.style.top = "0";
            documentHTML.style.margin = "0 auto";
        } else if (window.innerWidth < 560) {
            documentHTML.style.position = "static"
        }
    }
    cartClose.onclick = () => {
        cartMenu.classList.remove("cart-active")
        documentHTML.style.position = "static"

    }
    cartClose.addEventListener("click",() => {
        cartMenu.classList.remove("cart-active")
        documentHTML.style.position = "static"

    })


    return cartVisible
}





cartVisible()