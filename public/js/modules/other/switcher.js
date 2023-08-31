export function switcher(){
    try{
        const contentSwitcher = document.querySelectorAll(".content__img")
        contentSwitcher.forEach(item =>{
            item.onmouseenter = ()=>{
                const sideImg  = item.querySelector("#img_side")
                const frontImg  = item.querySelector("#img_front")
                if(sideImg.classList.contains('active-car')){
                    sideImg.classList.remove("active-car")
                    sideImg.classList.add("unactive-car")
                    frontImg.classList.add("active-car")
                
                    frontImg.classList.remove("unactive-car")
                }else{
                    sideImg.classList.add("active-car")
                    sideImg.classList.remove("unactive-car")
                    frontImg.classList.remove("active-car")
                    frontImg.classList.add("unactive-car")
                }
        
                
            }
        })
        
        const markImg = document.querySelectorAll("#mark-img")
        markImg.forEach(item =>{
            item.onmouseenter = ()=>{
                item.style.width = "40" + "%"
                item.style.transition = "1s"
            }
            item.onmouseleave = ()=>{
                item.style.width = "30" + "%"
                item.style.transition = "1s"
            }
           
        })
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const slides = document.querySelectorAll('.container__switcher');
        const videos = document.querySelectorAll('.full-screen__bg');
        const currentSlideSpan = document.getElementById('currentSlide');
    
        const slideOrder = ['chevrolet', 'dodge', 'ford'];
        let currentSlideIndex = 0;
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                slide.style.display = 'block';
                } else {
                slide.style.display = 'none';
                }
            });
    
            videos.forEach((video, i) => {
                if (i === index) {
                video.style.display = 'block';
                } else {
                video.style.display = 'none';
                }
            });
    
            currentSlideSpan.textContent = index + 1;
        }
    
    
        prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
        });
    
        nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
        });
    
        showSlide(currentSlideIndex);
    
       
    
        const moreBtnChevrolet = document.querySelector('#chevrolet-btn')
        const moreBtnDodge = document.querySelector('#dodge-btn')
        const moreBtnFord = document.querySelector('#ford-btn')
    
        const btnLine = document.querySelectorAll("#line")
        function btnDecoration(){
            moreBtnChevrolet.onmouseenter = ()=>{
                moreBtnChevrolet.style.background = "#ffae19b3"
                moreBtnChevrolet.style.transition = "1s"
                btnLine.forEach(item =>{
                    item.style.width = "65px"
                    item.style.marginRight = "5" + "px"
                    item.style.transition = "1s"
                })
               
            }
            moreBtnChevrolet.onmouseleave = ()=>{
                moreBtnChevrolet.style.background = "#ffae194f"
                moreBtnChevrolet.style.transition = "1s"
                btnLine.forEach(item =>{
                    item.style.width = "50px"
                    item.style.marginRight = "20" + "px"
                    item.style.transition = "1s"
                })
           
            }
    
            moreBtnDodge.onmouseenter = ()=>{
                moreBtnDodge.style.background = "#a91313e7"
                moreBtnDodge.style.transition = "1s"
                btnLine.forEach(item =>{
                    item.style.width = "65px"
                    item.style.marginRight = "5" + "px"
                    item.style.transition = "1s"
                })
            }
            moreBtnDodge.onmouseleave = ()=>{
                moreBtnDodge.style.background = "#ff1f1f54"
                moreBtnDodge.style.transition = "1s"
                btnLine.forEach(item =>{
                    item.style.width = "50px"
                    item.style.marginRight = "20" + "px"
                    item.style.transition = "1s"
                })
            }
    
            moreBtnFord.onmouseenter = ()=>{
                moreBtnFord.style.background = "#050dfdfb"
                moreBtnFord.style.transition = "1s"
                btnLine.forEach(item =>{
                    item.style.width = "65px"
                    item.style.marginRight = "5" + "px"
                    item.style.transition = "1s"
                })
            }
            moreBtnFord.onmouseleave = ()=>{
                moreBtnFord.style.background = "#050dfd50"
                moreBtnFord.style.transition = "1s"
                btnLine.forEach(item =>{
                    item.style.width = "50px"
                    item.style.marginRight = "20" + "px"
                    item.style.transition = "1s"
                })
            }
        }
    
        btnDecoration()
    }catch{

    }
}


switcher()