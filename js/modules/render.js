const popularContainer = document.querySelector("#popular__container");

export async function getProductsPopular() {
  const response = await fetch("./js/modules/popular.json")
  let documentHTML = document.querySelector("html")
 
  const productArray = await response.json();
  productArray.forEach((item) => {
    const convertedPrice = item.price * 37.5

    const productHTML = `
        <div class="product" data-id ="${item.id}">
          <img class="product-image" src="${item.image}" alt="img">
              <div class = "product-description">
                <a class="product-title">${item.title}</a>
                <p class="product-articul">${item.articul}</p>
              </div>
              <div class ="product-info">
                <div class ="product-info__price"> 
                <div class = "all-price">
                  <p class="product-price__dollar">${item.price}$</p>
                  <p class="product-price__grn">${convertedPrice} грн</p>
                </div>
                  <p class="product-status">${item.status}</p>
                </div>
              <button class="product-button" data > ${item.buy}</button>
            </div>
        </div>`
    popularContainer.insertAdjacentHTML("beforeend", productHTML)
    documentHTML.setAttribute("load" ,true)
  })
  const productTitle = document.querySelectorAll(".product-title")
  renderData(productTitle)
}
export function renderData(data) {
  data.forEach(item => {
    item.addEventListener("click", (e) => {
      const closestCard = e.target.closest(".product");
      const priceInNumber = closestCard.querySelector(".product-price__dollar").textContent
      var number = parseInt(priceInNumber);
      const cartAlready = {
        "image": closestCard.querySelector(".product-image").src,
        "name": closestCard.querySelector(".product-title").textContent,
        "articul": closestCard.querySelector(".product-articul").textContent,
        "price": number,
        "id":closestCard.getAttribute("data-id")
      };

      const url = `product.html?cartData=${encodeURIComponent(JSON.stringify(cartAlready))}`;
      window.location.href = url;
    });
  });
}

