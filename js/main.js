"use strict"
// import chooseProduct from "../modules/choose.js"
import animation from "../modules/animation.js"
import {views} from "../modules/views.js"
import{countScroll} from "../modules/scrollIcon.js"
// import {searchStroke} from "../modules/search.js"
import {getProductsPopular,getProductsActual} from "../modules/renderCatalog.js"
import chooseProduct from "../modules/choose.js"


document.addEventListener("DOMContentLoaded", function () {
  function validate() {
    let btnSubmit = document.querySelector(".form-footer__submit")
    btnSubmit.onmouseenter = () => {
      btnSubmit.style.color = "white"
      btnSubmit.style.background = "black"
      btnSubmit.style.border = "1px solid #ffffff69"
      btnSubmit.style.transition = "1s"
    }
    btnSubmit.onmouseleave = () => {
      btnSubmit.style.color = "black"
      btnSubmit.style.background = "white"
      btnSubmit.style.border = "none"
      btnSubmit.style.transition = "1s"
    }
    return validate
  }
  validate()


})