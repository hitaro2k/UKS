"use strict"
export function views (){

    // ! POPULAR PRODUCTS
    // ? PRODUCT

    const productsPopular = [
        { name: 'Chevrolet brakes', price: 1000, image: 'img/15841e3988289d2690dd9e88799e1903-removebg-preview.png',articul:"A78D12RR" , buy: "В кошик", status:"В наявності"  },
    ];

   // ? PRODUCT



    const productTemplate = (product) => `
    <div class="product">
      <img class="product-image" src="${product.image}" alt="${product.name}">
          <div class = "product-description">
            <a href = "/product.html" class="product-title">${product.name}</a>
            <p class="product-articul">${product.articul}</p>
          </div>
          <div class ="product-info">
            <div class ="product-info__price"> 
              <p class="product-price">${product.price} грн</p>
              <p class="product-status">${product.status}</p>
            </div>
          <button class="product-button"> ${product.buy}</button>
          
        </div>
    </div>
  `;
  
  const productsContainer = document.querySelector('.products__container');
  
  productsPopular.forEach((product) => {
    const productHTML = productTemplate(product);
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  // ! ACTUAL PRODUCTS

  // ? PRODUCT

  const productsActual = [
    { name: 'Chevrolet brakes', price: 1000, image: 'img/15841e3988289d2690dd9e88799e1903-removebg-preview.png',articul:"A78D12RR" , buy: "В кошик", status:"В наявності"  },
  ];

  // ? PRODUCT



  const productsContainerActual = document.querySelector('.products__container__actual');
  productsActual.forEach((product) => {
    const productHTML = productTemplate(product);
    productsContainerActual.insertAdjacentHTML('beforeend', productHTML);
  });

  return views
}

views()
