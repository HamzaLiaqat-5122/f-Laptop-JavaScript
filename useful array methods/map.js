const nums1 = [1, 2, 3, 4, 5];
// 1. Given an array of numbers, return a new array where each number is doubled.

const nums1Doubled = nums1.map((num) => {
  return num + num;
});
// console.log(nums1Doubled);

const words1 = ["apple", "banana", "cherry"];
// 2. Convert an array of strings to uppercase.

const words1Uppercase = words1.map((word) => {
  return word.toUpperCase();
});
// console.log(words1Uppercase);

const nums2 = [10, 20, 30];
// 3. Add 10 to each number in an array and return the new array.

const nums2Plus10 = nums2.map((num) => {
  return num + 10;
});
// console.log(nums2Plus10);

const nums3 = [100, 200, 300];
// 4. Given an array of numbers, return a new array where each number is converted to a string.

const nums3ToString = nums3.map((num) => {
  return (num += "");
});

// console.log(nums3ToString);

const words2 = ["hello", "world", "javascript"];
// 5. Replace each element in an array with the length of that string.

const words2Length = words2.map((word) => {
  return word.length;
});
// console.log(words2Length);

const prices = [5, 15, 25];
// 6. Add a dollar sign in front of each number in an array (e.g., [5, 10] => ["$5", "$10"]).

const prices$ = prices.map((price) => {
  return `$${price}`;
});
// console.log(prices$);

const fullNames = ["John Doe", "Jane Smith", "Alice Johnson"];
// 7. Given an array of full names as strings (e.g., "John Doe"), return an array of first names.

const firstNames = fullNames.map((name) => {
  return name.split(" ")[0];
});
// console.log(firstNames);

const nums4 = [2, 3, 4, 5];
// 8. Given an array of numbers, return a new array where each number is squared.

const nums4Squared = nums4.map((num) => {
  return num * num;
});
// console.log(nums4Squared);

const names1 = ["Ali", "Hamza", "Sara"];
// 9. Add " is awesome" to the end of each name in an array of names.

const names1IsAwesome = names1.map((name) => {
  return `${name} is awesome`;
});
// console.log(names1IsAwesome);

const bools = [true, false, true, false];
// 10. Turn an array of booleans into strings ("true" or "false").

const stringBools = bools.map((bool) => {
  return (bool += "");
});
// console.log(stringBools);

const years = [1990, 2000, 2010];
// 11. Given an array of years (e.g., [1990, 2000]), return an array of ages assuming current year is 2025.

const ageByYears = years.map((year) => {
  return 2025 - year;
});
// console.log(ageByYears);

const lowerCaseWords = ["cat", "dog", "elephant"];
// 12. Convert an array of lowercase strings to title case (e.g., "hello" => "Hello").

const titleCase = lowerCaseWords.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
// console.log(titleCase);

const excitedWords = ["wow", "yay", "cool"];
// 13. Given an array of strings, return an array of the same strings but with an exclamation mark added to the end.

const excitedWordsExclamation = excitedWords.map((word) => {
  return `${word}!`;
});
// console.log(excitedWordsExclamation);

const nums5 = [3, 7, -2, 0];
// 14. Given an array of numbers, return an array of their negative values.

const nums5WithNegativeValues = nums5.map((num) => {
  return -num;
});

// console.log(nums5WithNegativeValues);

const nums6 = [10, 20, 30];
// 15. Given an array of numbers, add the index number to each value.

const nums6PlusIndex = nums6.map((num, index) => {
  return (num += index);
});
// console.log(nums6PlusIndex);

const words3 = ["red", "blue", "green"];
// 16. Convert an array of strings into an array of the first character of each string.

const words3FirstChar = words3.map((word) => {
  return word[0];
});
// console.log(words3FirstChar);

const words4 = ["table", "keyboard", "monitor"];
// 17. Given an array of words, return an array of their lengths.

const words4Length = words4.map((word) => {
  return word.length;
});
// console.log(words4Length);

const sentences = ["I love coding", "Map is cool", "End it"];
// 18. Given an array of sentences, return an array where each sentence ends with a period (if it doesn’t already).

const sentencesWithPeriod = sentences.map((sentence) => {
  if (sentence[sentence.length - 1] !== ".") {
    return sentence + ".";
  }
  return sentence;
});
// console.log(sentencesWithPeriod);

const nums7 = [1, 2, 3, 4, 5];
// 19. Given an array of numbers, return an array of strings that say "Even" or "Odd".

const nums7EvenOrOdd = nums7.map((num) => {
  if (num % 2 === 0) return "Even";
  return "Odd";
});
// console.log(nums7EvenOrOdd);

const names2 = ["Ayesha", "Bilal", "Zara"];
// 20. Given an array of names, return an array of greetings like "Hello, Name".

const names2Name = names2.map((name) => {
  return `Hello, ${name}`;
});
// console.log(names2Name);

// ---------------------------------------------------------------------------------------------------------------------------------------------

const numsA = [1, 4, 9, 16];
// 1. Return the square root of each number in the array.

const numsASquareRoot = numsA.map((num) => Math.sqrt(num));
// console.log(numsASquareRoot);

const cities = ["karachi", "lahore", "islamabad"];
// 2. Capitalize the first letter of each city name (e.g., "karachi" → "Karachi").

const titleCaseCities = cities.map(
  (city) => city[0].toUpperCase() + city.slice(1)
);
// console.log(titleCaseCities);

const numsB = [5, 10, 15];
// 3. Convert each number to a string with " points" after it (e.g., 10 → "10 points").

const numsBPoints = numsB.map((num) => `${num} points`);
// console.log(numsBPoints);

const initials = ["a", "b", "c"];
// 4. Turn each lowercase letter into its uppercase version.

const initialsNowUppercase = initials.map((initial) => initial.toUpperCase());
// console.log(initialsNowUppercase);

const numbers = [3, 6, 9];
// 5. Multiply each number by its index in the array.

const numbersMultiplyByIndex = numbers.map((num, index) => num * index);
// console.log(numbersMultiplyByIndex);

const usernames = ["john123", "sara99", "ali007"];
// 6. Add "@" at the beginning of each username (e.g., "@john123").

const AtTheRateUserNames = usernames.map((user) => `@${user}`);
// console.log(AtTheRateUserNames);

const days = ["monday", "tuesday", "wednesday"];
// 7. Return the length of each day name.

const dayNameLength = days.map((day) => day.length);
// console.log(dayNameLength);

const emojis = ["😊", "😂", "👍"];
// 8. Add the word "Emoji: " before each emoji.

const emojisPanel = emojis.map((emojie) => `Emoji: ${emojie}`);
// console.log(emojisPanel);

const mixed = ["123", "456", "789"];
// 9. Convert each string into a number.
const thenMixedNowNumber = mixed.map((mix) => +mix);
// console.log(thenMixedNowNumber);

const numsC = [0, 1, 2, 3];
// 10. Return an array where each number is replaced by `true` if it is greater than 1, otherwise `false`.

const numsCBoolean = numsC.map((num) => num > 1);
// console.log(numsCBoolean);

// Medium 1

const transactions = [
  { id: 1, amount: 150, currency: "USD" },
  { id: 2, amount: 200, currency: "EUR" },
  { id: 3, amount: 50, currency: "USD" },
  { id: 4, amount: 120, currency: "EUR" },
  { id: 5, amount: 75, currency: "USD" },
];

// Given an array of transaction objects, return an array of transaction descriptions in the following format:
// "Transaction ID: <id>, Amount: <amount> <currency>"
// For example: "Transaction ID: 1, Amount: 150 USD"

const requiredResult = transactions.map(({ id, amount, currency }) => {
  return `Transaction ID: ${id}, Amount: ${amount} ${currency}`;
});

// console.log(requiredResult);

const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
  { name: "David", age: 40, active: false },
  { name: "Eve", age: 45, active: true },
];

// Given an array of user objects, return a new array with user status messages in the following format:
// "Name: <name>, Age: <age>, Status: <active/inactive>"
// For example: "Name: Alice, Age: 25, Status: active"

const requiredUserResults = users.map(({name, age, active}) => {
    return `Name: ${name}, Age: ${age}, Status: ${active ? "active" : "inactive"}`;
});

// console.log(requiredUserResults);