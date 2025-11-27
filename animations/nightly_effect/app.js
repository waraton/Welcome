let elements = [];
function create() {
  elements.push("<>");
  let span = document.createElement(`span`);
  span.classList.add(`circles`);
  elements.forEach(() => {
    document.querySelector('.sky').appendChild(span);
  });
}
setInterval(() => {
  let count = 0;
  document.querySelectorAll(".circles").forEach((circle, index, array) => {
    count = index;
    array[index].style.left = `${Math.random()* 100}vw`
    array[index].style.animationDuration = `${index * Math.random() + 2}s`;
    array[index].style.animationDelay = `${index * Math.random() + 1}s`;
  });

  if (count < 50) {
    create();
    document.querySelector('.sky').style.background = `hsl(210, ${10 + (40 * count) / 23}%, ${
      50 - (30 * count) / 23
    }%)`;
  }
}, 5756);