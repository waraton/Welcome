const button = document.querySelector('button');
const output = document.querySelector('output');

button.addEventListener('click',()=>{
    document.body.style.backgroundColor = bgColor();
    output.textContent = bgColor()
})

const bgColor = ()=>{
    return `RGB(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}