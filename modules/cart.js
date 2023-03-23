"use strict"
let menuBtn;
let menu;
let cartMenu = document.querySelector(".cart-menu");

import cartItem from "./cartData.js";

export function cartVisible(){
    let cartIcon = document.querySelector(".shopping-card__link");
    let cartClose = document.getElementById("close-cart")
    let documentHTML = document.querySelector("html")
    menuBtn = document.querySelector('.menu-btn');
	menu = document.querySelector(".menu--burger-list");

   
    cartIcon.onclick = () =>{
        cartMenu.classList.add("cart-active")
       if(window.innerWidth < 560){
            documentHTML.style.position = "fixed"
            documentHTML.style.height = "100vh";
            documentHTML.style.width = "100%";
            documentHTML.style.top = "0";
            documentHTML.style.margin = "0 auto";
       }else if(window.innerWidth < 560){
            documentHTML.style.position = "static"
       }
    }
    cartClose.onclick = () =>{
        cartMenu.classList.remove("cart-active")
        documentHTML.style.position = "static"
      
    }
    
  
    return cartVisible
}

export function cartUsible(){
    let productBtn = document.querySelectorAll(".product-button");
    
    productBtn.forEach((item) =>{
        item.onclick = () =>{
         
        }
    })
   
    //? Shablon
    function cartItems(){
        var countItem;
        
        function isActiveCart(){
          
            return isActiveCart
        }
        
        isActiveCart()
      
        const itemTemplate = (product) => `
            <div class="item">
                <img src="${product.img}" alt="" class="item-image">
                <p class="item-name">${product.name}</p>
                <p class="item-price">${product.price}грн</p>
                <div class="item__button__add-delete">
                    <button class="button-primary__plus" data-id="${product.idPlus}">+</button>
                    <p class="item-count">${product.count}</p>
                    <button class="button-primary__minus" data-id="${product.idMinus}" id="minus">-</button>
                </div>
            </div>`



        const cartContainer = document.querySelector('.cart-item'); 
        cartItem.forEach((product) => {
            const productHTML = itemTemplate(product);
            cartContainer.insertAdjacentHTML('beforeend', productHTML);
          
           
        });
        
        return cartItems  
    }
    cartItems()
   
    function addItem(){
        
    }

    return cartUsible
}


cartUsible()
cartVisible()
