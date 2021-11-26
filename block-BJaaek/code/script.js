let click= document.querySelector(`.click`)
let mouse = document.querySelector(`.mouse`)
let clickBox= document.querySelector(`.first`)
let mouseBox= document.querySelector(`.second`)

click.addEventListener(`click`,()=>{
    let color=`#`;
    color += Math.random().toString(16).slice(2,8);
    clickBox.style.backgroundColor=color
    console.log(color)
})
mouse.addEventListener("mousemove",()=>{
    let color=`#`;
    color += Math.random().toString(16).slice(2,8);
    mouseBox.style.backgroundColor=color
    console.log(color)
})