function MinionSpeakApp(buttonEl, inputEl, outputEl) {
  const url = "https://api.funtranslations.com/translate/minion.json";
  buttonEl.addEventListener("click", buttonClickHandler);

  function buttonClickHandler() {
    let inputText = inputEl.value;
    let finalURL = constructURL(inputText);

    fetch(finalURL)
      .then((response) => response.json())
      .then((json) => {
        outputEl.innerText = json.contents.translated;
      })
      .catch(() => {
        alert("some error occured");
      });
  }

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
