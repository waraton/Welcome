const display = document.querySelector(".display");
const btn = document.querySelector(".btn");
let is24Hr = false;
console.log(8768);

setInterval(tim, 1000);
function tim() {
  let t = new Date();
  let hr = t.getHours();
  const min = String(t.getMinutes());
  const sec = String(t.getSeconds());
  const apm = hr >= 12 ? "PM" : "AM";
  const hrd = (hr > 12 || hr === 0) ?  hr - 12 : hr;

  const militaryTime = `${String(hr).padStart(2, 0)}${min.padStart(2, 0)}${sec.padStart(2, 0)}`;

  const ordinaryTime = `${String(hrd)}<span dot>:</span>${min.padStart(2, 0)}<span dot>:</span>${sec.padStart(2, '0')}<span t>${apm}</span>`;
  if (is24Hr) {
    display.textContent = militaryTime;
    btn.textContent = "12 Hr";
  } else {
    display.innerHTML = ordinaryTime;
    btn.textContent = "24 Hr";
  }

  document.querySelector('[hr]').style.rotate =  `${30 * hrd + min / 2}deg`
  document.querySelector('[min]').style.rotate =  `${min * 6 + sec / 10}deg`
  document.querySelector('[sec]').style.rotate =  `${sec * 6}deg`
  document.querySelectorAll('.analogue span').forEach((i)=>{
    i.style.borderTop = 'none'
    document.querySelectorAll('.analogue span')[hrd-1].style.borderTop = `solid`
})

}

btn.addEventListener("click", () => {
  is24Hr = !is24Hr;
});
d