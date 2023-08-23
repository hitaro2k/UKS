"use strict";
export function search() {
  const searchInput = document.querySelector(".search-input");
  const searchList = document.querySelector(".search-stroke__list");

  fetch('/get-api')
    .then(response => response.json())
    .then(data => {
    
    const transformedData = data.data.map(item => ({
      name: item["Производитель"],
      id: item["Код"],
      description: item["Описание"],
      price: item["Цена у.е"],
      count: item["Наличие"],
      image:item["Фото"],
      discount:item["Скидка"],
      exchange:item["Курс"]
    }));

  
    const reTransformedData = transformedData.map(item=>({
      name: item.name,
      id: item.id,
      description: item.description,
      price:item.price,
      count: item.count,
      image:item.image,
      discount:item.discount,
    }))
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredId = reTransformedData.filter(item => item.id.toLowerCase().includes(searchTerm));
        renderList(filteredId);
      });
    })
    .catch(error => console.error(error));
    function renderList(data) {
      searchList.innerHTML = '';
      data.forEach(item => {
        console.log(item)
        const ul = document.createElement('ul');
        const liName = document.createElement("li")
        const liLink = document.createElement("a")
        liLink.href = `/product/${item.id}`;
        liName.textContent = item.name
        liName.style.color = "orange"
        liLink.textContent = item.description;
    
        searchList.appendChild(ul);
        ul.appendChild(liLink)
        ul.appendChild(liName)
      });
    }
   
}

search();