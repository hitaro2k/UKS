"use strict"

export function panelProfile(){
    const listItem = document.querySelectorAll(".list-item")
    const spanItem = document.querySelectorAll(".span-header")
    const userMail = document.querySelector("#user-mail").textContent
    
    localStorage.setItem("mail" , userMail)

    listItem.forEach(item =>{
        item.onmouseenter = ()=>{
            item.style.color = "orange"
            item.style.transition = "1s"
        }
        item.onmouseleave = ()=>{
            item.style.color = "white"
            item.style.transition = "1s"
        }
        item.onclick = ()=>{
            const dataItem = item.getAttribute("data-item");
            spanItem.forEach(item=>{
                const spanDataItem = item.getAttribute("data-item");
                if (dataItem === spanDataItem) {
                   item.style.display = "flex"
                }else{
                    item.style.display = "none"
                }
            })
            const panel = document.querySelectorAll(".panel")
            panel.forEach(item =>{
                const panelDataItem = item.getAttribute("data-item")
                if(dataItem == panelDataItem){
                    item.style.display = "flex"
                }else{
                    item.style.display = "none"
                }
            })

           
        }
    })
    const logout = document.querySelector("#logout")
    logout.onclick = ()=>{
        localStorage.clear()
    }
   
}

panelProfile()
