// Question 1:
// Given a set of numbers, find out if a certain number exists in the set.
let numSet = new Set([1, 2, 3, 4, 5]);
let numToCheck = 3;
// How can you check if 'numToCheck' exists in 'numSet'?

// console.log(numSet.has(numToCheck));

// Question 2:
// Add a new number to the 'numSet' and display the updated set.
let numSet1 = new Set([1, 2, 3, 4]);
let newNumber = 6;
// How can you add 'newNumber' to 'numSet'?

numSet1.add(newNumber);
// console.log(numSet1);

// Question 3:
// Given a set of strings, remove a specific string from the set.
let stringSet = new Set(["apple", "banana", "cherry", "date"]);
let stringToRemove = "banana";
// How can you remove 'stringToRemove' from 'stringSet'?

stringSet.delete(stringToRemove);
// console.log(stringSet);

// Question 4:
// Find the size of the set 'numSet' after adding a few numbers.
let numSet2 = new Set([10, 20, 30]);
let newNumbers = [40, 50, 60];
// What would be the size of 'numSet' after adding all values in 'newNumbers'?

newNumbers.forEach((num) => numSet2.add(num));
// console.log(numSet2.size);

// Question 5:
// Combine two sets into one set and remove any duplicates.
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);
// How can you merge 'setA' and 'setB' and eliminate duplicates?

const setC = new Set([...setA, ...setB]);
// console.log(setC);

// Question 6:
// Given a set of objects, check if an object with a specific property exists.
let objectSet = new Set([
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
]);
let idToFind = 2;
// How can you check if an object with 'idToFind' exists in 'objectSet'?

let exists = [...objectSet].some((obj) => obj.id === idToFind);
// console.log(exists);

// Question 7:
// Create a set from an array and then convert it back into an array.
let numArray = [7, 8, 9, 9, 7];
// How can you create a set from 'numArray' and then convert it back to an array?

let setArray = new Set([...numArray]);
// console.log(setArray);
let againNumArray = [...setArray];
// console.log(againNumArray);

// Question 8:
// Iterate over a set and log each element.
let colorSet = new Set(["red", "green", "blue"]);
// How can you loop through 'colorSet' and print each color?

for (let color of colorSet) {
  // console.log(color);
}

// Question 9:
// Create a set with mixed data types and then check if a specific type exists.
let mixedSet = new Set([42, "hello", true, null, undefined]);
// How can you check if a boolean value exists in 'mixedSet'?

// console.log([...mixedSet].some(type => typeof type === "boolean"));

// Question 10:
// Check if a set is empty.
let emptySet = new Set();
// How can you check if 'emptySet' is empty?

if (emptySet.size === 0) {
  //   console.log("The set is empty.");
} else {
  //   console.log("The set is not empty.");
}

// -------------------------------------------------------------------------------------------------------------------------------------------

// Question 1:
// Given a set of numbers, find the sum of all elements in the set.
let numSet3 = new Set([5, 10, 15, 20]);
// How can you find the sum of all the elements in 'numSet'?

let sum = 0;
numSet3.forEach((num) => {
  sum += num;
});
// console.log(sum);

// Question 2:
// Create a set with mixed types and find out how many elements are of type "string".
let mixedSet1 = new Set([42, "apple", "banana", true, "cherry", false]);
// How can you count how many elements in 'mixedSet' are of type "string"?

let count = 0;
mixedSet1.forEach((type) => {
  if (typeof type === "string") count++;
});
// console.log(count);

// Question 3:
// Add multiple values from an array to a set at once.
let numArray1 = [3, 6, 9, 12];
// How can you add all elements from 'numArray' to a new set 'numSet'?

let numSet5 = new Set(numArray1);
// console.log(numSet5);

// Question 4:
// Create a set from a string where each character of the string is an element in the set.
let str = "hello";
// How can you create a set from the string 'str' where each character is a separate element?

let strSet = new Set(str);
// console.log(strSet);

// Question 5:
// Check if a set contains a specific element and print a message depending on the result.
let fruitSet = new Set(["apple", "banana", "cherry", "date"]);
let fruitToCheck = "banana";
// How can you check if 'fruitSet' contains 'fruitToCheck' and print "Found" or "Not Found"?

if (fruitSet.has(fruitToCheck)) {
  // console.log("Found");
} else {
  // console.log("Not Found");
}

// Question 6:
// Find the intersection of two sets (common elements).
let setA1 = new Set([1, 2, 3, 4, 5]);
let setB1 = new Set([4, 5, 6, 7, 8]);
// How can you find the intersection of 'setA' and 'setB'?

for (let a of setA1) {
  if (setB1.has(a)) {
    // console.log(a);
  }
}

// Question 7:
// Remove all elements from a set.
let numSet4 = new Set([1, 2, 3, 4]);
// How can you remove all elements from 'numSet'?

numSet4.clear();
// console.log(numSet4);

// Question 8:
// Check if a set contains no elements.
let emptySet1 = new Set();
// How can you check if 'emptySet' is truly empty?

// console.log(emptySet1.size === 0);

// Question 9:
// Create a set of unique words from a sentence (string).
let sentence = "the quick brown fox jumps over the lazy dog";
// How can you create a set from 'sentence' where each word is a unique element?

let sentenceSet = new Set(sentence.split(" "));
// console.log(sentenceSet);

// Question 10:
// Create a set of objects and check if an object with a specific property value exists.
let personSet = new Set([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
]);
let ageToFind = 30;
// How can you check if there is an object with an 'age' of 30 in 'personSet'?

// console.log([...personSet].some(({age}) => age === ageToFind));

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Question 1:
// Given a set of numbers, find the product of all elements in the set.
let numSet6 = new Set([2, 3, 4]);
// How can you find the product of all elements in 'numSet'?

let product = 1;

numSet6.forEach((num) => (product *= num));
// console.log(product);

// Question 2:
// Create a set from an array of strings and remove duplicates.
let strArray = ["apple", "banana", "apple", "cherry", "banana"];
// How can you create a set from 'strArray' and remove the duplicates?

const strArraySet = new Set(strArray);
// console.log(strArraySet);

// Question 3:
// Given a set of numbers, find the maximum value in the set.
let numSet7 = new Set([10, 25, 30, 5, 15]);
// How can you find the maximum value in 'numSet2'?

let arr = Array.from(numSet7);

let max = arr[0];

for (let num of arr) {
  if (num > max) {
    max = num;
  }
}
// console.log(max);

// Question 4:
// Create a set of numbers and check if a specific number is greater than all other numbers.
let numSet8 = new Set([4, 8, 12, 6]);
// How can you check if a specific number, like 12, is greater than all other numbers in the set?

let specificNumber = 12;

let array = [...numSet8];

for (let num of array) {
  if (num > specificNumber) {
    specificNumber = num;
  }
}
// console.log(specificNumber);

// Question 5:
// Convert a set into an array and remove the first element from the array.
let numSet9 = new Set([10, 20, 30, 40]);
// How can you convert 'numSet4' into an array and remove the first element?

const numArray9 = [...numSet9];

numArray9.shift();
// console.log(numArray9);

// Question 6:
// Create a set from a string and check if a specific character is in the set.
let str1 = "javascript";
// How can you create a set from 'str' and check if the character "a" exists in the set?

let setStr1 = new Set(str1);
// console.log(setStr1.has("a"));

// Question 7:
// Given two sets, find the difference between them (elements in setA but not in setB).
let setA2 = new Set([1, 2, 3, 4, 5]);
let setB2 = new Set([4, 5, 6, 7, 8]);
// How can you find the difference between 'setA' and 'setB'?

for (let a of setA2) {
  if (!setB2.has(a)) {
    // console.log(a);
  }
}

// Question 8:
// Given a set of numbers, find the average of all elements.
let numSet10 = new Set([2, 4, 6, 8]);
// How can you find the average of all elements in 'numSet5'?

let sum1 = 0;
let count1 = 0;

[...numSet10].forEach((num) => {
  sum1 += num;
  count1++;
});

// console.log(sum1 / count1);

// Question 9:
// Create a set from an array of objects and check if an object with a specific key-value pair exists.
let objArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
let nameToFind = "Bob";
// How can you check if an object with the name "Bob" exists in the set of objects?

// console.log([...objArray].some(({name}) => name === nameToFind));

// Question 10:
// Create a set from an array of numbers and remove the smallest number.
let numArray2 = [5, 10, 15, 20];
// How can you remove the smallest number from 'numArray' and create a set without it?

const set = new Set(numArray2);

const pop = Math.min(...set);

set.delete(pop);

// console.log(set);

// Medium 1

// Question:
// Given two sets of numbers, find the union of the two sets,
// and then remove any numbers that are divisible by both 2 and 3 (i.e., divisible by 6).

let setA3 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let setB3 = new Set([3, 4, 5, 6, 10, 11, 12]);

// How can you:
// 1. Find the union of 'setA' and 'setB'.
// 2. Remove numbers divisible by both 2 and 3 (i.e., divisible by 6) from the union set.

let setC3 = new Set([...setA3, ...setB3]);
// console.log(setC3);

let isDivisbleBy6 = [...setC3].filter((num) => num % 2 === 0 && num % 3 === 0);

// console.log(isDivisbleBy6);

[...isDivisbleBy6].forEach((num) => setC3.delete(num));

// console.log(setC3);

// Medium 2

// Question:
// Given a set of objects representing products, each product has a 'name' and 'price' property.
// 1. Find all products with a price greater than a specified value (e.g., 50).
// 2. Remove all products with a price less than or equal to a specified value (e.g., 20).

let products = new Set([
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 30 },
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 40 },
]);

let priceThreshold = 50;

let priceGreaterThan50 = [];
products.forEach((product) => {
  if (product.price > priceThreshold) {
    priceGreaterThan50.push(product);
  }
});
// console.log(priceGreaterThan50);

products.forEach((product) => {
  if (product.price <= priceThreshold) {
    products.delete(product);
  }
});

// console.log(products);

// last

// Question:
// Given a set of words, create a new set where each word is reversed.
// Additionally, check if the original set and the new reversed set contain any common elements.

// Example:
let wordsSet = new Set(["apple", "banana", "cherry", "date"]);

// How can you:
// 1. Create a new set where each word is reversed.
// 2. Check if any word in the original 'wordsSet' is the same as its reversed version (i.e., a palindrome).
// 3. Check if the original 'wordsSet' and the new reversed set contain any common elements.

let reversedSet = new Set();
for (let word of wordsSet) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    reversedSet.add(reversedWord);
}

let palindromes = [];
for (let word of wordsSet) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    if (word === reversedWord) {
        palindromes.push(word);
    }
}

let commonElements = [];
for (let word of wordsSet) {
    if (reversedSet.has(word)) {
        commonElements.push(word);
    }
}

// console.log("Reversed Set:", reversedSet);
// console.log("Palindromes:", palindromes);
// console.log("Common Elements:", commonElements);
