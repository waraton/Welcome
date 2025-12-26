const button = document.querySelector('button');
const output = document.querySelector('output');

button.addEventListener('click',()=>{
    document.body.style.backgroundColor = bgColor();
    output.textContent = bgColor()
})

const bgColor = ()=>{
    return `RGB(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

document.querySelector(`figure img`).addEventListener(`mouseenter`,(e)=>{
    e.target.classList.add(`hovered`)
})
document.querySelector(`figure img`).addEventListener(`mouseleave`,(e)=>{
    e.target.classList.remove(`hovered`)
})
document.querySelector(`figure img`).addEventListener(`mousemove`,(e)=>{
    const [x,y] = [e.offsetX,e.offsetY]
/*     console.log(`< x:`+x+`<>`+y+`: y>`); */
    e.target.style.transformOrigin = `${x}px ${y}px`
})