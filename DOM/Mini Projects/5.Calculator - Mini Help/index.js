const display = document.querySelector("#display"); // Display screen

const numberButtons = document.querySelectorAll(
  ".btn:not(.operator):not(.clear):not(.delete):not(.equal)"
); // 0-9
const operatorButtons = document.querySelectorAll(".btn.operator"); // +, -, *, /
const clearButton = document.querySelector(".btn.clear"); // C button
const deleteButton = document.querySelector(".btn.delete"); // DEL button
const equalButton = document.querySelector(".btn.equal"); // = button

numberButtons.forEach((numberbutton) => {
  numberbutton.addEventListener("click", (e) => {
    if (display.textContent === "Error") return;
    if (display.textContent !== "0") {
      display.textContent += e.target.textContent;
    } else if (display.textContent === "0") {
      display.textContent = e.target.textContent;
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    if (display.textContent === "Error") return;
    const operator = e.target.textContent;
    const lastChar = display.textContent.slice(-1);
    const operators = ["+", "-", "*", "/", "."];

    if (display.textContent !== "0" && !operators.includes(lastChar)) {
      display.textContent += operator;
    }
  });
});

deleteButton.addEventListener("click", () => {
  if (display.textContent === "Error") return;
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = "0";
});

equalButton.addEventListener("click", (e) => {
  if (display.textContent === "Error") return;
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
});

function evaluate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      break;
  }
}

console.log(evaluate(4, "*", 5));
