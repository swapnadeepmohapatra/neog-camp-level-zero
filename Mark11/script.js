function LuckyBirthday(el) {
  const inputDob = document.createElement("input");
  const inputLucky = document.createElement("input");
  const button = document.createElement("button");
  const output = document.createElement("p");

  createElements(el, inputDob, inputLucky, button, output);

  addEventListeners(button);

  function createElements(el, inputDob, inputLucky, button, output) {
    const fragment = document.createDocumentFragment();

    const form = document.createElement("form");

    createHtmlElem("label", "dob-label", "Date Of Birth:", form);
    inputDob.type = "date";
    inputDob.placeholder = "Enter amount";
    form.appendChild(inputDob);

    createHtmlElem("label", "lucky-label", "Lucky Number:", form);
    inputLucky.type = "text";
    inputLucky.placeholder = "Enter a number";
    form.appendChild(inputLucky);

    button.innerText = "Check Number";
    form.appendChild(button);

    fragment.appendChild(form);
    fragment.appendChild(output);

    el.appendChild(fragment);
  }

  function createHtmlElem(elem, id, innertext, parent) {
    const element = document.createElement(elem);
    element.id = id;
    element.innerText = innertext;
    parent.appendChild(element);
  }

  function addEventListeners(button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const date = inputDob.value;
      const numberToCheck = inputLucky.value;
      if (date && numberToCheck) {
        const sumOfDate = calculateSum(date);
        checkIsNumberLucky(sumOfDate, numberToCheck);
      } else {
        showMessage("Please enter both the fields");
      }
    });
  }

  const calculateSum = (date) => {
    return date
      .replaceAll("-", "")
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  };

  const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
    sumOfDate % numberToCheck === 0
      ? showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `)
      : showMessage(`${numberToCheck} is not that lucky 😕`);
  };

  const showMessage = (message) => {
    output.innerText = message;
  };
}

LuckyBirthday(document.getElementById("app"));
