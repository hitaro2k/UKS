"use strict";

var _animation = _interopRequireDefault(require("./modules/animation/animation.js"));

var _scrollIcon = require("./modules/animation/scrollIcon.js");

var _search = require("./modules/logic/search.js");

var _views = require("./modules/logic/views.js");

var _mail = require("./modules/logic/mail.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.getElementById('sendArrayButton').addEventListener('click', function (e) {
  e.preventDefault();
  var dataArray = ['Value 1', 'Value 2', 'Value 3'];
  var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  console.log(csrfToken);
  fetch('/process-array', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
      data: dataArray
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.message);
  })["catch"](function (error) {
    console.error('Error:', error);
  });
});