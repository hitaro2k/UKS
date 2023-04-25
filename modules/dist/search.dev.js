"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchStroke = searchStroke;
exports.dynamicStroke = dynamicStroke;

function searchStroke() {
  document.querySelector("#search-input").oninput = function () {
    var val = this.value.trim();
    var elasticItems = 1;
  };

  return searchStroke;
}

function dynamicStroke() {}

searchStroke();
dynamicStroke();