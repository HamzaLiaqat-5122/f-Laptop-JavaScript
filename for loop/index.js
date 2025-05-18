//Given a string, count the number of words in that string

// let string = "Super saiyan 5";
// let wordCount = 0;

// for (let i = 0; i < string.length; i++) {
//   if (i === 0 && string[i] !== " ") {
//     wordCount++;
//   } else if (string[i] !== " " && string[i - 1] === " ") {
//     wordCount++;
//   }
// }

// console.log(wordCount); // Output: 3

// count the words of each string of the array.

// let array = ["alo piyaz", " matar gobhi ", " shaljam   palak  "];

// for (let i = 0; i < array.length; i++) {
//   let eachString = array[i];
//   let arrayWordCount = 0;

//   for (let j = 0; j < eachString.length; j++) {
//     let currentChar = eachString[j];
//     if (currentChar !== " " && (j === 0 || eachString[j - 1] === " ")) {
//       arrayWordCount++;
//     }
// }
// console.log(`The word count in "${eachString}", :`, arrayWordCount);
// }

// 🧠 1. Reverse Each Word in a Sentence
// Question: Given a sentence like "JavaScript is fun", reverse each word while keeping the word order the same.

// const sentence = "JavaScript is fun";
// let result = "";
// let currentWord = "";

// for (let i = 0; i <= sentence.length; i++) {
//   if (i === sentence.length || sentence[i] === " ") {
//     // Reverse the current word
//     for (let j = currentWord.length - 1; j >= 0; j--) {
//       result += currentWord[j];
//     }
//     if (i !== sentence.length) {
//       result += " ";
//     }
//     currentWord = "";
//   } else {
//     currentWord += sentence[i];
//   }
// }

// console.log(result); // tpircSavaJ si nuf

// 🧠 2. Count Number of Words Without Using .split()
// Question: Count how many words are in a sentence (words are separated by spaces).

// const sentence = "Learning JavaScript with loops is powerful";
// let wordCount = 0;

// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] !== " " && (i === 0 || sentence[i - 1] === " ")) {
//     wordCount++;
//   }
// }

// console.log(wordCount);

// 🧠 4. Remove Consecutive Duplicate Characters
// Question: Given a string like "aabbccdee", return "abcde" by removing only consecutive duplicate characters.

// const original = "aabbccdee";
// let cleaned = "";

// for (let i = 0; i < original.length; i++) {
//   let c = original[i];
//   if (original[i - 1] !== original[i]) {
//     cleaned += original[i];
//   }
// }

// console.log(cleaned);

// 🧠 5. Sum All Numbers in a String
// Question: Given a string like "abc12xy34z9", sum all the numbers (12 + 34 + 9 = 55).

// const mixed = "abc12xy34z9";
// let numberSum = 0;
// let currentNumber = "";

// for (let i = 0; i <= mixed.length; i++) {
//   if (mixed[i] >= 0 || mixed[i] <= 0) {
//     currentNumber += mixed[i];
//   } else if (currentNumber !== "") {
//     numberSum += +currentNumber;
//     currentNumber = "";
//   }
// }

// console.log(numberSum);

// 🧠 6. Check if Two Strings Are Anagrams
// Question: Check whether two strings contain the same characters in any order. Do not use .sort() or nested loops.

let a = "listen";
let b = "silent";
let isAnagram = false;

// if (a.length === b.length) {
//   isAnagram = true;
// } else {
//   let charCountA = {};
//   let charCountB = {};

//   for (let i = 0; i < a.length; i++) {
//     let charA = a[i];
//     let charB = b[i];

//     if (charCountA[charA]) {
//       charCountA[charA]++;
//     } else {
//       charCountA[charA] = 1;
//     }

//     if (charCountB[charB]) {
//       charCountB[charB]++;
//     } else {
//       charCountB[charB] = 1;
//     }
//   }
//     for (let key in charCountA) {
//       if (charCountA[key] === charCountB[key]) {
//         isAnagram = true;
//         break;
//     }
//   }
// }

// console.log(isAnagram);

if (a.length === b.length) {
  isAnagram = true;
} else {
  let charCountA = {};
  let charCountB = {};

  for (let i = 0; i < a.length; i++) {
    let charA = a[i];
    let charB = b[i];
    if (charCountA[charA]) {
      (charCountA[charA] || 0) + 1;
    }
    if (charCountB[charB]) {
      (charCountB[charB] || 0) + 1;
    }
  }
  for (let key in charCountA) {
    if (charCountA[key] === charCountB[key]) {
      isAnagram = false;
      break;
    }
  }
}

console.log(isAnagram);

// 🧠 7. Count Vowels and Consonants
// Question: From a given string, count the number of vowels and consonants (ignore spaces and non-letters).

// const str = "Loops are fun!";
// let vowelCount = 0;
// let consonantCount = 0;
// let othersCount = 0;

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     vowelCount++;
//   } else if (char === " " || char === "!") {
//     othersCount++;
//   } else {
//     consonantCount++;
//   }
// }

// console.log(vowelCount, consonantCount);
