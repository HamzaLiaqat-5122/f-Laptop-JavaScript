// 1. Write a function `isEven(num)` that returns true if a number is even.
//    Then write another function `filterEven(a, b)` that uses `isEven()` and returns both numbers if they are even.

const isEven = num => num % 2 === 0;

const filterEven = (a, b) => {
    if(isEven(a) && isEven(b)){
        return [a, b];
    }
    return [];
}

// console.log(filterEven(2, 2));
// console.log(filterEven(2, 3));

// 2. Write a function `square(num)` that returns the square of a number.
//    Then create a function `sumOfSquares(a, b)` that uses `square()` to return the sum of their squares.

// 2. Write a function `square(num)` that returns the square of a number.
//    Then create a function `sumOfSquares(a, b)` that uses `square()` to return the sum of their squares.

// const square = num => num * num;

// const sumOfSquares = (a, b) => {
//     return square(a) + square(b);
// }

// console.log(sumOfSquares(3, 4));

// 3. Write a function `isPositive(n)` that returns true if a number is positive.
//    Then write another function `bothPositive(x, y)` that uses `isPositive()` and returns true only if both are positive.

const isPositive = n => n >= 0;

const bothPositive = (x, y) => {
    if(isPositive(x) && isPositive(y)){
        return true;
    }
    return false;
}

// console.log(bothPositive(2, 3));
// console.log(bothPositive(2, -3));

// 4. Create a function `add(a, b)` that returns the sum.
//    Then write `averageOfTwo(a, b)` that uses `add()` to return the average of the two numbers.

const add = (a, b) => a + b;

const averageOfTwo = (a, b) => add(a, b) / 2;

// console.log(averageOfTwo(3, 3));

// 5. Write a function `isUpperCase(char)` that checks if a character is uppercase.
//    Then make a function `firstCharIsUpper(str)` that uses `isUpperCase()` to check if the first character of the string is uppercase.

const isUpperCase = char => char === char.toUpperCase(); 

const firstCharIsUpper = str => {
    if(isUpperCase(str[0])){
        return true;
    }
    return false;
}

// console.log(firstCharIsUpper("Aloo"));
// console.log(firstCharIsUpper("aloo"));

// 6. Write a function `charCount(str)` that returns the number of characters in a string.
//    Then write another function `longerString(str1, str2)` that uses `charCount()` to return the longer string.

const charCount = str => str.length;

const longerString = (str1, str2) => {
    if(charCount(str1) > charCount(str2)){
        return str1;
    }
    return str2;
}

// console.log(longerString("aloo", "piyaz"));

// 7. Create a function `double(n)` that returns `n * 2`.
//    Then make a function `tripleDouble(n)` that uses `double()` to return `n * 6`.

const double = n => n * 2;

const tripleDouble = n => double(n) * 3;

// console.log(tripleDouble(3));

// 8. Write a function `isSingleDigit(num)` that checks if a number is between 0 and 9 inclusive.
//    Then make a function `sumIfSingleDigits(a, b)` that returns the sum only if both numbers are single digits.

const isSingleDigit = num => num >= 0 && num <= 9;

const sumIfSingleDigits = (a, b) => {
    if(isSingleDigit(a) && isSingleDigit(b)){
        return a + b;
    }
    return "one or both digits are not single";
}

// console.log(sumIfSingleDigits(3, 4));
// console.log(sumIfSingleDigits(3, 41));

// 9. Write a function `lastChar(str)` that returns the last character of a string.
//    Then write `isLastCharZ(str)` that uses `lastChar()` to check if it ends with the letter 'z'.

const lastChar = str => str[str.length - 1];

const isLastCharZ = str => {
    if(lastChar(str) === "z"){
        return true;
    }
    return false;
}

// console.log(isLastCharZ("avb"));
// console.log(isLastCharZ("avz"));

// 10. Write a function `isOdd(n)` that returns true if the number is odd.
//     Then create a function `countOddsUpTo(n)` that uses `isOdd()` and a for loop to count how many odd numbers exist from 1 to `n`.

const isOdd = n => n % 2 !== 0;

const countOddsUpTo = n => {
    let count = 0
    for(let i = 1; i <= n; i++){
        if(isOdd(i)){
            count++;
        }
    }
    return count;
}

// console.log(countOddsUpTo(20));

// --------------------------------------------------------------------------------------------------------------------------------------------

// 1. Write a function `isDivisibleBy3(n)` that checks if a number is divisible by 3.
//    Then create a function `sumIfDivisibleBy3(a, b)` that returns the sum only if both numbers are divisible by 3.

const isDivisibleBy3 = n => n % 3 === 0;

const sumIfDivisibleBy3 = (a, b) => {
    if(isDivisibleBy3(a) && isDivisibleBy3(b)){
        return a + b;
    }
    return "one or both digits are not divisible by 3"
}

// console.log(sumIfDivisibleBy3(6, 9));
// console.log(sumIfDivisibleBy3(6, 2));
// console.log(sumIfDivisibleBy3(4, 2));

// 2. Write a function `firstChar(str)` that returns the first character of a string.
//    Then write a function `startsWithA(str)` that uses `firstChar()` to check if the string starts with 'a'.

const firstChar = str => str[0];

const startsWithA = str => firstChar(str) === "A" || firstChar(str) === "a"; 

// console.log(startsWithA("aloo"));
// console.log(startsWithA("Andha"));
// console.log(startsWithA("nani"));

// 3. Write a function `multiply(a, b)` that returns the product of two numbers.
//    Then write a function `cubeUsingMultiply(n)` that returns the cube of a number using `multiply()`.

const multiply = (a, b) => a * b;

const cubeUsingMultiply = n => multiply(multiply(n, n), n);

// console.log(cubeUsingMultiply(2)); 
// console.log(cubeUsingMultiply(3)); 

// 4. Write a function `isNegative(num)` that returns true if the number is less than 0.
//    Then write a function `bothNegative(a, b)` that uses `isNegative()` to check if both numbers are negative.

const isNegative = num => num < 0;

const bothNegative = (a, b) => isNegative(a) && isNegative(b);

// console.log(bothNegative(-1, -2));
// console.log(bothNegative(0, 2));
// console.log(bothNegative(-1, 0));

// 5. Write a function `stringLength(str)` that returns the length of a string.
//    Then write a function `isLongerThanFive(str)` that uses `stringLength()` to check if the string is longer than 5 characters.

const stringLength = str => str.length;

const isLongerThanFive = str => stringLength(str) > 5;

// console.log(isLongerThanFive("sungjinwoo"));
// console.log(isLongerThanFive("goku"));

// 6. Write a function `modulo5(n)` that returns the remainder when a number is divided by 5.
//    Then write a function `isModulo5Zero(n)` that uses `modulo5()` to check if the number is a multiple of 5.

const modulo5 = n => n % 5;

const isModulo5Zero = n => modulo5(n) === 0;

// console.log(isModulo5Zero(10));
// console.log(isModulo5Zero(4));

// 7. Write a function `getMiddleChar(str)` that returns the middle character of a string (assume odd-length strings).
//    Then write a function `isMiddleCharA(str)` that uses `getMiddleChar()` to check if it’s 'a'.

const getMiddleChar = str => str[Math.floor(str.length / 2)];

const isMiddleCharA = str => getMiddleChar(str) === "a" || getMiddleChar(str) === "A";

// console.log(isMiddleCharA("supraman"));
// console.log(isMiddleCharA("superman"));

// 8. Write a function `square(n)` that returns the square of a number.
//    Then write a function `squareSumUpTo(n)` that uses `square()` and a for loop to return the sum of squares from 1 to `n`.

const square = n => n * n;

const squareSumUpTo = n => {
    let sum = 0
    for(let i = 0; i <= n; i++){
        sum += square(i);
    }
    return sum;
}

// console.log(squareSumUpTo(3))

// 9. Write a function `isAlphabet(char)` that checks if the character is a letter (a-z or A-Z).
//    Then write a function `countAlphabets(str)` that uses `isAlphabet()` and a loop to count alphabet characters in a string.

const isAlphabet = char => (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

const countAlphabets = str => {
    let alphabetCount = 0;
    for(let i = 0; i < str.length; i++){
        if(isAlphabet(str[i])){
            alphabetCount++
        }
    }
    return alphabetCount;
}

// console.log(countAlphabets("Aab"));
// console.log(countAlphabets("Aa3"));
// console.log(countAlphabets("333"));

// 10. Write a function `isDigit(char)` that checks if a character is a digit (0-9).
//     Then write a function `countDigits(str)` that uses `isDigit()` to count how many digits are in the string.

const isDigit = char => char >= 0 && char <= 9;

const countDigits = str => {
    let digitCount = 0;
    for(let i = 0; i < str.length; i++){
        if(isDigit(str[i])){
            digitCount++
        }
    }
    return digitCount;
}

// console.log(countDigits("333"));
// console.log(countDigits("aa2"));
// console.log(countDigits("22a"));
