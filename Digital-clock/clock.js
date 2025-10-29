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
  const hrd = hr > 12 || hr === 0 ? hr - 12 : hr;

  const militaryTime = `${String(hr).padStart(2, 0)}${min.padStart(
    2,
    0
  )}${sec.padStart(2, 0)}`;

  const ordinaryTime = `${String(hrd)}<span dot>:</span>${min.padStart(
    2,
    0
  )}<span dot>:</span>${sec.padStart(2, "0")}<span t>${apm}</span>`;
  if (is24Hr) {
    display.textContent = militaryTime;
    btn.textContent = "12 Hr";
  } else {
    display.innerHTML = ordinaryTime;
    btn.textContent = "24 Hr";
  }

  document.querySelector("[hr]").style.rotate = `${30 * hrd + min / 2}deg`;
  document.querySelector("[min]").style.rotate = `${min * 6 + sec / 10}deg`;
  document.querySelector("[sec]").style.rotate = `${sec * 6}deg`;
  document.querySelectorAll(".analogue span").forEach((i) => {
    i.style.borderTop = "none";
    document.querySelectorAll(".analogue span")[
      hrd - 1
    ].style.borderTop = `solid`;
  });
}

btn.addEventListener("click", () => {
  is24Hr = !is24Hr;
});

const start = document.querySelector(".start");
const stoper = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timeDis = document.querySelector("[timer]");

const interval = 100 / 6;
let timerId;
let lastTimerStart = 0;
let noOfSecGone = 0;

function startTimer() {
  start.disabled = true;
  stoper.disabled = false;
  reset.disabled = true;

  lastTimerStart = Date.now();
  timerId = setInterval(updater, interval);
}

function stopTimer() {
  reset.disabled = false;
  start.disabled = true;
  stoper.disabled = true;

  noOfSecGone += Date.now() - lastTimerStart;
  clearInterval(timerId);
}

function reseter() {
  reset.disabled = true;
  start.disabled = false;
  stoper.disabled = true;
  timeDis.textContent = "00:00:000";
  noOfSecGone = 0;
}

function updater() {
  const msElapsed = Date.now() - lastTimerStart + noOfSecGone;
  const secElapsed = msElapsed / 1000;
  const minUtes = secElapsed / 60;

  const [ms, sc, mn] = [
    formatter(msElapsed % 1000, 3),
    formatter(Math.floor(secElapsed) % 60, 2),
    formatter(Math.floor(minUtes), 2),
  ];

  timeDis.textContent = `${mn}:${sc}:${ms}`;
}

function formatter(number, length) {
  if (String(number).length > length) {
    return String(number).slice(0, length);
  }
  return String(number).padStart(length, 0);
}

start.addEventListener("click", startTimer);
stoper.addEventListener("click", stopTimer);
reset.addEventListener("click", reseter);

start.disabled = false;
stoper.disabled = reset.disabled = true;

const endDate = document.getElementById("endDate");

function countdown(EndDate) {
  if (endDate.value) {
    const time = new Date(EndDate.value).getTime() - new Date().getTime();
    return [
      ["msec", time % 1000],
      ["sec", Math.floor(time / 1000) % 60],
      ["min", Math.floor(time / 60000) % 60],
      ["hrs", Math.floor(time / 3600_000) % 24],
      ["days", Math.floor(time / 3_600_000 / 24)],
    ];
  }
  return "nothing entered";
}

const count = document.getElementById("count");

function startCountDown() {
  const output = document.querySelector(`output`);
  let det = countdown(endDate)[0][1];
  if (det >= 0) {
    output.textContent = ``;
    countdown(endDate).forEach((t) => {
      document.querySelector("output").textContent += `
        ${t[1]}:
      `;
    });
    count.removeEventListener(`click`)
  } else {
    output.textContent = "Time out"
  };
}
count.addEventListener(`click`, (e) => {
  e.preventDefault();
  setInterval(() => {
    startCountDown();
  }, 100);
});
