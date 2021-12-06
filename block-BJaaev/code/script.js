let inputText = document.querySelector(`form`);
let root = document.querySelector(`ul`)


let allTodos = []

function handlerInput(event) {
    event.preventDefault();
    let value = event.target.text.value
    let todo =
    {
        name: value,
        isDone: false
    }
    event.target.text.value = ""
    allTodos.push(todo)
    createUI(allTodos);

    localStorage.setItem()
}

function handledelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1)

    createUI(allTodos);
}


function handleToggle(event){
    event.preventDefault(allTodos)
    let id = event.target.dataset.id;
    allTodos[id].isDone =!allTodos[id].isDone
    createUI(allTodos)
}
function createUI(allTodos=allTodos) {
    root.innerHTML = ""
    allTodos.forEach((todo,index) => {
        let li = document.createElement(`li`)
        let input = document.createElement(`input`)
        input.type = "checkbox";
        input.checked = todo.isDone;

        input.addEventListener(`input`, handleToggle)
         input.setAttribute("data-id", index)
        let p = document.createElement(`p`)
        p.innerText = todo.name


        let span = document.createElement(`span`);
        span.className = `cross`
        span.innerText = "×"
        span.setAttribute("data-id", index)
        span.addEventListener(`click`, handledelete)
    if(input.checked){
        p.style.textDecoration=`line-through`
    }

        li.append(input, p, span);
        li.className = `done`
        root.append(li)
        downButton.style.display = `block`
        items.innerText = `${allTodos.length} item left`
    })

}

inputText.addEventListener("submit", handlerInput)
let downButton = document.querySelector(`.active`)
downButton.style.display = `none`

//down button

let all = document.querySelector(`.all`)
let activeAll = document.querySelector(`.activeAll`)
let complete = document.querySelector(`.complete`)
let clear = document.querySelector(`.clear`)
let items = document.querySelector(`.items`)
activeAll.addEventListener(`click`,handlerActive)
function handlerActive(event){
    event.preventDefault()
  let filteractive =  allTodos.filter((elm)=>{
return elm.isDone===false
    })
    createUI(filteractive)
}

all.addEventListener(`click`,handlerAll);
function handlerAll(event){
    event.preventDefault()
createUI(allTodos)  

}

complete.addEventListener(`click`,handlercomplete)
function handlercomplete(event){
    event.preventDefault()
  let filtercomplete =  allTodos.filter((elm)=>{
return elm.isDone
    })
    createUI(filtercomplete)
}

clear.addEventListener(`click`,function(event){
    event.preventDefault()
    allTodos.forEach((elm,i,arr)=>{
        if(elm.isDone){
            arr.splice(i,1)
        }
    })
    createUI(allTodos)
})
