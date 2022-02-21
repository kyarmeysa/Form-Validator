const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function Error(input, message) {
    input.classList.add('is-invalid');
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function Success(input) {
    input.classList.add('is-valid');
}
function CheckEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        Success(input);
    } else {
        Error(input, 'You  entered an incorrect e-mail. Please enter your e-mail correctly!');
    }
}

function CheckRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            Error(input, `${input.id} is required!`);
        } else {
            Success(input);
        }
    })

}
function CheckLength(input, min, max) {
    if (input.value.length < min) {
        Error(input, ` The ${input.id} must be at least ${min} characters!`)
    } else if (input.value.length > max) {
        Error(input, ` The ${input.id} must be up to ${max} characters!`)
    } else {
        Success(input);
    }

}
function CheckPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        Error(input2, 'The passwords were not matched. Please make sure to enter the same passwords!')
        input1.classList.add('is-invalid');
        const div = input1.nextElementSibling;
        div.innerText = 'The passwords were not matched. Please make sure to enter the same passwords!' ;
        div.className = 'invalid-feedback';
    }

}
function CheckPhone(input){
    
    var exp = /^\d{10}$/;   
    if(!exp.test(input.value)) 
       {Error(input, 'The phone number must be 10 characters! Do not enter  more or less here!');}

   
    
    
    
}





form.addEventListener('submit', function (e) {
    


    CheckRequired([username, email, phone, password, repassword]);
    CheckEmail(email);
    CheckLength(username, 5, 20);
    CheckPasswords(password, repassword);
    CheckPhone(phone);
    e.preventDefault();
});