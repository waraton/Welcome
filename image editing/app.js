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
    mainText.textContent = document.getElementById('mainText').value
    footerText.textContent = document.getElementById('footerText').value
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
  btn.addEventListener('click',()=>{
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
    if (btn.dataset.textshadow==="blur") {
      console.log('blur');
      mainText.style.textShadow = `${e.target.value}px ${e.target.value}px 5px #000d`
    } else if (btn.dataset.textshadow==="spread") {
      mainText.style.textShadow = `2px 2px ${e.target.value+2}px #000d`
      console.log('spread');
    } else
    mainText.style.textShadow = `none`
  })
}