const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculate = document.querySelector(".btn-check");
const output = document.querySelector("#output");

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
    ).toFixed(4);
    output.innerText = `Area of a triangle using heron's formula is ${area} units`;
  } else {
    output.innerText = "Enter valid side lengths such that each side lengths";
  }
}

function isValidTriangle(firstSideValue, secondSideValue, thirdSideValue) {
  return (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  );
}

calculate.addEventListener("click", calculateArea);
