const tabs = document.querySelectorAll('[data-tabFor]')
const tabEdits = document.querySelectorAll('[editTools] >[id]')
const form = document.querySelector('form.inputs')
const mainText = document.querySelector('[data-main="main"]')
const footerText = document.querySelector('[data-footer="footer"]')
const mainImage = document.querySelector('figure img')
const images = document.querySelectorAll('#imgBg img')
const imageLoader = document.querySelector('input[type=file]')
const rangeInputs= document.querySelectorAll('.inputs input[type=range][data-unit]')
const text = document.querySelector('figure figcaption')
const shadowBtns = document.querySelectorAll('#shadows button')
const filters = document.querySelectorAll('#imgFilter input')
tabs.forEach((tab)=>{
  tab.addEventListener('click', ()=>{
    removeActive()
    hideActiveTab()
    document.getElementById(tab.dataset.tabfor).classList.add('currentTab')
    tab.classList.add('active')
  })
})

function removeActive() {
  tabs.forEach((t)=>{
    t.classList.remove('active')
  })
}

function hideActiveTab() {
  tabEdits.forEach((r)=>{
    r.classList.remove('currentTab')
  })
}

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  if (document.getElementById('mainText').value !==''&&document.getElementById('footerText').value !=='') {
    mainText.innerHTML = `${document.getElementById('mainText').value}<br><small data-footer="footer" style="font: normal 14px serif;">${document.getElementById('footerText').value}</small>`
    form.style.color='initial'
  } else {
    form.style.color = 'red'
    document.getElementById('mainText').placeholder = 'Main cannot be empty.'
    document.getElementById('footerText').placeholder = 'Footer cannot be empty'
  }
})

images.forEach((img)=>{
  img.addEventListener('click', ()=>{
    mainImage.src = img.src
  })
})

imageLoader.addEventListener('change',(e)=>{
  mainImage.src = URL.createObjectURL(e.target.files[0])
})

rangeInputs.forEach((range)=>{
  range.addEventListener('input',()=>{
    mainText.style[range.id] = range.value + range.dataset.unit
  })
})

document.querySelectorAll('#font button,#alignment button').forEach((btn)=>{
  btn.addEventListener('click',()=>{
    if (btn.dataset.value === 'bold'||btn.dataset.value === 'italic') {
      btn.classList.toggle('given')
    } else side(btn)
    mainText.style[btn.dataset.style] = mainText.style[btn.dataset.style] !== btn.dataset.value ? btn.dataset.value : 'normal'
  })
})
const alBtns = document.querySelectorAll('#alignment button')
function removeGiven() {
  alBtns.forEach((be)=>{
    be.classList.remove('given')
  })
}

function side(btn) {
  if(btn.dataset.value === 'left'){
    removeGiven()
    btn.classList.add('given')
    mainText.style.marginInline = '0 auto'
  }else if (btn.dataset.value ==='center') {
    removeGiven()
    btn.classList.add('given')
    mainText.style.marginInline = 'auto'
  } else {
    removeGiven()
    btn.classList.add('given')
    mainText.style.marginInline = 'auto 0'
  }
}
document.querySelector('#color').addEventListener('input',(r)=>{
  mainText.style.color = r.target.value
})

shadowBtns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    btn.lastElementChild
    mainText.style.textShadow = `${e.target.parentElement.nextElementSibling.lastElementChild.value}px ${e.target.parentElement.nextElementSibling.lastElementChild.value}px 5px #000`
    notShadowed()
    btn.classList.toggle('given')
    shadowing(btn)
  })
})

function notShadowed() {
  shadowBtns.forEach((btn)=>{
    btn.classList.remove('given')
})
}
function shadowing(btn) {
  if(btn.dataset.textshadow==="none")mainText.style.textShadow = `none`
  document.querySelector('#shadows input').addEventListener('input',(e)=>{
    
    if (btn.dataset.textshadow ==="blur") {
      mainText.style.textShadow = `${e.target.value}px ${e.target.value}px 5px #000`
    } else if (btn.dataset.textshadow ==="spread") {
      mainText.style.textShadow = `2px 2px ${+e.target.value+2}px #000`
    } else
    mainText.style.textShadow = `none`
  })
}
// Image filtering effects.
filters.forEach((filterEl)=>{
  filterEl.addEventListener('input',(e)=>{
  let styled = `
  ${filters[0].id}(${filters[0].value}%)
  ${filters[1].id}(${filters[1].value})
  ${filters[2].id}(${filters[2].value})
  ${filters[3].id}(${filters[3].value}px)
`
mainImage.style.filter = styled
})
})