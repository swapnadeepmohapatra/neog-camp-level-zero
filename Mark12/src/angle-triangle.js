const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

/**
 * Calculates the sum of the angles
 * @param {Number} angle1 Angle of the triangle.
 * @param {Number} angle2 Angle of the triangle.
 * @param {Number} angle3 Angle of the triangle.
 * @returns {Number} Sum of the angles
 */
function sumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

/**
 * Checks if the sum of the angles is 180 and displays the message.
 */
function isTriangle() {
  if (
    Number(inputs[0].value) < 1 ||
    Number(inputs[1].value) < 1 ||
    Number(inputs[2].value) < 1
  ) {
    return alert("Please enter all valid angles");
  }

  if (inputs[0].value && inputs[1].value && inputs[2].value) {
    const sum = sumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );

    outputEl.innerText =
      sum === 180
        ? "Yay, the angles form a triangle!"
        : "Oh No! The angle doesn't form a triangle";
  } else {
    alert("Please enter all the angles");
    outputEl.innerText = "";
  }
}

/**
 * Adds event listener to the button
 */
isTriangleBtn.addEventListener("click", isTriangle);
