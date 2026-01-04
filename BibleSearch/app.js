const inputs = document.querySelectorAll(`form input`);
const button = document.querySelector(`form button`);

button.addEventListener(`click`, (e) => {
  e.preventDefault()
  if (
    inputs[0].value !== `` &&
    inputs[1].value !== `` &&
    inputs[2].value !== ``
  ) {
    fetchJson(
      inputs[0].value,
      inputs[1].value,
      inputs[2].value
    );
  }
});

async function fetchJson(BOOK, CHAPTER, VERSE) {
  await fetch(`https://bible-api.com/${BOOK}\s${CHAPTER}:${VERSE}`)
    .then((ar) => {
      console.log(ar);
      ar.json();
    })
    .then((data1) => {
      console.log(data1);
    });

  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${BOOK}`)
    .then((res) => {
      console.log(res);
      res.json()
    })
}
