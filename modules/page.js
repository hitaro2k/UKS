"use strict"
import {burgerMenu,mediaAnim,userSearch} from "./animation.js"
import {productsPopular} from "../modules/pageCatalog.js"
export function views() {
  let href = 1;

  const productTemplate = (product) => `
    <div class="product__content">
      <div class="product__top-content">
        <img class="product-image" src="${product.image}" alt="${product.name}">  
        <div class="product__top-content__info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-articul">${product.articul}</p>
            <p class="product-status">${product.status}</p>
            <div class="product-buy__btn">
                <p class="price">${product.price}грн</p>
                <button class="buy-button" >${product.buy}</button>
            </div>
        </div>
      </div>
        <div class="product__bottom-content">
            <h2 class="product__bottom-content__title">Характеристики</h2>
            <table class="characteristic-table">

                <tr class = "table-block">
                    <th class = "table-item">${product.firstCh}</th>
                    <td class = "table-item">${product.firstChMean}</td>
                </tr>

            </table>

        </div>   
      </div>
    </div>
  `;

  const productsContainer = document.querySelector('.products__container');

  productsPopular.forEach((product) => {
    const productHTML = productTemplate(product);
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  return views
}
views()