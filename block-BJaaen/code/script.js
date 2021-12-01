let type2 = document.querySelector(`.type2`)
let type1 = document.querySelector(`.type1`)
let yourPoint = document.querySelector(`.yourPoint`)
let count1 =0
let count2 =0
let comPoint = document.querySelector(`.comPoint`)
let refresh = document.querySelector(`.refresh`)
let choice = [`rock`,`paper`,`scissor`]
let p = document.querySelector(`p`)
  let user = document.querySelectorAll(`.key`)
  for(let key of user){
key.addEventListener(`click`,function(event){
    event.preventDefault();
    var i =Math.floor(Math.random()*3)
    type2.innerText= choice[i];
    type1.innerText= event.target.id
    if(type1.innerText==type2.innerText){
        p.innerText= `It's tie 🤯`
       }
       else if(type1.innerText=="rock"&&type2.innerText=="paper" ||type1.innerText=="paper"&&type2.innerText=="scissor"||type1.innerText=="scissor"&&type2.innerText=="rock"){
        p.innerText= `You lose 😩`
        count1=count1+1
        comPoint.innerText=count1
       }
      else if(type1.innerText=="paper"&&type2.innerText=="rock" ||type1.innerText=="scissor"&&type2.innerText=="paper"||type1.innerText=="rock"&&type2.innerText=="scissor"){
        p.innerText= `You win 😎`
        count2=count2+1
        yourPoint.innerText=count2
       }
       
})

  }
refresh.addEventListener(`click`,function(){
    refresh.reload();
})