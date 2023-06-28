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
    var transformedData = data.map(function (item) {
      return {
        name: item["Производитель"],
        id: item["Код"],
        description: item["Описание"],
        price: item["Цена у.е."],
        count: item["Наличие"]
      };
    });
    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();
      var filteredId = transformedData.filter(function (item) {
        return item.id.toLowerCase().includes(searchTerm);
      });
      renderList(filteredId);
    });
  })["catch"](function (error) {
    return console.error(error);
  });

  function renderList(data) {
    searchList.innerHTML = '';
    data.forEach(function (item) {
      var ul = document.createElement('ul');
      var liDescription = document.createElement("li");
      var liName = document.createElement("li");
      liName.textContent = item.name;
      liName.style.color = "orange";
      liDescription.textContent = item.description;
      liDescription.addEventListener('click', function () {
        var redirectUrl = "server/product.php?id=".concat(encodeURIComponent(item.id), "&name=").concat(encodeURIComponent(item.name));
        window.location.href = redirectUrl;
      });
      searchList.appendChild(ul);
      ul.appendChild(liDescription);
      ul.appendChild(liName);
    });
  }
}

search();