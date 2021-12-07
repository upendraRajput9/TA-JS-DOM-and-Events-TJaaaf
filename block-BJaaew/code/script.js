let header = document.querySelector(`header`)
let input = document.querySelector(`input`)
let h1 = document.querySelector(`h1`)
let ul = document.querySelector(`.container`)
let peopleHouses = got.houses
let allHouses = []
let arr = []

//
function handlerInput(event) {
    event.preventDefault()
    let store = event.target.value.toUpperCase();
    ul.innerHTML = ""
    arr.forEach((house) => {
        if (house.name.toUpperCase().includes(store)) {
            let li = document.createElement(`li`)
            let img = document.createElement(`img`)
            img.src = house.image
            let h2 = document.createElement(`h2`)
            h2 = house.name
            let div = document.createElement(`div`)
            div = house.description
            let a = document.createElement(`a`)
            a.href = house.wikiLink
            a.innerText = `Learn More!`
            let div2 = document.createElement(`div`)
            div2.append(a)
            let span = document.createElement(`span`)
            span.append(img, h2)
            li.append(span, div, div2)
            li.className = `box`
            ul.append(li)
        }
       
    })


}


input.addEventListener(`keyup`, handlerInput)



//input
let people = peopleHouses.forEach((houses) =>
    allHouses.push(houses.people)
)


allHouses.forEach((house) => { house.map((e) => arr.push(e)) })









function handlerBtn(event) {
    event.preventDefault()
    ul.innerHTML = ""
    allHouses[event.target.id].forEach((house) => {
        let li = document.createElement(`li`)
        let img = document.createElement(`img`)
        img.src = house.image
        let h2 = document.createElement(`h2`)
        h2 = house.name
        let div = document.createElement(`div`)
        div = house.description
        let a = document.createElement(`a`)
        a.href = house.wikiLink
        a.innerText = `Learn More!`
        let div2 = document.createElement(`div`)
        div2.append(a)
        let span = document.createElement(`span`)
        span.append(img, h2)
        li.append(span, div, div2)
        li.className = `box`
        ul.append(li)
    })


}



let housesName = document.querySelectorAll(`li`)


for (let li of housesName) {
    li.addEventListener(`click`, handlerBtn)
}
