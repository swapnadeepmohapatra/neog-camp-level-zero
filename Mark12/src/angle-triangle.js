const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle() {
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

isTriangleBtn.addEventListener("click", isTriangle);
