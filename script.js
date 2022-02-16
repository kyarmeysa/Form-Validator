const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
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
        Error(input, 'You  Entered an Incorrect E-mail. Please Enter Your E-Mail Correctly!');
    }
}

function CheckRequired(inputs){
    inputs.forEach(function(input){
        if(input.value=== ''){
            Error(input, `${input.id} is required!`);
        }else{
            Success(input);
        }
    })
   
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

   CheckRequired([username , email , password , repassword]);
   CheckEmail(email);
});