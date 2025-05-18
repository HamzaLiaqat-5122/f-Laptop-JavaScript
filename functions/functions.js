// 1. Write a function `addNumbers(a, b)` that returns the sum of two numbers.

const addNumbers = (a, b) => a + b;

// console.log(addNumbers(3, 5));

// 2. Write a function `isEven(num)` that returns true if a number is even, and false if it's odd.

const isEven = (num) => num % 2 === 0;

// console.log(isEven(2));
// console.log(isEven(3));

// 3. Write a function `maxOfTwo(a, b)` that returns the larger of the two numbers.

const maxOfTwo = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

// console.log(maxOfTwo(3, 1));
// console.log(maxOfTwo(3, 5));

// 4. Write a function `celsiusToFahrenheit(celsius)` that converts Celsius to Fahrenheit.
//    Use the formula: F = (C × 9/5) + 32

const celsiusToFarenheit = (celsius) => {
  let f = (celsius * 9) / 5 + 32;
  return f;
};

// console.log(celsiusToFarenheit(37));

// 5. Write a function `isPositive(num)` that returns true if the number is positive, otherwise false.

const isPositive = (num) => num >= 0;

// console.log(isPositive(2));
// console.log(isPositive(-2));

// 6. Write a function `countDigits(n)` that returns the number of digits in a non-negative integer `n`.

const countDigits = (n) => {
  let strN = n + "";
  return strN.length;
};

// console.log(countDigits(123));

// 7. Write a function `isVowel(char)` that returns true if the character is a vowel (a, e, i, o, u), otherwise false.
//    Assume input is a lowercase letter.

const isVowel = (char) =>
  char === "a" || char === "e" || char === "i" || char === "o" || char === "u";

// console.log(isVowel("a"));
// console.log(isVowel("b"));

// 8. Write a function `factorial(n)` that returns the factorial of a number `n`.
//    Example: factorial(5) returns 120

const factorial = (n) => {
  let productOfFactorial = 1;
  for (let i = 1; i <= n; i++) {
    productOfFactorial *= i;
  }
  return productOfFactorial;
};

// console.log(factorial(5));

// 9. Write a function `reverseNumber(n)` that returns the reverse of a number.
//    Example: reverseNumber(123) returns 321

const reverseNumber = (n) => {
  let strN = n + "";
  let reversed = "";
  for (let i = strN.length - 1; i >= 0; i--) {
    reversed += strN[i];
  }
  return Number(reversed);
};

// console.log(reverseNumber(123));

// 10. Write a function `isPrime(n)` that returns true if `n` is a prime number, otherwise false.

// function checkPrime(num) {
//   let isPrime = true;
//   if (num === 1) {
//     return ("1 is neither a prime nor a composite number.");
//   } else if (num > 1) {
//     for (let i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       return (`The ${num} is a prime number`);
//     } else {
//       return (`The ${num} is not a prime number`);
//     }
//   } else {
//     return ("the number is not a prime number");
//   }
// }

const checkPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// console.log(checkPrime(2));
// console.log(checkPrime(3));
// console.log(checkPrime(1));
// console.log(checkPrime(0));
// console.log(checkPrime(7));
// console.log(checkPrime(8));
// console.log(checkPrime(11));

// --------------------------------------------------------------------------------------------------------------------

// 1. Write a function `subtractNumbers(a, b)` that returns the result of subtracting b from a.

const subtractNumbers = (a, b) => a - b;

// console.log(subtractNumbers(7, 4));

// 2. Write a function `isOdd(num)` that returns true if a number is odd, and false if it's even.

const isOdd = (num) => num % 2 !== 0;

// console.log(isOdd(1));
// console.log(isOdd(2));

// 3. Write a function `minOfTwo(a, b)` that returns the smaller of the two numbers.

const minOfTwo = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

//   console.log(minOfTwo(3, 2));

// 4. Write a function `fahrenheitToCelsius(f)` that converts Fahrenheit to Celsius.
//    Use the formula: C = (F - 32) * 5/9

const fahrenheitToCelsius = (f) => {
  let c = ((f - 32) * 5) / 9;
  return c;
};

// console.log(fahrenheitToCelsius(98.6));

// 5. Write a function `isNegative(num)` that returns true if the number is negative, otherwise false.

const isNegative = (num) => num < 0;

// console.log(isNegative(-1));
// console.log(isNegative(0));

// 6. Write a function `sumUpTo(n)` that returns the sum of all numbers from 1 to `n`.
//    Example: sumUpTo(5) returns 15 (1 + 2 + 3 + 4 + 5)

const sumUpTo = (n) => {
  let sumUpToNum = 0;
  for (let i = 1; i <= n; i++) {
    sumUpToNum += i;
  }
  return sumUpToNum;
};

//   console.log(sumUpTo(5));

// 7. Write a function `square(num)` that returns the square of a number.

const square = (num) => num * num;

// console.log(square(4));

// 8. Write a function `startsWithA(str)` that returns true if the input string starts with the letter 'a' (lowercase), otherwise false.

const startsWithA = (str) => str[0].toLowerCase() === "a";

// console.log(startsWithA("Ae"));
// console.log(startsWithA("ae"));
// console.log(startsWithA("ea"));

// 9. Write a function `countVowels(str)` that returns the number of vowels (a, e, i, o, u) in the given string.
//    Assume all letters are lowercase and the input is a valid string.

const countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

// console.log(countVowels("papAe".toLowerCase()));

// 10. Write a function `multiplyNumbers(a, b)` that returns the product of two numbers.

const multiplyNumbers = (a, b) => a * b;

// console.log(multiplyNumbers(2, 2));

// --------------------------------------------------------------------------------------------------------------------

// 1. Write a function `divideNumbers(a, b)` that returns the result of dividing `a` by `b`.

const divideNumbers = (a, b) => a / b;

// console.log(divideNumbers(4, 2));

// 2. Write a function `isMultipleOfFive(num)` that returns true if the number is a multiple of 5, otherwise false.

const isMultipleOfFive = (num) => num % 5 === 0;

// console.log(isMultipleOfFive(50));
// console.log(isMultipleOfFive(49));

// 3. Write a function `maxOfThree(a, b, c)` that returns the largest of three numbers.

const maxOfThree = (a, b, c) => {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  return c;
};

// console.log(maxOfThree(0, 1, 2));

// 4. Write a function `toUpperCaseFirstLetter(str)` that returns the input string with the first letter capitalized.
//    Assume the input is a non-empty lowercase word.

const toUpperCaseFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

// console.log(toUpperCaseFirstLetter("Arew".toLowerCase()));

// 5. Write a function `isLeapYear(year)` that returns true if the year is a leap year, otherwise false.
//    (Hint: Divisible by 4 but not 100 unless also divisible by 400)

const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));

// 6. Write a function `countCharacters(str)` that returns the number of characters in the string.

const countCharacters = (str) => str.length;

// console.log(countCharacters("abcruie"));

// 7. Write a function `endsWithZ(str)` that returns true if the string ends with the letter 'z' (lowercase), otherwise false.

const endsWithZ = (str) => {
  if (str.length === 0) {
    return false;
  }
  return str[str.length - 1].toLowerCase() === "z";
};

// console.log(endsWithZ("abz"));
// console.log(endsWithZ("azc"));

// 8. Write a function `cube(num)` that returns the cube of the number.

const cube = (num) => num * num * num;

// console.log(cube(9));

// 9. Write a function `isSingleDigit(num)` that returns true if the number is between 0 and 9 inclusive.

const isSingleDigit = (num) => num >= 0 && num <= 9;

// console.log(isSingleDigit(9));
// console.log(isSingleDigit(11));

// 10. Write a function `calculateArea(length, width)` that returns the area of a rectangle.

const calculateArea = (length, width) => length * width;

// console.log(calculateArea(15, 4));

// --------------------------------------------------------------------------------------------------------------------

// 1. Write a function `modulus(a, b)` that returns the remainder when `a` is divided by `b`.

function modulus(a, b) {
  return a % b;
}

// console.log(modulus(10, 3));

// 2. Write a function `isZero(num)` that returns true if the number is 0, otherwise false.

const isZero = (num) => num === 0;

// console.log(isZero(0));
// console.log(isZero(1));
// console.log(isZero(-1));

// 3. Write a function `minOfThree(a, b, c)` that returns the smallest of the three numbers.

const minOfThree = (a, b, c) => {
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  return c;
};

// console.log(minOfThree(1, 2, 3));

// 4. Write a function `stringLength(str)` that returns the length of the given string using a for loop.

function stringLength(str) {
  let count = 0;
  for (let i in str) {
    count++;
  }
  return count;
}

// console.log(stringLength("hello"));

// 5. Write a function `isUpperCase(char)` that returns true if the character is an uppercase letter (A-Z), otherwise false.

const isUpperCase = (char) => char === char.toUpperCase();

// console.log(isUpperCase("A"));
// console.log(isUpperCase("a"));

// 6. Write a function `sumOfSquares(n)` that returns the sum of squares from 1 to n.
//    Example: sumOfSquares(3) returns 1*1 + 2*2 + 3*3 = 14

const sumOfSquares = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
};

// console.log(sumOfSquares(3))

// 7. Write a function `double(num)` that returns double the input number.

const double = (num) => num + num;

// console.log(double(3));

// 8. Write a function `startsWithB(str)` that returns true if the string starts with the letter 'b' (lowercase), otherwise false.

const startsWithB = (str) => str[0].toLowerCase() === "b";

// console.log(startsWithB("Be"));
// console.log(startsWithB("be"));
// console.log(startsWithB("eB"));

// 9. Write a function `countSpaces(str)` that counts how many spaces are in the given string.

const countSpaces = (str) => {
  let spaceCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") spaceCount++;
  }
  return spaceCount;
};

// console.log(countSpaces("aloo kachaloo miya"));
// console.log(countSpaces("aloo kachaloo"));

// 10. Write a function `isTwoDigit(num)` that returns true if the number has exactly two digits (from 10 to 99 or -10 to -99).

const isTwoDigit = (num) =>
  (num >= 10 && num <= 99) || (num <= -10 && num >= -99);

// console.log(isTwoDigit(3));
// console.log(isTwoDigit(-3));
// console.log(isTwoDigit(15));
// console.log(isTwoDigit(-15));
// console.log(isTwoDigit(99));

// You are given an array of characters, each being one of the following brackets:

// ['(', ')', '{', '}', '[', ']']

// Write a function to return true if the brackets are validly balanced, and false otherwise.


function isValid(brackets) {
  const array = [];

  for (let i = 0; i < brackets.length; i++) {
    let ch = brackets[i];

    if (ch === "(" || ch === "[" || ch === "{") {
      array.push(ch);
    } else {
      if (array.length === 0) return false;

      const last = array[array.length - 1];
      // console.log(array);
      // console.log("ch",ch)
      // console.log("last",last)
      if (
        (ch === ")" && last === "(") ||
        (ch === "]" && last === "[") ||
        (ch === "}" && last === "{")
      ) {
        array.pop();
      } else {
        return false;
      }
    }
  }
  return array.length === 0;
}

// Examples (in your style):

console.log(isValid(["(", "[", "{", "}", "]", ")"])); // true
console.log(isValid(["(", "[", "]", ")"])); // true
console.log(isValid(["(", "[", ")", "]"])); // false
console.log(isValid(["[", "(", "]", ")"])); // false
console.log(isValid(["{", "[", "(", ")", "]", "}"])); // true



