let display = document.getElementById("display");
let currentValue = "0";

function appendToDisplay(value) {
  if (currentValue === "0" && value !== ".") {
    currentValue = value;
  } else {
    currentValue += value;
  }
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "0";
  display.value = currentValue;
}

function calculate() {
  try {
    currentValue = eval(currentValue).toString();
    display.value = currentValue;
  } catch (error) {
    display.value = "Error";
    currentValue = "0";
  }
}

// Allow keyboard input
document.addEventListener("keydown", function (e) {
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    appendToDisplay(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    appendToDisplay(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
    clearDisplay();
  }
});
