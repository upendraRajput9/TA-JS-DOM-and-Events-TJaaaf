let form = document.querySelector('form')
let usernameError = "";

let usernumError="";
let userPassError="";


function handleSubmit(event){
event.preventDefault();
console.dir(event.target)

let usernameElm = event.target.elements.username


if(usernameElm.value.length < 5){
    usernameError = "Can't be less than five characters!"
}
let useremailElm = event.target.elements.email

let usernumElm = event.target.elements.number
if(usernumElm.value.length < 7){
    usernumError = "Can't be less than seven digits"
}

let password = event.target.elements.password
let confirm = event.target.elements.confirmPass

if(password.value!==confirm.value){
    userPassError="Password and confirm write same"
}
confirm.nextElementSibling.innerText = userPassError
usernameElm.nextElementSibling.innerText = usernameError
usernumElm.nextElementSibling.innerText=usernumError



if(usernameElm.value.length < 5||usernumElm.value.length < 7||password.value!==confirm.value){

}else{
    alert(`User Added Successfully!`)
}


}


form.addEventListener("submit",handleSubmit)