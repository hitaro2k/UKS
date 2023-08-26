"use strict"

export function closeEditer(){
    const closeBtn = document.querySelector("#close-editor")
    closeBtn.onclick = ()=>{
        window.location.href = "/profile"
    }
}
closeEditer()