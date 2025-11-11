const text = document.getElementById("text");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const capitalize = document.getElementById("capitalize");
const output = document.querySelector("output");

const button = document.querySelectorAll("button");
editText(button);

function editText(button) {
  button.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
      output.textContent = output.textContent.toLocaleLowerCase();
      if (ind < 3) {
        output.classList.remove("uppercase", "lowercase", "capitalize");
        button[0].classList.remove("active");
        button[1].classList.remove("active");
        button[2].classList.remove("active");
        output.classList.toggle(btn.id);
        btn.classList.toggle("active");
      } else {
        btn.classList.toggle("active");
        output.classList.toggle(btn.id);
      }
    });
  });
}

text.addEventListener("input", () => {
  output.textContent = text.value;
});

const main = document.getElementById("main");
const gameButton = document.getElementById("gameButton");
const writingArea = document.getElementById("writingArea");

const words = [
  "Jesus wept.",
  "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
  "All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.",
  "To every thing there is a season, and a time to every purpose under the heaven:",
  "I rejoice therefore that I have confidence in you in all things.",
  "Thanks be unto God for his unspeakable gift.",
  "All the saints salute you.",
  "The LORD is good unto them that wait for him, to the soul that seeketh him.",
  "Thou, O LORD, remainest forever; thy throne from generation to generation.",
  "A double minded man is unstable in all his ways.",
  "For every house is builded by some man; but he that built all things is God.",
  "And this will we do, if God permit.",
  "I am the rose of Sharon, and the lily of the valleys.",
  "If the foundations be destroyed, what can the righteous do?",
  "Beloved, if God so loved us, we ought also to love one another.",
  "Let not your heart be troubled: ye believe in God, believe also in me.",
  "Ye are my friends, if ye do whatsoever I command you.",
  "Peter then denied again: and immediately the cock crew.",
  "When they saw the star, they rejoiced with exceeding great joy.",
  "And when ye come into a house, salute it.",
];

const game = {
  start: 0,
  end: "",
  user: "",
  arrText: "",
};

gameButton.addEventListener("click", () => {
  writingArea.autofocus = true;
  into();
  console.log(writingArea.autofocus);
});

writingArea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    into();
  }
});

function into() {
  if (gameButton.textContent.toLocaleLowerCase() === "start") {
    gameOn();
    writingArea.disabled = false;
    writingArea.value = "";
  } else if (gameButton.textContent.toLocaleLowerCase() === "done") {
    writingArea.disabled = true;
    writingArea.style.borderColor = "white";
    gameEnd();
  }
}

function gameOn() {
  const rand = Math.floor(Math.random() * words.length);
  main.textContent = words[rand];
  game.arrText = words[rand];
  main.style.borderColor = "teal";
  gameButton.textContent = "done";
  game.start = new Date().getTime();
}

function gameEnd() {
  game.end = new Date().getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = writingArea.value;
  const correct = results();
  main.style.borderColor = "blue";
  main.innerHTML = `Time: ${Math.floor(totalTime)}s, 
  Scored: ${
    correct.score
  } out of ${correct.total} [${Math.ceil(
    writingArea.value.length / totalTime
  )} Char/Sec]`;
  gameButton.textContent = `start`;
}

function results() {
  let value1 = game.arrText.split("");
  let value2 = game.user.split("");
  let score = 0;
  value1.forEach((wrd, idx) => {
    if (wrd === value2[idx]) score++;
  });
  return { score, total: value1.length };
}
