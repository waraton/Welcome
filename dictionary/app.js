import { testData2, renderDefinitions } from "./testData.js";
/**
 *
 * @param {string} WORD Word whose meaning is to be fetched
 * @constant {object} response response to user request
 * @const {Array} data data returned to the user that can be displayed to the front end
 * @function  fetchDictionaryDefinition used to send data to api and retrieve responce
 */
renderDefinitions(testData2);
const WORD = document.querySelector(`input[id='word']`);
const dictionaryElement = document.querySelector(`article#dict`);
let loadingStatus = false;

document
  .querySelector(`input[type='submit']`)
  .addEventListener(`click`, (e) => {
    e.preventDefault();
    if (WORD.value) {
      loadingStatus = true;
      fetchDictionaryDefinition(WORD.value.toLowerCase());
    } else {
      dictionaryElement.textContent = `ERROR Encountered!`;
    }
  });
let now;
async function fetchDictionaryDefinition(WORD) {
  try {
    now = new Date();
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${WORD}`
    );
    const data = await response.json();

    if (response.ok) {
      renderDefinitions(data);
      localStorage.setItem(WORD, JSON.stringify(data));
    } else {
      console.log(response);
      document.querySelector(
        `article#dict`
      ).innerHTML = `<h2>${response.status}: ${data.title} for ${WORD} (:</h2>
      <p>${data.message}</p>
      <p>${data.resolution}</p>`;
    }
  } catch (error) {
    dictionaryElement.textContent = `ERROR ocurred. Check console`;
    throw new Error(`ERROR >>`, error);
  } finally {
    loadingStatus = false;
    const timeLoading = new Date().getTime() - now.getTime();
    console.log(`Fetch (attempt) completed in ${timeLoading} ms`);
    dictionaryElement.innerHTML += `\n(Fetch (attempt) completed in ${timeLoading} ms)`;
  }
}

const buttons = document.querySelectorAll(`button`);
for (const button in document.querySelectorAll(`button`)) {
  if (Object.hasOwnProperty.call(buttons, button)) {
    const element = buttons[button];
    if (element.previousElementSibling.tagName.toLowerCase() === `audio` ) {
      console.log(`audio`);
      element.style.cursor = 'pointer'
      element.addEventListener(`click`,element.previousElementSibling.play())
    }
  }
}
