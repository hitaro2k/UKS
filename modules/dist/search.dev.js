"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

document.querySelector("#search-input").oninput = function () {
  var val = this.value.trim();
  var elasticItems = 1;
  console.log(val);
};

function search() {}