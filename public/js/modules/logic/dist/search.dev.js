"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

function search() {
  var searchInput = document.querySelector(".search-input");
  var searchList = document.querySelector(".search-stroke__list");
  fetch('/get-api').then(function (response) {
    return response.json();
  }).then(function (data) {
    var transformedData = data.data.map(function (item) {
      return {
        name: item["maker"],
        id: item["code"],
        description: item["name"],
        price: item["price"],
        count: item["count"],
        analogue: item["analogue"],
        exchange: item["exchange"]
      };
    });
    var reTransformedData = transformedData.map(function (item) {
      return {
        name: item.name,
        id: item.id,
        description: item.description,
        price: item.price,
        count: item.count,
        analogue: item.analogue
      };
    });
    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();
      var filteredId = reTransformedData.filter(function (item) {
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
      var liName = document.createElement("li");
      var liLink = document.createElement("a");
      liLink.href = "/product/".concat(item.id);
      liName.textContent = item.name;
      liName.style.color = "orange";
      liLink.textContent = item.description;
      searchList.appendChild(ul);
      ul.appendChild(liLink);
      ul.appendChild(liName);
    });
  }
}

search();