"use strict";
export function search() {
  const searchInput = document.querySelector(".search-input");
  const searchList = document.querySelector(".search-stroke__list");

  fetch('./js/modules/search.json')
    .then(response => response.json())
    .then(data => {
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        console.log(searchTerm)
        const filteredData = data.filter(item => item.id.toLowerCase().includes(searchTerm));
        renderList(filteredData);
        console.log(filteredData)

      });

    })
    .catch(error => console.error(error));

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'serv.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var products = JSON.parse(xhr.responseText);
            console.log(products);
           
        } else {
            console.log('Ошибка: ' + xhr.status);
        }
    };
    xhr.send();
    
  

    function renderList(data) {
      searchList.innerHTML = '';
      data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.addEventListener('click', () => {
          const redirectUrl = `server/product.php?id=${encodeURIComponent(item.id)}&name=${encodeURIComponent(item.name)}`;
          window.location.href = redirectUrl;
          
        });
        searchList.appendChild(li);
      });
    }
}

search();