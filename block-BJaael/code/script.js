let section = document.querySelector(`section`)
section.className=`parent`
  for(let i=0;i<500;i++){
    let div = document.createElement(`div`,i)
    div.style.border=`3px solid black`
    div.style.width=`4rem`
    div.style.height=`4rem`
    

    section.addEventListener("mousemove",function(){
        let num = Math.floor(Math.random()*500)
        let color=`#`;
        color += Math.random().toString(16).slice(2,8);
        div.style.backgroundColor=color
        div.innerText=num
        console.log(color)
    })
    section.append(div)
  }


