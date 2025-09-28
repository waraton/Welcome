const whoIAm = [
  "a front-end developer",
  "loved by God",
  "a South Sudanese",
  "an introvert",
  "a Coder",
  "a KUKUtyo",
  `an indecisive man`,
  "a Makerere student",
  `a JavaScript coder`,
  `a Markdown enthusiast`,
  "a S6 leaver",
  "honest",
  `${Math.round(
    (new Date() - new Date(2002, 6, 30)) / 3600000 / 24 / 366
  )} years old`,
];
const placeHolder = document.querySelector(".whoIAm");
setInterval(() => {
  placeHolder.textContent = whoIAm[Math.floor(Math.random() * whoIAm.length)]
}, 2523);
