const verse = document.querySelector(`.verse`);
const reference = document.querySelector(`.reference`);
const inputs = document.querySelectorAll(`form input`);
const button = document.querySelector(`form button`);
const datalist = document.querySelector(`datalist`);

button.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (
    inputs[0].value !== `` &&
    inputs[1].value !== `` &&
    inputs[2].value !== ``
  ) {
    fetchJson(inputs[0].value, inputs[1].value, inputs[2].value);
  }
});

async function fetchJson(BOOK, CHAPTER, VERSE) {
  try {
    const res = await fetch(
      `https://bible-api.com/${BOOK} ${CHAPTER}:${VERSE}`
    );
    const data = await res.json();

    verse.textContent = data.text;
    reference.textContent = `${
      data.reference
    }(${data.translation_id.toUpperCase()})`;
  } catch (error) {
    console.error(error);
  }
  /* const res2 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${BOOK}`)
  const  data2 = await res2.json()
   console.table(data2); */
}
