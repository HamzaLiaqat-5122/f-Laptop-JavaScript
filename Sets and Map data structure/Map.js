// Q1. Create a Map named 'fruitsMap' and add the following key-value pairs: "apple" => 2, "banana" => 5, "orange" => 3.

const fruitsMap = new Map();

fruitsMap.set("apple", 2);
fruitsMap.set("banana", 5);
fruitsMap.set("orange", 3);
// console.log(fruitsMap);

// Q2. Using the 'fruitsMap', how can you get the value associated with the key "banana"?

// console.log(fruitsMap.get("banana"));

// Q3. Using the 'fruitsMap', how can you check if the key "grape" exists?

// console.log(fruitsMap.has("grape"));

// Q4. Update the value of "apple" in the 'fruitsMap' to 4.

fruitsMap.set("apple", 4);
// console.log(fruitsMap);

// Q5. Remove the key "orange" from the 'fruitsMap'.

fruitsMap.delete("orange");
// console.log(fruitsMap);

// Q6. Create a new empty Map called 'userDetails' and add these entries: "name" => "Alice", "age" => 25.

const userDetails = new Map();
userDetails.set("name", "Alice");
userDetails.set("age", 25);

// console.log(userDetails);

// Q7. Using 'userDetails', how would you find the total number of entries in the map?

// console.log(userDetails.size)

// Q8. Using 'userDetails', loop through all keys and print them.

for (let key of userDetails.keys()) {
  // console.log(key);
}

// Q9. Using 'userDetails', loop through all values and print them.

for (let [key, value] of userDetails) {
  // console.log(value);
}

// Q10. Using 'userDetails', loop through all entries (key and value pairs) and print them together.

for (let [key, value] of userDetails) {
  // console.log(key, value);
}

// Q11. Create a Map called 'countryCodes' with these entries: "USA" => 1, "India" => 91, "UK" => 44.

const countryCodes = new Map([
  ["USA", 1],
  ["India", 91],
  ["UK", 44],
]);
// console.log(countryCodes);

// Q12. In 'countryCodes', how can you check if the map is empty?

// console.log(countryCodes.size === 0);

// Q13. Clear all entries from 'countryCodes'.

countryCodes.clear();
// console.log(countryCodes);

// Q14. Create two Maps: 'mapA' with "x" => 10, and 'mapB' with "y" => 20. Merge both into a new Map called 'mapC'.

const mapA = new Map([["x", 10]]);
const mapB = new Map([["y", 20]]);

const mapC = new Map([...mapA, ...mapB]);

// console.log(mapC);

// Q15. Create a Map called 'studentsMap' with entries: "John" => "A", "Emma" => "B", "Liam" => "A". How do you find how many students got an "A"?

const studentsMap = new Map([
  ["John", "A"],
  ["Emma", "B"],
  ["Liam", "A"],
]);
// console.log(studentsMap);

let countA = 0;
for (let [key, value] of studentsMap) {
  if (value === "A") {
    countA++;
  }
}
// console.log(countA);

// Q16. Given a Map called 'pricesMap' with items and prices, how can you increase all prices by 10?

// Example:
const pricesMap = new Map([
  ["pen", 2],
  ["notebook", 5],
  ["eraser", 1],
]);

for (let [key, value] of pricesMap) {
  pricesMap.set(key, value + 10);
}

// console.log(pricesMap);

// Q17. Create a Map called 'numbersMap' with entries 1 => "one", 2 => "two", 3 => "three". How can you delete the entry for 2?

const numbersMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

numbersMap.delete(2);
// console.log(numbersMap);

// Q18. Create a Map called 'monthsMap' with keys as numbers (1-3) and values as month names ("January", "February", "March"). How would you get all the month names into an array?

const monthsMap = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
]);

let monthNames = [];
for (let [key, value] of monthsMap) {
  monthNames.push(value);
}

// console.log(monthNames);

// Q19. Given a Map 'bookMap' with entries like "book1" => "Harry Potter", "book2" => "Hobbit", how can you find if "Harry Potter" exists as a value?

const bookMap = new Map([
  ["book1", "Harry Potter"],
  ["book2", "Hobbit"],
]);

for (let [key, value] of bookMap) {
  if (value === "Harry Potter") {
    // console.log(true);
    break;
  }
}

// Q20. Create a Map 'settingsMap' with default settings like "theme" => "dark", "volume" => 70. How would you change "theme" to "light" only if it currently exists?

const settingsMap = new Map([
  ["theme", "dark"],
  ["volume", 70],
]);

// console.log(settingsMap)

for (let [key, value] of settingsMap) {
  if (value === "dark") {
    settingsMap.set("theme", "light");
    break;
  }
}

// console.log(settingsMap);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Q1. Create a Map named 'carModels' with the following entries: "Toyota" => "Corolla", "Honda" => "Civic", "Ford" => "Focus".

const carModels = new Map([
  ["Toyota", "Corolla"],
  ["Honda", "Civic"],
  ["Ford", "Focus"],
]);

// console.log(carModels);

// Q2. Using the 'carModels' Map, how can you get the value (model) associated with the key "Honda"?

// console.log(carModels.get("Honda"));

// Q3. Using the 'carModels' Map, how can you check if the key "BMW" exists?

// console.log(carModels.has("BMW"));

// Q4. Update the value of "Ford" in the 'carModels' Map to "Mustang".

carModels.set("Ford", "Mustang");
// console.log(carModels);

// Q5. Remove the entry with the key "Toyota" from the 'carModels' Map.

carModels.delete("Toyota");
// console.log(carModels);

// Q6. Create a Map named 'studentScores' with the following entries: "John" => 95, "Emma" => 88, "Liam" => 76.

const studentScores = new Map([
  ["John", 95],
  ["Emma", 88],
  ["Liam", 76],
]);

// console.log(studentScores);

// Q7. Using 'studentScores', how can you get the score of "Emma"?

// console.log(studentScores.get("Emma"));

// Q8. Loop through the 'studentScores' Map and print all the student names (keys).

for (let key of studentScores.keys()) {
  // console.log(key);
}

// Q9. Loop through the 'studentScores' Map and print all the scores (values).

// console.log(studentScores.values()); // or

for (let [key, value] of studentScores) {
  // console.log(value);
}

// Q10. Loop through the 'studentScores' Map and print both the student names and their scores together.

for (let [key, value] of studentScores) {
  // console.log(key, value);
}

// Medium 1

// Question:
// You are given a Map named employeeSalaries which contains the names of employees as keys and their respective salaries as values. You need to do the following:

// Increase the salary of each employee by 10%.

// Create a new Map called highEarners and add only the employees with a salary greater than $50,000 after the increment.

// Output the highEarners map.

// Here is the initial employeeSalaries Map:

const employeeSalaries = new Map([
  ["John", 45000],
  ["Emma", 55000],
  ["Liam", 75000],
  ["Sophia", 40000],
  ["Mason", 80000],
]);

const highEarners = new Map();

for (let [key, value] of employeeSalaries) {
  value += value / 10;

  if (value > 50000) {
    highEarners.set(key, value);
  }
}

// console.log(highEarners);

// Instructions:
// Apply the 10% increase to each employee's salary.

// Only include employees in the highEarners map who have a salary greater than $50,000 after the increase.

// Medium 2

// Question:
// You are given a Map named bookInventory which contains book titles as keys and their quantities as values. You need to perform the following tasks:

// Add a new book to the inventory called "JavaScript Essentials" with a quantity of 25.

// Update the quantity of the book "React for Beginners" by adding 10 to its current quantity.

// Remove the book "HTML & CSS" from the inventory.

// Calculate the total number of books available in the inventory (sum of all quantities).

// Display the updated bookInventory map and the total number of books.

const bookInventory = new Map([
  ["JavaScript Basics", 50],
  ["React for Beginners", 30],
  ["HTML & CSS", 15],
  ["Node.js in Action", 40],
]);

// Instructions:
// Follow the steps provided to manipulate the bookInventory map and perform the operations.

// Calculate the total number of books after the modifications and display the updated map and total.

bookInventory.set("Javascript Essentials", 25);
// console.log(bookInventory);

if (bookInventory.has("React for Beginners")) {
  const currentQuantity = bookInventory.get("React for Beginners");
  bookInventory.set("React for Beginners", currentQuantity + 10);
}

// console.log(bookInventory);

bookInventory.delete("HTML & CSS");

// console.log(bookInventory);

let booksQuantity = 0;
for(let [key, value] of bookInventory){
    booksQuantity += value;
}

// console.log(bookInventory);
// console.log("Total number of books:", booksQuantity);

