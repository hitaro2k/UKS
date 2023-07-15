"use strict"

export function cartLogic(){

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
      document.addEventListener("DOMContentLoaded", () =>{
        window.addEventListener("click" ,function (event) {
            if (event.target.hasAttribute("data")) {
              
                const card = event.target.closest(".product");
                const productId = card.dataset.id;
                console.log(card)
                const savedProductHTML = localStorage.getItem('productHTML');
                if (savedProductHTML) {

                    const restoredProductHTML = savedProductHTML.replace(/\\"/g, '"').replace(/\\n/g, "\n");
                    console.log(restoredProductHTML)
                }
                
            }
        })
      })
}

cartLogic()