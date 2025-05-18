// ==============================
// 1. For Loop
// ==============================

let nums = [1, 2, 3, 4, 5];

// 1. Print all elements of nums using a for loop.

for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
}

// 2. Print the sum of all numbers in nums.

let sumNums = 0;

for (let i = 0; i < nums.length; i++) {
  sumNums += nums[i];
}
// console.log(sumNums);

// 3. Print only even numbers in nums.

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    // console.log(nums[i]);
  }
}

// 4. Print the square of each number in nums.

for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i] * nums[i]);
}

// 5. Find the maximum number in nums.

let maxNums = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > maxNums) {
    maxNums = nums[i];
  }
}

// console.log(maxNums);

// 6. Count how many numbers are greater than 3.

let countGreaterThanThree = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 3) {
    countGreaterThanThree++;
  }
}

// console.log(countGreaterThanThree);

// 7. Create a new array with double of each value.

let doubledNums = [];

for (let i = 0; i < nums.length; i++) {
  doubledNums.push(nums[i] * 2);
}

// console.log(doubledNums);

// 8. Print elements in reverse order.

for (let i = nums.length - 1; i >= 0; i--) {
  // console.log(nums[i]);
}

// 9. Count the number of odd numbers.

let oddNumsCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    oddNumsCount++;
  }
}

// console.log(oddNumsCount);

// 10. Find the index of the number 4 using a loop.

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 4) {
    // console.log(i);
  }
}

// ==============================
// 2. For...of Loop
// ==============================

let fruits = ["apple", "banana", "cherry", "date"];

// 1. Print each fruit using for...of.

for (let fruit of fruits) {
  // console.log(fruit);
}

// 2. Print the length of each fruit.

for (let fruit of fruits) {
  // console.log(fruit.length);
}

// 3. Print fruits in uppercase.

for (let fruit of fruits) {
  // console.log(fruit.toUpperCase());
}

// 4. Count how many fruits have more than 5 letters.

let greaterThan5Count = 0;

for (let fruit of fruits) {
  if (fruit.length > 5) {
    greaterThan5Count++;
  }
}

// console.log(greaterThan5Count);

// 5. Create a new array with first letter of each fruit.

let firstCharArr = [];

for (let fruit of fruits) {
  firstCharArr.push(fruit[0]);
}

// console.log(firstCharArr);

// 6. Print "Fruit is tasty" after each fruit.

for (let fruit of fruits) {
  // console.log(fruit, "Fruit is tasty");
}

// 7. Print only fruits that start with "b".

for (let fruit of fruits) {
  if (fruit[0] === "b") {
    // console.log(fruit);
  }
}

// 8. Create an array of fruit lengths.

let fruitsLength = [];

for (let fruit of fruits) {
  fruitsLength.push(fruit.length);
}

// console.log(fruitsLength);

// 9. Print all fruits that include the letter "a".

for (let fruit of fruits) {
  if (fruit.includes("a")) {
    // console.log(fruit);
  }
} // This is easy

// or - longer method

// for(let fruit of fruits){
//   for(let char of fruit){
//     if(char === "a"){
//       console.log(fruit);
//     }
//   }
// } // did it just for practice

// 10. Join all fruits into a single string with "-".

let dashedFruits = "";

for (let i = 0; i < fruits.length; i++) {
  dashedFruits += fruits[i];
  if (i !== fruits.length - 1) {
    dashedFruits += "-";
  }
}

// console.log(dashedFruits);

// ==============================
// 3. For...in Loop
// ==============================

let student = { name: "Ali", age: 20, grade: "A", city: "Lahore" };

// 1. Print all keys in the student object.

for (let key in student) {
  // console.log(key);
}

// 2. Print all values in the student object.

for (let key in student) {
  // console.log(student[key]);
}

// 3. Print key and value pairs.

for (let key in student) {
  // console.log(key, student[key]);
}

// 4. Count how many properties the object has.

let propertiesCount = 0;

for (let key in student) {
  if (key) {
    propertiesCount++;
  }
}

// console.log(propertiesCount);

// 5. Check if "age" exists in the object.

for (let key in student) {
  if (key === "age") {
    // console.log(true);
    break;
  }
}

// 6. Print only the string values.

for (let key in student) {
  if (typeof student[key] === "string") {
    // console.log(student[key]);
  }
}

// 7. Create a sentence using the key-value pairs.

let sentence = `${student.name} is ${student.age} years old, lives in ${student.city}, and has secured grade ${student.grade}.`;

// console.log(sentence);

// 8. Change value of "city" to "Karachi" using loop.

for (let key in student) {
  if (key === "city") {
    student[key] = "Karachi";
  }
}

// console.log(student);

// 9. Add 1 to age using for...in.

for (let key in student) {
  if (key === "age") {
    student[key] += 1;
  }
}

// console.log(student);

// 10. Create an array of all keys using loop.

let studentArr = [];

for (let key in student) {
  studentArr.push(key);
}

// console.log(studentArr);

// ==============================
// 4. Nested For Loop
// ==============================

let rows = 3;
let cols = 4;

// 1. Print a rectangle of "*" of given rows and cols.
for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < cols; j++) {
    line += "* ";
  }
  // console.log(line);
}

// console.log("");

// 2. Print numbers from 1 to rows*cols in grid format.
let count = 1;
for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < cols; j++) {
    line += count + " ";
    count++;
  }
  // console.log(line);
}

// console.log("");

// 3. Print a right-angle triangle of "*"
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  // console.log(line);
}

// console.log("");

// 4. Print a pattern like:
//    1
//    1 2
//    1 2 3
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  // console.log(line);
}

// console.log("");

// 5. Print reverse number triangle.
for (let i = rows; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  // console.log(line);
}

// console.log("");

// 6. Print alphabets in triangle using ASCII.
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += String.fromCharCode(64 + j) + " ";
  }
  // console.log(line);
}

// console.log("");

// 7. Print table of each number from 1 to rows.
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= cols; j++) {
    line += i * j + " ";
  }
  // console.log(line);
}

// console.log("");

// 8. Print a pattern with alternating 0 and 1.
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += ((i + j) % 2) + " ";
  }
  // console.log(line);
}

// console.log("");

// 9. Count total number of iterations.
let iterationCount = 0;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    iterationCount++;
  }
}
// console.log("Total iterations:", iterationCount);

// console.log("");

// 10. Print a hollow rectangle using "*".
for (let i = 0; i < rows; i++) {
  let line = "";
  for (let j = 0; j < cols; j++) {
    if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  // console.log(line);
}

// ==============================
// 5. Simple Functions
// ==============================

// 1. Write a function to add two numbers.

function add(a, b) {
  return a + b;
}

// console.log(add(3, 3));

// 2. Write a function to check if a number is even.

function checkEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

// console.log(checkEven(2));
// console.log(checkEven(3));

// 3. Write a function that returns the square of a number.

function giveSquare(n) {
  return n * n;
}

// console.log(giveSquare(5));

// 4. Write a function that prints "Hello, World!".

function helloWorld() {
  return "Hello, World!";
}

// console.log(helloWorld());

// 5. Write a function that takes a name and prints a greeting.

function greeting(name) {
  return `Good Morning, ${name}`;
}

// console.log(greeting("Hamza"));

// 6. Write a function to reverse a string.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(reverseString("hamza"));

// 7. Write a function to calculate factorial of a number.

function calculateFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// console.log(calculateFactorial(5));

// 8. Write a function that takes an array and returns its sum.

function sumOfArrayNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumOfArrayNumbers([1,2,3,4,5]));

// 9. Write a function that checks if a string includes "a".

function checkA(str) {
  if (str.includes("a")) {
    return true;
  }
  return false;
}

// console.log(checkA("aloo"));
// console.log(checkA("laoo"));
// console.log(checkA("looo"));

// 10. Write a function that counts vowels in a string.

function countVowel(str) {
  let vowelCount = 0;
  let truestr = str.toLowerCase();
  for (let i = 0; i < truestr.length; i++) {
    if (
      truestr[i] === "a" ||
      truestr[i] === "e" ||
      truestr[i] === "i" ||
      truestr[i] === "o" ||
      truestr[i] === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}

// console.log(countVowel("EdiO"));

// ==============================
// 6. Callback Functions
// ==============================

function processData(data, callback) {
  return callback(data);
}
let sample = [1, 2, 3, 4];

// 1. Use processData to double each element.
// console.log(processData(sample, (arr) => arr.map(num => num * 2)));

// 2. Use processData to find sum of array.
// console.log(processData(sample, (arr) => arr.reduce((acc, num) => acc + num, 0)));

// 3. Use processData to filter even numbers.
// console.log(processData(sample, (arr) => arr.filter(num => num % 2 === 0)));

// 4. Use processData to return array length.
// console.log(processData(sample, (arr) => arr.length));

// 5. Use processData to reverse the array.
// console.log(processData(sample, (arr) => arr.reverse()));

// 6. Use processData to return last item.
// console.log(processData(sample, (arr) => arr[arr.length - 1]));

// 7. Use processData to sort the array.
// console.log(processData(sample, (arr) => arr.sort((a, b) => a - b)));

// 8. Use processData to convert to string.
// console.log(processData(sample, (arr) => arr.join(',')));

// 9. Use processData to map squares of items.
// console.log(processData(sample, (arr) => arr.map(num => num * num)));

// 10. Use processData to check if array has 3.
// console.log(processData(sample, (arr) => arr.includes(3)));

// ==============================
// 7. Function Returning Functions
// ==============================

// 1. Create a function that returns another function which adds 5.
function add5(a) {
  return function () {
    return a + 5;
  };
}
// console.log(add5(5)());

// 2. Create a function that returns a greeting function with given name.
function greet(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
// console.log(greet("Alice")());

// 3. Return a function that multiplies input by a fixed number.
function multiplyBy(fixedNumber) {
  return function (input) {
    return input * fixedNumber;
  };
}
// console.log(multiplyBy(3)(4));

// 4. Return a function that checks divisibility by 3.
function divisibleBy3() {
  return function (number) {
    return number % 3 === 0;
  };
}
// console.log(divisibleBy3()(9));
// console.log(divisibleBy3()(10));

// 5. Return a function that adds prefix to string.
function addPrefix(prefix) {
  return function (str) {
    return prefix + str;
  };
}
// console.log(addPrefix("Mr. ")("John"));

// 6. Return a function that logs "executed" when called.
function logExecuted() {
  return function () {
    console.log("executed");
  };
}
// logExecuted()();

// 7. Return a function that returns square of input.
function square() {
  return function (number) {
    return number * number;
  };
}
// console.log(square()(4));

// 8. Return a function that checks if number is > 10.
function greaterThan10() {
  return function (number) {
    return number > 10;
  };
}
// console.log(greaterThan10()(5));
// console.log(greaterThan10()(15));

// 9. Return a function that returns true if string includes "js".
function includesJS() {
  return function (str) {
    return str.includes("js");
  };
}
// console.log(includesJS()("I love js"));
// console.log(includesJS()("I love JavaScript"));
// console.log(includesJS()("I love coding"));

// 10. Return a function that returns current date.

// I don't know it's solution because i never learned about date method.

// ==============================
// 8. Array Methods (forEach, map, filter, reduce)
// ==============================

let numbers = [1, 2, 3, 4, 5];

// 1. Use forEach to print each number.

numbers.forEach((num) => {
  // console.log(num);
});

// 2. Use map to double the numbers.

const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);

// 3. Use filter to return only odd numbers.

const oddOnlyNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddOnlyNumbers);

// 4. Use reduce to get sum of all numbers.

const reduceSumNumbers = numbers.reduce((acc ,curr) => acc + curr, 0); 
// console.log(reduceSumNumbers);

// 5. Use map to return square of each number.

const squareNumbers = numbers.map(num => num * num);
// console.log(squareNumbers);

// 6. Use filter to get numbers > 3.

const greaterThan3OnlyNumbers = numbers.filter(num => num > 3);
// console.log(greaterThan3OnlyNumbers);

// 7. Use reduce to get product of numbers.

const reduceProductNumbers = numbers.reduce((acc ,curr) => acc * curr, 1); 
// console.log(reduceProductNumbers);

// 8. Use forEach to print index and value.

numbers.forEach((number, index) => {
  // console.log(index, number);
});

// 9. Use map to convert numbers to strings.

const mapString = numbers.map(num => num.toString());
// console.log(mapString);

// 10. Use filter to get numbers divisible by 2.

const filterDividedBy2 = numbers.filter(num => num % 2 === 0);
// console.log(filterDividedBy2);

// ==============================
// 9. Array Methods (sort, find, every, some, fill, splice)
// ==============================

let nums2 = [5, 3, 8, 1, 9];

// 1. Sort numbers in ascending order.

nums2.sort((a, b) => a - b);
// console.log(nums2);

// 2. Find the first number > 5.

const findFirstNumberGreaterThan5 = nums2.find(num => num > 5);
// console.log(findFirstNumberGreaterThan5);

// 3. Check if all numbers are > 0 using every.

const checkEveryNumGreaterThanZero = nums2.every(num => num > 0);
// console.log(checkEveryNumGreaterThanZero);

// 4. Check if some numbers are even.

const someEven = nums2.some(num => num % 2 === 0);
// console.log(someEven);

// 5. Fill all elements with 0.

nums2.fill(0);
// console.log(nums2);

// 6. Splice the first 2 elements.

nums2.splice(0, 2);
// console.log(nums2);

// 7. Sort in descending order.

nums2.sort((a, b) => b - a);
// console.log(nums2);

// 8. Find a number that is divisible by 3.

const findNumDivisbleBy3 = nums2.find(num => num % 3 === 0);
// console.log(findNumDivisbleBy3);

// 9. Use every to check all < 10.

const checkEveryNumLessThanTen = nums2.every(num => num < 10);
// console.log(checkEveryNumLessThanTen);

// 10. Use splice to replace second number with 100.

nums2.splice(1, 1, 100);
// console.log(nums2);

// ==============================
// 10. Set and Map
// ==============================

let set = new Set([1, 2, 3, 2, 4]);
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// 1. Add a value to the set.

set.add(5);
// console.log(set);

// 2. Check if 2 exists in the set.

// console.log(set.has(2));

// 3. Delete value 3 from the set.

set.delete(3);
// console.log(set);

// 4. Print all values from the set.

for(let value of set){
  // console.log(value);
}

// 5. Check size of the set.

// console.log(set.size);

// 6. Add a new key-value pair to map.

map.set("d", 4);
// console.log(map);

// 7. Get value of key "b".

// console.log(map.get("b"));

// 8. Delete key "c" from map.

map.delete("c");
// console.log(map);

// 9. Print all keys from the map.

for(let key of map.keys()){
  // console.log(key);
}

// 10. Loop over both keys and values of map.

for(let [key, value] of map){
  // console.log(key, value);
}