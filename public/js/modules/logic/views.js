"use strict";
let cartItems = [];

export function views() {
  let cartMenu = document.querySelector(".cart-menu");
  let menuBtn;
  let menu;
  const cartWrapper = document.querySelector(".isntclear");
  let isclear = document.querySelector(".isclear");
  let totalPrice = document.querySelector(".total-price__wrapper");
  let showForm = document.querySelector(".total-price__button-buy");
  let formWrap = document.querySelector(".form-order__background");
  let cartIcon = document.querySelector(".shopping-card__link");
  let cartClose = document.getElementById("close-cart")
  let documentHTML = document.querySelector("html")
  menuBtn = document.querySelector('.menu-btn');
  menu = document.querySelector(".menu--burger-list");
  document.querySelector(".total-price__text").innerHTML = localStorage.getItem("price") + "грн"


  document.addEventListener("DOMContentLoaded", function () {
    let card;
    if(cartItems.length > 0){
      isclear.style.display = "none";
      cartWrapper.style.display = "flex"
      totalPrice.style.display = "flex"
    }
    
    cartIcon.onclick = () => {
      cartMenu.classList.add("cart-active")
      if(cartItems.length <= 0){
        isclear.style.display = "flex";
        cartWrapper.style.display = "none"
        totalPrice.style.display = "none"
      }else{
        isclear.style.display = "none";
        cartWrapper.style.display = "flex"
        totalPrice.style.display = "flex"
      }

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

    cartClose.addEventListener("click",() => {
      cartMenu.classList.remove("cart-active")
      documentHTML.style.position = "static"
      localStorage.setItem("stateActive","flex" )
      localStorage.setItem("statePassive","none" )
    })

    function handleClick(item,) {
      var key = 'key_' + item.data;
      var value =JSON.stringify(item);
      localStorage.setItem(key, value);
      if(item.count <= 0){
        localStorage.removeItem(key);
      }
      
    }
    function updateAvailability(productId, count) {
      const getProductInfo = localStorage.getItem("key_" + productId);
      let productInfo = JSON.parse(getProductInfo);
      console.log(getProductInfo)
      if(productInfo.count === 0){
        localStorage.removeItem(getProductInfo)
      }
    }

    const checkedFormItems = [] ;
    window.addEventListener("click", function (event) {
        if (event.target.hasAttribute("data")) {
          const card = event.target.closest(".product");
          const productId = card.dataset.id;          
          fetch("/give-api")
          .then(res => res.json())
          .then(data => {
            const transformedData = data.data.map(item => ({
              name: item["maker"],
              id: item["code"],
              description: item["name"],
              price: item["price"],
              count: item["count"],
              analogue:item["analogue"],
              exchange:item["exchange"]
            }));
           
            transformedData.forEach(product =>{        
              if(product.id == productId){
                if(product.count >= 1){
                  start()
                }
              }
            })
            
          })
        
          function start(){
            const existingItem = findCartItem(productId);
            cartMenu.classList.add("cart-active");
            cartWrapper.style.display = "flex";
            totalPrice.style.display = "flex";
            isclear.style.display = "none";
            let formPrice;
            let added = card.getAttribute("data-added");
            localStorage.setItem("isclear" , "none")
            localStorage.setItem("isntclear" ,"flex")
            const mailUser = localStorage.getItem("mail")
            if (added === "true") {
              return;
            }
            added = "true";
            card.setAttribute("data-added", added);
            
            if (existingItem) {
              const countElem = document.querySelector(
                `.item-count[data-counter="${productId}"]`
              );
              countElem.textContent = Number(countElem.textContent) + 1;
              return;
            }
            
            const productInfo = {
              id: productId,
              title: card.querySelector(".product-title").textContent,
              price: card.querySelector(".product-price__grn").textContent,
              count: 0,
              data: `${productId}`,
            };

            localStorage.setItem("idItem" , productInfo.id)
            productInfo.count++;
            console.log(productInfo)
            const itemInCart = `<div class="item" data-id="${productInfo.data}" >
                    <img src="../img/UK.svg" alt="" class="item-image">
                    <p class="item-name">${productInfo.title}</p>
                    <p class="item-price">${productInfo.price}</p>
                    <div class="item__button__add-delete">
                        <button class="button-primary__plus" data-id="${productInfo.data}">+</button>
                        <p class="item-count" data-counter="${productInfo.id}">${productInfo.count}</p>
                        <button class="button-primary__minus" data-id="${productInfo.data}" id="minus">-</button>
                    </div>
                </div>
            `;
            cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
            cartItems.push(productInfo);
            localStorage.setItem("cartItems",JSON.stringify(cartItems))
            handleClick(productInfo)
            buttons()
            updateTotalPrice();

          }
         
        }
        
    });  

    window.addEventListener("load", function () {
      var images = [];
      document.querySelectorAll("img").forEach(function (img) {
        images.push(img.src);
      });

      var imagesLoaded = 0;
      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
        img.onload = function () {
          imagesLoaded++;
          if (imagesLoaded == images.length) {
            document.querySelector("#preloader").style.display = "none";
          }
        };
      }
      var savedItems = getAllItemsFromStorage();
      const savedId = localStorage.getItem('idItem'); 
      const productElement = document.querySelector(`[data-id="${savedId}"]`);
      try{
        const productID = productElement.querySelector(".title-code").textContent
        const key = "key_"
        const setLocalKey = key+productID
        const localStorageKey = localStorage.getItem(setLocalKey)
    
        if(localStorageKey){
          productElement.setAttribute('data-added', 'true');
        }
      }catch{

      }
      
   

      savedItems.forEach(function (item) {
        const itemInCart = `<div class="item" data-id="${item.data}">
          <img src="../img/UK.svg" alt="" class="item-image">
          <p class="item-name">${item.title}</p>
          <p class="item-price">${item.price}</p>
          <div class="item__button__add-delete">
              <button class="button-primary__plus" data-id="${item.data}">+</button>
              <p class="item-count" data-counter="${item.id}">${item.count}</p>
              <button class="button-primary__minus" data-id="${item.data}" id="minus">-</button>
          </div>
        </div>`;

        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(item);
        buttons()
      })

    });

    function buttons(){
      let btnPlus = document.querySelectorAll(".button-primary__plus");
      let btnMinus = document.querySelectorAll(".button-primary__minus");
      
      btnPlus.forEach(function (button){
          button.removeEventListener("click", handlePlusClick);
          button.addEventListener("click", handlePlusClick);
      })
      btnMinus.forEach(function (button){
          button.removeEventListener("click", handleMinusClick)
          button.addEventListener("click", handleMinusClick);
      })

      function handlePlusClick(event){
          if (event.target.dataset.clicked === "true") {
            return;
          }
          event.target.dataset.clicked = "true";
          let productId = event.target.dataset.id;
          const getProductInfo = localStorage.getItem("key_" + productId)
          
          let productInfo = JSON.parse(getProductInfo)
          const countElem = document.querySelector(
            `.item-count[data-counter="${productId}"]`
          ); 
          fetch("/give-api")
          .then(res => res.json())
          .then(data =>{
            const transformedData = data.data.map(item => ({
              name: item["maker"],
              id: item["code"],
              description: item["name"],
              price: item["price"],
              count: item["count"],
              analogue:item["analogue"],
              exchange:item["exchange"]
            }));
            transformedData.forEach(item =>{
              if(item.id == productId){
                const element= findCartItem(productId);
                const itemNum = Number(item.count)
                const countElemNum = Number(element.count)
                element.count++;
                countElem.innerHTML = element.count
                handleClick(element)
                updateTotalPrice();
                localStorage.setItem("cartItems",JSON.stringify(cartItems))
                if(itemNum === countElemNum){
                  countElem.innerHTML = itemNum
                  element.count = itemNum
                  handleClick(element)
                  updateAvailability(productId ,1)
                  localStorage.setItem("cartItems",JSON.stringify(cartItems))
                  updateTotalPrice();
                }
              }
              
            })
          })

          setTimeout(function () {
            event.target.removeAttribute("data-clicked");
          }, 500);
      }

      function handleMinusClick(event){
          if (event.target.dataset.clicked === "true") {
            return;
          }
          event.target.dataset.clicked = "true";
          const productId = event.target.dataset.id;
          const item = findCartItem(productId);
          const getProductInfo = localStorage.getItem("key_" + productId)        
          let productInfo = JSON.parse(getProductInfo)
          const countElem = document.querySelector(
            `.item-count[data-counter="${productId}"]`
          );
          let countElemAttr = countElem.getAttribute("data-counter");
          localStorage.setItem("counterElem" , countElemAttr)
          if (countElemAttr == productInfo.data) {
            item.count--;
            updateAvailability(productId, 0);
            localStorage.setItem("cartItems",JSON.stringify(cartItems))
            handleClick(item)
           
          }
          if (item.count === 0) {
            removeCartItem(productId);
            localStorage.setItem("cartItems",JSON.stringify(cartItems))
            if(cartItems.length <= 0){
              isclear.style.display = "flex";
              cartWrapper.style.display = "none"
              totalPrice.style.display = "none"
              const card = document.querySelector('.product')
              card.removeAttribute("data-added")
            }
          } else {
            countElem.textContent = item.count;
            updateTotalPrice();
            localStorage.setItem("cartItems",JSON.stringify(cartItems))
          }
          setTimeout(function () {
            event.target.removeAttribute("data-clicked");
          }, 100);
      }
    }

    function getAllItemsFromStorage() {
      var items = [];
    
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
    
        if (key.startsWith('key_')) {
          var value = localStorage.getItem(key);
          var item = JSON.parse(value);
          items.push(item);
        }
      }
    
      return items;
    }
   
    function findCartItem(id) {
      return cartItems.find((item) => item.id === id);
    }
    function removeDataAddedAttribute() {
      const products = document.querySelectorAll(".product");
      products.forEach((product) => {
        if (product.hasAttribute("data-added")) {
          product.removeAttribute("data-added");
        }
      });
    }
   
    function generateId(){
      let randomNumber = '';
      for (let i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 10);
      }
      return randomNumber;
    }
    const randomNum = generateId()    
    localStorage.setItem("id" , randomNum)
    var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    function sendDataToServer(data) {
        const url = "/get-product";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRF-TOKEN': csrfToken
          },
          body: JSON.stringify({ data: data })
        };
      
        fetch(url, options)
          .then((response) => response.json())
          .then((result) => {
            console.log("Успешно", result);
          })
          .catch((error) => {
              console.log(error)
          });
    }
    
    showForm.addEventListener("click" , ()=>{
      const localCartItems = JSON.parse(localStorage.getItem("cartItems"))

      localCartItems.forEach(product =>{
          checkedFormItems.push([product.title, product.id, product.price, product.count]);
      })

      let transferredItems = [];
      checkedFormItems.forEach(item =>{
        transferredItems.push(...item)
      })

      if (transferredItems.length > 0) {
          transferredItems.push(localStorage.getItem("mail"))
          transferredItems.push(randomNum)
          let itemJson = {
            items: transferredItems.flat(),
          };
          console.log(itemJson)
          sendDataToServer(itemJson);
      }      
      window.location.href = "/form"
    })
 
    function removeCartItem(id) {
      const index = cartItems.findIndex((item) => item.id === id);
      cartItems.splice(index, 1);
      const item = document
        .querySelector(`[data-id="${id}"]`)
        .closest(".item");
      item.parentNode.removeChild(item);
      updateTotalPrice();

    }

    function updateTotalPrice() {
      const itemPrices = document.querySelectorAll(".item-price");
      let totalPriceCash = 0;
      let totalPriceSum = 0;
      itemPrices.forEach(function (item) {
        const productId = item
          .closest(".item")
          .querySelector(".button-primary__plus").dataset.id;
        const itemInfo = findCartItem(productId);
        totalPriceCash += parseFloat(item.textContent) * itemInfo.count;
        totalPriceSum = totalPriceCash.toFixed(2)
      });
      document.querySelector(".total-price__text").innerHTML =
      totalPriceSum + " грн";
      function stateMoney(){
        localStorage.setItem("price", totalPriceSum)
      }
      stateMoney()
    }
    
    
  });
  
  return views;
}

views();



