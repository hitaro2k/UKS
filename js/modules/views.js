"use strict";
import { cartVisible } from "./cart.js";

let documentHTML = document.querySelector("html");
let cartItems = [];

export function views() {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */

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

  /* -------------------------------------------------------------------------- */
  /*                                Main scripts                                */
  /* -------------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    /* -------------------------------------------------------------------------- */
    /*                                  Preloader                                 */
    /* -------------------------------------------------------------------------- */

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
    });

    /* -------------------------------------------------------------------------- */
    /*                                Functionality                               */
    /* -------------------------------------------------------------------------- */

    function findCartItem(id) {
      return cartItems.find((item) => item.id === id);
    }

    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data")) {
        const card = event.target.closest(".product");
        const productId = card.dataset.id;
        const existingItem = findCartItem(productId);
        cartMenu.classList.add("cart-active");
        cartWrapper.style.display = "flex";
        totalPrice.style.display = "flex";
        isclear.style.display = "none";
        let formPrice;
        let added = card.getAttribute("data-added");

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
          price: card.querySelector(".product-price").innerText,
          count: 0,
          data: `${productId}`,
        };

        productInfo.count++;

        const itemInCart = `   <div class="item" data-id="${productInfo.data}" >
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

        /* -----------------------------------------------------------------------*/
        /*                                  FORM                                  */
        /* -----------------------------------------------------------------------*/
        function formOrder() {
          let closeForm = document.querySelector(".close-form");
          closeForm.addEventListener("click", () => {
            formWrap.style.display = "none";
            documentHTML.style.overflowY = "scroll";
            cartMenu.style.overflowY = "scroll";
            formProductItem.innerHTML = "";
            formProductPrice.innerHTML = "";
          });

          showForm.addEventListener("click", () => {
            let priceToForm =
              document.querySelector(".total-price__text").textContent;

            /* -------------------------------------------------------------------------- */
            /*                              Arr for database                              */
            /* -------------------------------------------------------------------------- */
            let checkedFormItems = [] ;
            let transferredItems = [];
            /* -------------------------------------------------------------------------- */
            /*                              Arr for database                              */
            /* -------------------------------------------------------------------------- */

            if (formProductPrice.children.length === 0) {
              let buyPrice = ` 
              <div class="price-block">
                <p class="title">Title</p>
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
                        <div class="name">${item.title}</div>
                        <div class="product-price">${item.price}</div>
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

            /* -------------------------------------------------------------------------- */
            /*                            JSON with id product                            */
            /* -------------------------------------------------------------------------- */
            function sendDataToServer(data) {
              const url = 'server/data.php'; 
              const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              };
            
              fetch(url, options)
                .then(response => response.json())
                .then(result => {
                  console.log('Успешно', result);

                })
                .catch(error => {
                  console.error('Ошибка', error);
                });
            }
            
            if (transferredItems.length > 0) {
              let itemJson = {
                items: transferredItems
              };
              console.log(itemJson);
              sendDataToServer(itemJson);
            }

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

          let showPayment = document.querySelector(".to-response");
          let formPayment = document.querySelector(".form-payment");
          showPayment.addEventListener("click", (e) => {
            e.preventDefault();
            formPayment.style.display = "flex";

            const fileInput = document.querySelector(".pay-input");
            fileInput.addEventListener("change", function (event) {
              const file = event.target.files[0];
              if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                fileInput.style.display = "none";
                reader.addEventListener("load", function (loadEvent) {
                  const image = new Image();
                  image.src = loadEvent.target.result;
                  const imageContainer =
                    document.getElementById("image-container");
                  imageContainer.insertAdjacentHTML(
                    "beforeend",
                    `<img class= "user-img" src="${image.src}" alt="Фото">`
                  );

                  const formData = new FormData();
                  formData.append("photo", file);
                  console.log(image.src);
                  // ОТПРАВЛЯЮ ФОТОЧКУ
                  console.log(formData)
                });

                // ЧИТАЮ ФОТКУ
                reader.readAsDataURL(file);
              } else {
                alert("Выберите файл-изображение");
              }
            });
            
          });

          let paymentAccept = document.querySelector(".accept-btn");
          let formAcces = document.querySelector(".form-response");

          paymentAccept.addEventListener("click", (e) => {
            e.preventDefault();
            formAcces.style.display = "flex";
            setTimeout(function () {
              formAcces.style.display = "none";
              formProductPrice.innerHTML = "";
              formProductItem.innerHTML = "";
              isclear.style.display = "flex";
              cartWrapper.style.display = "none";
              totalPrice.style.display = "none";
              showPayment.style.display = "none";
              formWrap.style.display = "none";
              counterReset();
            }, 2000);
            formPayment.style.display = "none";
            documentHTML.style.overflowY = "scroll";
          });
        }

        function counterReset() {
          productInfo.count = 0;
          let itemInCount = document.querySelector(".item-count");
          itemInCount.innerHTML = productInfo.count;
        }

        /* -------------------------------------------------------------------------*/
        /*                                  Buttons                                 */
        /* -------------------------------------------------------------------------*/

        let btnPlus = document.querySelectorAll(".button-primary__plus");
        let btnMinus = document.querySelectorAll(".button-primary__minus");

        /* --------------------------------------------------------------------------*/
        /*                                  Btn Plus                                 */
        /* --------------------------------------------------------------------------*/

        btnPlus.forEach(function (button) {
          button.addEventListener("click", function (event) {
            const productId = event.target.dataset.id;
            const item = findCartItem(productId);
            const countElem = document.querySelector(
              `.item-count[data-counter="${productId}"]`
            );
            let countElemAttr = countElem.getAttribute("data-counter");
            if (countElemAttr == productInfo.data) {
              item.count++;
            }

            countElem.textContent = item.count;
            updateTotalPrice();
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
            let countElemAttr = countElem.getAttribute("data-counter");
            if (countElemAttr == productInfo.data) {
              item.count--;
            }
            if (item.count === 0) {
              removeCartItem(productId);
              card.removeAttribute("data-added");
            } else {
              countElem.textContent = item.count;
              updateTotalPrice();
            }
          });
        });

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
        }
        updateTotalPrice();
        formOrder();
      }
    });
  });

  return views;
}

views();
