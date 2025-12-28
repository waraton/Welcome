const h2 = document.querySelector(`h2`);
const body = document.body;
const darker = document.querySelector("#darker");
const audio = document.querySelector("div");

const h2Text = h2.innerText;
h2.innerHTML = ``;
h2Text.split(``).forEach((element) => {
  h2.innerHTML += `<code>${element}</code>`;
});

darker.addEventListener("click", () => {
  body.classList.toggle("dark");
});

document.querySelector(`input`).addEventListener(`change`, (event) => {
  const src = URL.createObjectURL(event.target.files[0]);
  let errorMsg = "";
  audio.classList.add(`this`);
  console.log(event.target.files[0].lastModified);
  const name = event.target.files[0].name;
  const size = event.target.files[0].size;
  const type = event.target.files[0].type.split("/");
  const lastModified = event.target.files[0].lastModified;
  const condition = type[0] === `audio`;
  condition ? isAudio() : notAudio();

  function isAudio() {
    if (type[0] === `audio`) {
      audio.innerHTML = `<audio controls src=${src}></audio>`;
    }
    audio.innerHTML = `<audio src='${src}' controls></audio>`;
  }
  function notAudio() {
    if (type[0] === `video`) {
      errorMsg = "";
      audio.innerHTML = `<video controls src=${src}></video>`;
    } else {
      audio.innerHTML = `<span error>--Not [video,audio]--</span>`;
      errorMsg = `Please Select an [audio,video] file, not not a(n) ${type[0]} file!`;
    }
  }
  audio.nextElementSibling.innerHTML = `<figcaption>
      ${name}<br>
      Size: ${(size / 1024 / 1024).toFixed(2)}MB<br>
      File Type: ${type[0]}<br>
      File Format: ${type[1]}<br>
      LastModifiedDate: ${new Date(lastModified).toLocaleString()}<br>
      <span error>${errorMsg}</span>
    </figcaption>`;
});
