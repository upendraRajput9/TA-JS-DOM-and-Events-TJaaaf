let screen = document.querySelector(`.screen`)
let buttons = document.querySelectorAll(`.button`)
let screenValue = " "
for(let button of buttons){
    button.addEventListener(`click`, function(event){
buttonText = event.target.innerText 
 if(buttonText==`*`){
    screenValue += buttonText
     screen.innerText = screenValue
 }
 else if(buttonText==`C`){
    screenValue = "";
    screen.innerText = screenValue
 }
 else if(buttonText==`%`){
    screenValue += buttonText
     screen.innerText = screenValue
 }
 else if(buttonText==`+`){
    screenValue += buttonText
     screen.innerText = screenValue
 }
 else if(buttonText==`-`){
    screenValue += buttonText
    screen.innerText = screenValue
 }
 
 else if(buttonText==`.`){
    screenValue += buttonText
     screen.innerText = screenValue
 }
 else if(buttonText==`=`){
    screen.innerText= eval(screenValue)
     
 }
 else{
     screenValue += buttonText;
     screen.innerText = screenValue
 }
 
    })
    
}