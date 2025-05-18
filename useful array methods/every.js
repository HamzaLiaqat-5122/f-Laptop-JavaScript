// 1. Check if all numbers are positive
let numbers1 = [3, 5, 7, 9, 12];

const everyPositive = numbers1.every((num) => num > 0);
// console.log(everyPositive);

// 2. Check if all words have more than 3 letters
let words1 = ["apple", "banana", "cherry", "grape"];

const everyGreaterThan3 = words1.every((str) => str.length > 3);
// console.log(everyGreaterThan3);

// 3. Check if all elements are strings
let items1 = ["pen", "book", "notebook", "eraser"];

const everyString = items1.every((str) => typeof str === "string");
// console.log(everyString);

// 4. Check if all numbers are even
// let numbers2 = [2, 4, 6, 8, 10];

// const everyEven = numbers2.every((num) => num % 2 === 0);
// console.log(everyEven);

// 5. Check if all elements are less than 100
let scores1 = [45, 67, 89, 23, 56];

const checkScoresLessThan100 = scores1.every((num) => num < 100);
// console.log(checkScoresLessThan100);

// 6. Check if all ages are above 18
let ages1 = [21, 34, 19, 50, 22];

const everyAbove18 = ages1.every((age) => age > 18);
// console.log(everyAbove18);

// 7. Check if all prices are numbers
let prices1 = [19.99, 49.5, 15, 100];

const checkPriceIsNumber = prices1.every((price) => typeof price === "number");
// console.log(checkPriceIsNumber);

// 8. Check if all names start with a capital letter
let names1 = ["Alice", "Bob", "Charlie", "David"];

const everyLetterUppercase = names1.every(
  (name) => name[0] === name[0].toUpperCase()
);
// console.log(everyLetterUppercase);

// 9. Check if all temperatures are below 50
let temps1 = [30, 45, 25, 10, 5];

const everyTempBelow50 = temps1.every((temp) => temp < 50);
// console.log(everyTempBelow50);

// 10. Check if all cities have more than 5 characters
let cities1 = ["London", "Madrid", "Berlin", "Sydney"];

const everyCityLengthGreaterThan5 = cities1.every((city) => city.length > 5);
// console.log(everyCityLengthGreaterThan5);

// 11. Check if all items are less than 10 characters long
let items2 = ["pen", "pencil", "eraser", "sharpener"];

const everyitemLengthLessThan10 = items2.every((item) => item.length < 10);
// console.log(everyitemLengthLessThan10);

// 12. Check if all elements are truthy values
let mixed1 = [1, "hello", true, 5];

const checkTruthy = mixed1.every((value) => value);
// console.log(checkTruthy);

// 13. Check if all grades are above or equal to 60
let grades1 = [80, 75, 90, 60, 85];

const checkGradesGreaterThanOrEqualto60 = grades1.every((grade) => grade >= 60);
// console.log(checkGradesGreaterThanOrEqualto60);

// 14. Check if all passwords are at least 8 characters long
let passwords1 = ["password123", "admin1234", "userpass1", "qwertyui"];

const checkStrongPassword = passwords1.every(
  (password) => password.length >= 8
);
// console.log(checkStrongPassword);

// 15. Check if all numbers are divisible by 5
let numbers3 = [10, 20, 35, 50];

const checkDividedBy5 = numbers3.every((number) => number % 5 === 0);
// console.log(checkDividedBy5);

// 16. Check if all elements are greater than zero
let points1 = [4, 1, 7, 9, 6];

const checkGreaterThan0 = points1.every((point) => point > 0);
// console.log(checkGreaterThan0);

// 17. Check if all fruits start with the letter 'A'
let fruits1 = ["Apple", "Apricot", "Avocado", "Acerola"];

const checkFirstLetterA = fruits1.every((fruit) => fruit[0] === "A");
// console.log(checkFirstLetterA);

// 18. Check if all values are integers
let values1 = [4, 5, 7, 10, 13];

const checkInteger = values1.every((value) => Number.isInteger(value));
// console.log(checkInteger);

// 19. Check if all colors are strings with length greater than 3
let colors1 = ["blue", "green", "white", "black"];

const checkColorLengthGreaterThan3 = colors1.every(
  (color) => typeof color === "string" && color.length > 3
);
// console.log(checkColorLengthGreaterThan3);

// 20. Check if all weights are below 100
let weights1 = [55, 60, 45, 80, 95];

const checkWeightsBelow100 = weights1.every((weight) => weight < 100);
// console.log(checkWeightsBelow100);

// 21. Check if all usernames contain more than 4 characters
let usernames1 = ["john12", "alex23", "maria99", "steve5"];

const checkUsernameLengthGreaterThan4 = usernames1.every(
  (username) => username.length > 4
);
// console.log(checkUsernameLengthGreaterThan4);

// 22. Check if all elements are numbers greater than or equal to 0
let nums1 = [0, 5, 10, 2, 7];

const checkNumbersGreaterThanEqualTo0 = nums1.every(
  (num) => typeof num === "number" && num >= 0
);
// console.log(checkNumbersGreaterThanEqualTo0);

// 23. Check if all addresses contain at least 5 characters
let addresses1 = ["123 St", "45 Ave", "789 Blvd", "56 Rd"];

const checkAddress5CharactersLong = addresses1.every(
  (address) => address.length >= 5
);
// console.log(checkAddress5CharactersLong);

// 24. Check if all email IDs contain "@"
let emails1 = ["test@gmail.com", "user@yahoo.com", "admin@outlook.com"];

const checkAtTheRate = emails1.every((email) => email.includes("@"));
// console.log(checkAtTheRate);

// 25. Check if all tasks are marked as true
let tasks1 = [true, true, true, true];

const checkTaskIsTrue = tasks1.every((task) => task);
// console.log(checkTaskIsTrue);

// 26. Check if all salaries are more than 30,000
let salaries1 = [35000, 40000, 50000, 45000];

const checkSalaryGreaterThan30000 = salaries1.every((salary) => salary > 30000);
// console.log(checkSalaryLessThan30000);

// 27. Check if all distances are less than 1000
let distances1 = [500, 200, 700, 300, 900];

const checkDistance = distances1.every((distance) => distance < 1000);
// console.log(checkDistance);

// 28. Check if all words end with the letter 'e'
let words2 = ["cake", "bake", "make", "take"];

const checkLastCharacterE = words2.every(
  (word) => word[word.length - 1] === "e"
);
// console.log(checkLastCharacterE);

// 29. Check if all animals have names longer than 3 characters
let animals1 = ["lion", "tiger", "zebra", "puma"];

const checkAnimalNameLengthGreater3 = animals1.every(
  (animal) => animal.length > 3
);
// console.log(checkAnimalNameLengthGreater3);

// 30. Check if all numbers are odd
let numbers4 = [1, 3, 5, 7, 9];

const everyOdd = numbers4.every((num) => num % 2 !== 0);
// console.log(everyOdd);

// Medium 1

// Check if every username in the array meets BOTH of these conditions:
// 1. It must be at least 6 characters long.
// 2. It must start with an uppercase letter.

let usernames2 = ["Alice12", "Bob234", "Charlie7", "Daniel9"];

const checkResult = usernames2.every(
  (username) =>
    username.length >= 6 && username[0] === username[0].toUpperCase()
);
// console.log(checkResult);

// Check if every product name in the array meets ALL of these 3 conditions:
// 1. It must have at least 5 characters.
// 2. It must not contain any spaces.
// 3. It must end with a lowercase letter.

let products1 = ["Laptop", "Smartphone", "Headphones", "tablet"];

let allValid = products1.every((product) => {
  if (product.length < 5) return false;

  for (let j = 0; j < product.length; j++) {
    if (product[j] === " ") return false;
  }

  let lastChar = product[product.length - 1];
  return (
    lastChar === lastChar.toLowerCase() && lastChar >= "a" && lastChar <= "z"
  );
});

// console.log(allValid);

// Check if every number in the array meets all of these conditions:
// 1. It must be a positive integer.
// 2. It must be a multiple of 3.
// 3. It must be less than 100.

let numbers2 = [9, 15, 33, 72, 99];

const checkCondition = numbers2.every(number => (Number.isInteger(number) && number > 0) && number % 3 === 0 && number < 100);
// console.log(checkCondition);

