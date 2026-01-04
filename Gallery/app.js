const addButton = document.querySelector(`#add`);
const decreaseButton = document.querySelector(`#decrease`);
const image = document.querySelector(`figure`);
let n = 1;

addButton.addEventListener(`click`, add);
decreaseButton.addEventListener(`click`, decrease);
function add() {
  n++;
  if (n >= 8) n = 1;
  else;
  image.style.backgroundImage = `url(imagesGallery/img${n}.jpg)`;
}
addButton.addEventListener(`click`, add);
function decrease() {
  n--;
  if (n < 1) n = 8 - 1;
  else;
  image.style.backgroundImage = `url(imagesGallery/img${n}.jpg)`;
}