const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculate = document.querySelector(".btn-check");
const output = document.querySelector("#output");

/**
 * Calculates the area of the triangle using Heron's formula and displays the message.
 */
function calculateArea() {
  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (isValidTriangle(firstSideValue, secondSideValue, thirdSideValue)) {
    // √s(s - a)(s - b)(s - c) Class 6 Nostalgia 😂

    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(2);
    output.innerText = `Area of a triangle using heron's formula is ${area} units`;
  } else {
    output.innerText = "Enter valid side lengths such that each side lengths";
  }
}

/**
 * Checks if the triangle is valid or not
 * @param {Number} firstSideValue Length of first side
 * @param {Number} secondSideValue Length of second side
 * @param {Number} thirdSideValue Length of third side
 * @returns {Boolean} Returns true if the triangle is valid
 */
function isValidTriangle(firstSideValue, secondSideValue, thirdSideValue) {
  return (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  );
}

/**
 * Adds event listener to the button
 */
calculate.addEventListener("click", calculateArea);
