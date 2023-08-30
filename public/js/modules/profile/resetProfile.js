"use strict"

export function closeEditer(){
    const closeBtn = document.querySelector("#close-editor")
    closeBtn.onclick = ()=>{
        window.location.href = "/profile"
    }
}

export function openDelete(){
    const delBtn = document.querySelector(".btn-del")
    const formDel = document.querySelector(".form-wrapper__delete")
    delBtn.onclick = () =>{
        formDel.style.display = "flex"
    }
}



closeEditer()
openDelete()