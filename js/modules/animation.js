"use strict"
let menuBtn;
let menu;
let cartMenu;
let menuItem;
let menuBtnSpan;

const animation = () => {
    userSearch()
    mediaAnim()
    burgerMenu()
    showCatalog()
}

let catalog = document.querySelector(".catalog-menu")
export function burgerMenu() {
    menuBtn = document.querySelector('.menu-btn');
    menu = document.querySelector(".menu--burger-list");
    cartMenu = document.querySelector(".cart-menu");
    let documentHTML = document.querySelector("html")
  
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        menu.style.display = "flex"
        cartMenu.classList.remove("cart-active")
        documentHTML.style.position = "static"
        catalog.classList.remove("catalog-menu__active")
        if (menuBtn.classList.contains("active")) {
            menuBtn.classList.add("fixed")
            menuBtn.classList.add("left")
        } else {
            menuBtn.classList.remove("fixed")
            menuBtn.classList.remove("left")
        }
    })

    return burgerMenu
}

export function mediaAnim() {
    let wrapperIconTg = document.querySelector("#telegram")
    wrapperIconTg.onmouseenter = () => {
        wrapperIconTg.style.transition = "1s"
        wrapperIconTg.style.width = "100px"
        iconTg.style.fill = "#0085FF"
    }
    wrapperIconTg.onmouseleave = () => {
        wrapperIconTg.style.transition = "1s"
        wrapperIconTg.style.width = "40px"
        iconTg.style.fill = "black"
    }
    let wrapperIconFacebook = document.querySelector(".svg-logo__wrapper-facebook")
    wrapperIconFacebook.onmouseenter = () => {
        wrapperIconFacebook.style.width = "100px"
        wrapperIconFacebook.style.transition = "1s"
        iconFacebook.style.fill = "#0057FF"
    }
    wrapperIconFacebook.onmouseleave = () => {
        wrapperIconFacebook.style.width = "40px"
        wrapperIconFacebook.style.transition = "1s"
        iconFacebook.style.fill = "black"
    }
    let wrapperIconInst = document.querySelector(".svg-logo__wrapper-inst")
    wrapperIconInst.onmouseenter = () => {
        wrapperIconInst.style.width = "100px"
        wrapperIconInst.style.transition = "1s"
        for (let i = 0; i < iconInst.length; i++) {
            iconInst[i].style.fill = "#3049CA";
        }

    }
    wrapperIconInst.onmouseleave = () => {
        wrapperIconInst.style.width = "40px"
        wrapperIconInst.style.transition = "1s"
        for (let i = 0; i < iconInst.length; i++) {
            iconInst[i].style.fill = "black";
        }
    }

    let iconTg = document.querySelector(".tg-logo__path")
    let iconFacebook = document.querySelector(".facebook-logo__path")
    let iconInst = document.querySelectorAll(".inst-logo__path")

    return mediaAnim
}

export function userSearch() {
    const btnSearch = document.querySelector(".button-search")
    const closeSearch = document.querySelector(".close-search")
    const searchStroke = document.querySelector(".search-stroke__container")
    const searchStrokeInput = document.querySelector(".search-input")
    const searchList = document.querySelector(".search-stroke__list")
    const header = document.querySelector(".full-screen__header__container ")
    btnSearch.addEventListener("click" ,  () => {
        searchStroke.classList.add("search-stroke__active")
        btnSearch.style.display = "none"
        header.style.display = 'none'
        
    })

    searchStroke.ondblclick = () => {
        searchStroke.classList.remove("search-stroke__active")
        btnSearch.style.display = "block"
        searchList.style.display = "none"
        header.style.display = 'flex'
    }
    searchStrokeInput.addEventListener('input', () => {
        if (searchStrokeInput.value !== '') {
            closeSearch.style.display = 'none';
            searchList.style.display = "flex"
        } else {
            closeSearch.style.display = 'block';
            searchList.style.display = "none"
        }
    });
    return userSearch
}

export function showCatalog() {
    menuItem = document.querySelectorAll("#catalog")
    let closeCatalog = document.querySelector(".catalog__close-btn")
    menuItem.forEach((item) => {
        item.addEventListener("click" ,  () => {
            catalog.classList.add("catalog-menu__active")
            if (catalog.classList.contains("catalog-menu__active")) {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
                menuBtn.classList.remove("fixed")
                menuBtn.classList.remove("left")
            }
        })
    })
    closeCatalog.onclick = () => {
        catalog.classList.remove("catalog-menu__active")
    }
    return showCatalog
}

animation()

export default animation