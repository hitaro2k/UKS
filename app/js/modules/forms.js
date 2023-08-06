"use strict"
import { validation } from "../modules/validation.js";
let showForm = document.querySelector(".total-price__button-buy");
let formWrap = document.querySelector(".form-order__background");
let documentHTML = document.querySelector("html")
const verifWrapper = document.querySelector(".verification")
const accesBtn = document.querySelector(".acces-btn")
const abortBtn = document.querySelector(".abort-btn")
let transferredItems = [];

    // const uniqueInput = document.getElementById('unique-value')
    // const uniqueInputImg = document.getElementById("unique-value__img")
    // uniqueInput.value = randomNum
    // uniqueInputImg.value = randomNum
  
function forms(){ 
    const inputName = document.getElementById("name")
    const inputPatronymic = document.getElementById("patronymic")
    const inputSurname = document.getElementById("surname")
    const inputPhone = document.getElementById("phone")
    const inputDelivery = document.getElementById("delivery-department")

    const sendData = document.querySelector(".send-data")

    function submitForms() {
      const form1Data = new FormData(document.getElementById('form'));
      const form2Data = new FormData(document.getElementById('form-payment'));
      const photoInput = document.getElementById('fileInput');
      const photoFile = photoInput.files[0];
      const photoFormData = new FormData();
      photoFormData.append('file', photoFile);
    
      Promise.all([
        fetch('/app/server/personalData.php', {
          method: 'POST',
          body: form1Data
        }),
        fetch('/app/server/getImage.php', {
          method: 'POST',
          body: form2Data
        })
      ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        
      });
    }
    function generateId(){
        let randomNumber = '';
        for (let i = 0; i < 10; i++) {
          randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }
    let randomNum = generateId();
    
    function sendDataToServer(data) {
        const url = "app/server/changeDb.php";
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
        inputName.value = "" 
        inputPatronymic.value = ""
        inputSurname.value = ""
        inputPhone.value = ""
        inputDelivery.value = ""
        window.location.href = "http://uk"
        localStorage.clear()
    }
    sendData.addEventListener("click" , (e)=>{
        e.preventDefault()
        sendAllData()
    })
    
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
    
    const checkedFormItems = [] ;
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
                <div class="image"><img class="image" src="${item.imgSrc}" alt=""></div>
                <p class="name">${item.title}</p>
                <p class= "count">${item.count}</p>
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

    // function submitForms() {
    //   const form1Data = new FormData(document.getElementById('form1'));
    //   const form2Data = new FormData(document.getElementById('form2'));
    //   const combinedData = new FormData();
    //   for (const [name, value] of form1Data) {
    //     combinedData.append(name, value);
    //   }
    //   for (const [name, value] of form2Data) {
    //     combinedData.append(name, value);
    //   }
  
    //   fetch('/your-server-url', {
    //     method: 'POST',
    //     body: combinedData
    //   })
    //   .then(response => {

    //   })
    //   .catch(error => {
       
    //   });
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

