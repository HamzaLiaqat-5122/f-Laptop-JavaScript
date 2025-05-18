// 1. When a checkbox is clicked, toggle the input type of a password field between "password" and "text".

// const checkBox = document.querySelector(".checkBox");
// const password = document.querySelector(".password");

// checkBox.addEventListener("change", () => {
//     if(checkBox.checked === true){
//         password.type = "text";
//     } else{
//         password.type = "password"
//     }
// })

// 2. When a button is clicked, change the background color of all <p> elements to yellow.

// const p = document.querySelectorAll("p");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     p.forEach(para => para.style.backgroundColor = "yellow");
// })

// 3. When a user selects an image file using an <input type="file">, display the image in an <img> tag as a preview.

// 4. Prevent the user from copying text from a <p> element. Show an alert that says "Copying is disabled" when copy is attempted.

// const paragraph = document.getElementById("noCopyText");

// paragraph.addEventListener("copy", function (event) {
//   event.preventDefault();
//   alert("Copying is disabled");
// });

// 5. When a button is clicked, take the value from an input field and add it as a new <li> in an unordered list.

// const input = document.getElementById('itemInput');
// const button = document.getElementById('addButton');
// const list = document.getElementById('itemList');

// button.addEventListener('click', function () {
//   const value = input.value.trim();
//   if (value !== "") {
//     const li = document.createElement('li');
//     li.textContent = value;
//     list.appendChild(li);
//     input.value = ""; 
//   }
// });

// 6. When an input field loses focus (onblur), convert the value inside it to uppercase.

// const input = document.querySelector("input");

// input.addEventListener("blur", () => {
//     input.value = input.value.toUpperCase();
// })

// 7. Have two buttons: "Increase" and "Decrease". When clicked, they should change the font size of a <p> element accordingly.

// const container = document.querySelector(".container");
// const paragraph = container.querySelector("p");

// let currentFontSize = 16; 

// container.addEventListener("click", e => {
//   const target = e.target;

//   if (target.classList.contains("increase")) {
//     currentFontSize += 5; 
//     paragraph.style.fontSize = currentFontSize + "px";
//   } else if (target.classList.contains("decrease")) {
//     currentFontSize -= 5; 
//     paragraph.style.fontSize = currentFontSize + "px";
//   }
// });


// 8. When a "Scroll to Top" button is clicked, scroll the webpage smoothly back to the top.

// 9. Create a manual image carousel: when "Next" or "Previous" buttons are clicked, change the image src of an <img> tag.

// let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
// let i = 0;

// function next() {
//   i++;
//   if (i >= images.length) i = 0;
//   document.getElementById("img").src = images[i];
// }

// function prev() {
//   i--;
//   if (i < 0) i = images.length - 1;
//   document.getElementById("img").src = images[i];
// }

// document.getElementById("prevBtn").addEventListener("click", prev);
// document.getElementById("nextBtn").addEventListener("click", next);

// 10. In a form with a name input, when the submit button is clicked, check if the input is empty. If it is, prevent form submission and show an alert.


// document.getElementById("myForm").addEventListener("submit", function(event) {
//     const nameInput = document.getElementById("name").value.trim();
    
//     if (nameInput === "") {
//       event.preventDefault(); // Prevent form submission
//       alert("Please enter your name.");
//     }
//   });