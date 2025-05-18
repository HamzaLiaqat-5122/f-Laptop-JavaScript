// Q1: Use reduce to calculate the sum of all numbers in the array.
const numbers1 = [1, 2, 3, 4, 5];

const reduceNumbers1 = numbers1.reduce((acc, curr) => acc + curr);
// console.log(reduceNumbers1);

// Q2: Use reduce to find the product of all numbers in the array.
const numbers2 = [2, 3, 4];

const reduceNumbers2 = numbers2.reduce((acc, curr) => acc * curr);
// console.log(reduceNumbers2);

// Q3: Use reduce to find the maximum number in the array.
const numbers3 = [10, 25, 5, 8, 30];

const reduceNumbers3 = numbers3.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
});
// console.log(reduceNumbers3);

// Q4: Use reduce to find the minimum number in the array.
const numbers4 = [7, 2, 15, 1, 9];

const reduceNumbers4 = numbers4.reduce((acc, curr) => {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
});
// console.log(reduceNumbers4);

// Q5: Use reduce to join all strings together into one string.
const words1 = ["Hello", " ", "World", "!"];

const reduceWords1 = words1.reduce((acc, curr) => {
  return acc + curr;
});
// console.log(reduceWords1);

// Q6: Use reduce to count the total number of characters in all strings.
const words2 = ["Apple", "Banana", "Cherry"];

const reduceWords2 = words2.reduce((acc, curr) => {
  return acc + curr.length;
}, 0);
// console.log(reduceWords2);

// Q7: Use reduce to create an array where each element is doubled.
const numbers5 = [1, 3, 5];

let doubledArr = [];
const reduceNumbers5 = numbers5.reduce((acc, curr) => {
  return doubledArr.push(curr + curr);
}, 1);
// console.log(doubledArr);

// Q8: Use reduce to create a single object that sums values by the key 'amount'.
const items1 = [
  { name: "Book", amount: 10 },
  { name: "Pen", amount: 5 },
  { name: "Pencil", amount: 3 },
];

const reduceItems1 = items1.reduce((acc, curr) => {
  return acc + curr.amount;
}, 0);
// console.log(reduceItems1);

// Q9: Use reduce to count how many even numbers are in the array.
const numbers6 = [1, 2, 4, 7, 10, 11];

let count = 0;
const reduceNumbers6 = numbers6.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    count++;
  }
}, 1);
// console.log(count);

// Q10: Use reduce to create a string from an array of characters.
const chars1 = ["H", "a", "m", "z", "a"];

let hamza = "";
const reduceChars1 = chars1.reduce((acc, curr) => {
  return (hamza = acc + curr);
});
// console.log(hamza);

// Q11: Use reduce to calculate the difference by subtracting from left to right.
const numbers7 = [100, 20, 5];

const reduceNumbers7 = numbers7.reduce((acc, curr) => {
  return acc - curr;
});
// console.log(reduceNumbers7);

// Q12: Use reduce to calculate the average of all numbers.
const numbers8 = [4, 8, 6, 10];

const sum = numbers8.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers8.length;

// console.log(average);

// Q13: Use reduce to count how many times the number 2 appears.
const numbers9 = [2, 3, 2, 5, 2, 6];

let target = 2;
let numbers9Count = 0;
const reduceNumbers9 = numbers9.reduce((acc, curr) => {
  if (curr === target) {
    numbers9Count++;
  }
}, 0);
// console.log(numbers9Count);

// Q14: Use reduce to merge all arrays into a single array.
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const mergedArray = arrayOfArrays.reduce((acc, curr) => {
  for (let i = 0; i < curr.length; i++) {
    acc.push(curr[i]);
  }
  return acc;
}, []);

// console.log(mergedArray);

// Q15: Use reduce to create an object counting the frequency of each element.
const letters1 = ["a", "b", "a", "c", "b", "a"];

const reduceLetters1 = letters1.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

// console.log(reduceLetters1);

// Q16: Use reduce to find the longest string.
const words3 = ["cat", "horse", "elephant", "dog"];

const reduceWords3 = words3.reduce((acc, curr) => {
  if (curr.length > acc.length) {
    return (acc = curr);
  }
  return acc;
});
// console.log(reduceWords3);

// Q17: Use reduce to create a new array with only positive numbers.
const numbers10 = [-5, 3, -1, 7, 0, -8, 6];

const positiveNumbers = numbers10.reduce((acc, curr) => {
  if (curr > 0) {
    acc.push(curr);
  }
  return acc;
}, []);

// console.log(positiveNumbers);

// Q18: Use reduce to sum only the odd numbers.
const numbers11 = [2, 5, 8, 3, 9];

const reduceNumbers11 = numbers11.reduce((acc, num) => {
  if (num % 2 !== 0) {
    return acc + num;
  }
  return acc;
}, 0);
// console.log(reduceNumbers11);

// Q19: Use reduce to build a reversed version of the array.
const numbers12 = [1, 2, 3, 4, 5];

const reduceNumbers12 = numbers12.reduce((acc, curr) => {
  acc.unshift(curr);
  return acc;
}, []);

// console.log(reduceNumbers12);

// Q20: Use reduce to find the total age from an array of objects.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const totalAgeOfPeople = people.reduce((arr, curr) => arr + curr.age, 0);
// console.log(totalAgeOfPeople);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Q1: Use reduce to find the sum of all even numbers in the array.
const numbers_ = [2, 5, 8, 11, 14];

const reduceNumbers_ = numbers_.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);
// console.log(reduceNumbers_);

// Q2: Use reduce to concatenate all words into a single sentence.
const words_ = ["Learning", "JavaScript", "is", "fun"];

const reduceWords_ = words_.reduce((acc, curr) => acc + curr + " ", "");
// console.log(reduceWords_);

// Q3: Use reduce to find the smallest number in the array.
const numbers__ = [9, 4, 7, 2, 10];

const reduceNumbers__ = numbers__.reduce((acc, curr) =>
  acc < curr ? acc : curr
);
// console.log(reduceNumbers__);

// Q4: Use reduce to count how many positive numbers are in the array.
const numbers___ = [-3, 7, -1, 4, 5, -2];

const reduceNumbers___ = numbers___.reduce((acc, curr) => {
  if (curr > 0) {
    acc++;
  }
  return acc;
}, 0);
// console.log(reduceNumbers___);

// Q5: Use reduce to build a string from the first letters of each word.
const words__ = ["Banana", "Orange", "Apple", "Grapes"];

const reduceWords__ = words__.reduce((acc, curr) => acc + curr[0], "");
// console.log(reduceWords__);

// Q6: Use reduce to calculate the total price from an array of items.
const items_ = [
  { item: "Bag", price: 50 },
  { item: "Shoes", price: 80 },
  { item: "Hat", price: 20 },
];

const reduceItems_ = items_.reduce((acc, curr) => acc + curr.price, 0);
// console.log(reduceItems_);

// Q7: Use reduce to find the longest word in the array.
const words___ = ["sun", "moon", "galaxy", "star"];

const reduceWords___ = words___.reduce(
  (acc, curr) => (acc.length > curr.length ? acc : curr),
  ""
);
// console.log(reduceWords___);

// Q8: Use reduce to create a new array containing only odd numbers.
const numbers$ = [3, 6, 9, 12, 15, 18];

const reduceNumbers$ = numbers$.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    acc.push(curr);
  }
  return acc;
}, []);
// console.log(reduceNumbers$);

// Q9: Use reduce to reverse a string.
const chars_ = ["c", "o", "d", "e"];

const reduceChars_ = chars_.reduce((acc, curr) => curr + acc, "");
// console.log(reduceChars_);

// Q10: Use reduce to calculate the sum of squares of all numbers.
const numbers$_ = [1, 2, 3, 4];

const reduceNumbers$_ = numbers$_.reduce((acc, curr) => {
  let square = curr * curr;
  return square + acc;
});

// console.log(reduceNumbers$_);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Medium 1

// Q: Given an array of objects, each with a 'name' and 'scores' array,
// use reduce to create a new object where each name maps to the total of their scores.

const students = [
  { name: "Hamza", scores: [85, 90, 95] },
  { name: "Ali", scores: [70, 80, 90] },
  { name: "Sara", scores: [88, 92, 79] },
];

// Your final output should look like:
// { Hamza: 270, Ali: 240, Sara: 259 }

// Do not use any other array methods (no .map(), .flat(), etc.), only reduce.

const result = students.reduce((acc, student) => {
  const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
  acc[student.name] = totalScore;
  return acc;
}, {});

// console.log(result);

// Q: Given an array of transactions, where each transaction has a 'type' ("credit" or "debit") and an 'amount',
// use reduce to calculate the final balance. Assume the starting balance is 0.

const transactions = [
  { type: "credit", amount: 100 },
  { type: "debit", amount: 40 },
  { type: "credit", amount: 60 },
  { type: "debit", amount: 30 },
];

// Logic:
// - "credit" means add the amount
// - "debit" means subtract the amount

// Expected final output: 90

// Only use reduce. No other array methods.

const action = transactions.reduce((acc, curr) => {
  if (curr.type === "credit") {
    return acc + curr.amount;
  }
  return acc - curr.amount;
}, 0);

// console.log(action);

// Q: Given an array of people objects,
// each having a 'city' property and 'salary',
// use reduce to create a new object that shows the total salary paid per city.

const employees = [
  { name: "Hamza", city: "Lahore", salary: 50000 },
  { name: "Ali", city: "Karachi", salary: 60000 },
  { name: "Sara", city: "Lahore", salary: 70000 },
  { name: "Ayesha", city: "Islamabad", salary: 80000 },
  { name: "Zain", city: "Karachi", salary: 55000 },
];

// Final expected output:
// {
//   Lahore: 120000,
//   Karachi: 115000,
//   Islamabad: 80000
// }

// Use only reduce. No map, no filter.

const res = employees.reduce((acc, curr) => {
  if (acc[curr.city]) {
    acc[curr.city] += curr.salary;
  } else {
    acc[curr.city] = curr.salary;
  }
  return acc;
}, {});

// console.log(res);

// Q: Given an array of numbers,
// use reduce to separate them into two arrays inside a single object:
// one array for even numbers and one array for odd numbers.

const nums = [3, 8, 5, 12, 7, 6, 1, 4];

// Final expected output:
// {
//   even: [8, 12, 6, 4],
//   odd: [3, 5, 7, 1]
// }

// Use only reduce. No other methods (no filter, no map, etc.).

const response = nums.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc.even.push(curr);
    } else {
      acc.odd.push(curr);
    }
    return acc;
  },
  { even: [], odd: [] }
);

// console.log(response);

// Q: Given an array of words,
// use reduce to create an object where the keys are the word lengths
// and the values are arrays of words having that length.

const words = ["hi", "hello", "hey", "world", "code", "a"];

// Expected final output:
// {
//   1: ["a"],
//   2: ["hi"],
//   3: ["hey"],
//   4: ["code"],
//   5: ["hello", "world"]
// }

// Only use reduce — no map, filter, or other methods.

const wordsObj = words.reduce((acc, curr) => {
  const len = curr.length;
  if (!acc[len]) {
    acc[len] = [];
  }
  acc[len].push(curr);
  return acc;
}, {});

// console.log(wordsObj);
