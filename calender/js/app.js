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
  if (holiday[2]) {
    year = holiday[2];
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
  }
});
