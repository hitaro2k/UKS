"use strict";

let cartItems = [];
let transferredItems = [];
export function views() {

  let cartMenu = document.querySelector(".cart-menu");
  let menuBtn;
  let menu;
  const cartWrapper = document.querySelector(".isntclear");
  let isclear = document.querySelector(".isclear");
  let totalPrice = document.querySelector(".total-price__wrapper");
  let showForm = document.querySelector(".total-price__button-buy");
  let formWrap = document.querySelector(".form-order__background");
  let formProductPrice = document.querySelector(".block__product-price");
  let formProductItem = document.querySelector(".block__product-item");
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

    function handleClick(item) {
      var key = 'key_' + item.data;
      var value =JSON.stringify(item);
      localStorage.setItem(key, value);
      if(item.count <= 0){
        localStorage.removeItem(key);
      }
    }
 
    window.addEventListener("click", function (event) {
        if (event.target.hasAttribute("data")) {
          const card = event.target.closest(".product");
          const productId = card.dataset.id;

          fetch("/app/server/api.php")
          .then(res => res.json())
          .then(data => {
            const transformedData = data.map(item => ({
              name: item["Производитель"],
              id: item["Код"],
              description: item["Описание"],
              price: item["Цена у.е."],
              count: item["Наличие"],
              image:item["Фото"]
            }));
            transformedData.forEach(product =>{
              if(product.id == productId && product.count >= 1){
                start()
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
           
            if (added === "true") {
              return;
            }
            added = "true";
            card.setAttribute("data-added", added);

            /* -----------------------------------------------------------------------*/
            /*                                Card Item                               */
            /* -----------------------------------------------------------------------*/
    
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
              price: card.querySelector(".product-price__grn").innerText,
              count: 0,
              data: `${productId}`,
            };
            
            productInfo.count++;
    
            const itemInCart = `<div class="item" data-id="${productInfo.data}" >
                    <img src="${productInfo.imgSrc}" alt="" class="item-image">
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
            
            
            handleClick(productInfo)
          
            /* -------------------------------------------------------------------------*/
            /*                                  Buttons                                 */
            /* -------------------------------------------------------------------------*/
    
            let btnPlus = document.querySelectorAll(".button-primary__plus");
            let btnMinus = document.querySelectorAll(".button-primary__minus");
    
            /* --------------------------------------------------------------------------*/
            /*                                  Btn Plus                                 */
            /* --------------------------------------------------------------------------*/
    
            btnPlus.forEach(function (button) {
              button.addEventListener("click",(event)=>{
                const productId = event.target.dataset.id;
                
                const countElem = document.querySelector(
                  `.item-count[data-counter="${productId}"]`
                );
                fetch("/app/server/api.php")
                .then(res => res.json())
                .then(data =>{
                  const transformedData = data.map(item => ({
                    name: item["Производитель"],
                    id: item["Код"],
                    description: item["Описание"],
                    price: item["Цена у.е."],
                    count: item["Наличие"],
                    image:item["Фото"]
                  }));
                  transformedData.forEach(item =>{
                    if(item.id == productId){
                      const element = findCartItem(productId); 
                      const itemNum = Number(item.count)
                      const countElemNum = Number(element.count)
                      element.count++;
                      handleClick(productInfo)
                      updateTotalPrice();
                      countElem.textContent = element.count;
                      console.log(element)
                      console.log(itemNum)
                      console.log(countElemNum)
                       if(itemNum <= countElemNum){
                        countElem.innerHTML = itemNum
                        element.count = itemNum
                        updateTotalPrice();
                      }
                    }
                  })
                })
                
              });
            });
    
            /* --------------------------------------------------------------------------*/
            /*                                  Btn Minus                                */
            /* --------------------------------------------------------------------------*/
    
            btnMinus.forEach(function (button) {
              button.addEventListener("click", function (event) {
                const productId = event.target.dataset.id;
                const item = findCartItem(productId);
                const countElem = document.querySelector(
                  `.item-count[data-counter="${productId}"]`
                );
                console.log(cartItems)
                let countElemAttr = countElem.getAttribute("data-counter");
                localStorage.setItem("counterElem" , countElemAttr)
                if (countElemAttr == productInfo.data) {
                  item.count--;
                  handleClick(productInfo)
                }
                if (item.count === 0) {
                  removeCartItem(productId);
                  if(cartItems.length <= 0){
                    isclear.style.display = "flex";
                    cartWrapper.style.display = "none"
                    totalPrice.style.display = "none"
                  }
                  card.removeAttribute("data-added");
                } else {
                  countElem.textContent = item.count;
                  updateTotalPrice();
                }
              });
            });
            updateTotalPrice();
          }
         
        }
        
    });
    
    function generateId(){
      let randomNumber = '';
      for (let i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 10);
      }
      return randomNumber;
    }
    let randomNum = generateId();
    const uniqueInput = document.getElementById('unique-value')
    const uniqueInputImg = document.getElementById("unique-value__img")
    uniqueInput.value = randomNum
    // uniqueInputImg.value = randomNum
  

    window.addEventListener("load", function () {
      // var images = [];
      // document.querySelectorAll("img").forEach(function (img) {
      //   images.push(img.src);
      // });

      // var imagesLoaded = 0;
      // for (var i = 0; i < images.length; i++) {
      //   var img = new Image();
      //   img.src = images[i];
      //   img.onload = function () {
      //     imagesLoaded++;
      //     if (imagesLoaded == images.length) {
      //       document.querySelector("#preloader").style.display = "none";
      //     }
      //   };
      // }
      var savedItems = getAllItemsFromStorage();

      function updateAvailability(productId, count) {
        const getProductInfo = localStorage.getItem("key_" + productId);
        let productInfo = JSON.parse(getProductInfo);
        
        console.log(productInfo)

        productInfo["Наличие"] = String(Number(productInfo["Наличие"]) - count);
      
        
        localStorage.setItem("key_" + productId, JSON.stringify(productInfo));
      }

      savedItems.forEach(function (item) {
        const itemInCart = `<div class="item" data-id="${item.data}">
          <img src="${item.imgSrc}" alt="" class="item-image">
          <p class="item-name">${item.title}</p>
          <p class="item-price">${item.price}</p>
          <div class="item__button__add-delete">
              <button class="button-primary__plus" data-id="${item.data}">+</button>
              <p class="item-count" data-counter="${item.id}">${item.count}</p>
              <button class="button-primary__minus" data-id="${item.data}" id="minus">-</button>
          </div>
        </div>`;

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

              fetch("/app/server/api.php")
              .then(res => res.json())
              .then(data =>{
                const transformedData = data.map(item => ({
                  name: item["Производитель"],
                  id: item["Код"],
                  description: item["Описание"],
                  price: item["Цена у.е."],
                  count: item["Наличие"],
                  image:item["Фото"]
                }));
                transformedData.forEach(item =>{
                  if(item.id == productId){
                    const element= findCartItem(productId);
                    const itemNum = Number(item.count)
                    const countElemNum = Number(element.count)
                    element.count++;
                    countElem.innerHTML = element.count
                    handleClick(productInfo)
                    updateTotalPrice();
                    if(itemNum <= countElemNum){
                      countElem.innerHTML = itemNum
                      element.count = itemNum
                      updateTotalPrice();
                    }
                  }
                  
                })
              })
              console.log(productId)
              console.log(productInfo)
              console.log(item)
              console.log(countElem)
              let countElemAttr = countElem.getAttribute("data-counter");                 
              if (countElemAttr == productInfo.data) {
                console.log(item.count)
                item.count++;
                handleClick(item)
                updateAvailability(productId, 1)
              }
              countElem.textContent = item.count;
              updateTotalPrice();
              setTimeout(function () {
                event.target.removeAttribute("data-clicked");
              }, 100);
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
                handleClick(item)
                updateAvailability(productId, -1);
              }
              if (item.count === 0) {
                removeCartItem(productId);
                getProductInfo
                if(cartItems.length <= 0){
                  isclear.style.display = "flex";
                  cartWrapper.style.display = "none"
                  totalPrice.style.display = "none"
                }
              } else {
                countElem.textContent = item.count;
                updateTotalPrice();
              }
              setTimeout(function () {
                event.target.removeAttribute("data-clicked");
              }, 100);
            }
        }

        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(item);
        buttons()

      })

    });

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

    // imageInput.addEventListener('change', function() {
    //   const file = imageInput.files[0]; 
    
    //   if (file && file.type.startsWith('image/')) {
    //     const reader = new FileReader();
    
    
    //     reader.readAsDataURL(file);
    
    //     reader.onload = function() {
    //       const imageUrl = reader.result;
    //       imagePreview.innerHTML = `<img src="${imageUrl}" alt="Предпросмотр">`;
    //     };
    //   } else {
    //     imagePreview.innerHTML = '';
    //   }
    // });
    const formPayment = document.querySelector(".form-payment")
    const form = document.querySelector('.form-order');
    const checkedForm = document.querySelector(".checked-form")
    const formBtns = document.querySelector(".form__btn")
    const inputName = document.getElementById("name")
    const inputPatronymic = document.getElementById("patronymic")
    const inputSurname = document.getElementById("surname")
    const inputPhone = document.getElementById("phone")
    const inputDelivery = document.getElementById("delivery-department")
    
    function forms(){   
      const showPayment = document.querySelector(".to-checked");
      const backOrderBtn = document.querySelector(".to-order")
      const checkedPayment = document.querySelector(".to-response")
      const formOrder = document.querySelector(".form-content")
      const formBtn = document.querySelector(".form__btn")
      const userNameChecked = document.querySelector(".user-name")
      const userPatronymicChecked = document.querySelector(".user-patronymic")
      const userSurnameChecked = document.querySelector(".user-surname")
      const userPhoneChecked = document.querySelector(".user-phone")
      const userDeliveryChecked = document.querySelector(".user-delivery")
      const sendData = document.querySelector(".send-data")

      sendData.addEventListener("click" , (e)=>{
        e.preventDefault()
        sendAllData()
      })
      const paymentItem = document.querySelectorAll(".payment__item")
      paymentItem.forEach(item =>{
        item.addEventListener("click" , ()=>{
          item.style.height = "90" + "px"
          if(item.hasAttribute("data-crypto")){
            item.style.height = "150" + "px"
          }
        })
      })
      
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(form);
          
        fetch('server/personalData.php', {
          method: 'POST',
          body: formData
        })
        .then(function(response) {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Помилка: ' + response.status);
          }
        })
        .catch(function(Error) {
          throw new Error
        });
      });
      const verifWrapper = document.querySelector(".verification")
      const accesBtn = document.querySelector(".acces-btn")
      const abortBtn = document.querySelector(".abort-btn")

      showForm.addEventListener("click", () => {
          verifWrapper.style.display = "flex"
          
          let priceToForm = document.querySelector(".total-price__text").textContent;
          let checkedFormItems = [] ;
          if (formProductPrice.children.length === 0) {
            let buyPrice = ` 
            <div class="price-block">
              <p class="title">Сума до сплати</p>
              <p class="total-price">${priceToForm}</p>
            </div>
            `;
            formProductPrice.insertAdjacentHTML("beforeend", buyPrice);
          }
          if (formProductItem.children.length === 0) {
            cartItems.forEach((item) => {
              const inCartProduct = `
                  <div class="product-block" data="${item.id}">
                    <div class="product">
                      <div class="image"><img class="image" src="${item.imgSrc}" alt=""></div>
                      <p class="name">${item.title}</p>
                      <p class="product-price">${item.price}</p>
                    </div>
                  </div>
                `;
              formProductItem.insertAdjacentHTML("beforeend", inCartProduct);
              checkedFormItems.push([item.id, item.price, item.count]);
            });
          }
          checkedFormItems.forEach(item =>{
            transferredItems.push(...item)
          })
       
          
          formWrap.style.display = "flex";
          if ((formWrap.style.display = "flex")) {
            documentHTML.style.position = "fixed";
            documentHTML.style.height = "100vh";
            documentHTML.style.width = "100%";
            documentHTML.style.overflowY = "hidden";
            documentHTML.style.top = "0";
            documentHTML.style.margin = "0 auto";
          } else {
            documentHTML.style.overflowY = "scroll";
          }
      });
      accesBtn.addEventListener("click" , ()=>{
        form.style.display = "flex"
        verifWrapper.style.display = "none"
        formOrder.style.display = "flex"
      })
      abortBtn.addEventListener("click" , ()=>{
        form.style.display = "none"
        formWrap.style.display = "none";
        pagessReset()
      })


      let closeForm = document.querySelector(".close-form");
      const warnWrapper = document.querySelector(".warn-wrapper")
      const warnAcces = document.querySelector(".abort-warn")
      const warnAbort = document.querySelector(".accept-warn")

      warnAcces.addEventListener("click",  ()=>{
        form.style.display = "none"
        formWrap.style.display = "none"
        warnWrapper.style.display = "none"
        pagessReset()
      })
      warnAbort.addEventListener("click",  ()=>{
        warnWrapper.style.display = "none"
      })
      closeForm.addEventListener("click", () => {
        warnWrapper.style.display = "flex"
      });

      
      showPayment.addEventListener("click", () =>  {
        checkedForm.style.display = "flex"; 
        formOrder.style.display = "none";
        showPayment.style.display = "none"
        formBtns.style.display = "flex"
        userNameChecked.textContent = inputName.value
        userPatronymicChecked.textContent = inputPatronymic.value
        userSurnameChecked.textContent = inputSurname.value
        userPhoneChecked.textContent = inputPhone.value
        userDeliveryChecked .textContent = inputDelivery.value
      });
      checkedPayment.addEventListener("click" ,()=>{
        formPayment.style.display = "flex"
      })
      backOrderBtn.addEventListener("click" , ()=>{
        checkedForm.style.display = "none"
        formBtn.style.display = "none"
        formOrder.style.display = "flex"
      })
    }
   
  
    function sendDataToServer(data) {
      const url = "server/changeDb.php";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    
      fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
          console.log("Успешно", result);
        })
        .catch((error) => {
          
        });
    }

    function sendAllData(){  
      if (transferredItems.length > 0) {
        transferredItems.push(randomNum)
        let itemJson = {
          items: transferredItems.flat(),
        };
        console.log(itemJson)
        sendDataToServer(itemJson);
      }      
      formProductPrice.innerHTML = "";
      isclear.style.display = "flex";
      cartWrapper.style.display = "none";
      totalPrice.style.display = "none";
      formWrap.style.display = "none";
      formPayment.style.display = 'none'
      form.style.display = "none"
      checkedForm.style.display = 'none'
      formBtns.style.display = 'none'
      inputName.value = "" 
      inputPatronymic.value = ""
      inputSurname.value = ""
      inputPhone.value = ""
      inputDelivery.value = ""
      pagessReset()
    }
    function removeDataAddedAttribute() {
      const products = document.querySelectorAll(".product");
      products.forEach((product) => {
        if (product.hasAttribute("data-added")) {
          product.removeAttribute("data-added");
        }
      });
    }
    
    function pagessReset(){
      documentHTML.style.position = "static";
      documentHTML.style.overflowY = "scroll";
      cartMenu.classList.remove("cart-active");
      document.querySelector(".succes__popup").classList.add("active-popup");
      transferredItems = []
      cartWrapper.innerHTML = ""
      removeDataAddedAttribute();
      cartItems = []
      formProductItem.innerHTML = ""
      localStorage.clear()
      document.querySelector(".total-price__text").innerHTML = "0 грн"
    }

    forms()

   
  
    
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
      itemPrices.forEach(function (item) {
        const productId = item
          .closest(".item")
          .querySelector(".button-primary__plus").dataset.id;
        const itemInfo = findCartItem(productId);
        totalPriceCash += parseFloat(item.textContent) * itemInfo.count;
      });
      document.querySelector(".total-price__text").innerHTML =
      totalPriceCash + " грн";
      function stateMoney(){
        localStorage.setItem("price", totalPriceCash)
      }
      stateMoney()
    }
    forms()
    
  });
  
  return views;
}

views();



