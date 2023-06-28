"use strict";
export function search() {
  const searchInput = document.querySelector(".search-input");
  const searchList = document.querySelector(".search-stroke__list");

  fetch('./js/modules/search.json')
    .then(response => response.json())
    .then(data => {
    const transformedData = data.map(item => ({
      name: item["Производитель"],
      id: item["Код"],
      description: item["Описание"],
      price: item["Цена у.е."],
      count: item["Наличие"],
    }));

      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredId = transformedData.filter(item => item.id.toLowerCase().includes(searchTerm));
        renderList(filteredId);
      });
    })
    .catch(error => console.error(error));
    function renderList(data) {
      searchList.innerHTML = '';
      data.forEach(item => {
        const ul = document.createElement('ul');
        const liDescription = document.createElement("li")
        const liName = document.createElement("li")
        liName.textContent = item.name
        liName.style.color = "orange"
        liDescription.textContent = item.description;
        liDescription.addEventListener('click', () => {
          const redirectUrl = `server/product.php?id=${encodeURIComponent(item.id)}&name=${encodeURIComponent(item.name)}`;
          window.location.href = redirectUrl;
          
        });
        searchList.appendChild(ul);
        ul.appendChild(liDescription)
        ul.appendChild(liName)
      });
    }
   
}

search();