const popularContainer = document.querySelector("#popular__container");

export async function getProductsPopular() {
  const response = await fetch("./js/modules/popular.json")
  
  const productArray = await response.json();
  productArray.forEach((item) => {
    const productHTML = `
        <div class="product" data-id ="${item.id}">
          <img class="product-image" src="${item.image}" alt="img">
              <div class = "product-description">
                <a class="product-title">${item.title}</a>
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
  const productTitle = document.querySelectorAll(".product-title")
  renderData(productTitle)
}
export function renderData(data) {
  data.forEach(item => {
    item.addEventListener("click", (e) => {
      const closestCard = e.target.closest(".product");
      const cartAlready = {
        "image": closestCard.querySelector(".product-image").src,
        "name": closestCard.querySelector(".product-title").textContent,
        "button": closestCard.querySelector(".product-button").textContent,
        "articul": closestCard.querySelector(".product-articul").textContent,
        "price": closestCard.querySelector(".product-price").textContent
      };

      const url = `product.html?cartData=${encodeURIComponent(JSON.stringify(cartAlready))}`;
      window.location.href = url;
    });
  });
}

