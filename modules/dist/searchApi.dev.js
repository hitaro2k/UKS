"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchApi = searchApi;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function searchApi() {
  var api = "https://gist.githubusercontent.com/hitaro2k/260f3675d8af74b7405904781b1c7ff5/raw/fcb099b1b39652603bba8bcebd4b5316f483d29f/searchJSON.json";
  var station = [];
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    var api = data;
    api.forEach(function (item) {
      station.push.apply(station, _toConsumableArray(item.station));
    });
  })["catch"](function (error) {
    return console.error('Помилка:', error);
  });
}

searchApi();