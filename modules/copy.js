const productsPopular = [{
    name: 'Двигун',
    price: 20000,
    image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
    articul: "A78D12RR",
    buy: "В кошик",
    status: "В наявності",
    id: "2B"
  },
  {
    name: 'Двигун',
    price: 20000,
    image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
    articul: "A78D12RR",
    buy: "В кошик",
    status: "В наявності",
    id: "3B"
  },

];


const productTemplate = (product) => `
      <div class="product" data-id ="${product.id}">
        <img class="product-image" src="${product.image}" alt="${product.name}">
            <div class = "product-description">
              <a href = "/product.html" class="product-title">${product.name}</a>
              <p class="product-articul">${product.articul}</p>
            </div>
            <div class ="product-info">
              <div class ="product-info__price"> 
                <p class="product-price">${product.price} грн</p>
                <p class="product-status">${product.status}</p>
              </div>
            <button class="product-button" data > ${product.buy}</button>
            
          </div>
      </div>
    `;

productsPopular.forEach((product) => {
  const productHTML = productTemplate(product);
  productsContainer.insertAdjacentHTML('beforeend', productHTML);
});

//   ? ACTUAL PRODUCTS

const productsActual = [{
    name: 'Двигун',
    price: 20000,
    image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
    articul: "A78D12RR",
    buy: "В кошик",
    status: "В наявності",
    id: "2B"
  },
  {
    name: 'Двигун',
    price: 20000,
    image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
    articul: "A78D12RR",
    buy: "В кошик",
    status: "В наявності",
    id: "3B"
  },

];


const productsContainerActual = document.querySelector('.products__container__actual');
productsActual.forEach((product) => {
  const productHTML = productTemplate(product);
  productsContainerActual.insertAdjacentHTML('beforeend', productHTML);
});


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
let showForm = document.querySelector(".total-price__button-buy")
let formWrap = document.querySelector(".form-order__background")
let formProduct = document.querySelector(".block__product-price")
export function views() {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {
      var images = [];
      document.querySelectorAll('img').forEach(function (img) {
        images.push(img.src);
      });
    
      var imagesLoaded = 0;
      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
        img.onload = function () {
          imagesLoaded++;
          if (imagesLoaded == images.length) {
            document.querySelector('#preloader').style.display = 'none';
          }
        };
      }
    });

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
                    </div>`
                 
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(productInfo);
       
        const itemPrices = document.querySelectorAll('.item-price');
        let totalPriceCash = 0;
        itemPrices.forEach(function(item) {
          totalPriceCash += parseFloat(item.textContent);
        });
        document.querySelector('.total-price__text').innerHTML =totalPriceCash;

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
      showForm.addEventListener("click" , ()=>{
        let buyProduct;
        let documentHTML = document.querySelector("html")
        let totalProductPrice = ` 
        <div class="price-block">
          <p class="title">Title</p>
          <p class="total-price">b</p>
        </div>
        `

        cartItems.forEach(item =>{
         buyProduct = `
          <div class="product-block">
            <div class="product">
                <div class="image"><img class="image" src="${item.imgSrc}" alt=""></div>
                  <div class="name">${item.title}</div>
                  <div class="product-price">${item.price}</div>
            </div>
          </div>
        `
        formProduct.insertAdjacentHTML("beforeend", buyProduct)
        })
  
        formWrap.style.display = "flex";
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

views()

//? Выбор марки 
const companyWrappers = document.querySelectorAll('.choose-company__wrapper');


const selectModelBtn = document.querySelector('.select-model');


let selectedModels = [];


companyWrappers.forEach((wrapper) => {
  wrapper.addEventListener('click', () => {

    const value = wrapper.getAttribute('data-value');


    if (selectedModels.includes(value)) {

      selectedModels = selectedModels.filter((model) => model !== value);
    } else {

      selectedModels.push(value);
    }

    if (selectedModels.length > 0) {

      selectModelBtn.style.display = 'block';
    } else {

      selectModelBtn.style.display = 'none';
    }
  });
});


selectModelBtn.addEventListener('click', () => {
  const selectedModelsStr = encodeURIComponent(JSON.stringify(selectedModels));
  window.location.href = `selected-products.html?models=${selectedModelsStr}`;
});
const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Logics total price
if(isntclear.style.display = "flex"){
  totalPrice.classList.add('price-active')
}
isntclear.style.display = "none"
isclear.style.display = "flex"
if(isntclear.style.display = "none"){
totalPrice.classList.remove('price-active')
}
