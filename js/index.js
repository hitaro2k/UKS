"use strict"
window.JustValidate
import chooseProduct from "../modules/choose.js"
import animation from "../modules/animation.js"
import {views} from "../modules/views.js"
import {countScroll} from "../modules/smooth.js"

document.addEventListener("DOMContentLoaded" , function (){
  
  function validate(){
    const validator = new JustValidate('.form-footer',  undefined, [
      {
        key: 'Email is required',
        dict: {
          Spanish: 'Correo electronico es requerido',
          French: "L'e-mail est requis",
        },
      },
      {
        key: 'Email is invalid',
        dict: {
          Spanish: 'El correo electrónico es invalido',
          French: 'Le courriel est invalide',
        },
      },
      
    ]);
    validator.addField('.form-footer__input', [
        {
          rule: 'required',
          errorMessage: 'Email is required',
        },
        {
          rule: 'email',
          errorMessage: 'Email is invalid',
        },
    ]);
    
    validator.setCurrentLocale('English');

    let btnSubmit = document.querySelector(".form-footer__submit")
      btnSubmit.onmouseenter = () =>{
        btnSubmit.style.color = "white"
        btnSubmit.style.background = "black"
        btnSubmit.style.border = "1px solid #ffffff69"
        btnSubmit.style.transition = "1s"
      }
      btnSubmit.onmouseleave = () =>{
        btnSubmit.style.color = "black"
        btnSubmit.style.background = "white"
        btnSubmit.style.border = "none"
        btnSubmit.style.transition = "1s"
      }
      return validate
    }
  validate()
    
    
})

