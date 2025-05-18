// Q1: Sort the numbers array in ascending order.
let numbers1 = [5, 2, 9, 1, 5, 6];

numbers1.sort((a, b) => a - b);
// console.log(numbers1);

// Q2: Sort the numbers array in descending order.
let numbers2 = [3, 0, -2, 7, 4];

numbers2.sort((a, b) => b - a);
// console.log(numbers2);

// Q3: Sort the words array alphabetically (A-Z).
let words1 = ["banana", "apple", "cherry", "date"];

words1.sort();
// console.log(words1);

// Q4: Sort the words array in reverse alphabetical order (Z-A).
let words2 = ["zebra", "elephant", "dog", "cat"]; // It is already sorted (Z-A)

words2.sort((a, b) => (a < b ? 1 : -1));
// console.log(words2);

// Q5: Sort the mixed positive and negative numbers array in ascending order.
let numbers3 = [10, -3, 7, 1, -5, 2];

numbers3.sort((a, b) => a - b);
// console.log(numbers3);

// Q6: Sort the words array that contains uppercase and lowercase letters (A-Z ignoring case).
let words3 = ["Banana", "apple", "Cherry", "date"];

words3.sort();
// console.log(words3);

// Q7: Sort the array of numbers having repeated elements in ascending order.
let numbers4 = [8, 1, 8, 2, 3, 2, 1];

numbers4.sort((a, b) => a - b);
// console.log(numbers4);

// Q8: Sort the array of single-digit numbers in descending order.
let numbers5 = [4, 9, 1, 7, 3, 2];

numbers5.sort((a, b) => b - a);
// console.log(numbers5);

// Q9: Sort the array of strings based on the first character alphabetically.
let words4 = ["sun", "apple", "moon", "earth"];

words4.sort();
// console.log(words4);

// Q10: Sort the array of three-letter words in reverse alphabetical order.
let words5 = ["cat", "bat", "rat", "mat"];

words5.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));

// console.log(words5);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Q11: Sort the prices array in ascending order.
let prices1 = [99, 199, 50, 149, 20];

prices1.sort((a, b) => a - b);
// console.log(prices1);

// Q12: Sort the prices array in descending order.
let prices2 = [5, 15, 25, 10, 20];

prices2.sort((a, b) => b - a);
// console.log(prices2);

// Q13: Sort the names array alphabetically (A-Z).
let names1 = ["Olivia", "Liam", "Emma", "Noah", "Ava"];

names1.sort();
// console.log(names1);

// Q14: Sort the names array in reverse alphabetical order (Z-A).
let names2 = ["Sophia", "Jackson", "Isabella", "Aiden", "Mia"];

names2.sort((a, b) => (a > b ? -1 : 1));
// console.log(names2);

// Q15: Sort the array of floating point numbers in ascending order.
let floats1 = [2.5, 3.1, 0.4, 1.7, 5.9];

floats1.sort((a, b) => a - b);
// console.log(floats1);

// Q16: Sort the array of floating point numbers in descending order.
let floats2 = [8.2, 4.5, 9.1, 1.3, 3.3];

floats2.sort((a, b) => b - a);
// console.log(floats2);

// Q17: Sort the colors array alphabetically (A-Z).
let colors1 = ["blue", "red", "green", "yellow", "purple"];

colors1.sort();
// console.log(colors1);

// Q18: Sort the cities array in reverse alphabetical order (Z-A).
let cities1 = ["Paris", "London", "New York", "Tokyo", "Sydney"];

cities1.sort((a, b) => (a > b ? -1 : 1));
// console.log(cities1);

// Q19: Sort the array of single characters alphabetically (A-Z).
let chars1 = ["d", "a", "c", "b", "e"];

chars1.sort();
// console.log(chars1);

// Q20: Sort the array of numbers with zeros and negatives in ascending order.
let numbers6 = [0, -10, 5, -2, 3];

numbers6.sort((a, b) => a - b);
// console.log(numbers6);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Q1: Sort the array of strings by length (shortest to longest).
let strings1 = ["apple", "banana", "kiwi", "grape"];

strings1.sort((a, b) => a.length - b.length);
// console.log(strings1);

// Q2: Sort the array of numbers based on their absolute value in ascending order.
let numbers = [-10, 2, -5, 7, 3];

numbers.sort((a, b) => {
  if (a < 0) a = -a;
  if (b < 0) b = -b;

  return a - b;
});

// console.log(numbers);

// Q3: Sort the array of names alphabetically by the second letter of each name.
let names = ["Zara", "Liam", "Emma", "Ava", "Noah"];

names.sort((a, b) => {
  if (a[1] < b[1]) {
    return -1;
  } else if (a[1] > b[1]) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(names);

// Q4: Sort the array of strings by the number of vowels in each string (ascending order).
let words = ["apple", "banana", "kiwi", "cherry"];

words.sort((a, b) => {
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < a.length; i++) {
    if ("aeiou".includes(a[i].toLowerCase())) {
      countA++;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if ("aeiou".includes(b[i].toLowerCase())) {
      countB++;
    }
  }

  return countA - countB;
});

// console.log(words);

// Q5: Sort the array of numbers by the number of digits in each number (ascending order).
let numbers$ = [123, 5, 56789, 22, 1];

numbers$.sort((a, b) => {
  let digitsA = 0,
    digitsB = 0;

  while (a >= 1) {
    a -= 1;
    digitsA++;
  }

  while (b >= 1) {
    b -= 1;
    digitsB++;
  }

  return digitsA - digitsB;
});

// console.log(numbers$);

// Q6: Sort the array of objects by the `age` property in ascending order.
let people1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

people1.sort((a, b) => a.age - b.age);
// console.log(people1);

// Q7: Sort the array of strings by the last character (alphabetically).
let words$ = ["apple", "banana", "grape", "kiwi"];

words$.sort((a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1;
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(words$);

// Q8: Sort the array of numbers such that all odd numbers come before even numbers.
let numbers_ = [10, 3, 5, 8, 7, 2];

numbers_.sort((a, b) => {
  if (a % 2 !== 0 && b % 2 == 0) {
    return -1;
  } else if (a % 2 === 0 && b % 2 !== 0) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(numbers_);

// Q9: Sort the array of words by the number of consonants in each word (ascending order).
let words_ = ["apple", "banana", "kiwi", "cherry"];

words_.sort((a, b) => {
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < a.length; i++) {
    if (!"aeiou".includes(a[i].toLowerCase())) {
      countA++;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!"aeiou".includes(b[i].toLowerCase())) {
      countB++;
    }
  }

  return countA - countB;
});

// console.log(words_);

// Q10: Sort the array of numbers by their magnitude (ignoring their sign), in descending order.
let numbers$_ = [-10, 5, -3, 8, 2];

numbers$_.sort((a, b) => Math.abs(b) - Math.abs(a));

// console.log(numbers$_);

// Medium 1

let products = [
  { name: "Apple", price: 2.5 },
  { name: "Banana", price: 1.2 },
  { name: "Orange", price: 2.5 },
  { name: "Grapes", price: 3.0 },
  { name: "Mango", price: 2.5 },
];

products.sort((a, b) => a.price - b.price);
// console.log(products);

// Expected output (after sorting):
// [
//   { name: "Banana", price: 1.2 },
//   { name: "Apple", price: 2.5 },
//   { name: "Mango", price: 2.5 },
//   { name: "Orange", price: 2.5 },
//   { name: "Grapes", price: 3.0 }
// ]

// Medium 2

let dates = [
  "2023-06-15",
  "2021-11-20",
  "2022-03-10",
  "2024-01-01",
  "2020-08-25",
];

dates.sort((a, b) => {
  if (a[0] !== b[0]) {
    return b[0] - a[0];
  }
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }
  if (a[2] !== b[2]) {
    return b[2] - a[2];
  }
  if (a[3] !== b[3]) {
    return b[3] - a[3];
  }

  if (a[5] !== b[5]) {
    return b[5] - a[5];
  }
  if (a[6] !== b[6]) {
    return b[6] - a[6];
  }

  if (a[8] !== b[8]) {
    return b[8] - a[8];
  }
  if (a[9] !== b[9]) {
    return b[9] - a[9];
  }

  return 0;
});

console.log(dates);

// Expected output (after sorting in descending order):
// ["2024-01-01", "2023-06-15", "2022-03-10", "2021-11-20", "2020-08-25"]
