"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = validation;

function validation() {
  var exam = {
    name: false,
    patronymic: false,
    surname: false,
    phone: false,
    deliveryDepartment: false,
    deliverySolo: false
  };

  function countTrueProperties(obj) {
    var count = 0;

    for (var prop in obj) {
      if (obj[prop] === true) {
        count++;
      }
    }

    console.log(count);
    return count;
  }

  document.getElementById("name").addEventListener("input", validateName);
  document.getElementById("patronymic").addEventListener("input", validatePatronymic);
  document.getElementById("surname").addEventListener("input", validateSurname);
  document.getElementById("phone").addEventListener("input", validatePhone);
  document.getElementById("delivery-department").addEventListener("input", validateDeliveryDepartment);
  document.getElementById("delivery-solo").addEventListener("input", validateDeliverySolo);

  function validateName() {
    var nameInput = document.getElementById("name");
    var parentDiv = nameInput.parentElement;
    var regex = /^[A-Za-zА-Яа-яЁё]+$/;

    if (nameInput.value.trim() === '' || !regex.test(nameInput.value)) {
      parentDiv.style.border = "2px solid red";
      exam.name = false;
    } else {
      parentDiv.style.border = "2px solid transparent";
      exam.name = true;
    }

    checkAllFields();
  }

  function validatePatronymic() {
    var patronymicInput = document.getElementById("patronymic");
    var parentDiv = patronymicInput.parentElement;
    var regex = /^[A-Za-zА-Яа-яЁё]+$/;

    if (patronymicInput.value.trim() === '' || !regex.test(patronymicInput.value)) {
      parentDiv.style.border = "2px solid red";
      exam.patronymic = false;
    } else {
      parentDiv.style.border = "2px solid transparent";
      exam.patronymic = true;
    }

    checkAllFields();
  }

  function validateSurname() {
    var surnameInput = document.getElementById("surname");
    var parentDiv = surnameInput.parentElement;
    var regex = /^[A-Za-zА-Яа-яЁё]+$/;

    if (surnameInput.value.trim() === '' || !regex.test(surnameInput.value)) {
      parentDiv.style.border = "2px solid red";
      exam.surname = false;
    } else {
      parentDiv.style.border = "2px solid transparent";
      exam.surname = true;
    }

    checkAllFields();
  }

  function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var parentDiv = phoneInput.parentElement;
    var regex = /^\d+$/;

    if (phoneInput.value.trim() === '' || !regex.test(phoneInput.value)) {
      parentDiv.style.border = "2px solid red";
      exam.phone = false;
    } else {
      parentDiv.style.border = "2px solid transparent";
      exam.phone = true;
    }

    checkAllFields();
  }

  function validateDeliveryDepartment() {
    var deliveryDepartmentInput = document.getElementById("delivery-department");
    var parentDiv = deliveryDepartmentInput.parentElement;
    var regex = /^[\d\s]+$/;

    if (deliveryDepartmentInput.value.trim() === '' || !regex.test(deliveryDepartmentInput.value)) {
      parentDiv.style.border = "2px solid red";
      exam.deliveryDepartment = false;
    } else {
      parentDiv.style.border = "2px solid transparent";
      exam.deliveryDepartment = true;
    }

    var deliverySoloInput = document.getElementById("delivery-solo");

    if (deliverySoloInput.value === "1") {
      deliverySoloInput.disabled = true;
      deliverySoloInput.value = "";
      parentDiv.style.border = "2px solid transparent";
    } else {
      deliverySoloInput.disabled = false;
    }

    checkAllFields();
  }

  function validateDeliverySolo() {
    var deliverySoloInput = document.getElementById("delivery-solo");
    var parentDiv = deliverySoloInput.parentElement;
    var regex = /^[\d\s]+$/;

    if (deliverySoloInput.value.trim() === '' || !regex.test(deliverySoloInput.value)) {
      parentDiv.style.border = "2px solid red";
    } else {
      parentDiv.style.border = "2px solid transparent";
    }

    var deliveryDepartmentInput = document.getElementById("delivery-department");

    if (deliverySoloInput.value === "1") {
      deliveryDepartmentInput.disabled = true;
      deliveryDepartmentInput.value = "";
    } else {
      deliveryDepartmentInput.disabled = false;
    }

    checkAllFields();
  }

  function checkAllFields() {
    var inputs = document.querySelectorAll(".info-input");
    var allFieldsFilled = true;

    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      console.log(exam);
      console.log(input);

      if (countTrueProperties(exam) <= 4) {
        allFieldsFilled = false;
        break;
      }
    }

    var toCheckedButton = document.querySelector(".to-checked");

    if (allFieldsFilled) {
      toCheckedButton.style.display = "block";
    } else {
      toCheckedButton.style.display = "none";
    }
  }
}

validation();