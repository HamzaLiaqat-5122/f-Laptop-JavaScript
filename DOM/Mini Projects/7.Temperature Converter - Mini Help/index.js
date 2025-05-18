let temperatureInput = document.querySelector("#temperatureInput");
const selectBox = document.querySelector("#conversionType");
const button = document.querySelector("#convertBtn");
const result = document.querySelector("#result");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");

// F = (°C * 9/5) + 32

function celsiusToFahrenheit(celsius) {
  let f = (celsius * 9) / 5 + 32;
  return f
}

function fahrenheitToCelsius(fahrenheit) {
  let c = ((fahrenheit - 32) * 5) / 9;
  return c
}

button.addEventListener("click", () => {
  const inputValue = parseFloat(temperatureInput.value);

  if (isNaN(inputValue)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (selectBox.selectedIndex === 0) {

    result.textContent = `${celsiusToFahrenheit(inputValue)} °F`;
  } else if (selectBox.selectedIndex === 1) {

    result.textContent = `${fahrenheitToCelsius(inputValue)} °C`;
  }

  temperatureInput.value = "";
});
