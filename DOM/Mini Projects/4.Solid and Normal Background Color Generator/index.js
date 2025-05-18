const colorCode = document.getElementById("colorCode");
const changeColorButton = document.getElementById("changeColorBtn");
const colorTypeDropdown = document.getElementById("colorTypeDropdown");
const body = document.body;

function generateRandomHex(length) {
  const letters = "abcdef0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return "#" + result;
}

let selectedType = ""; 


changeColorButton.addEventListener("click", () => {
  if (colorTypeDropdown.style.display === "none") {
    colorTypeDropdown.style.display = "inline-block";
    return; 
  }


  if (!selectedType) {
    alert("Please select a color type first.");
    return;
  }


  if (selectedType === "solid") {
    const hex = generateRandomHex(6);
    body.style.backgroundImage = "none";
    body.style.backgroundColor = hex;
    colorCode.textContent = `Solid: ${hex}`;
  } else if (selectedType === "gradient") {
    const hex1 = generateRandomHex(6);
    const hex2 = generateRandomHex(6);
    const gradient = `linear-gradient(135deg, ${hex1}, ${hex2})`;
    body.style.backgroundImage = gradient;
    body.style.backgroundColor = "transparent";
    colorCode.textContent = `Gradient: ${gradient}`;
  }
});


colorTypeDropdown.addEventListener("change", () => {
  selectedType = colorTypeDropdown.value;
});
