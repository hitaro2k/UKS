"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectToGmail = redirectToGmail;

function redirectToGmail() {
  var link = document.querySelector(".info-block__email-link");
  var email = 'ukserviceofficial@gmail.com';
  var subject = 'Autoparts';
  var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email) + '&su=' + encodeURIComponent(subject);

  link.onclick = function () {
    return window.location.href = gmailUrl;
  };
}

redirectToGmail();