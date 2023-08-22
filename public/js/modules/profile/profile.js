"use strict"

export function formRegister(){
    const selectRegister = document.querySelector("#register")
    const selectLogin = document.querySelector("#auth")
    const popupRegister = document.querySelector(".popup-register")
    const popupLogin = document.querySelector(".popup-login")
    const closePopup =document.querySelectorAll(".close-popup")
    const popup = document.querySelector(".popup-wrapper")
    const profileIcon = document.querySelector(".button-profile")
    profileIcon.addEventListener("click" , ()=>{
        popup.style.display = "flex"
    })
    closePopup.forEach(item =>{
        item.onclick = ()=>{
            popup.style.display = "none"
        }
    })

    selectRegister.onclick = ()=>{
        popupRegister.style.display = "flex"
        popupLogin.style.display = "none"
    }
    selectLogin.onclick = ()=>{
        popupLogin.style.display = "flex"
        popupRegister.style.display = "none"
    }
}
formRegister()
export function editProfile(){
    const mailEdit = document.querySelector(".mail-edit")
    const mailTitle = document.querySelector(".title-mail")
    mailEdit.addEventListener("click", ()=>{
        mailTitle.contentEditable = true;
        mailTitle.focus();
    })
}
editProfile()
