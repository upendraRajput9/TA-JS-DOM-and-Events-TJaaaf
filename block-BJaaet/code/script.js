let form = document.querySelector(`form`);
let input = document.querySelector(`input`)
let ul = document.querySelector(`ul`)
// let label = document.querySelector(`.data`);
// let check = document.querySelector(`.check`);
// let cross = document.querySelector(`a`);
//  let store =[]
//  let i = 0
// function handler(event){
// event.preventDefault();
// let userInput=event.target.text
// i+=1
// store[i]=userInput.value
//     label.innerText=store[i]
// console.log(store)
// cross.style.display=`block`
// check.style.display=`block`
// }
// cross.style.display=`none`
// check.style.display=`none`
// form.addEventListener(`submit`,handler)


form.addEventListener(`submit`,(event)=>{
    event.preventDefault()
    
        let movieName = event.target.text.value;
        event.target.text.value=""
        console.log(movieName)
        let li= document.createElement(`li`)
        
        let checkbox= document.createElement(`input`)
        checkbox.setAttribute(`type`,`checkbox`)
        let span= document.createElement(`span`)
         span.innerText=movieName;
         let cross = document.createElement(`span`)
         cross.innerText=`❌`
         li.append(checkbox,span,cross)
         ul.append(li)
         span.style.margin=`0 2.5rem 0 0.5rem`
        ul.style.display=`flex`
        
        ul.style.flexDirection=`column`

    cross.addEventListener(`click`,function(){
        if(checkbox.checked==true){
            li.remove()
        }
        
    })
})