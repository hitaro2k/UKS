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
      console.log(searchTerm);
      var filteredData = data.filter(function (item) {
        return item.id.toLowerCase().includes(searchTerm);
      });
      renderList(filteredData);
      console.log(filteredData);
    });
  })["catch"](function (error) {
    return console.error(error);
  });
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'serv.php', true);

  xhr.onload = function () {
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
    data.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item.name;
      li.addEventListener('click', function () {
        var redirectUrl = "server/product.php?id=".concat(encodeURIComponent(item.id), "&name=").concat(encodeURIComponent(item.name));
        window.location.href = redirectUrl;
      });
      searchList.appendChild(li);
    });
  }
}

search();