"use strict"
import defAnimation from "./modules/animation/animation.js"
import{countScroll} from "./modules/animation/scrollIcon.js"
import {search} from "./modules/logic/search.js"
import {views} from "./modules/logic/views.js"
import { redirectToGmail } from "./modules/logic/mail.js"
// import { formRegister } from "./modules/forms/formRegister.js"

document.getElementById('sendArrayButton').addEventListener('click', function(e) {
    e.preventDefault()
    var dataArray = ['Value 1', 'Value 2', 'Value 3']; 
   
    var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    console.log(csrfToken);
    fetch('/process-array', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({ data: dataArray })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); 
    })
    .catch(error => {
        console.error('Error:', error); 
    });
});