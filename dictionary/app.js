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
let loadingStatus = false

document
  .querySelector(`input[type='submit']`)
  .addEventListener(`click`, (e) => {
    e.preventDefault();
    if (WORD.value) {
      loadingStatus = true
      fetchDictionaryDefinition(WORD.value);
    } else {
      dictionaryElement.textContent = `ERROR Encountered!`;
    }
  });

async function fetchDictionaryDefinition(WORD) {
  try {
    var now = new Date();
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${WORD}`
    );
    const data = await response.json();

    if (response.ok) {
      renderDefinitions(data);
    } else {
      console.log(response);
      document.querySelector(
        `article#dict`
      ).innerHTML = `<h2>${response.status}: ${data.title}</h2>
      <p>${data.message}</p>
      <p>${data.resolution}</p>`;
    }
  } catch (error) {
    document.querySelector(
      `article`
    ).textContent = `ERROR ocurred. Check console`;
    throw new Error(`ERROR >>`, error);
  } finally {
    loadingStatus = false
    const timeLoading = new Date().getTime() - now.getTime();
    console.log(`Fetch attempt completed in ${timeLoading} ms`);
  }
}

while (loadingStatus) {
  console.log("Loading...");
}