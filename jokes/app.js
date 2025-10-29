document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}
const data = new Date();

setInterval(joke, 15555);

const aa = [
  [data.toLocaleDateString(),'toLocaleDateString()'],
  [data.toLocaleTimeString(),'toLocaleTimeString()'],
  [data.toDateString(),'toDateString()'],
  [data.toLocaleString(),'toLocaleString()'],
  [data.toJSON(),'toJSON()'],
  [data.toISOString(),'toISOString()'],
  [data.toUTCString(),'toUTCString()'],
  [data.toTimeString(),'toTimeString()'],
  [data.toString(),'toString()'],
  /* date, day, fullhours, seconds, ms, minutes,month,year*/
  ['<b>get-() value</b>','<b>get-() method</b>'],
  [data.getDate(),'getDate()'],
  [data.getMilliseconds(),'getMilliseconds()'],
  [data.getSeconds(),'getSeconds()'],
  [data.getMinutes(),'getMinutes()'],
  [data.getHours(),'getHours()'],
  [data.getDay(),'getDay()'],
  [data.getTime(),'getTime()'],
  [data.getMonth(),'getMonth()'],
  [data.getFullYear(),'getFullYear()'],
  [data.getTimezoneOffset(),'getTimezoneOffset()'],
  ['<b>getUTC-() val</b>','<b>getUTC-() method</b>'],
  [data.getUTCDate(),'getUTCDate()'],
  [data.getUTCMilliseconds(),'getUTCMilliseconds()'],
  [data.getUTCSeconds(),'getUTCSeconds()'],
  [data.getUTCMinutes(),'getUTCMinutes()'],
  [data.getUTCHours(),'getUTCHours()'],
  [data.getUTCDay(),'getUTCDay()'],
  [data.getUTCMonth(),'getUTCMonth()'],
  [data.getUTCFullYear(),'getUTCFullYear()']
];
aa.forEach((rr) => {
  document.querySelector("table").innerHTML += `<tr><td>${rr[0]}</td><td>${rr[1]}</td></tr>`;
});

const range = document.getElementById('range');
const rangeContent = document.getElementById('rangeContent');
range.addEventListener('input', ()=>{
  const an = 10
  rangeContent.textContent = String(range.value).padStart(3,`0`)
  rangeContent.style.left = `${range.value / range.max * 100}%`
})

