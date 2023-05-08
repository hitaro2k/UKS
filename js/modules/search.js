"use strict"
export function search() {
  const searchInput = document.querySelector(".search-input");
  const searchList = document.querySelector(".search-stroke__list");

  fetch('./js/modules/search.json')
    .then(response => response.json())
    .then(data => {
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
        renderList(filteredData);
      });
    })
    .catch(error => console.error(error));

  function renderList(data) {
    searchList.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      li.addEventListener('click', () => {
        window.location.href = item.redirect;
      });
      searchList.appendChild(li);
    });
  }

}
search()