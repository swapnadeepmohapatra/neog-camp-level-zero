/**
 * Lucky Birthday App
 * @param {HTMLElement} el HTMlelement where the app is rendered
 */
function LuckyBirthday(el) {
  const inputDob = document.createElement("input");
  const inputLucky = document.createElement("input");
  const button = document.createElement("button");
  const output = document.createElement("p");

  createElements(el, inputDob, inputLucky, button, output);

  addEventListeners(button);

  /**
   * Creates the elements for the app and appends them to the dom
   * @param {HTMLElement} el HTMlelement where the app is rendered
   * @param {HTMLElement} inputDob HTMlelement for the input dob
   * @param {HTMLElement} inputLucky HTMlelement for the input lucky
   * @param {HTMLElement} button HTMlelement for the button
   * @param {HTMLElement} output HTMlelement for the output
   */
  function createElements(el, inputDob, inputLucky, button, output) {
    const fragment = document.createDocumentFragment();

    const form = document.createElement("form");

    createHtmlElem("label", "dob-label", "Date Of Birth:", form);
    inputDob.type = "date";
    inputDob.placeholder = "Enter amount";
    form.appendChild(inputDob);

    createHtmlElem("label", "lucky-label", "Lucky Number:", form);
    inputLucky.type = "number";
    inputLucky.placeholder = "Enter a number";
    form.appendChild(inputLucky);

    button.innerText = "Check Number";
    form.appendChild(button);

    fragment.appendChild(form);
    fragment.appendChild(output);

    el.appendChild(fragment);
  }

  /**
   * Creates element with the given attributes and appends it to the dom
   * @param {String} elem Element type
   * @param {String} id Element id
   * @param {String} innertext Inner text
   * @param {HTMLElement} parent Parent element
   */
  function createHtmlElem(elem, id, innertext, parent) {
    const element = document.createElement(elem);
    element.id = id;
    element.innerText = innertext;
    parent.appendChild(element);
  }

  /**
   * Adds event listeners to the button
   * @param {*} button Event listener for the button
   */
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

  /**
   * Calculates the sum of digits of the date
   * @param {String} date Date of birth
   * @returns sum of the digits of the date
   */
  const calculateSum = (date) => {
    return date
      .replaceAll("-", "")
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  };

  /**
   * Checks luckiness of the number with the sum of the date and displays the message
   * @param {Number} sumOfDate Sum of the digits of the date
   * @param {Number} numberToCheck Number to check with the sum of the date
   */
  const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
    sumOfDate % numberToCheck === 0
      ? showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `)
      : showMessage(`${numberToCheck} is not that lucky 😕`);
  };

  /**
   * Display message in the output element
   * @param {String} message Message to display
   */
  const showMessage = (message) => {
    output.innerText = message;
  };
}

LuckyBirthday(document.getElementById("app"));
