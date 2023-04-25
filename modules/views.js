"use strict"
import {
  cartVisible
} from "../modules/cart.js"
let cartMenu = document.querySelector(".cart-menu");
let menuBtn;
let menu;
let cartItems = [];
const cartWrapper = document.querySelector(".isntclear")
let errorCount = document.querySelector(".popup__cart-count")
let isclear = document.querySelector(".isclear")
let isntclear = document.querySelector(".isntclear")
let totalPrice = document.querySelector(".total-price__wrapper")
let formWrap = document.querySelector(".form-order__background")

export function views() {
  document.addEventListener("DOMContentLoaded", function () {
    // Проверка на тему браузеру
    //? const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    $(window).on('load', function () {
      var images = [];
      $('img').each(function () {
        images.push($(this).attr('src'));
      });

      var imagesLoaded = 0;
      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
        img.onload = function () {
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

    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data")) {
        const card = event.target.closest(".product");
        const productId = card.dataset.id;
        const existingItem = findCartItem(productId);
        cartMenu.classList.add("cart-active")
        isclear.style.display = 'none'
        isntclear.style.display = 'flex'
        totalPrice.style.display = "flex"

        if (existingItem) {
          const countElem = document.querySelector(
            `.item-count[data-counter="${productId}"]`
          );
          countElem.textContent = Number(countElem.textContent) + 1;
          return;
        }


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

        let btnPlus = document.querySelectorAll(".button-primary__plus")
        let btnMinus = document.querySelectorAll(".button-primary__minus")
        let counts = document.querySelectorAll(".item-count")

        btnPlus.forEach((button, index) => {
          button.addEventListener("click", () => {
            counts[index].textContent = Number(counts[index].textContent) + 1;
          });
        });

        btnMinus.forEach((button, index) => {
          button.addEventListener("click", () => {
            const currentCount = Number(counts[index].textContent);
            if (currentCount > 1) {
              counts[index].textContent = currentCount - 1;
            } else {
              const item = button.closest(".item");
              item.remove();
              cartItems.splice(index, 1);
            }
          });
        });
      }
    })

    function formOrder(){
      let closeForm = document.querySelector(".close-form")
      closeForm.addEventListener("click", ()=>{
        formWrap.style.display = "none";
      })
      totalPrice.addEventListener("click" , ()=>{
        let documentHTML = document.querySelector("html")
        formWrap.style.display = "flex";
        formWrap.style.overflowY = "scroll"
        if(formWrap.style.display = "flex"){
          documentHTML.style.position = "fixed"
          documentHTML.style.height = "100vh";
          documentHTML.style.width = "100%";
          documentHTML.style.overflowY = "hidden"
          documentHTML.style.top = "0";
          documentHTML.style.margin = "0 auto";
  
        }else{
          documentHTML.style.overflowY = "scroll"
        }
      })
  
    }
   formOrder()

  })

  return views
}

views()