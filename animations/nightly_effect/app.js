let el = [];
function create() {
  el.push("<>");
  let e = document.createElement(`span`);
  e.classList.add(`circles`);
  el.forEach(() => {
    document.querySelector('.sky').appendChild(e);
  });
}
setInterval(() => {
  let num = 0;
  document.querySelectorAll(".circles").forEach((c, t, f) => {
    num = t;
    f[t].style.left = `${Math.random()* 100}vw`
    f[t].style.animationDuration = `${t * Math.random() + 2}s`;
    f[t].style.animationDelay = `${t * Math.random() + 1}s`;
  });

  if (num < 50) {
    create();
    document.querySelector('.sky').style.background = `hsl(210, ${10 + (40 * num) / 23}%, ${
      50 - (30 * num) / 23
    }%)`;
  }
  console.log(  document.querySelectorAll(".circles").length);
}, 556);