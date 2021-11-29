let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
let boxes = document.querySelector(`.boxes`)
numbers.forEach(num => {
    let div = document.createElement("div");
    div.classList.add("box")
   
div.addEventListener(`click`,function(){
    div.innerText=num
    setTimeout(function() {
        div.innerText = ""
     }, 5000); 
})

boxes.append(div)

})
 

// With deligation

let boxes2 = document.querySelector(`.deligate`)
numbers.forEach((num)=> {
    let div = document.createElement("div");
    div.classList.add(`box`)
    div.setAttribute(`id`,num)
    boxes2.append(div)
});

function handleEvent(event){

      if(event.target.className==='box'){
        event.target.innerText= event.target.getAttribute(`id`)
        console.log()
        setTimeout(function() {
            event.target.innerText = ""
         }, 5000)
      }else{
        alert(`Please 😎click on the flip boxes`)
      }
    
    
  //  alert(`click only in the boxes`)

}


boxes2.addEventListener("click",handleEvent)