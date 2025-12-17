import {months} from "./monthsArray.js";
import CreateYear from "./createYear.js";

export default class Month {
  constructor(month) {
    this.month = month;
  }

  aboutMonth() {
    let daysInThisMonth;
    const thisYear = new CreateYear().aboutYear();
    const year = thisYear.year;
    const firstDateOfMonth = `1 ${this.month}, ${year}`;
    const firstDayOfMonth = new Date(firstDateOfMonth)
      .toLocaleString("en", {
        weekday: "long",
      })
      .toLocaleLowerCase();

    let firstOfMonth = new Date(firstDateOfMonth).getDay();

    switch (this.month) {
      case "february":
        daysInThisMonth = thisYear.daysInFebruary;
        break;

      case "april":
      case "june":
      case "september":
      case "november":
        daysInThisMonth = 30;
        break;

      default:
        if (months.includes(this.month.toLocaleLowerCase())) {
          daysInThisMonth = 31;
        } else daysInThisMonth = "Not a valid month";
        break;
    }

    const lastDateOfMonth = `${daysInThisMonth} ${this.month}, ${year}`;
    const lastDayOfMonth = new Date(lastDateOfMonth)
      .toLocaleString("en", {
        weekday: "long",
      })
      .toLocaleLowerCase();

    const weeksInMonth = Math.ceil((daysInThisMonth + firstOfMonth) / 7);

    return {
      year,
      monthName: this.month,
      firstOfMonth,
      daysInThisMonth,
      firstDateOfMonth,
      firstDayOfMonth,
      lastDateOfMonth,
      lastDayOfMonth,
      weeksInMonth,
    };
  }
}
