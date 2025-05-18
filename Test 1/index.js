// // // 🔢 Numbers & Loops
// // // Print all even numbers from 1 to 50 using a for loop.

// // for (let i = 1; i <= 50; i++) {
// //   if (i % 2 === 0) {
// //     // console.log(i);
// //   }
// // }

// // // Find the sum of all prime numbers between 10 and 30.
// // // (Use basic logic and for loops only.)

// // let sum = 0;

// // for (let num = 10; num <= 30; num++) {
// //   let isPrime = true;

// //   if (num < 2) {
// //     isPrime = false;
// //   } else {
// //     for (let i = 2; i < num; i++) {
// //       if (num % i === 0) {
// //         isPrime = false;
// //         break;
// //       }
// //     }
// //   }

// //   if (isPrime) {
// //     sum += num;
// //   }
// // }

// // // console.log("Sum of primes between 10 and 30 is:", sum);

// // // Reverse a number (e.g., 12345 → 54321) using a loop and string conversion.

// // let number = 12345;
// // let strNum = number.toString();
// // let reversedStr = "";

// // for (let i = strNum.length - 1; i >= 0; i--) {
// //     reversedStr += strNum[i];
// // }

// // let reversedNumber = parseInt(reversedStr);
// // // console.log(reversedNumber);

// // // 🔤 Strings & Characters
// // // Count how many vowels are in a given string, e.g., "JavaScript is cool".

// // let string = "Javascript is cool";

// // let vowelCount = 0;
// // for(let i = 0; i < string.length; i++){
// //     let lowerCase = string[i].toLowerCase();
// //     if(lowerCase === "a" || lowerCase === "e" || lowerCase === "i" || lowerCase === "o" || lowerCase === "u"){
// //         vowelCount++;
// //     }
// // }
// // // console.log(vowelCount);

// // // Print each character of a string in reverse order using a for loop.

// // let str = "aloo";

// // for(let i = str.length - 1; i >= 0; i--){
// //     // console.log(str[i]);
// // }

// // // Convert each lowercase letter of a string to its ASCII value using String.charCodeAt() and a loop.
// // // (Example: "abc" → 97 98 99)

// // let abc = "abc";

// // for (let i = 0; i < abc.length; i++) {
// //     // console.log(abc.charCodeAt(i));
// // }

// // // 🔁 Nested Loops & Patterns
// // // Print the following pattern using nested loops (spaces allowed):

// // // 1
// // // 12
// // // 123
// // // 1234

// // for(let i = 1; i <= 4; i++){
// //     let row = "";
// //     for(let j = 1; j <= i; j++){
// //         row += j //+ " ";
// //     }
// //     // console.log(row);
// // }

// // // Create a pattern with capital letters using ASCII values:

// // // A
// // // AB
// // // ABC
// // // ABCD

// // for(let i = 65; i <= 68; i++){
// //     let row = "";
// //     for(let j = 65; j <= i; j++){
// //         row += String.fromCharCode(j)
// //     }
// //     // console.log(row);
// // }

// // // 🔄 Arrays & Logic
// // // Find the product of all numbers in an array: [2, 4, 6] → 48

// // let array = [2, 4, 6];

// // let product = 1
// // array.forEach(num => product *= num );
// // // console.log(product);

// // // Print only unique elements in the array [1, 2, 2, 3, 4, 4, 5] using two loops.

// // let arr = [1, 2, 2, 3, 4, 4, 5];

// // for (let i = 0; i < arr.length; i++) {
// //   let count = 0;
// //   for (let j = 0; j < arr.length; j++) {
// //     if (arr[i] === arr[j]) {
// //       count++;
// //     }
// //   }
// //   if (count === 1) {
// //     // console.log(arr[i]);
// //   }
// // }

// // Medium

// // 🔢 Numbers & Loops
// // Find the factorial of a number n = 7 using a loop.
// // (Expected: 5040)

// let n = 7;

// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }

// // console.log(factorial);

// // Print all numbers between 1 and 100 that are divisible by both 3 and 5.
// // (Use for loop and % operator.)

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     // console.log(i);
//   }
// }

// // Check if a given number (e.g., 121) is a palindrome.
// // (A number is a palindrome if it reads the same backward.)

// let num = 121;
// let numStr = num.toString();

// let isPalindrome = true;

// if (numStr.length < 3) {
//   isPalindrome = false;
// }

// let reversedStr = "";

// for (let i = numStr.length - 1; i >= 0; i--) {
//   reversedStr += numStr[i];
// }

// let reversedNum = parseInt(reversedStr);

// if (num === reversedNum) {
//   isPalindrome = true;
// } else {
//   isPalindrome = false;
// }

// // console.log(isPalindrome);

// // 🔤 Strings & ASCII
// // Print only the consonants from a string like "Education" (ignore vowels).

// let edu = "Education";

// let consonantCount = 0;
// for (let i = 0; i < edu.length; i++) {
//   let lowerCase = edu[i].toLowerCase();
//   if (
//     lowerCase !== "a" ||
//     lowerCase !== "e" ||
//     lowerCase !== "i" ||
//     lowerCase !== "o" ||
//     lowerCase !== "u"
//   ) {
//     consonantCount++;
//   }
// }
// // console.log(consonantCount);

// // Convert each character of a string to the next character in the ASCII table.
// // *(Example: "abc" → "bcd")
// // (Hint: use charCodeAt() and fromCharCode())



// // Count how many capital letters are in a string like "Hello World! A1B2C3".

// let str = "Hello World! A1B2C3";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= "A" && str[i] <= "Z") {
//     count++;
//   }
// }

// // console.log(count); 

// // 🔁 Nested Loops & Patterns
// // Print the following triangle pattern with numbers using nested loops:

// // 1
// // 22
// // 333
// // 4444

// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += i; //+ " ";
//   }
//   // console.log(row);
// }

// // Print a pattern of letters like this:

// // A
// // BB
// // CCC
// // DDDD

// for (let i = 65; i <= 68; i++) {
//   let row = "";
//   for (let j = 65; j <= i; j++) {
//     row += String.fromCharCode(i);
//   }
//   //   console.log(row);
// }

// // 🔄 Arrays & Logic
// // Print the second largest number from this array: [5, 8, 3, 9, 4] using only loops.
// // (No sort method allowed.)

// let nums = [5, 8, 3, 9, 4];

// let largestNumber = -Infinity;
// let secondLargestNumber = -Infinity;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > largestNumber) {
//     secondLargestNumber = largestNumber;
//     largestNumber = nums[i];
//   }
// }

// // console.log(secondLargestNumber);

// // Find and print all duplicate elements in [1, 2, 3, 2, 4, 5, 1, 3] using nested loops.
// // (Each duplicate should print only once.)

// let arr = [1, 2, 3, 2, 4, 5, 1, 3];

// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     // console.log(arr[i]);
//   }
// }


// -----------------------------------------------------------------------------------------------------------------------------------



