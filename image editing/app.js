const tabs = document.querySelectorAll('[data-tabFor]')
const tabEdits = document.querySelectorAll('[editTools] >[id]')
const form = document.querySelector('form.inputs')
const mainText = document.querySelector('[data-main="main"]')
const footerText = document.querySelector('[data-footer="footer"]')
const mainImage = document.querySelector('figure img')
const images = document.querySelectorAll('#imgBg img')
const imageLoader = document.querySelector('input[type=file]')

tabs.forEach((tab)=>{
  tab.addEventListener('click', ()=>{
    removeActive()
    hideActiveTab()
    document.getElementById(tab.dataset.tabfor).classList.add('currentTab')
    tab.classList.add('active')
  })
  console.log(tab.dataset.tabfor);
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