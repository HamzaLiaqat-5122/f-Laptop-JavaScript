let guessInput = document.querySelector("#guessField");
const submitButton = document.querySelector("#subt");
const guesses = document.querySelector(".guesses")
const guessesRemaining = document.querySelector(".lastResult");
const guessInfo = document.querySelector(".guessInfo");
const startNewGame = document.querySelector(".newGame");

let guessesArray = [];

let count = 10;
guessesRemaining.textContent = count;
const randomNumber = Math.floor(Math.random() * 101);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let guessInputValue = +guessInput.value;

  if(guessInput.value.trim() !== "" && guessInputValue >= 1 && guessInputValue <= 100){
    guessesArray.push(guessInputValue);
    const value = guessesArray.filter(num => num);
    guesses.textContent = value.join(", ");
    guessInput.value = ""

    if(guessInputValue !== randomNumber && guessesRemaining.textContent > 0){
      guessesRemaining.textContent = --count
    }
    
    if(guessInputValue !== randomNumber && count === 0){
      submitButton.disabled = true;
      startNewGame.textContent = "Try Again"
      guesses.textContent = ""
    }

    
    if(guessInputValue < randomNumber){
      guessInfo.textContent = "too low"
    } else if(guessInputValue > randomNumber){
      guessInfo.textContent = "too high"
    } else{
      guessesRemaining.textContent = 10
      guessInfo.textContent = "You guessed the random Number"
      startNewGame.textContent = "Start New Game"
      submitButton.disabled = true;
    }
    
  }
});
startNewGame.addEventListener("click", (e) => {
  submitButton.disabled = false;
  location.reload();
})

// let guessInput = document.querySelector("#guessField");
// const submitButton = document.querySelector("#subt");
// const guesses = document.querySelector(".guesses");
// const guessesRemaining = document.querySelector(".lastResult");
// const guessInfo = document.querySelector(".guessInfo");
// const startNewGame = document.querySelector(".newGame");

// let guessesArray = [];
// let count = 10;
// const randomNumber = Math.floor(Math.random() * 101);
// guessesRemaining.textContent = count;

// submitButton.addEventListener("click", (e) => {
//   console.log(randomNumber)
//   e.preventDefault();
//   let guessInputValue = +guessInput.value;

//   if (guessInput.value.trim() !== "" && guessInputValue >= 1 && guessInputValue <= 100) {
//     guessesArray.push(guessInputValue);
//     guesses.textContent = guessesArray.join(", ");
//     guessInput.value = "";

//     if (guessInputValue !== randomNumber && count > 0) {
//       count--;
//       guessesRemaining.textContent = count;

//       if (count === 0) {
//         submitButton.disabled = true;
//         guessInput.disabled = true;
//         startNewGame.textContent = "Try Again";
//         guesses.textContent = "";
//         guessInfo.textContent = "You lost! The number was " + randomNumber;
//       } else {
//         guessInfo.textContent = guessInputValue < randomNumber ? "Too low" : "Too high";
//       }
//     } else if (guessInputValue === randomNumber) {
//       guessInfo.textContent = "You guessed the random number!";
//       startNewGame.textContent = "Start New Game";
//       submitButton.disabled = true;
//       guessInput.disabled = true;
//     }
//   }
// });

// startNewGame.addEventListener("click", () => {
//   location.reload();
// });

// const guessInput = document.querySelector("#guessField");
// const submitButton = document.querySelector("#subt");
// const guesses = document.querySelector(".guesses");
// const guessesRemaining = document.querySelector(".lastResult");
// const guessInfo = document.querySelector(".guessInfo");
// const startNewGame = document.querySelector(".newGame");

// let randomNumber;
// let count;
// let guessesArray = [];

// function initGame() {
//   randomNumber = Math.floor(Math.random() * 101);
//   count = 10;
//   guessesArray = [];
//   guessInput.disabled = false;
//   submitButton.disabled = false;
//   guessInput.value = "";
//   guesses.textContent = "";
//   guessInfo.textContent = "";
//   guessesRemaining.textContent = count;
//   startNewGame.textContent = "";
// }

// function updateGameState(guess) {
//   guessesArray.push(guess);
//   guesses.textContent = guessesArray.join(", ");
//   count--;
//   guessesRemaining.textContent = count;

//   if (guess < randomNumber) {
//     guessInfo.textContent = "Too low";
//   } else if (guess > randomNumber) {
//     guessInfo.textContent = "Too high";
//   } else {
//     endGame(true);
//   }

//   if (count === 0 && guess !== randomNumber) {
//     endGame(false);
//   }
// }

// function endGame(isWin) {
//   guessInput.disabled = true;
//   submitButton.disabled = true;

//   if (isWin) {
//     guessInfo.textContent = "You guessed the random number!";
//     startNewGame.textContent = "Start New Game";
//   } else {
//     guessInfo.textContent = `You lost! The number was ${randomNumber}`;
//     startNewGame.textContent = "Try Again";
//   }
// }

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const guess = +guessInput.value;

//   if (guessInput.value.trim() !== "" && guess >= 1 && guess <= 100) {
//     updateGameState(guess);
//     guessInput.value = "";
//   }
// });

// startNewGame.addEventListener("click", () => {
//   initGame();
// });

// // Start game on first load
// initGame();
