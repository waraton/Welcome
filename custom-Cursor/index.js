const cursor = document.body.querySelector('.cursor')
const output = document.body.querySelector('.output')

document.body.addEventListener('mousemove',e =>{
  cursor.style.left = `${e.clientX -5}px`
  cursor.style.top = `${e.clientY -5}px`
  
  document.querySelector('.page').textContent = `${e.pageX} | ${e.pageY}`
  document.querySelector('.screen').textContent = `${e.screenX} | ${e.screenY}`
  document.querySelector('.offset').textContent = `${e.offsetX} | ${e.offsetY}`
  document.querySelector('.xy').textContent = `${e.x} | ${e.y}`
  document.querySelector('.movement').textContent = `${e.movementX} | ${e.movementY}`
  document.querySelector('.client').textContent = `${e.clientX} | ${e.clientY}`
})