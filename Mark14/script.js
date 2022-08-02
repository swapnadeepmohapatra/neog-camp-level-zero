function StockCalculator(el) {
  const inputBA = document.createElement("input");
  const inputQty = document.createElement("input");
  const inputLTP = document.createElement("input");
  const output = document.createElement("p");
  const button = document.createElement("button");

  el.appendChild(createElements(inputBA, inputQty, inputLTP, output, button));
  button.addEventListener("click", clickHandler);

  function createElements(inputBA, inputQty, inputLTP, output, button) {
    const fragment = document.createDocumentFragment();

    inputBA.type = "number";
    inputBA.placeholder = "Enter Intial Price";
    inputBA.required = true;
    fragment.appendChild(inputBA);

    inputQty.type = "number";
    inputQty.placeholder = "Enter Quantity of Stocks";
    inputQty.required = true;
    fragment.appendChild(inputQty);

    inputLTP.type = "number";
    inputLTP.placeholder = "Enter Current Price";
    inputLTP.required = true;
    fragment.appendChild(inputLTP);

    button.innerText = "Tell Me";
    fragment.appendChild(button);

    output.classList.add("output");
    fragment.appendChild(output);

    return fragment;
  }

  function clickHandler() {
    const ba = Number(inputBA.value);
    const qty = Number(inputQty.value);
    const ltp = Number(inputLTP.value);

    calculateProfitAndLoss(ba, qty, ltp);
  }

  function calculateProfitAndLoss(buyingAverage, quantity, lastTradedPrice) {
    if (buyingAverage > lastTradedPrice) {
      var loss = (buyingAverage - lastTradedPrice) * quantity;
      var lossPercentage = Math.round((loss / buyingAverage) * 10000) / 100;

      showOutput(
        `Hey, the loss is <span class="loss">${loss}</span> and the percent is <span class="loss">${lossPercentage}%</span>`
      );
    } else if (lastTradedPrice > buyingAverage) {
      var profit = (lastTradedPrice - buyingAverage) * quantity;
      var profitPercentage = Math.round((profit / buyingAverage) * 10000) / 100;

      showOutput(
        `Hey, the profit is <span class="profit">${profit}</span> and the percent is <span class="profit">${profitPercentage}%</span>`
      );
    } else {
      showOutput(`No pain no gain and no gain no pain`);
    }
  }

  function showOutput(message) {
    output.innerHTML = message;
  }
}

StockCalculator(document.getElementById("app"));
