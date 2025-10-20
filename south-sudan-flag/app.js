const typedText = document.querySelector(".typed-text");
const words = [
  "Official name is 'The Republic of South Sudan'",
  "Newest nation in the world",
  "Capital city is Juba",
  "The time zone is the Central African Time (CAT), GMT+02",
  "Got independence from Sudan on 11th July, 2011",
  "Have many tribes and ethnic groups",
  "Poor infrastructures",
  "Have ten states",
  "Independence day is 11th July",
  "Member state of many continental and international organizations",
  "Have abundant natural resources",
  "Have been in war/conflicts since 2013 to now (2025)",
  "Many South sudanese live in diaspora as refugees",
  "Have unstable political, social and economic climates",
  "Bordered by six countries: Uganda, Kenya, Ethiopia, Sudan, Chad, Central African Republic and D.R.Congo",
  "Geographically located in Central Africa",
];
const typingDelay = 200;
const erasingDelay = 100;
const newLetterDelay = 400;

let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[index].length) {
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1000);
  }
}

class ColorPallet {
  constructor(blue, yellow, red, green) {
    this.blue = blue;
    this.yellow = yellow;
    this.red = red;
    this.green = green;
  }
}

const named = new ColorPallet("blue", "yellow", "red", "green");
const FCC = new ColorPallet("#0F47FF", "#FCDD09", "#DA121A", "#078930");
const wikipedia = new ColorPallet("#00B6F2", "#FFE51A", "#E22028", "#00914C");
const ADP = new ColorPallet(
  "rgb(0, 53, 173)",
  "rgb(255, 209, 0)",
  "rgb(210, 16, 52)",
  "rgb(4, 114, 41)"
);

const selection = { named, FCC, wikipedia, ADP };

document.querySelector("select").addEventListener("input", (val) => {
  for (const key in selection[val.target.value]) {
    document.querySelectorAll("[cusCol]").forEach((el) => {
      if (Object.hasOwnProperty.call(selection[val.target.value], key)) {
        const color = selection[val.target.value][key];
        if (el.classList.contains(key)) {
          el.style.background = color;

          if (el.classList.contains("blue")) {
            el.style.color = selection[val.target.value]["yellow"];
          }
        }
      }
    });
  }
});
