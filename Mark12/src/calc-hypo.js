const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

/**
 * Calculates the sum of squares of two sides
 * @param {Number} a Length of side a
 * @param {Number} b  Length of side b
 * @returns {Number} Sum of squares of the two sides
 */
function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

/**
 * Calculates the hypotenuse of the triangle using pythagoras theorem
 */
function calculateHypotenuse() {
  if (!sides[0].value || !sides[1].value) {
    alert("Please enter all the two sides");
    outputEl.innerText = "";
  } else {
    if (Number(sides[0].value) < 1 || Number(sides[1].value) < 1) {
      alert("Please enter valid length two sides");
      outputEl.innerText = "";
    }

    const sumOfSquares = calculateSumOfSquare(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.round(Math.sqrt(sumOfSquares) * 100) / 100;
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
}

/**
 * Adds event listener to the button
 */
calculateBtn.addEventListener("click", calculateHypotenuse);
