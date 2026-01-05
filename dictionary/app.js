/**
 *
 * @param {string} WORD Word whose meaning is to be fetched
 * @const {JSON} response response to user request
 * @const {Object} data data returned to the user that can be displayed to the front end
 */

const WORD = document.querySelector(`input[id='word']`);

document
  .querySelector(`input[type='submit']`)
  .addEventListener(`click`, (e) => {
    e.preventDefault();
    if (WORD.value) {
      fetchDictionaryDefinition(WORD.value);
    }
  });

async function fetchDictionaryDefinition(WORD) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${WORD}`
  );
  const data = await response.json();
  console.log(data);
  document.querySelector(
    `article`
  ).innerHTML = JSON.stringify(data);
}
