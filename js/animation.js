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
			chooseBody.style.borderRadius = "5px"
        } 
    }
    for(let i = 0 ; i <closeRightSide.length; i++){
        closeRightSide[i].onclick = () =>{
            chooseRight.classList.remove("active")
        }
    }

    let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector(".menu--burger-list");
	
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
    

	let calcScrollValue = () =>{
		let scrollProgress = document.getElementById("progress");
		let progressValue = document.getElementById("progress-value");
		let pos = document.documentElement.scrollTop;
		let calcHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 100)/ calcHeight)
		;
		if (pos>100){
			scrollProgress.style.display = "grid";
		} else{
			scrollProgress.style.display = "none"; 
	
		}
		scrollProgress.addEventListener("click", () =>{
			document.documentElement.scrollTop = 0;
		});
		scrollProgress.style.background=`conic-gradient(#ffa600 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
	}; 
	
	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;

	// !header animation
	const btnSearch = document.querySelector(".button-search")
	btnSearch.onclick = ()=>{
		
	}

	// ! footer animation
	
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

	// ! FORM
	
	
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

})


