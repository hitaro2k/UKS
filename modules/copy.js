const productsPopular = [
  { name: 'Двигун', price: 20000, image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
  articul:"A78D12RR" , buy: "В кошик",
  status:"В наявності", id:"2B" },
    { name: 'Двигун', price: 20000, image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
  articul:"A78D12RR" , buy: "В кошик",
  status:"В наявності", id:"3B" },
 
];


const productTemplate = (product) => `
      <div class="product" data-id ="${product.id}">
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
            <button class="product-button" data > ${product.buy}</button>
            
          </div>
      </div>
    `;

 productsPopular.forEach((product) => {
        const productHTML = productTemplate(product);
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
      });

    //   ? ACTUAL PRODUCTS
  
      const productsActual = [
        { name: 'Двигун', price: 20000, image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
        articul:"A78D12RR" , buy: "В кошик",
        status:"В наявності", id:"2B" },
          { name: 'Двигун', price: 20000, image: 'img/dvigatel_alfa_romeo_1600-removebg-preview.png',
        articul:"A78D12RR" , buy: "В кошик",
        status:"В наявності", id:"3B" },
       
      ];
    

      const productsContainerActual = document.querySelector('.products__container__actual');
      productsActual.forEach((product) => {
        const productHTML = productTemplate(product);
        productsContainerActual.insertAdjacentHTML('beforeend', productHTML);
      });
   