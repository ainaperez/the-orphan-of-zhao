/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import AOS from 'aos';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

AOS.init();

 /* ----- Burger Menu function ------*/

const burger = document.querySelector(".burger"); 
const menu = document.querySelector(".nav-bar-list");
const navLink = document.querySelectorAll(".nav-bar-element");

//open menú on burger click 

burger.addEventListener("click", burgerToggle); 

function burgerToggle(){
  menu.classList.toggle("active");
  burger.classList.toggle("active");
}

//close menú on Link click

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("active");  
}

//----- Form Validation -----//

const form = document.getElementById('register-form'); 

const username = document.getElementById('username'); 
console.log(username);
const age = document.getElementById('age'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const confirmPassword = document.getElementById('confirm-password');


//Show error message

function showError(input, message){
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group error'; 

    const small = inputGroup.querySelector('small');
    small.innerText = message; 
}

//Success

function showSuccess(input){
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group success'; 
   
}

//Reset

function Reset(inputArr){
    inputArr.forEach(input =>{
        const inputGroup = input.parentElement;
        inputGroup.className = 'input-group';
        input.value = ''; 
    })
}

function getFieldName(input){
  const inputGroup = input.parentElement;
  return inputGroup.querySelector('label').innerText;
}

//check required

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
        isRequired = true;
        return true;
      } else {
        showSuccess(input);
        return false;
      }
    });
  
    return isRequired;
  }



function checkLength(input, min, max){
    if(input.value.length <min){
        showError(input, `${getFieldName(input)} must be at least ${min} charaters`); 

    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} charaters`); 

    }else{
        showSuccess(input);
    }
}

//check email

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}


//check age

function checkAge(input){
    
    if(input.value>=0 && input.value<150){
        showSuccess(input);
    }else{
        showError(input, `${getFieldName(input)} is not valid`)
    }
}

//check passwords matching

function checkPasswordMatch(input1, input2){
  if(input1.value !== input2.value){
      showError(input2, 'Passwords do not match')
  }else{
      showSuccess(input1);
      showSuccess(input2);
  }
  
  }

window.onload = () =>{
    var inputs = [username, age, personalUrl, email, password, confirmPassword];

    form.addEventListener('submit', function(e){
        e.preventDefault();

        if(checkRequired(inputs)==false){
            checkLength(username, 3, 15); 
            checkLength(password, 6, 25);
            checkEmail(email);
            checkPasswordMatch(password, confirmPassword);
            checkAge(age)
            checkURL(personalUrl);
        };
    
    form.addEventListener('reset', e =>{
        e.preventDefault(); 
        Reset(inputs);

    })
       

    })

    
}




