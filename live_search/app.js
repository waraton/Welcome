const result = document.getElementById("result");
const switchBtn = document.getElementById("switch");
const filter = document.getElementById("filter");
let litsItems = [];

getData();
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=60");
  const { results } = await res.json();
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    litsItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    result.appendChild(li);
  });
}

filter.addEventListener("input", (text) => filterData(text.target.value));

function filterData(term) {
  litsItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(term.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

switchBtn.addEventListener("input", () => {
  switchBtn.checked
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
});

// clock function
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

setInterval(setTime, 1000);

function setTime() {
  const dateNow = new Date();
  year.textContent = dateNow.getFullYear();
  month.textContent = months[dateNow.getMonth()];

  hour.textContent = dateNow.getHours();
  min.textContent = dateNow.getMinutes();
  sec.innerHTML = preFixer(dateNow.getSeconds());
  day.textContent = days[dateNow.getDay()];
  hour.textContent = dateNow.getHours();
  date.innerHTML = preFixer(dateNow.getDate());
}
function preFixer(num) {
  let n = String(num)
  const outOfTeen = num > 20 || num < 10
  const lastDigit = n.split('')[n.length-1]
  
  if (!outOfTeen) return `${num}<sup>th</sup>`
  if (lastDigit == 2) return `${num}<sup>nd</sup>`
  if (lastDigit == 1) return `${num}<sup>st</sup>`
  if (lastDigit == 3) return `${num}<sup>rd</sup>`
  return `${num}<sup>th</sup>`
}

document.querySelector('#clockDisp').addEventListener('input', ()=>{
  document.querySelector(".clock").classList.toggle('active')
})

document.querySelector('.reload').addEventListener('click', getData)