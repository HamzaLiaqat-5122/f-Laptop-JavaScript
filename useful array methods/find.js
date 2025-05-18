// 1. Find the first number greater than 10 in the array.
// const numbers = [3, 5, 8, 13, 2];

// const findGreaterThan10 = numbers.find((num) => num > 10);
// console.log(findGreaterThan10);

// 2. Find the first even number in the array.
const numbers1 = [1, 3, 4, 7, 8];

const findEvenNumber = numbers1.find((num) => num % 2 === 0);
// console.log(findEvenNumber);

// 3. Find the first element in the array that is a string.
const mixedArray = [2, "apple", 4, "banana", 6];

const findString = mixedArray.find((datatype) => typeof datatype === "string");
// console.log(findString);

// 4. Find the first person whose age is over 30.
// const people = [
//   { name: "John", age: 25 },
//   { name: "Sarah", age: 35 },
//   { name: "David", age: 29 },
// ];

// const findAge = people.find(({ age }) => age > 30);
// console.log(findAge);

// 5. Find the first number that is a multiple of 5 in the array.
const numbers2 = [12, 16, 20, 25, 28];

const findFirstMultiple5 = numbers2.find((num) => num % 5 === 0);
// console.log(findFirstMultiple5);

// 6. Find the first product with a price greater than 100.
const products = [
  { name: "Phone", price: 90 },
  { name: "Laptop", price: 150 },
  { name: "Tablet", price: 80 },
];

const findPrice = products.find(({ price }) => price > 100);
// console.log(findPrice);

// 7. Find the first fruit with more than 5 letters.
const fruits = ["apple", "banana", "cherry", "kiwi"];

const fruitLengthGreaterThan5 = fruits.find((str) => str.length > 5);
// console.log(fruitLengthGreaterThan5);

// 8. Find the first negative number in the array.
const numbers3 = [3, -1, 4, 7, -5];

const findNegative = numbers3.find((num) => num < 0);
// console.log(findNegative);

// 9. Find the first student who has scored more than 90.
const students = [
  { name: "Tom", score: 85 },
  { name: "Mary", score: 92 },
  { name: "Peter", score: 88 },
];

const findScoreGreaterThan90 = students.find((num) => num.score > 90);
// console.log(findScoreGreaterThan90);

// 10. Find the first country that starts with 'U'.
const countries = ["Germany", "United States", "Australia", "Uganda"];

const findCountryU = countries.find((str) => str[0] === "U");
// console.log(findCountryU);

// 11. Find the first even number greater than 50.
const numbers4 = [12, 48, 55, 63, 76];

const findEvenGreaterThan50 = numbers4.find((num) => num > 50 && num % 2 === 0);
// console.log(findEvenGreaterThan50);

// 12. Find the first number that is divisible by 3.
const numbers5 = [2, 7, 9, 11, 15];

const findFirstDivisorOf3 = numbers5.find((num) => num % 3 === 0);
// console.log(findFirstDivisorOf3);

// 13. Find the first person who is from 'USA'.
const people1 = [
  { name: "Tom", country: "Canada" },
  { name: "John", country: "USA" },
  { name: "Sarah", country: "USA" },
];

const findPersonUSA = people1.find((person) => person.country === "USA");
// console.log(findPersonUSA);

// 14. Find the first element in the array that is a boolean.
const mixedArray1 = [1, "hello", true, 5, false];

const findBoolean = mixedArray1.find((value) => typeof value === "boolean");
// console.log(findBoolean);

// 15. Find the first number smaller than 10.
const numbers6 = [11, 8, 15, 20, 5];

const findSmallerThan10 = numbers6.find((num) => num < 10);
// console.log(findSmallerThan10);

// 16. Find the first pet with the name 'Rex'.
const pets = [
  { name: "Fluffy", type: "cat" },
  { name: "Rex", type: "dog" },
  { name: "Bella", type: "dog" },
];

const findRex = pets.find((animal) => animal.name === "Rex");
// console.log(findRex);

// 17. Find the first even number in the array that is not divisible by 4.
const numbers7 = [2, 6, 8, 10, 12];

const findEvenNotDividedBy4 = numbers7.find(
  (num) => num % 2 === 0 && num % 4 !== 0
);
// console.log(findEvenNotDividedBy4);

// 18. Find the first number that is greater than the sum of 5 and 10.
const numbers8 = [12, 8, 16, 5, 3];

const findSumGreaterThan5And10 = numbers8.find((num) => num > 5 + 10);
// console.log(findSumGreaterThan5And10);

// 19. Find the first number that contains the digit '7'.
const numbers9 = [34, 56, 73, 27, 91];

const findDigit7 = numbers9.find((num) => num.toString().includes("7"));
// console.log(findDigit7);

// 20. Find the first word in the array that is shorter than 4 letters.
const words = ["apple", "cat", "banana", "dog"];

const findWord4LettersShort = words.find((str) => str.length < 4);
// console.log(findWord4LettersShort);

// 21. Find the first student who is below 18 years old.
const students1 = [
  { name: "Tom", age: 20 },
  { name: "John", age: 17 },
  { name: "Sarah", age: 19 },
];

const findBelow18 = students1.find((student) => student.age < 18);
// console.log(findBelow18);

// 22. Find the first number divisible by both 2 and 3.
const numbers10 = [5, 6, 9, 12, 15];

const findDivisibleBy2And3 = numbers10.find(
  (num) => num % 2 === 0 && num % 3 === 0
);
// console.log(findDivisibleBy2And3);

// 23. Find the first city that has more than 5 characters.
const cities = ["Paris", "London", "Berlin", "Tokyo"];

const findCityLengthMoreThan5 = cities.find((city) => city.length > 5);
// console.log(findCityLengthMoreThan5);

// 24. Find the first item in the array that is less than 50.
const items1 = [60, 40, 30, 20, 50];

const findLessThan50 = items1.find((num) => num < 50);
// console.log(findLessThan50);

// 25. Find the first number that is a prime number.
const numbers11 = [4, 9, 13, 18, 23];

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const firstPrime = numbers11.find(isPrime);
// console.log(firstPrime);

// 26. Find the first person whose name starts with 'J'.
const people2 = [
  { name: "John", age: 30 },
  { name: "Sarah", age: 40 },
  { name: "James", age: 25 },
];

const findPersonNameWithJ = people2.find((person) => person.name[0] === "J");
// console.log(findPersonNameWithJ);

// 27. Find the first string that has exactly 3 letters.
const strings = ["cat", "dog", "apple", "bat"];

const findStrLengthExactly3 = strings.find((str) => str.length === 3);
// console.log(findStrLengthExactly3);

// 28. Find the first product with a name that starts with 'L'.
const products1 = [
  { name: "Laptop", price: 150 },
  { name: "Phone", price: 90 },
  { name: "Lamp", price: 30 },
];

const findProductNameWithL = products1.find(
  (product) => product.name[0] === "L"
);
// console.log(findProductNameWithL);

// 29. Find the first color in the array that has 'green' in its name.
const colors = ["red", "blue", "greenish", "yellow"];

const findColorGreen = colors.find((color) => color.includes("green"));
// console.log(findColorGreen);

// 30. Find the first element in the array that is a number greater than 50.
const items = [30, "apple", 52, "banana", 40];

const findTypeNumberGreaterThan50 = items.find(
  (value) => typeof value === "number" && value > 50
);
// console.log(findTypeNumberGreaterThan50);

// Medium 1

const products_ = [
  { name: "Phone", price: 90 },
  { name: "Laptop", price: 150 },
  { name: "Lamp", price: 30 },
  { name: "Tablet", price: 80 },
  { name: "Speaker", price: 50 },
];

// Your task: Find the first product that is cheaper than $100 and has more than 4 letters in its name.

const findResult = products_.find(
  ({ name, price }) => price < 100 && name.length > 4
);
// console.log(findResult);

// Medium 2

const people = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 22 },
  { name: "Jack", age: 28 },
  { name: "Emily", age: 35 },
  { name: "James", age: 24 },
];

// Your task: Find the first person whose age is between 20 and 30 and whose name starts with 'J'.

const findRes = people.find(({name, age}) => name[0] === "J" && (age >= 20 && age <= 30));
// console.log(findRes);

// Medium 3

const numbers = [12, 24, 32, 36, 48, 60];

// Your task: Find the first number that is divisible by both 4 and 6 but NOT divisible by 8.

const findAns = numbers.find(num => num % 4 === 0 && num % 6 === 0 && num % 8 !== 0);
// console.log(findAns);

