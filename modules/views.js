"use strict"
import {cartVisible} from "../modules/cart.js"
let cartMenu = document.querySelector(".cart-menu");
let menuBtn;
let menu;
let cartItems = [];
const cartWrapper = document.querySelector(".isntclear")

export function views (){
    document.addEventListener("DOMContentLoaded",function(){

      $(window).on('load', function() {
        var images = [];
        $('img').each(function() {
          images.push($(this).attr('src'));
        });
      
        var imagesLoaded = 0;
        for (var i = 0; i < images.length; i++) {
          var img = new Image();
          img.src = images[i];
          img.onload = function() {
            imagesLoaded++;
            if (imagesLoaded == images.length) {
              $('#preloader').fadeOut();
            }
          };
        }
      })
      
      function findCartItem(id) {
        return cartItems.find((item) => item.id === id);
      }
      window.addEventListener("click" , function(event){
        
        let btnPlus  = document.querySelectorAll(".button-primary__plus")
        let btnMinus = document.querySelectorAll(".button-primary__minus")
        let count = document.querySelectorAll(".item-count")
        let errorCount = document.querySelector(".popup__cart-count")
        let isclear = document.querySelector(".isclear")
        let isntclear = document.querySelector(".isntclear")
        let totalPrice = document.querySelector(".total-price")

          if (event.target.hasAttribute("data")) {
            const card = event.target.closest(".product");
            const productId = card.dataset.id;
            const existingItem = findCartItem(productId);
            cartMenu.classList.add("cart-active")
            isclear.style.display = 'none'
            isntclear.style.display = 'flex'
            totalPrice.style.display = "flex"



            //? Если товар уже есть в корзине то увеличиваем его количество
            if (existingItem) {
              const countElem = document.querySelector(
                `.item-count[data-counter="${productId}"]`
              );
              countElem.textContent = Number(countElem.textContent) + 1;
              return;
            }
        
            //? Если товара еще нет в корзине то добавляем его
            const productInfo = {
              id: productId,
              imgSrc: card.querySelector(".product-image").getAttribute("src"),
              title: card.querySelector(".product-title").innerText,
              status: card.querySelector(".product-status").innerText,
              price: card.querySelector(".product-price").innerText,
              count: "1",
            };
        
            const itemInCart = `
              <div class="item">
                  <img src="${productInfo.imgSrc}" alt="" class="item-image">
                  <p class="item-name">${productInfo.title}</p>
                  <p class="item-price">${productInfo.price}</p>
                  <div class="item__button__add-delete">
                      <button class="button-primary__plus" data-id="">+</button>
                      <p class="item-count" data-counter="${productInfo.id}">${productInfo.count}</p>
                      <button class="button-primary__minus" data-id="" id="minus">-</button>
                  </div>
              </div>`;
            cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
            cartItems.push(productInfo);
          
          
            //? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            
        }
       })
      

    })

  return views
}

views()
