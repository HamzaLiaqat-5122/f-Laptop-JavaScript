// Q1: Use forEach to print each element of the given array.
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit) => {
  // console.log(fruit);
});

// Q2: Use forEach to print the square of each number in the array.
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  // console.log(number * number);
});

// Q3: Use forEach to add all numbers of the array into a variable called 'sum' and print the result.
let nums = [10, 20, 30, 40];

let sum = 0;
nums.forEach((num) => {
  sum += num;
});
// console.log(sum);

// Q4: Use forEach to print only the elements that are greater than 50.
let scores = [23, 76, 89, 45, 51, 32];

scores.forEach((score) => {
  if (score > 50) {
    // console.log(score);
  }
});

// Q5: Use forEach to count how many elements in the array are even numbers.
let digits = [2, 7, 4, 9, 12, 15, 8];

let digitCount = 0;

digits.forEach((digit) => {
  if (digit % 2 === 0) {
    digitCount++;
  }
});

// console.log(digitCount);

// Q6: Use forEach to create a new array where each element is the original element multiplied by 3.
let data = [1, 3, 5, 7];

const dataInto3 = [];
data.forEach((num) => {
  dataInto3.push(num * 3);
});
// console.log(dataInto3);

// Q7: Use forEach to print each character of the given string.
let str = "hello";
// (Hint: Convert it to an array first)

const arr = [...str];
// arr.forEach(str => console.log(str));

// Q8: Use forEach to find the longest word in the array.
let words = ["hi", "hello", "welcome", "sun"];

let longestWord = words[0];
words.forEach((word) => {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
});
// console.log(longestWord);

// Q9: Use forEach to print each index and value from the array in the format: "Index: x, Value: y".
let colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  // console.log(`Index: ${index}, Value: ${color}`);
});

// Q10: Use forEach to reverse the string (without using reverse()).
let greeting = "world";
let greetingArr = [...greeting];
// (Hint: Create a new string by prepending characters one by one)

let reversedGreeting = "";
greetingArr.forEach((str) => {
  reversedGreeting = str + reversedGreeting;
});

// console.log(reversedGreeting);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Q11: Use forEach to print each element of the array along with its length.
let animals = ["cat", "elephant", "tiger"];

animals.forEach((animal) => {
  // console.log(`animal is ${animal} and animal name has a length of ${animal.length}`);
});

// Q12: Use forEach to count how many elements in the array are strings longer than 4 characters.
let items = ["pen", "notebook", "eraser", "sharpener", "bag"];

let count = 0;
items.forEach((item) => {
  if (item.length > 4) {
    count++;
  }
});
// console.log(count);

// Q13: Use forEach to convert all strings in the array to uppercase and store them in a new array.
let cities = ["lahore", "karachi", "islamabad"];

let upperCaseCities = [];
cities.forEach((city) => {
  upperCaseCities.push(city.toUpperCase());
});
// console.log(upperCaseCities);

// Q14: Use forEach to calculate the total number of characters in all strings combined.
let names = ["Ali", "Hamza", "Zara"];

let totalLengthOfNames = 0;
names.forEach((name) => {
  totalLengthOfNames += name.length;
});
// console.log(totalLengthOfNames);

// Q15: Use forEach to print only the odd numbers from the array.
let series = [2, 5, 7, 10, 13, 16];

series.forEach((serie) => {
  if (serie % 2 !== 0) {
    // console.log(serie);
  }
});

// Q16: Use forEach to print the index of each element multiplied by 10.
let values = [100, 200, 300, 400];

values.forEach((value, index) => {
  // console.log(index * 10);
});

// Q17: Use forEach to find the smallest number in the array.
let marks = [67, 89, 45, 32, 91, 40];

let smallestNumber = marks[0];
marks.forEach((mark) => {
  if (mark < smallestNumber) {
    smallestNumber = mark;
  }
});
// console.log(smallestNumber);

// Q18: Use forEach to count how many times the word 'yes' appears in the array.
let responses = ["yes", "no", "yes", "no", "maybe", "yes"];

let yesCount = 0;
responses.forEach((response) => {
  if (response === "yes") {
    yesCount++;
  }
});
// console.log(yesCount);

// Q19: Use forEach to push elements greater than 5 into a new array.
let smallNumbers = [1, 3, 7, 10, 2, 6];

let smallNumbersArr = [];
smallNumbers.forEach((smallNumber) => {
  if (smallNumber > 5) {
    smallNumbersArr.push(smallNumber);
  }
});
// console.log(smallNumbersArr);

// Q20: Use forEach to create a string that joins all elements of the array with a comma (without using .join()).
let letters = ["a", "b", "c", "d"];

let joinedLetters = "";
letters.forEach((letter, index) => {
  joinedLetters += letter;
  if (index !== letters.length - 1) {
    joinedLetters += ",";
  }
});

// console.log(joinedLetters);

// -------------------------------------------------------------------------------------------------------------------------------------------

// 🔁 Q21: Use forEach to print each number in the array multiplied by 2.

let numberss = [2, 4, 6, 8];

// numberss.forEach((number) => console.log(number * 2));

// 🔁 Q22: Use forEach to calculate the sum of all numbers in the array.

let scoress = [10, 20, 30, 40];

let scoreSum = 0;
scoress.forEach((score) => (scoreSum += score));
// console.log(scoreSum);

// 🔁 Q23: Use forEach to push only the even numbers into a new array.

let numss = [3, 6, 9, 12, 15, 18];

let numssEven = [];
numss.forEach((num) => {
  if (num % 2 === 0) numssEven.push(num);
});
// console.log(numssEven);

// 🔁 Q24: Use forEach to print the first character of each word.

let wordss = ["apple", "banana", "grape", "orange"];

// wordss.forEach((word) => console.log(word[0]));

// 🔁 Q25: Use forEach to count how many strings have exactly 3 characters.

let codes = ["abc", "de", "xyz", "pq", "rtu"];

let count3Chars = 0;
codes.forEach((code) => {
  if (code.length === 3) count3Chars++;
});
// console.log(count3Chars);

// 🔁 Q26: Use forEach to build a new array of the lengths of each string.

let tools = ["hammer", "saw", "wrench"];

let toolsLengthArray = [];
tools.forEach((tool) => toolsLengthArray.push(tool.length));
// console.log(toolsLengthArray);

// 🔁 Q27: Use forEach to print only the strings that include the letter 'a'.

let fruitss = ["kiwi", "mango", "apple", "plum", "grape"];

fruitss.forEach((fruit) => {
  // if(fruit.includes("a")) console.log(fruit);
});

// 🔁 Q28: Use forEach to create a string of the first letters of each element (like initials).

let namess = ["Hamza", "Ali", "Usman", "Zara"];

let firstLettersString = "";
namess.forEach((name) => (firstLettersString += name[0]));
// console.log(firstLettersString);

// 🔁 Q29: Use forEach to check if any string contains the word "book". Print "Found" for each match.

let library = ["storybook", "pen", "notebook", "lamp", "textbook"];

library.forEach((thing) => {
  // if(thing.includes("book")) console.log("Found");
});

// 🔁 Q30: Use forEach to create a new array where each number is replaced by a string like 'Value is X'.

let data1 = [5, 10, 15];

let array = [];
data1.forEach((number) => array.push(`Value is ${number}`));

// console.log(array);

// 🔁 Medium-Level Q31:
// You are given an array of mixed data (strings). Each string represents either a name, an object, or a code.
// Task:
// Use .forEach() to go through the array and do the following:

// If the string contains all lowercase letters, push it to an array called lowerCaseItems.

// If the string contains all uppercase letters, push it to an array called upperCaseItems.

// If the string has a mix of uppercase and lowercase letters, push it to an array called mixedCaseItems.

let mixedWords = [
  "apple",
  "BOOK",
  "LaMp",
  "table",
  "PEN",
  "Note",
  "CHAIR",
  "mouse",
];

let lowerCaseItems = [];
let upperCaseItems = [];
let mixedCaseItems = [];

// Your forEach logic here

mixedWords.forEach((word) => {
  if (word === word.toLowerCase()) {
    lowerCaseItems.push(word);
  } else if (word === word.toUpperCase()) {
    upperCaseItems.push(word);
  } else{
    mixedCaseItems.push(word);
  }
});

// console.log("Lowercase:", lowerCaseItems);
// console.log("Uppercase:", upperCaseItems);
// console.log("Mixed Case:", mixedCaseItems);

// 🔁 Medium-Level Q32:
// You are given an array of sentences.
// Task:
// Using .forEach(), do the following:

// Count how many sentences have more than 3 words

// Create a new array longSentences that contains those sentences

// Also create a new array wordCounts where each element is the word count of each sentence


let sentences = [
  "I love coding",
  "JavaScript is awesome and powerful",
  "Hi",
  "Frontend development is fun",
  "Code daily",
  "Keep learning new things"
];

let countMoreThan3Words = 0;
let longSentences = [];
let wordCounts = [];

// Your forEach logic here

sentences.forEach(sentence => {
    wordCounts.push(sentence.split(" ").length);
    if(sentence.split(" ").length > 3){
        countMoreThan3Words++
        longSentences.push(sentence);
    } 
});

// console.log("Sentences with more than 3 words:", countMoreThan3Words);
// console.log("Long sentences:", longSentences);
// console.log("Word counts:", wordCounts);
// Expected Output:

// Sentences with more than 3 words: 3
// Long sentences: [
//   "JavaScript is awesome and powerful",
//   "Frontend development is fun",
//   "Keep learning new things"
// ]
// Word counts: [3, 5, 1, 4, 2, 4]