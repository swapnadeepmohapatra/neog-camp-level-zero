/**
 * Cash Register Manager App
 * @param {HTMLElement} el HTMlelement where the app is rendered
 * @param {Number[]} availableNotes Array of available notes
 */
function CashRegisterManager(el, availableNotes) {
  const button = document.createElement("button");
  const inputBillAmount = document.createElement("input");
  const inputCashGiven = document.createElement("input");

  createElements(el, availableNotes, button, inputBillAmount, inputCashGiven);
  addEventListeners(button);

  /**
   * Creates the elements for the app and appends them to the dom
   * @param {HTMLElement} el HTMlelement where the app is rendered
   * @param {HTMLElement} availableNotes Array of available notes
   * @param {HTMLElement} button HTMlelement for the button
   * @param {HTMLElement} inputBillAmount HTMlelement for the input bill amount
   * @param {HTMLElement} inputCashGiven HTMlelement for the input cash given
   */
  function createElements(
    el,
    availableNotes,
    button,
    inputBillAmount,
    inputCashGiven
  ) {
    const fragment = document.createDocumentFragment();

    const heading = document.createElement("h1");
    heading.innerText = "Cash Register Manager";
    fragment.appendChild(heading);

    const helperText = document.createElement("p");
    helperText.innerText =
      "Enter the bill amount and cash given by the customer and know minimum number of notes to return.	";
    fragment.appendChild(helperText);

    const form = document.createElement("form");

    const labelBillAmount = document.createElement("label");
    labelBillAmount.innerText = "Bill Amount:";
    form.appendChild(labelBillAmount);

    inputBillAmount.type = "number";
    inputBillAmount.placeholder = "Enter amount";
    form.appendChild(inputBillAmount);

    const labelCashGiven = document.createElement("label");
    labelCashGiven.innerText = "Cash Given:";
    form.appendChild(labelCashGiven);

    inputCashGiven.type = "number";
    inputCashGiven.placeholder = "Enter amount";
    form.appendChild(inputCashGiven);

    button.innerText = "Check";
    form.appendChild(button);

    fragment.appendChild(form);

    const textHeading = document.createElement("p");
    textHeading.classList.add("text-heading");
    textHeading.innerText = "Return Change";
    fragment.appendChild(textHeading);

    const changeTable = document.createElement("table");
    changeTable.classList.add("change-table");

    const notesNoTr = document.createElement("tr");
    notesNoTr.classList.add("notes-no-tr");

    const notesNoTh = document.createElement("th");
    notesNoTh.innerText = "No of Notes";
    notesNoTr.appendChild(notesNoTh);

    for (let index = 0; index < availableNotes.length; index++) {
      const notesNoTd = document.createElement("td");
      notesNoTd.classList.add("notes-no-td");
      notesNoTd.innerText = "0";
      notesNoTr.appendChild(notesNoTd);
    }
    changeTable.appendChild(notesNoTr);

    const notesDenoTr = document.createElement("tr");
    notesDenoTr.classList.add("notes-deno-tr");

    const notesDenoTh = document.createElement("th");
    notesDenoTh.innerText = "Notes";
    notesDenoTr.appendChild(notesDenoTh);

    for (let index = 0; index < availableNotes.length; index++) {
      const notesDenoTd = document.createElement("td");
      notesDenoTd.classList.add("notes-deno-td");
      notesDenoTd.innerText = availableNotes[index];
      notesDenoTr.appendChild(notesDenoTd);
    }
    changeTable.appendChild(notesDenoTr);

    fragment.appendChild(changeTable);

    document.querySelector(el).appendChild(fragment);
  }

  /**
   * Adds event listeners to all the elements of the app
   * @param {HTMLElement} button HTMlelement for the button
   */
  function addEventListeners(button) {
    button.addEventListener("click", buttonClickHandler);
  }

  /**
   * Event handler for the button click event
   * @param {MouseEvent<HTMLButtonElement>} e Event object
   */
  function buttonClickHandler(e) {
    e.preventDefault();
    if (inputCashGiven.value.trim() === 0 || !inputBillAmount.value.trim()) {
      alert("You have to pay something");
    } else if (inputBillAmount.value > inputCashGiven.value) {
      alert("Cash given is less than bill amount");
    } else if (inputBillAmount.value === inputCashGiven.value) {
      alert("No need to return change");
    } else {
      const change = calcuateChange(
        inputBillAmount.value,
        inputCashGiven.value,
        availableNotes
      );

      displayChange(change);
    }
  }

  /**
   * Calculates the change to be returned
   * @param {Number} billAmount Bill amount
   * @param {Number} cashGiven Cash given by the customer
   * @param {Number[]} availableNotes Available notes
   * @returns {Number[]} Array of change to be returned
   */
  function calcuateChange(billAmount, cashGiven, availableNotes) {
    let change = cashGiven - billAmount;
    const changeNotes = [];
    for (let index = 0; index < availableNotes.length; index++) {
      const note = availableNotes[index];
      const noOfNotes = Math.floor(change / note);
      changeNotes.push(noOfNotes);
      change = change % note;
    }
    return changeNotes;
  }

  /**
   * Displays the change to be returned in the table
   * @param {Number[]} change Array of change to be returned
   */
  function displayChange(change) {
    document.querySelectorAll(".notes-no-td").forEach((tr, index) => {
      tr.innerText = change[index];
    });
  }
}

CashRegisterManager("#app", [2000, 500, 100, 50, 20, 10, 5, 1]);
