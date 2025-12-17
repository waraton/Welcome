export default class CreateYear {
  aboutYear() {
    const aboutYear = new Date();
    const year = aboutYear.getFullYear();
    const [typeOfYear, daysInYear, daysInFebruary] =
      year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
        ? ["leapYear", 365, 28]
        : ["normalYear", 366, 29];

    const month = aboutYear
      .toLocaleString("en", {
        month: "long",
      })
      .toLocaleLowerCase();

    return {
      year,
      month,
      today: aboutYear,
      daysInFebruary,
      daysInYear,
      typeOfYear,
    };
  }
}
