// const ul = document.querySelector('.userList');

// ul.firstElementChild.textContent = "Hello";
// ul.firstElementChild.innerHTML = "<h1>Hello World</h1>";
// ul.firstElementChild.style.color = 'red';
// ul.lastElementChild.innerHTML = "<h1>Hello Rahul</h1>";
// ul.lastElementChild.style.color = 'green';




// validation

const myForm = document.querySelector("#my-form");
const emailValue = document.querySelector('#exampleInputEmail1');
const passwordValue = document.querySelector('#exampleInputPassword1');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
   e.preventDefault();

   if(emailValue.value ==""  || passwordValue.value ==""){
      msg.innerHTML = "Please Enter Your Email and Password to login ";

      setTimeout(()=>{
        msg.remove();
      },3000);
   }else{
    console.log(emailValue.value);
    console.log(passwordValue.value);

    emailValue.value="";
    passwordValue.value="";
   }
}
