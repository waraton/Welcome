joke()
document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}
const data = new Date();

const [a, b, c, d, e, f, g, h, i] = [
  [data.toLocaleDateString(),'toLocaleDateString()'],
  [data.toLocaleTimeString(),'toLocaleTimeString()'],
  [data.toDateString(),'toDateString()'],
  [data.toLocaleString(),'toLocaleString()'],
  [data.toJSON(),'toJSON()'],
  [data.toISOString(),'toISOString()'],
  [data.toUTCString(),'toUTCString()'],
  [data.toTimeString(),'toTimeString()'],
  [data.toString(),'toString()'],
];
const aa = [a, b, c, d, e, f, g, h, i];
aa.forEach((rr) => {
  document.querySelector("table").innerHTML += `<tr><td>${rr[0]}</td><td>${rr[1]}</td></tr>`;
});
