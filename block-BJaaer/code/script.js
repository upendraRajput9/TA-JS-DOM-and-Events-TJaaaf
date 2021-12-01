//  modal
let form2 = document.querySelector(`.form2`);
let text = document.querySelector(`.text`)
let email = document.querySelector(`.email`)
let love = document.querySelector(`.youLove`)
let color = document.querySelector(`.color`)
let rating = document.querySelector(`.rating`)
let book = document.querySelector(`.genre`)
let agree = document.querySelector(`.agree`)
let close=document.querySelector(`h3`)
let form = document.querySelector(`form`);
 let userInfo= {};
 
 function handler(event){
event.preventDefault();
userInfo.name=form.elements.text.value
userInfo.email=form.elements.email.value
userInfo.gender=form.elements.gender.value
userInfo.color=form.elements.color.value
userInfo.range=form.elements.range.value
userInfo.radio=form.elements.drone.value
userInfo.term=form.elements.terms.checked
form.style.display=`none`
form2.style.display=`block`
text.innerText=userInfo.name
email.innerText=userInfo.email
love.innerText=userInfo.gender
color.innerText=userInfo.color
rating.innerText=userInfo.range
book.innerText=userInfo.radio
if(userInfo.term==true){
    agree.innerText=`👉You agree to Terms and Conditions`
}else{
    agree.innerText=`👉You are not ❌ agree to Terms and Conditions`
}
 }
 form.addEventListener(`submit`,handler);

 close.addEventListener(`click`,function(){
    form.style.display=`flex`
    form2.style.display=`none`
    setTimeout(()=>{
        document.location.reload();
    },1)
 })
 
form2.style.display=`none`


