// Question 1:
// Given the array `let arr = [1, 2, 3, 4, 5];`
// Use the `splice()` method to remove 2 elements starting from index 1, and store the removed elements in a new variable.
let arr = [1, 2, 3, 4, 5];

const modifiedArr = arr.splice(1, 2);
// console.log(modifiedArr);
// console.log(arr);

// Question 2:
// Given the array `let colors = ['red', 'green', 'blue', 'yellow'];`
// Use `splice()` to add 'purple' at index 2 and store the modified array in a variable.
let colors = ['red', 'green', 'blue', 'yellow'];
colors.splice(2, 0, "purple");
// console.log(colors);

// Question 3:
// Given the array `let numbers = [10, 20, 30, 40, 50];`
// Use `splice()` to replace the element at index 3 with 100, without removing any elements. Store the modified array in a variable.
// let numbers = [10, 20, 30, 40, 50];

// numbers.splice(3, 1, 100);
// console.log(numbers);

// Question 4:
// Given the array `let fruits = ['apple', 'banana', 'orange', 'pear'];`
// Use `splice()` to remove the first 2 elements from the array and store the modified array in a new variable.
let fruits = ['apple', 'banana', 'orange', 'pear'];

fruits.splice(0, 2);
// console.log(fruits);

// Question 5:
// Given the array `let animals = ['dog', 'cat', 'rabbit', 'bird'];`
// Use `splice()` to remove 1 element starting from index 1 and add 'hamster' and 'fish' in its place.
let animals = ['dog', 'cat', 'rabbit', 'bird'];

animals.splice(1, 1, 'hamster','fish');
// console.log(animals);

// Question 6:
// Given the array `let numbers = [5, 10, 15, 20, 25];`
// Use `splice()` to remove 3 elements starting from index 2. Store the modified array in a new variable.
let numbers1 = [5, 10, 15, 20, 25];

numbers1.splice(2, 3);
// console.log(numbers1);

// Question 7:
// Given the array `let cities = ['New York', 'London', 'Tokyo', 'Paris'];`
// Use `splice()` to remove the last element of the array and store the remaining array in a variable.
let cities = ['New York', 'London', 'Tokyo', 'Paris'];

cities.splice(3, 1);
// console.log(cities);

// Question 8:
// Given the array `let scores = [95, 88, 76, 84, 92];`
// Use `splice()` to add 80 at index 2 without removing any elements. Store the modified array in a new variable.
let scores = [95, 88, 76, 84, 92];

scores.splice(2, 0, 80);
// console.log(scores);

// Question 9:
// Given the array `let countries = ['USA', 'Canada', 'Australia', 'Germany'];`
// Use `splice()` to replace 'Canada' with 'Mexico'. Store the modified array in a variable.
let countries = ['USA', 'Canada', 'Australia', 'Germany'];

countries.splice(1, 1, "Mexico");
// console.log(countries);

// Question 10:
// Given the array `let numbers = [1, 2, 3, 4, 5];`
// Use `splice()` to add 6 and 7 at the beginning of the array, and store the modified array in a new variable.
let numbers2 = [1, 2, 3, 4, 5];

numbers2.splice(0, 0, 6, 7);
// console.log(numbers2);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Question 1:
// Given the array `let arr = [10, 20, 30, 40, 50];`
// Use `splice()` to remove 1 element at index 2 and add 25 in its place.
let arr1 = [10, 20, 30, 40, 50];

arr1.splice(2, 1, 25);
// console.log(arr1);

// Question 2:
// Given the array `let fruits = ['apple', 'banana', 'cherry', 'date'];`
// Use `splice()` to remove 'banana' and 'cherry' from the array.
let fruits1 = ['apple', 'banana', 'cherry', 'date'];

fruits1.splice(1, 2);
// console.log(fruits1);

// Question 3:
// Given the array `let numbers = [1, 2, 3, 4, 5, 6];`
// Use `splice()` to add 'a' at index 3 and 'b' at index 4, without removing any elements.
let numbers3 = [1, 2, 3, 4, 5, 6];

numbers3.splice(3, 0, "a", "b");
// console.log(numbers3);

// Question 4:
// Given the array `let colors = ['red', 'green', 'blue', 'yellow', 'purple'];`
// Use `splice()` to replace 'yellow' with 'orange'.
let colors1 = ['red', 'green', 'blue', 'yellow', 'purple'];

colors1.splice(3, 1, "orange");
// console.log(colors1);

// Question 5:
// Given the array `let cities = ['New York', 'London', 'Tokyo', 'Paris'];`
// Use `splice()` to remove 'London' and 'Tokyo' and replace them with 'Berlin' and 'Rome'.
let cities1 = ['New York', 'London', 'Tokyo', 'Paris'];

cities1.splice(1, 2, "Berlin", "Rome");
// console.log(cities1);

// Question 6:
// Given the array `let scores = [95, 88, 76, 84, 92];`
// Use `splice()` to remove the last element of the array.
let scores1 = [95, 88, 76, 84, 92];

scores1.splice(4, 1);
// console.log(scores1);

// Question 7:
// Given the array `let animals = ['dog', 'cat', 'rabbit', 'bird'];`
// Use `splice()` to add 'hamster' at index 2 without removing any elements.
let animals1 = ['dog', 'cat', 'rabbit', 'bird'];

animals1.splice(2, 0, "hamster");
// console.log(animals1);

// Question 8:
// Given the array `let items = ['apple', 'banana', 'cherry'];`
// Use `splice()` to remove 'banana' and add 'kiwi' in its place.
let items = ['apple', 'banana', 'cherry'];

items.splice(1, 1, "kiwi");
// console.log(items);

// Question 9:
// Given the array `let numbers = [1, 2, 3, 4, 5];`
// Use `splice()` to add the number 10 at the end of the array.
let numbers4 = [1, 2, 3, 4, 5];

numbers4.splice(5, 0, 10);
// console.log(numbers4);

// Question 10:
// Given the array `let letters = ['a', 'b', 'c', 'd'];`
// Use `splice()` to remove the first element and add 'z' in its place.
let letters1 = ['a', 'b', 'c', 'd'];

letters1.splice(0, 0, 'z');
// console.log(letters1);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Question:
// Given the array `let students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];`
// Use `splice()` to do the following:
// 1. Remove 'Bob' and 'Charlie' from the array.
// 2. Add 'Frank' and 'Grace' in their place at the correct position.
// Store the modified array in a new variable.

let students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

students.splice(1, 2, 'Frank', 'Grace');
// console.log(students);

// Question:
// Given the array `let numbers = [10, 20, 30, 40, 50, 60, 70];`
// Use `splice()` to do the following:
// 1. Remove 3 elements starting from index 2.
// 2. Add the numbers 100, 110, and 120 in their place at the correct position.
// Store the modified array in a new variable.

let numbers = [10, 20, 30, 40, 50, 60, 70];

numbers.splice(2, 3, 100, 110, 120);
// console.log(numbers);

// Question:
// Given the array `let books = ['The Hobbit', '1984', 'Brave New World', 'Fahrenheit 451', 'The Great Gatsby'];`
// Use `splice()` to do the following:
// 1. Remove '1984' and 'Brave New World' from the array.
// 2. Add 'To Kill a Mockingbird' and 'Moby Dick' in their place at the correct position.
// Store the modified array in a new variable.

let books = ['The Hobbit', '1984', 'Brave New World', 'Fahrenheit 451', 'The Great Gatsby'];

books.splice(1, 2, 'To Kill a Mockingbird', 'Moby Dick');
// console.log(books);