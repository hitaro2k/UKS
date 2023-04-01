const popularContainer = document.querySelector("#popular__container");
const actualContainer = document.querySelector("#actual__container");

getProductsPopular()
getProductsActual()

export async function getProductsPopular() {
  const response = await fetch("modules/catalogPopular.json")

  const productArray = await response.json();
  renderProductsPopular(productArray)
}


function renderProductsPopular(productArray) {
  productArray.forEach((item) => {
    const productHTML = `
         <div class="product" data-id ="${item.id}">
           <img class="product-image" src="${item.image}" alt="img">
               <div class = "product-description">
                 <a href = "/product.html" class="product-title">${item.title}</a>
                 <p class="product-articul">${item.articul}</p>
               </div>
               <div class ="product-info">
                 <div class ="product-info__price"> 
                   <p class="product-price">${item.price} грн</p>
                   <p class="product-status">${item.status}</p>
                 </div>
               <button class="product-button" data > ${item.buy}</button>
               
             </div>
         </div>`
    popularContainer.insertAdjacentHTML("beforeend", productHTML)


  })
}


export async function getProductsActual() {
  const response = await fetch("modules/catalogActual.json")

  const productArray = await response.json();
  renderProductsActual(productArray)
}


function renderProductsActual(productArray) {
  productArray.forEach((item) => {
    const productHTML = `
        <div class="product" data-id ="${item.id}">
          <img class="product-image" src="${item.image}" alt="img">
              <div class = "product-description">
                <a href = "/product.html" class="product-title">${item.title}</a>
                <p class="product-articul">${item.articul}</p>
              </div>
              <div class ="product-info">
                <div class ="product-info__price"> 
                  <p class="product-price">${item.price} грн</p>
                  <p class="product-status">${item.status}</p>
                </div>
              <button class="product-button" data > ${item.buy}</button>
              
            </div>
        </div>`
    actualContainer.insertAdjacentHTML("beforeend", productHTML)


  })
}