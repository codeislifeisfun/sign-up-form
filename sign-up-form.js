"use strict"

const password = document.getElementById('password');
const retyped = document.getElementById('confirm');
const error = document.getElementById('password_error');
const button = document.querySelector('button');

// button.addEventListener('click', confirmPassword);
function confirmPassword(form) {
    if (password.value === retyped.value) {
        error.textContent = '';
        error.style.backgroundColor = 'rgba(0,0,0,0)';
        error.style.color = 'rgba(0,0,0,0)';
        error.style.borderRadius = '0px';
        error.style.fontSize = '0px';
        error.style.padding = '0px';
        password.style.borderColor = 'rgba(0,0,0,0)';
        retyped.style.borderColor = 'rgba(0,0,0,0)';
        return true;
    } else {
        error.textContent = 'Confirmation password does not match password.';
        error.style.backgroundColor = 'white';
        error.style.color = 'black';
        error.style.borderRadius = '5px';
        error.style.fontSize = '13px';
        error.style.padding = '10px';
        password.style.borderColor = 'red';
        retyped.style.borderColor = 'red';
        return false;
    }
}