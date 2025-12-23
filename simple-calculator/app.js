const input = document.getElementById(`input`);
const output = document.querySelector(`output`);
const historyAns = localStorage.getItem(`answer`);
document.addEventListener(`onload`,() => {
})
setInterval(() => {
  document.body.style.background = `radial-gradient(blue 0% 5%,orange 70%,#0000) repeat 15% 25% /100vmax 100vmax`
  document.body.style.backgroundColor = `skyblue`


}, 1000);

document.querySelectorAll(`button:not([data-calc])`).forEach((button) => {
  button.addEventListener(`click`, (e) => {
    input.value += e.target.textContent;
  });
});
document.querySelectorAll(`button[data-calc]`).forEach((func) => {
  func.addEventListener(`click`, (e) => {
    let fnName = e.target.dataset.calc;
    switch (fnName) {
      case `clear`:
        clear();
        break;
      case `delete`:
        const expression = input.value.split(``);
        expression.pop();
        input.value = expression.join("");
        break;
      case `calculate`:
        try {
          if (input.value) {
            calculate(e.target);
          }
        } catch (error) {
          output.textContent = `ERROR`;
          console.error(error);
        }
        break;
      case `history`:
        input.value = localStorage.getItem("answer");
        break;
    }
  });
});
function clear() {
  input.value = "";
  const answer = localStorage.getItem("answer");
  if (answer) {
    output.textContent = answer;
  } else;
}
function calculate(equal) {
  output.value = eval(input.value);
  if (output.value.includes(".")) {
    output.value = eval(input.value).toFixed(4);
  }
  localStorage.setItem("answer", output.value);
}
