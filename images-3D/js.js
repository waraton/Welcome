const leftButton = document.querySelector(`#before`)
const rightButton = document.querySelector(`#after`)
const containerEl = document.querySelector(`[images]`)

let x = 0;
let y = 0;
let z = 0;

function rotate() {
    containerEl.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
}
leftButton.addEventListener(`click`,()=>{
    y += 30;
    rotate();
})
rightButton.addEventListener(`click`,()=>{
    y -= 30;
    rotate();
})
document.addEventListener(`keydown`,e=>{
    console.log(e.key);
    if (e.key.toLowerCase() == `arrowright`) {
        z += 30;
        rotate();
    }
    if (e.key.toLowerCase() == `arrowleft`) {
        z -= 30;
        rotate();
    }
    if (e.key.toLowerCase() == `arrowup`) {
        x += 30;
        rotate();
    }
    if (e.key.toLowerCase() == `arrowdown`) {
        x -= 30;
        rotate();
    }
})