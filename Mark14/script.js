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

    const labelBuyingAverage = document.createElement("label");
    labelBuyingAverage.innerText = "Initial Price (Buying Average):";
    fragment.appendChild(labelBuyingAverage);

    inputBA.type = "number";
    inputBA.placeholder = "Enter Initial Price";
    inputBA.required = true;
    fragment.appendChild(inputBA);

    const labelStockQuantity = document.createElement("label");
    labelStockQuantity.innerText = "Quantity of Stocks:";
    fragment.appendChild(labelStockQuantity);

    inputQty.type = "number";
    inputQty.placeholder = "Enter Quantity of Stocks";
    inputQty.required = true;
    fragment.appendChild(inputQty);

    const labelCurrentPrice = document.createElement("label");
    labelCurrentPrice.innerText = "Current Price (Last Traded Price):";
    fragment.appendChild(labelCurrentPrice);

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
    if (inputBA.value && inputQty.value && inputLTP.value) {
      const ba = Number(inputBA.value);
      const qty = Number(inputQty.value);
      const ltp = Number(inputLTP.value);

      calculateProfitAndLoss(ba, qty, ltp);
    } else {
      alert("Please enter all the fields");
      showOutput("");
    }
  }

  function calculateProfitAndLoss(buyingAverage, quantity, lastTradedPrice) {
    if (buyingAverage > lastTradedPrice) {
      var loss = (buyingAverage - lastTradedPrice) * quantity;
      var lossPercentage = ((loss / buyingAverage) * 100).toFixed(2);

      showOutput(
        `Hey, the loss is <span class="loss">${loss}</span> and the percent is <span class="loss">${lossPercentage}%</span>`
      );
    } else if (lastTradedPrice > buyingAverage) {
      var profit = (lastTradedPrice - buyingAverage) * quantity;
      var profitPercentage = ((profit / buyingAverage) * 100).toFixed(2);

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
