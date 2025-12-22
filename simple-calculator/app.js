const input = document.getElementById(`input`);
const output = document.querySelector(`output`);

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
        const expression = input.value.split(``)
        expression.pop()
        input.value = expression.join('');
        break;
      case `calculate`:
        try {
          calculate(e.target);
        } catch (error) {
          output.textContent = `ERROR`
          console.error(error);
        }
        break;
      case `history`:
        input.value = output.textContent;
        break;
    }
  });
});
function clear() {
  input.value = "";
  output.textContent = "output";
}
function calculate(equal) {
  output.value = eval(input.value);
  if (output.value.includes('.')) {
    output.value = eval(input.value).toFixed(4);
  }
}
