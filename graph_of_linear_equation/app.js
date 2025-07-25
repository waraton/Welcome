const valA = document.getElementById("a");
const valB = document.getElementById("b");
const valC = document.getElementById("c");
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const output = document.querySelector(".output");

graph.addEventListener("click", (e) => {
  e.preventDefault();
  const gradient = slope();
  const yIntercept = intercept();
  const angle = (Math.atan(gradient) * 180) / Math.PI;

  const newLocal = valA.value !== "" && valB.value !== "" && valC.value !== "";
  if (newLocal) {
    line.style.translate = `0px ${(-output.clientHeight * yIntercept) / (Math.abs(gradient) * 100)}vMin`;
    line.style.rotate = -angle + "deg";

    document.querySelector(".details").innerHTML = `
        y = ${gradient.toFixed(2)}x + (${yIntercept.toFixed(2)})<br>
        gradient = ${gradient.toFixed(2)}<br>
        angle = ${angle.toFixed(2)}&deg;<br>
        x-intercept = ${(Number(valC.value) / Number(valA.value)).toFixed(2)}<br>
        y-intercept = ${yIntercept.toFixed(2)}
    `;
    document.querySelector(".details").style.display = "block";

    setTimeout(() => {
      document.querySelector(".details").style.display = "none";
    }, 15000);

  }
});

const slope =() => -Number(valA.value) / Number(valB.value)
const intercept =() => Number(valC.value) / Number(valB.value)

