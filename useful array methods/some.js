// 1. Check if any number in the array is greater than 10.
let numbers = [5, 8, 13, 7];

const greaterThan10 = numbers.some((num) => num > 10);
// console.log(greaterThan10);

// 2. Check if there is any string that starts with the letter 'A' in the array.
let names = ["Alice", "Bob", "Charlie", "David"];

const startsWithA = names.some((str) => str[0] === "A");
// console.log(startsWithA);

// 3. Check if any number is divisible by 5 in the array.
let numbers1 = [1, 3, 8, 10, 15];

const divisibleBy5 = numbers1.some((num) => num % 5 === 0);
// console.log(divisibleBy5);

// 4. Check if there is any object in the array that has a property `active` set to `true`.
// let users = [
//   { name: "Alice", active: false },
//   { name: "Bob", active: true },
//   { name: "Charlie", active: false },
// ];

// const ActiveIsTrue = users.some(({ name, active }) => active);
// console.log(ActiveIsTrue);

// 5. Check if there is any value in the array that is a negative number.
let values = [3, -1, 7, 10, -5];

const isNegative = values.some((value) => value < 0);
// console.log(isNegative);

// 6. Check if any string in the array has a length greater than 5.
let words = ["apple", "banana", "kiwi", "orange"];

const greaterThan5 = words.some((word) => word.length > 5);
// console.log(greaterThan5);

// 7. Check if any number in the array is even.
let numbers2 = [1, 3, 5, 7, 8];

const isEven = numbers2.some((number) => number % 2 === 0);
// console.log(isEven);

// 8. Check if there is any user in the array who is older than 30.
let users1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
];

const ageGreaterThan30 = users1.some((user) => user.age > 30);
// console.log(ageGreaterThan30);

// 9. Check if any value in the array is a boolean.
let values1 = [1, "string", true, 4.5, false];

const isBoolean = values1.some((value) => typeof value === "boolean");
// console.log(isBoolean);

// 10. Check if any number in the array is a prime number.
let numbers3 = [4, 6, 8, 11, 15];

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const firstPrime = numbers3.some(isPrime);
// console.log(firstPrime);

// 11. Check if any string in the array contains the letter 'e'.
let words1 = ["apple", "banana", "cherry", "date"];

const containsLetterE = words1.some((word) => word.includes("e"));
// console.log(containsLetterE);

// 12. Check if any element in the array is `null`.
let values2 = [1, 2, null, 4];

const isNull = values2.some((value) => value === null);
// console.log(isNull);

// 13. Check if any number in the array is greater than 100.
let numbers4 = [25, 50, 150, 75];

const isGreaterThan100 = numbers4.some((num) => num > 100);
// console.log(isGreaterThan100);

// 14. Check if any value in the array is a floating-point number.
let values3 = [1, 2.5, 3, 4.75, 6];

let hasFloat = values3.some((value) => !Number.isInteger(value));

// console.log(hasFloat);

// 15. Check if any number in the array is a multiple of 3.
let numbers5 = [5, 10, 12, 20, 25];

const isMultipleOf3 = numbers5.some((num) => num % 3 === 0);
// console.log(isMultipleOf3);

// 16. Check if any string in the array contains a digit.
let strings1 = ["abc", "123abc", "hello", "world42"];

const hasDigits = strings1.some((digit) => {
  for (let i = 0; i < digit.length; i++) {
    if (digit[i] >= "0" && digit[i] <= "9") {
      return true;
    }
  }
  return false;
});

// console.log(hasDigits);

// 17. Check if any object in the array has a `name` property equal to 'Alice'.
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const check = people.some((person) => person.name === "Alice");
// console.log(check);

// 18. Check if any number in the array is less than 0.
let numbers6 = [-5, 10, 15, -3];

const isLessThan0 = numbers6.some((num) => num < 0);
// console.log(isLessThan0);

// 19. Check if any value in the array is undefined.
let values4 = [1, undefined, 5, 10];

const isUndefined = values4.some((value) => value === undefined);
// console.log(isUndefined);

// 20. Check if any string in the array has more than 10 characters.
let strings2 = ["short", "thisisaverylongstring", "mediumlength", "tiny"];

const hasMoreThan10Characters = strings2.some((str) => str.length > 10);
// console.log(hasMoreThan10Characters);

// 21. Check if any number in the array is divisible by 2 and 3.
let numbers7 = [2, 6, 9, 12, 18];

const isDivisbleBy2And3 = numbers7.some(
  (num) => num % 2 === 0 && num % 3 === 0
);
// console.log(isDivisbleBy2And3);

// 22. Check if there is any item in the array that is a positive odd number.
let numbers8 = [1, 2, 3, 4, 5];

const isPositiveOdd = numbers8.some((num) => num > 0 && num % 2 !== 0);
// console.log(isPositiveOdd);

// 23. Check if any string in the array contains the word 'hello'.
let phrases = ["hi there", "hello world", "good morning"];

const hasHello = phrases.some((phrase) => phrase.includes("hello"));
// console.log(hasHello);

// 24. Check if any number in the array is an odd number.
let numbers9 = [2, 4, 5, 8, 9];

const isOdd = numbers9.some((num) => num % 2 !== 0);
// console.log(isOdd);

// 25. Check if there is any value in the array that is a string and contains a space.
let values5 = ["apple", "banana", "apple pie", "orange"];

const stringWithSpace = values5.some(
  (value) => typeof value === "string" && value.includes(" ")
);
// console.log(stringWithSpace);

// 26. Check if any object in the array has a `status` property set to 'active'.
let tasks = [
  { task: "Task 1", status: "inactive" },
  { task: "Task 2", status: "active" },
];

const statusIsActive = tasks.some((task) => task.status === "active");
// console.log(statusIsActive);

// 27. Check if any number in the array is greater than 50 but less than 100.
let numbers10 = [30, 55, 75, 120];

const isGreaterThan50ButLessThan100 = numbers10.some(
  (num) => num > 50 && num < 100
);
// console.log(isGreaterThan50ButLessThan100);

// 28. Check if any element in the array is a date object.
let values6 = [new Date(), "string", 5, true];

let hasDate = values6.some((item) => item instanceof Date);
// console.log(hasDate);

// 29. Check if any value in the array is an empty string.
let values7 = ["hello", "", "world"];

const isEmptyString = values7.some((value) => value === "");
// console.log(isEmptyString);

// 30. Check if any number in the array is a perfect square.
let numbers11 = [4, 9, 16, 20, 25];

const isPerfectSquare = numbers11.some(
  (num) => Math.sqrt(num) === Math.floor(Math.sqrt(num))
);
// console.log(isPerfectSquare);

// Medium 1

// Question:
// You have an array of user objects, where each user has a name, age, and isActive property. Write a function that checks if there is at least one user who is:

// Over 30 years old, and

// Has the isActive property set to true.

// Example:

let users = [
  { name: "Alice", age: 25, isActive: false },
  { name: "Bob", age: 35, isActive: true },
  { name: "Charlie", age: 40, isActive: false },
];

// const result = users.some(user => user.age > 30 && user.isActive);
// console.log(result);

// Question:
// You have an array of product objects, where each product has a name, price, and isInStock property. Write a function that checks if there is at least one product that is:

// Less than $50 in price, and

// Is in stock (isInStock set to true).

// Example:

let products = [
  { name: "Laptop", price: 999, isInStock: false },
  { name: "Phone", price: 499, isInStock: true },
  { name: "Headphones", price: 45, isInStock: true },
  { name: "Keyboard", price: 30, isInStock: false },
];

// const result = products.some(product => product.price < 50 && product.isInStock);
// console.log(result);

// Question:
// You have an array of student objects, where each student has a name, grades (an array of numbers), and a passed property. Write a function that checks if there is at least one student who:

// Has a grade of 80 or above in any of their subjects, and

// Has the passed property set to true.

// Example:

let students = [
  { name: "Alice", grades: [72, 85, 90], passed: false },
  { name: "Bob", grades: [65, 70, 85], passed: true },
  { name: "Charlie", grades: [78, 79, 80], passed: true },
  { name: "David", grades: [60, 72, 65], passed: false },
];

const result = students.some(
  (student) => student.grades.some((grade) => grade >= 80) && student.passed
);
// console.log(result);
