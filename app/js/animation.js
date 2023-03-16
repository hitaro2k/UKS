document.addEventListener("DOMContentLoaded" , function(){
    let chooseBody = document.querySelector(".full-screen__choose")
    let chooseLeft = document.querySelector(".full-screen__choose-left")
    let chooseRight = document.querySelector(".full-screen__choose-right")
    let chooseBtnMark = document.querySelector("#markSide")
    let chooseBtnYear = document.querySelector("#yearSide")
    let closeLeftSide  = document.querySelectorAll(".close-screen__left")
    let closeRightSide  = document.querySelectorAll(".close-screen__right")
    
    chooseBtnMark.onclick = () =>{
        chooseLeft.classList.add("active")
        chooseBody.style.borderRadius = "0px"
    }
    chooseBtnYear.onclick = () =>{
        chooseRight.classList.add("active")
        
    }

    for(let i = 0 ; i < closeLeftSide.length; i++ ){
        closeLeftSide[i].onclick = () =>{
            chooseLeft.classList.remove("active")
        } 
    }
    for(let i = 0 ; i <closeRightSide.length; i++){
        closeRightSide[i].onclick = () =>{
            chooseRight.classList.remove("active")
        }
    }

    let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	
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
    
    // Сделать анимку наводе через импорт и експорт
})


