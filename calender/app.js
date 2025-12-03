const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class NewYear {
  /* constructor() {
    this.days = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 365 : 366 ;
    this.month = month;
  } */
  time() {
    const time = new Date();
    const year = time.getFullYear();
    const typeOfYear =
      year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
        ? "leapYear"
        : "normalYear";

    return {
      year: year,
      month: time.toLocaleString("en", {
        month: "long",
      }),
      day: time.getDay() + 1,
      yearType: typeOfYear,
      daysInYear: typeOfYear === "leapYear" ? 265 : 266,
      daysInFebruary: typeOfYear === "leapYear" ? 28 : 29,
    };
  }
}

class Month {
  constructor(month) {
    this.month = month;
  }

  daysInMonth() {
    let daysInThisMonth;
    const year = new NewYear().time().year;
    const firstDateOfMonth = `${year}/${this.month}/1`;
    const firstDayOfMonth = new Date(firstDateOfMonth).toLocaleString("en", {
      day: "long",
    });

    switch (this.month) {
      case "February":
        daysInThisMonth = new NewYear().time().daysInFebruary;
        break;

      case "January" ||
        "March" ||
        "May" ||
        "July" ||
        "August" ||
        "October" ||
        "December":
        daysInThisMonth = 31;
        break;

      default:
        if (months.includes(this.month)) {
          daysInThisMonth = 30;
        }
        daysInThisMonth = "Not a valid month";
        break;
    }

    return `${daysInThisMonth} ${this.month}`;
  }
}

const year = new NewYear();
const month = new Month("February");

const calender = document.getElementById("calender");
calender.textContent += `${Month.daysInMonth()} `;
