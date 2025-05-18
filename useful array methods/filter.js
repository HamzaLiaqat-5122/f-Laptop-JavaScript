// 1. Filter out all the even numbers from the array.
let numbers1 = [1, 2, 3, 4, 5, 6];

const filterEvenNumber = numbers1.filter(num => num % 2 === 0);

// console.log(filterEvenNumber);

// 2. Filter all strings that have a length greater than 5.
let strings1 = ["apple", "banana", "grape", "kiwi", "mango", "strawberry"];

const filterLengthsGreaterThan5 = strings1.filter(str => str.length > 5);
// console.log(filterLengthsGreaterThan5);

// 3. From the array, keep only the positive numbers.
let numbers2 = [-3, 5, -1, 0, 2, -8, 7];

const filterPositiveNumbers = numbers2.filter(num => num > 0);
// console.log(filterPositiveNumbers);

// 4. Keep only the numbers that are less than 100.
let numbers3 = [50, 120, 30, 200, 99, 101, 75];

const filterNumbersLessThan100 = numbers3.filter(num => num < 100);
// console.log(filterNumbersLessThan100);

// 5. Filter names that start with the letter 'A'.
let names1 = ["Ali", "Asad", "Bilal", "Ahsan", "Hassan"];

const filterLetterA = names1.filter(name => name[0] === "A");
// console.log(filterLetterA);

// 6. Keep only the boolean `true` values.
let boolArray = [true, false, true, false, false, true];

const filterTrue = boolArray.filter(bool => bool === true);
// console.log(filterTrue);

// 7. Filter out the numbers that are not divisible by 3.
let numbers4 = [3, 6, 10, 15, 17, 18, 20];

const filterDividedBy3 = numbers4.filter(num => {
    if(num % 3 === 0){
        return num;
    }
});
// console.log(filterDividedBy3);

// 8. Keep only the strings that are exactly 4 characters long.
let words = ["book", "pen", "lamp", "desk", "fan", "bowl"];

const filterWordsOfLength4 = words.filter(word => word.length === 4);
// console.log(filterWordsOfLength4);

// 9. From the array, keep only the negative numbers.
let numbers5 = [5, -2, -6, 3, 0, -1, 9];

const filterNegative = numbers5.filter(num => num < 0);
// console.log(filterNegative);

// 10. Filter the numbers that are greater than or equal to 10.
let numbers6 = [1, 10, 15, 8, 0, 23, 7];

const filter10OrGreater = numbers6.filter(num => num >= 10);
// console.log(filter10OrGreater);

// 11. Keep only the strings that end with the letter "e".
let fruits = ["apple", "banana", "grape", "orange", "mango"];

const filterLastE = fruits.filter(fruit => fruit[fruit.length - 1] === "e");

// console.log(filterLastE);

// 12. Filter the ages that are 18 or older.
let ages = [15, 18, 21, 14, 30, 17, 20];

const filterAdults = ages.filter(age => age >= 18);
// console.log(filterAdults); 

// 13. Keep only the odd numbers from the array.
let numbers7 = [2, 3, 4, 5, 6, 7, 8, 9];

const filterOdd = numbers7.filter(num => num % 2 !== 0);
// console.log(filterOdd);

// 14. Filter out all the zero values from the array.
let values = [0, 1, 2, 0, 3, 0, 4, 5];

const filterOutZero = values.filter(value => value > 0);

// console.log(filterOutZero);

// 15. Keep only the values that are strictly equal to the string "yes".
let responses = ["yes", "no", "yes", "maybe", "no", "yes"];

const filterYes = responses.filter(res => res === "yes");

// console.log(filterYes);

// 16. Filter the numbers that are between 10 and 50 (inclusive).
let numbers8 = [5, 10, 25, 50, 75, 100];

const filter10to50 = numbers8.filter(num => num >= 10 && num <= 50);
// console.log(filter10to50);

// 17. From the array, keep only the elements that are `null`.
// let mixedArray = [null, undefined, 0, null, "", false, null];

// const filterNull = mixedArray.filter(nul => nul  === null);
// console.log(filterNull);

// 18. Keep only the non-empty strings.
let stringValues = ["", "hello", " ", "world", "", "chatgpt"];

const filterNonEmpty = stringValues.filter(str => str !== "");
// console.log(filterNonEmpty);

// 19. Filter the numbers that are perfect squares (e.g., 1, 4, 9, 16...).
let numbers9 = [1, 2, 3, 4, 5, 9, 10, 16, 20];

let filterPerfectSquares = numbers9.filter(num => Math.sqrt(num) === Math.floor(Math.sqrt(num)));

// console.log(filterPerfectSquares);

// 20. Keep only the elements that are of type number.
let mixedTypes = [1, "two", 3, null, "four", 5, undefined];

const filterTypeNumber = mixedTypes.filter(type => typeof type === "number");
// console.log(filterTypeNumber);

// -------------------------------------------------------------------------------------------------------------------------------------------

// 1. Keep only the numbers that are multiples of 5.
let nums1 = [5, 10, 12, 15, 22, 25, 30];

const filterMultipleOf5 = nums1.filter(num => num % 5 === 0);

// console.log(filterMultipleOf5);

// 2. Filter out strings that contain less than 3 characters.
let shortWords = ["hi", "cat", "a", "sun", "go", "man"];

const filterLessThan3Lengths = shortWords.filter(word => word.length >= 3);

// console.log(filterLessThan3Lengths);

// 3. Keep only the values that are exactly equal to false.
let bools = [true, false, 0, "false", false, null];

const filterFalse = bools.filter(bool => bool === false);

// console.log(filterFalse);

// 4. Filter all strings that start with a lowercase letter.
let stringCases = ["apple", "Banana", "grape", "Orange", "kiwi"];

const filterLowerCase = stringCases.filter(str => str[0] === str[0].toLowerCase())

// console.log(filterLowerCase);

// 5. Keep only numbers greater than 0 and less than 10.
let nums2 = [-5, 0, 1, 5, 9, 10, 12, 20];

const filterNums = nums2.filter(num => num > 0 && num < 10);

// console.log(filterNums);

// 6. Filter the elements that are `undefined`.
let mixedStuff = [undefined, null, 42, "hello", undefined, 0];

const filterUndefined = mixedStuff.filter(datatype => typeof datatype === "undefined");

// console.log(filterUndefined);

// 7. Keep only the strings that contain exactly 6 characters.
let sixLetterWords = ["animal", "planet", "sun", "galaxy", "rocket", "human"];

const filter6Words = sixLetterWords.filter(word => word.length === 6);

// console.log(filter6Words);

// 8. Filter the array to keep only the integers (no decimals).
let mixedNumbers = [1, 2.5, 3, 4.2, 5, 6.1, 7];

const filterIntegers = mixedNumbers.filter(num => num % 1 === 0);

// console.log(filterIntegers);

// 9. From the array, keep only the string type elements.
let randomThings = ["hello", 123, true, "world", null, "JS", false];

const filterStrings = randomThings.filter(thing => typeof thing === "string");

// console.log(filterStrings);

// 10. Filter the numbers that are odd and greater than 10.
let nums3 = [3, 7, 9, 11, 12, 15, 20, 21];

const filterOddsGreaterThan10 = nums3.filter(num => num % 2 !== 0 && num > 10);

// console.log(filterOddsGreaterThan10);

// Medium 1

// Practice Question:
// Given an array of mixed data types (numbers, strings, booleans, and null values),
// filter out the following:

// All null values.

// All strings that contain fewer than 4 characters.

// All booleans (both true and false).

// The resulting array should only contain:

// Numbers greater than or equal to 10.

// Strings that have 4 or more characters.

// Here’s your test array:

let mixedArray1 = [12, "apple", false, 5, null, "hi", 15, true, "cat", 25, "banana", undefined, 9, "grape", 8, "yes"];

// Expected Output:
// Your task is to filter the mixedArray to meet the above conditions. Try to approach this using only the .filter() method.

// const requiredFilter = mixedArray1.filter(value => value >= 10 || (typeof value === "string" && value.length >= 4));
// console.log(requiredFilter);

const oppositeFilter = mixedArray1.filter(value =>
    value === null ||
    typeof value === "boolean" ||
    value === undefined ||
    (typeof value === "string" && value.length < 4) ||
    (typeof value === "number" && value < 10)
  );
  
// console.log(oppositeFilter);

// Medium 2

// Practice Question 2:
// You are given an array of objects representing users.
// Each user object contains the following properties: name, age, and isActive.

// Your task:
// Use the .filter() method to create a new array that contains only those users who:

// Are active (isActive is true), and

// Are 18 years old or older, and

// Whose name has at least 5 characters

// Here's the array:

let users = [
  { name: "Ali", age: 17, isActive: true },
  { name: "Sana", age: 22, isActive: false },
  { name: "Hassan", age: 19, isActive: true },
  { name: "Iqra", age: 21, isActive: true },
  { name: "Zoya", age: 25, isActive: false },
  { name: "Ahmed", age: 18, isActive: true },
  { name: "Asim", age: 20, isActive: true }
];

const userFilter = users.filter(({name, age, isActive}) => {
    if(name.length >= 5 && age >= 18 && isActive) return name,age,isActive;
});

// console.log(userFilter);

