/**
 * Minions speak app.
 * @param {HTMLElement} buttonEl Button element
 * @param {HTMLElement} inputEl Input element
 * @param {HTMLElement} outputEl Output element
 */

function MinionSpeakApp(buttonEl, inputEl, outputEl) {
  const url = "https://api.funtranslations.com/translate/minion.json";
  buttonEl.addEventListener("click", buttonClickHandler);

  /**
   * Handles the click event on the button element.
   */
  function buttonClickHandler() {
    let inputText = inputEl.value;
    let finalURL = constructURL(inputText);

    // Makes an HTTP (GET) request to the API.
    fetch(finalURL)
      .then((response) => response.json())
      .then((json) => {
        outputEl.innerText = json.contents.translated;
      })
      .catch(() => {
        alert("some error occured");
      });
  }

  /**
   * Constructs the final URL to make the HTTP request.
   * @param {string} inputText Text to be added to the url
   * @returns {string} Final url
   */
  function constructURL(inputText) {
    let encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
  }
}

MinionSpeakApp(
  document.querySelector("#translate-button"),
  document.querySelector("#translate-input"),
  document.querySelector("#translate-output")
);
