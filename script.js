const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const repassword =document.getElementById('repassword');


function Error(input, message){
    input.classList.add('is-invalid');
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function Success( input){
    input.classList.add('is-valid');
}
const validateEmail = (email) => {// i took this code from stackoverflow
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
    


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value===''){
       Error(username , 'Username Required!');
    }else{
        Success(username);
    }
    if(email.value===''){
        Error(email , 'Email Required!');
    }else if(!validateEmail(email)){
        Error(email ,'You Should Enter Your E-Mail Corretcly!')

    }
    else{
        Success(email);
    }
    if(password.value===''){
        Error(password , 'Password Required!');
    }else{
        Success(password);
    }
    if(repassword.value===''){
        Error(repassword , 'Re-password Required!')
    }else{
        Success(repassword);
    }


})