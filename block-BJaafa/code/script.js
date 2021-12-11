let ul=document.querySelector(`ul`);
let player = document.querySelector(`.player`);
let comp = document.querySelector(`.comp`);
let tie = document.querySelector(`.tie`);
let symbols = document.querySelectorAll(`.box`)


let turn=`X`


let changesTurn = ()=>{

    return turn === "X"? "0":"X"
}
let checkWin = ()=>{
    let boxest=document.getElementsByClassName(`boxest`)
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
if((boxest[e[0]].innerText===boxest[e[1]].innerText)&&(boxest[e[2]].innerText===boxest[e[1]].innerText)&&(boxest[e[0]].innerText!=="")){
    alert(`win`)
}
    })
}

Array.from(symbols).forEach(element=>{
    let boxest = element.querySelector(`.boxest`);
    element.addEventListener(`click`,function(){
        if(boxest.innerText===``){
            boxest.innerText=turn;
           turn= changesTurn()
           checkWin()
        }
    })
})

