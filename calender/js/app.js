import Month from "./createMonth.js";
import { holidays } from "./holidays.js";
import { months, days } from "./monthsArray.js";

const calender = document.getElementById("calender");

months.forEach((month, index) => {
  const monthData = new Month(month).aboutMonth();
  const weeksInTheMonth = monthData.weeksInMonth + 1;
  const firstOfMonth = monthData.firstOfMonth;
  const today = new Date();
  const thisMonth = today
    .toLocaleString("en", {
      month: "long",
    })
    .toLocaleLowerCase();
  const thisDate = today.getDate();
  const daysInAWeek = 7;

  calender.innerHTML += `<section month=month${index}></section>`;
  document.title = "Calender | " + monthData.year;
  document.querySelector(`header h1`).textContent = monthData.year + ` Calender`;

  for (
    let dayCount = 0;
    dayCount < weeksInTheMonth * daysInAWeek + 1;
    dayCount++
  ) {
    const day = document.createElement("span");
    const nthMOnth = calender.querySelector(`[month='month${index}']`);

    day.textContent = ``;
    nthMOnth.appendChild(day);
    if (
      dayCount >= firstOfMonth + daysInAWeek &&
      dayCount < monthData.daysInThisMonth + (firstOfMonth + daysInAWeek)
    ) {
      day.textContent = dayCount - firstOfMonth - daysInAWeek + 1;
      day.dataset.date = `${monthData.year}-${month}-${
        dayCount - firstOfMonth - daysInAWeek + 1
      }`;
    }
    if (dayCount === weeksInTheMonth * daysInAWeek) {
      day.style.gridRowEnd = weeksInTheMonth + 1;
      day.textContent = month;
      day.classList.add(`heading`);
    }
    if (dayCount < daysInAWeek) {
      day.textContent = days[dayCount];
      day.classList.add(`weekTitle`);
    }
    if (
      dayCount === thisDate + 6 + firstOfMonth &&
      month.toLocaleLowerCase() === thisMonth.toLocaleLowerCase()
    ) {
      day.classList.add(`thisDay`);
    }
  }
});
holidays.forEach((holiday) => {
  let year;
  if (holiday[3]) {
    year = holiday[3];
  } else {
    year = new Date().getFullYear();
  }
  const dateData = `${year}-${holiday[0]}`;
  const date = new Date(dateData);
  const [month, day] = [
    date.toLocaleString("en", { month: "long" }).toLocaleLowerCase(),
    date.getDate(),
  ];
  const element = calender.querySelector(
    `[data-date='${year}-${month}-${day}']`
  );
  if (element) {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = `<a href='#id${dateData}'>${dateData}</a>: ${holiday[1]}`;
    calender.appendChild(newElement);
    element.classList.add(`holiday`);
    element.id = `id${dateData}`;
    element.dataset.event = `id${holiday[1]}`;
    element.title = `${holiday[2]}`;
  }
});

setInterval(() => {
  const now = new Date();
  const nowHour = new Date().getHours();
  const nowMinutes = new Date().getMinutes();
  const thisHour = (nowHour + nowMinutes / 60) * 15;
  document.body.style.background = `
      conic-gradient(
            #0000 0,
            hsl(${nowMinutes * 6} 75% 50%  / 50%) 0 ${nowMinutes * 6}deg,
            #0000 ${nowMinutes * 6}deg
      ) center no-repeat fixed,
      linear-gradient(${thisHour - 90}deg,
            hsl(${thisHour} 75% 50%) 0% 49%,
            hsl(${180 - thisHour} 75% 50%) 49.15% 50.85%,
            hsl(${thisHour} 75% 50%) 51% 98%,
            hsl(${180 - thisHour} 75% 50%) 99%
            ) no-repeat fixed`;
}, 500);