import Month from "./createMonth.js";
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
    }
    if (dayCount === weeksInTheMonth * daysInAWeek - 1) {
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
