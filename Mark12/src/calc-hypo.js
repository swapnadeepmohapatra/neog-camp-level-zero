const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (!sides[0].value || !sides[1].value) {
    alert("Please enter all the two sides");
    outputEl.innerText = "";
  } else {
    const sumOfSquares = calculateSumOfSquare(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.round(Math.sqrt(sumOfSquares) * 100) / 100;
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);
