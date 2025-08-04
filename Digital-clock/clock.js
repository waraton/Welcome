const display = document.querySelector(".display");
const btn = document.querySelector(".btn");
let is24Hr = false;

setInterval(tim, 1000);
function tim() {
  let t = new Date();
  let hr = t.getHours();
  const min = String(t.getMinutes());
  const sec = String(t.getSeconds());
  const apm = hr >= 12 ? "PM" : "AM";
  const hrd = (hr > 12 || hr === 0) ?  hr - 12 : hr;

  const militaryTime = `${String(hr).padStart(2, 0)}${min.padStart(2, 0)}${sec.padStart(2, 0)}`;

  const ordinaryTime = `${String(hrd)}<span dot>:</span>${min.padStart(2, 0)}<span t>${apm}</span><br>${sec.padStart(2, '0')}<span t>sec</span>`;
  if (is24Hr) {
    display.textContent = militaryTime;
    btn.textContent = "12 Hr";
  } else {
    display.innerHTML = ordinaryTime;
    btn.textContent = "24 Hr";
  }
}

btn.addEventListener("click", () => {
  is24Hr = !is24Hr;
});
