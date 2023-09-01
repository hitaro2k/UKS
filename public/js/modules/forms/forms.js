"use strict"

import { validation } from "./validation.js";
let showForm = document.querySelector(".total-price__button-buy");
let formWrap = document.querySelector(".form-order__background");
let documentHTML = document.querySelector("html")
const verifWrapper = document.querySelector(".verification")
const accesBtn = document.querySelector(".acces-btn")
const abortBtn = document.querySelector(".abort-btn")

    // const uniqueInput = document.getElementById('unique-value')
    // const uniqueInputImg = document.getElementById("unique-value__img")
    // uniqueInput.value = randomNum
    // uniqueInputImg.value = randomNum
  
export function forms(){ 

    const inputName = document.getElementById("name")
    const inputPatronymic = document.getElementById("patronymic")
    const inputSurname = document.getElementById("surname")
    const inputPhone = document.getElementById("phone")
    const inputDelivery = document.getElementById("delivery-department")
    const closeForm = document.querySelector(".close")
    const sendData = document.querySelector(".send-data")
      
    function sendAllData(){   
        formProductPrice.innerHTML = "";
        inputName.value = "" 
        inputPatronymic.value = ""
        inputSurname.value = ""
        inputPhone.value = ""
        inputDelivery.value = ""
        window.location.href = "/"
        
    }

    // form.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     var formData = new FormData(form);
        
    //     fetch('server/personalData.php', {
    //     method: 'POST',
    //     body: formData
    //     })
    //     .then(function(response) {
    //     if (response.ok) {
    //         return response.text();
    //     } else {
    //         throw new Error('Помилка: ' + response.status);
    //     }
    //     })
    //     .catch(function(Error) {
    //     throw new Error
    //     });
    // });
    

    const formProductPrice = document.querySelector(".block__product-price")
    const formProductItem = document.querySelector(".block__product-item")
    const priceToForm = localStorage.getItem("price")
    if (formProductPrice.children.length === 0) {
        let buyPrice = ` 
        <div class="price-block">
        <p class="title">Сума до сплати</p>
        <p class="total-price">${priceToForm} грн</p>
        </div>
        `;
        formProductPrice.insertAdjacentHTML("beforeend", buyPrice);
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    
    if (formProductItem.children.length === 0) {
        cartItems.forEach((item) => {
        const inCartProduct = `
            <div class="product-block" data="${item.id}">
                <div class="product">
                <div class="image"><img class="image" src="../img/UK.svg" alt=""></div>
                <p class="name">${item.title}</p>
                <p class= "count">${item.count}</p>
                <p class="product-price">${item.price}</p>
                </div>
            </div>
            `;
        formProductItem.insertAdjacentHTML("beforeend", inCartProduct);
        });
    }
    const popup = document.querySelector(".popup-close")
    const closeFormAcces = document.querySelector(".close-acces")
    const continueBtn = document.querySelector(".continue")
    closeForm.addEventListener("click" , function (){
      popup.style.display = "flex"
    })
    continueBtn.addEventListener("click" , function (){
      popup.style.display = "none"
    })

    closeFormAcces.addEventListener("click", function(){
      sendAllData()
    })

    // Либо так
    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault(); 
      const formData = new FormData(event.target);
      fetch("/get-personal-data", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          
          console.log(data);
      })
      .catch(error => {
          console.error("еррор", error);
      });
    });

    const uniqueValue = document.querySelector("#unique-value")
    uniqueValue.value = localStorage.getItem("id")
    // Либо так какой-то из них будет работать чекнешь
    document.addEventListener("DOMContentLoaded", function() {
      const submitButton = document.getElementById("submit-button");
      const form = document.getElementById("form");
  
      submitButton.addEventListener("click", function(event) {
          event.preventDefault(); 

          const formData = new FormData(form);
          
          fetch("/get-personal-data", {
              method: "POST",
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
          })
          .catch(error => {
              console.error("еррор", error);
          });
      });
    });


    // if (imageContainer.hasAttribute("image-add")) {
    //   succesPopup.style.left = "0"+ "px"
    //   setTimeout(function(){
    //     succesPopup.style.left = "-300" + "px"
    //   },2000)
    // } else {
    //   errorPopup.style.left = "0" + "px"
    //   setTimeout(function(){
    //     errorPopup.style.left = "-300" + "px"
    //   },2000)
    // }

   
    selectPayment()
}

function selectPayment(){
    const privatPayment = document.querySelector("#privat-wrapper")
    const monoPayment = document.querySelector("#mono-wrapper")
    const privatPaymentImg = document.querySelector("#privat")
    const monoPaymentImg = document.querySelector("#mono")
    const privatNum = document.querySelector(".privat-number")
    const monoNum = document.querySelector(".monobank-number")
    const bankPayment = document.getElementById("bank-payment")
    const overlayPayment = document.getElementById("overlay-payment")
    const tetherPayment = document.querySelector("#tether-wrapper")
    const tetherPaymentImg= document.querySelector("#tether")
    const tetherNum= document.querySelector(".tether-number")

    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');
    
    checkbox1.addEventListener('change', () => {
      if (checkbox1.checked) {
        checkbox2.checked = false;
      }
    });
    
    checkbox2.addEventListener('change', () => {
      if (checkbox2.checked) {
        checkbox1.checked = false;
      }
    });
    

    document.querySelectorAll(".copy-button").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = event.target.dataset.target;
            const textToCopy = document.querySelector(`[data-id="${targetId}"]`).innerText;
            copyToClipboard(textToCopy);
        });
      });
      
    function copyToClipboard(text) {
        var textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    try{
      bankPayment.addEventListener("click", (e)=>{
        const targetId = e.target.dataset.id;
        const otherTarget = document.querySelector('[data-pay="2"]');
        const paymentModel = document.querySelector(`[data-pay="${targetId}"]`);
        if (paymentModel) {
          paymentModel.style.display = "flex";
        }
        otherTarget.style.display = "none"
      })
  
      overlayPayment.addEventListener("click", (e)=>{
        const targetId = e.target.dataset.id;     
        const otherTarget = document.querySelector('[data-pay="1"]');
        const paymentModel = document.querySelector(`[data-pay="${targetId}"]`);
        if (paymentModel) {
          paymentModel.style.display = "flex";
        }
        otherTarget.style.display = "none"
      })
    }
    catch(error){
      console.error = function() {};
    }
   
    
    privatPayment.addEventListener("click" , ()=>{
        privatPayment.style.width = "100" + "%"
        privatPayment.style.transition = "ease 1s"
        privatPaymentImg.style.width = "10" + "%"
        privatPaymentImg.style.marginLeft = "20" + "px"
        privatPayment.style.justifyContent = "flex-start"
        privatNum.style.display = "flex"
        privatNum.style.transition = "ease 2s"
    })

    monoPayment.addEventListener("click" , ()=>{
        monoNum.style.display = "flex"
        monoNum.style.transition = "ease 2s"
        monoPayment.style.width = "100" + "%"
        monoPayment.style.transition = "ease 1s"
        monoPaymentImg .style.width = "10" + "%"
        monoPaymentImg.style.marginLeft = "20" + "px"
        monoPayment.style.justifyContent = "flex-start"
    })
    tetherPayment.addEventListener("click" , ()=>{
        tetherPayment.style.width = "80" + "%"
        tetherPayment.style.transition = "ease 1s"
        tetherPaymentImg.style.width = "10" + "%"
        tetherPaymentImg.style.marginLeft = "20" + "px"
        tetherPayment.style.justifyContent = "flex-start"
        if(window.innerWidth < 1000){
          tetherPayment.style.flexDirection = "column"
          tetherPayment.style.height = "100" + "%"
        }
        tetherNum.style.display = "flex"
        tetherNum.style.transition = "ease 2s"
    })

}
forms()

