function Base64SpeakApp(buttonEl, inputEl, outputEl) {
  const url = "https://mockapi.swapnadeep.repl.co/";
  buttonEl.addEventListener("click", buttonClickHandler);

  function buttonClickHandler() {
    let inputText = inputEl.value;
    let finalURL = constructURL(inputText);

    fetch(finalURL)
      .then((response) => response.json())
      .then((json) => {
        outputEl.innerText = json.translated;
      })
      .catch((e) => {
        console.log(e);
        alert("some error occured");
      });
  }

  function constructURL(inputText) {
    let encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
  }
}

Base64SpeakApp(
  document.querySelector("#translate-button"),
  document.querySelector("#translate-input"),
  document.querySelector("#translate-output")
);
