const percentage = document.querySelector(".percentage");
const stops = document.querySelectorAll(".stops");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
prev.disabled  = true;
const verse = document.querySelector('.verse')
const verses = [
'A Song of degrees. I will lift up mine eyes unto the hills, from whence cometh my help.',
'My help cometh from the LORD, which made heaven and earth.',
'He will not suffer thy foot to be moved: he that keepeth thee will not slumber.',
'Behold, he that keepeth Israel shall neither slumber nor sleep.',
'The LORD is thy keeper: the LORD is thy shade upon thy right hand.',
'The sun shall not smite thee by day, nor the moon by night.',
'The LORD shall preserve thee from all evil: he shall preserve thy soul.',
'The LORD shall preserve thy going out and thy coming in from this time forth, and even forevermore.',
]

let activeIndex = 1;
function updateUI() {
  stops.forEach((stop, index) => {
    if (index < activeIndex) {
      stop.classList.add("active");
    } else {
      stop.classList.remove("active");
    }
  });
	verse.innerHTML = `<span>Psalm 121:${activeIndex}</span>${verses[activeIndex - 1]}`
	const actives = document.querySelectorAll('.active')
	percentage.style.width = `${((actives.length - 1)/ (stops.length - 1))*100}%`
	if (activeIndex === 1){
		prev.disabled = true
	}else if (activeIndex === stops.length) {
		next.disabled = true
	} else {
		prev.disabled = false		
		next.disabled = false		
	}
}

next.addEventListener('click',()=>{
	activeIndex ++;
	if (activeIndex > stops.length){
		activeIndex = stops.length;
	}
	updateUI()
})
prev.addEventListener('click',()=>{
	activeIndex --;
	if (activeIndex === 0){
		activeIndex = 1;
	}
	updateUI()
})