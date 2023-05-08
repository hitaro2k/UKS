"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

function search() {
  var searchInput = document.querySelector(".search-input");
  var searchList = document.querySelector(".search-stroke__list");
  fetch('./js/modules/search.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();
      var filteredData = data.filter(function (item) {
        return item.name.toLowerCase().includes(searchTerm);
      });
      renderList(filteredData);
    });
  })["catch"](function (error) {
    return console.error(error);
  });

  function renderList(data) {
    searchList.innerHTML = '';
    data.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item.name;
      li.addEventListener('click', function () {
        window.location.href = item.redirect;
      });
      searchList.appendChild(li);
    });
  }
}

search();