"use strict"
let menuBtn ;
let menu;
const animation = () =>{
    userSearch()
    mediaAnim()
    burgerMenu()
    smoothScroll()
}

export function smoothScroll (){
    const links = document.querySelectorAll("a[href*='#']")
	for(let link of links){
		link.addEventListener("click" , function(event){
			if(menu.style.display = "none"){
				menuBtn.classList.remove("fixed")
				menuBtn.classList.remove("left")
			}
			menu.style.display = "none"
			event.preventDefault();
			const blockID = link.getAttribute("href")
			document.querySelector("" + blockID ).scrollIntoView({
				behavior:"smooth",
				block:"start"
			})
		})
		
	}
    return smoothScroll
}

export function burgerMenu (){
    menuBtn = document.querySelector('.menu-btn');
	menu = document.querySelector(".menu--burger-list");
	menuBtn.addEventListener('click', function(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		menu.style.display = "flex"
		if(menuBtn.classList.contains("active")){
			menuBtn.classList.add("fixed")
			menuBtn.classList.add("left")
		}else{
			menuBtn.classList.remove("fixed")
			menuBtn.classList.remove("left")
		}
	})

    return burgerMenu
}

export function mediaAnim () {
    let wrapperIconTg = document.querySelector("#telegram")
        wrapperIconTg.onmouseenter = () =>{
        wrapperIconTg.style.transition = "1s"
        wrapperIconTg.style.width = "100px"
        iconTg.style.fill = "#0085FF"
    }
    wrapperIconTg.onmouseleave = () =>{
        wrapperIconTg.style.transition = "1s"
        wrapperIconTg.style.width = "40px"
        iconTg.style.fill = "black"
    }
    let wrapperIconFacebook = document.querySelector(".svg-logo__wrapper-facebook")
        wrapperIconFacebook.onmouseenter = () =>{
        wrapperIconFacebook.style.width = "100px"
        wrapperIconFacebook.style.transition = "1s"
        iconFacebook.style.fill = "#0057FF"
    }
    wrapperIconFacebook.onmouseleave = () =>{
        wrapperIconFacebook.style.width = "40px"
        wrapperIconFacebook.style.transition = "1s"
        iconFacebook.style.fill = "black"
    }
    let wrapperIconInst = document.querySelector(".svg-logo__wrapper-inst")
        wrapperIconInst.onmouseenter = () =>{
        wrapperIconInst.style.width = "100px"
        wrapperIconInst.style.transition = "1s"
        for(let i =0; i < iconInst.length; i++){
            iconInst[i].style.fill = "#3049CA";
        }
        
    }
    wrapperIconInst.onmouseleave = () =>{
        wrapperIconInst.style.width = "40px"
        wrapperIconInst.style.transition = "1s"
        for(let i =0; i < iconInst.length; i++){
            iconInst[i].style.fill = "black";
        }
    }
        
    let iconTg = document.querySelector(".tg-logo__path")
    let iconFacebook = document.querySelector(".facebook-logo__path")
    let iconInst = document.querySelectorAll(".inst-logo__path")

    return mediaAnim
}

export function userSearch () {
    const btnSearch = document.querySelector(".button-search")
    const closeSearch = document.querySelector(".close-search")
    const searchStroke = document.querySelector(".search-stroke")
    const searchStrokeInput = document.querySelector(".search-stroke__input")
        
    btnSearch.onclick = ()=>{
        searchStroke.classList.add("isactive")
    }
    searchStroke.ondblclick = () =>{
        searchStroke.classList.remove("isactive")
    }
    searchStrokeInput.addEventListener('input', () => {
        if (searchStrokeInput.value !== '') {
            closeSearch.style.display = 'none';
        } else {
            closeSearch.style.display = 'block'; 
        }
    });
    return userSearch 
}

animation()

export default animation


