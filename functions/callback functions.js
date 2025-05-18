// 1. Write a function `greet(name)` that returns "Hello, [name]".
//    Then create a function `customGreet(callback, userName)` that calls the callback with the userName.

const greet = name => {
    return `Hello, ${name}`
}

const customGreet = (callback, userName) => {
    return callback(userName);
}

// console.log(customGreet(greet, "Hamza"));

// 2. Write a function `double(n)` that returns n * 2.
//    Then create a function `applyToFive(callback)` that calls the callback with the number 5.

const double = n => n * 2;

const applyToFive = callback => callback(5);

// console.log(applyToFive(double));

// 3. Write a function `sayBye()` that returns "Bye!".
//    Then create a function `callTwice(callback)` that calls the callback twice and returns both results in an array.

const sayBye = () => "Bye!";

const callTwice = callback => {
    let array = [callback(), callback()];
    return array;
}

// console.log(callTwice(sayBye));

// 4. Write a function `square(n)` that returns the square of a number.
//    Then write a function `runSquareTwice(callback, num)` that calls the callback two times with the same `num` and returns the total sum of results.

const square = n => n * n;

const runSquareTwice = (callback, num) => {
    return callback(num) + callback(num);
}

// console.log(runSquareTwice(square, 5))

// 5. Write a function `checkEven(n)` that returns true if `n` is even.
//    Then create a function `checkWithCallback(n, callback)` that calls the callback with `n` and returns the result.

const checkEven = n => n % 2 === 0;

const checkWithCallback = (n,callback) => {
    return callback(n);
}

// console.log(checkWithCallback(4, checkEven));

// 6. Write a function `welcome()` that returns "Welcome!".
//    Then create a function `runIfTrue(flag, callback)` that calls the callback only if `flag` is true and returns the result, otherwise returns "Skipped".

const welcome = () => "Welcome!";

const runIfTrue = (flag, callback) => {
    if(flag){
       return callback();
    }
    return "Skipped";
};

// console.log(runIfTrue(true, welcome));
// console.log(runIfTrue(false, welcome));

// 7. Write a function `saySomething()` that returns "Something!".
//    Then write a function `repeat(callback, times)` that calls the callback function `times` number of times and returns how many times it was called.

// const saySomething = () => "Something!";

const repeat = (callback, times) => {
    for (let i = 0; i < times; i++) {
        callback();
    }
    return times;
};

// console.log(repeat(saySomething, 3));

// 8. Write a function `toUpperCase(str)` that returns the string in uppercase.
//    Then write a function `transformString(str, callback)` that uses the callback to transform the string and return it.

const toUpperCase = str => str.toUpperCase();

const transformString = (str, callback) => {
    return callback(str);
}

// console.log(transformString("aloo", toUpperCase));

// 9. Write a function `identity(x)` that just returns `x`.
//    Then write a function `applyThreeTimes(n, callback)` that applies the callback to `n`, then again to the result, and again, then returns the final value.

// const identity = x => x;

const applyThreeTimes = (n, callback) => {
    return callback(callback(callback(n)));
};

// console.log(applyThreeTimes(5, x => x + 1));

// 10. Write a function `multiply(a, b)` that returns the product.
//     Then write a function `calculate(callback, x, y)` that uses the callback on x and y and returns the result.

const multiply = (a, b) => a * b;

const calculate = (callback, x, y) => {
    return callback(x, y);
}

// console.log(calculate(multiply, 3, 4));

// -------------------------------------------------------------------------------------------------------------------------------

// 1. Write a function `addOne(n)` that adds 1 to the number.
//    Then write `processNumber(callback, n)` that returns the result of calling `callback(n)`.

const addOne = n => n + 1;

const processNumber = (callback, n) => callback(n);

// console.log(processNumber(addOne, 1));

// 2. Write a function `returnTrue()` that returns true.
//    Then write `checkCallback(callback)` that returns what the callback returns.

const returnTrue = () => true;

const checkCallback = callback => callback();

// console.log(checkCallback(returnTrue));

// 3. Write a function `sayHi(name)` that returns "Hi, [name]".
//    Then write a function `greetUser(callback, username)` that uses the callback to return the greeting message.

const sayHi = name => `Hi, ${name}`;

const greetUser = (callback, username) => callback(username);

// console.log(greetUser(sayHi, "Goku"))

// 4. Write a function `identity(x)` that returns `x`.
//    Then write `applyFourTimes(n, callback)` that applies the callback four times and returns the result.

const identity = x => x;

const applyFourTimes = (n, callback) => callback(callback(callback(callback(n))));

// console.log(applyFourTimes(4, identity));

// 5. Write a function `logMessage()` that logs "Hello from callback!" to the console.
//    Then write `runThreeTimes(callback)` that calls the callback three times (no return needed).

const logMessage = () => console.log("Hello from callback!");

const runThreeTimes = callback => {
    for(let i = 1; i <= 3; i++){
        callback();
    }
}

// runThreeTimes(logMessage);

// 6. Write a function `isTen(n)` that checks if `n` is equal to 10.
//    Then write `verifyTen(callback, value)` that returns the result of the callback with `value`.

const isTen = n => n === 10;

const verifyTen = (callback, value) => callback(value);

// console.log(verifyTen(isTen, 10));
// console.log(verifyTen(isTen, 4));

// 7. Write a function `lengthOfString(str)` that returns the string's length.
//    Then write `applyToString(callback, message)` that returns the callback result when called with `message`.

const lengthOfString = str => str.length;

const applyToString = (callback, message) => callback(message);

// console.log(applyToString(lengthOfString, "Hey, it's me Goku!"));

// 8. Write a function `returnFive()` that returns 5.
//    Then write `doubleCallback(callback)` that calls the callback and returns twice its result.

const returnFive = () => 5;

const doubleCallback = callback => callback() + callback();

// console.log(doubleCallback(returnFive));

// 9. Write a function `isLowerCase(char)` that checks if a character is lowercase.
//    Then write `checkFirstCharLower(str, callback)` that checks the first character using the callback.

const isLowerCase = char => char === char.toLowerCase();

const checkFirstCharLower = (str, callback) => callback(str[0]);

// console.log(checkFirstCharLower("alien", isLowerCase));
// console.log(checkFirstCharLower("Monarchs", isLowerCase));

// 10. Write a function `alwaysTrue()` that returns true.
//     Then write `runAndCheck(callback)` that returns "Confirmed" if the callback returns true, otherwise "Denied".

const alwaysTrue = () => true;

const runAndCheck = callback => {
    if(callback(alwaysTrue)){
        return "Confirmed";
    }
    return "Denied";
}

// console.log(runAndCheck(alwaysTrue));

// ------------------------------------------------------------------------------------------------------------------------------

// 1. Write a function `triple(n)` that returns n * 3.
//    Then create `applyTriple(callback, value)` that returns the result of calling callback with value.

const triple = n => n * 3;

const applyTriple = (callback, value) => callback(value);

// console.log(applyTriple(triple, 4));

// 2. Write a function `sayGoodNight()` that returns "Good Night".
//    Then create `executeCallback(callback)` that calls the callback and returns its result.

const sayGoodNight = () => "Good Night";

const executeCallback = callback => callback();

// console.log(executeCallback(sayGoodNight));


// 3. Write a function `getLastChar(str)` that returns the last character of a string.
//    Then create `checkLastChar(callback, text)` that uses the callback to get the last character of the text.

const getLastChar = str => str[str.length - 1];

const checkLastChar = (callback, text) => callback(text);

// console.log(checkLastChar(getLastChar, "hamza"))

// 4. Write a function `isOdd(n)` that returns true if n is odd.
//    Then create `evaluateOdd(callback, num)` that returns the result of callback with num.

const isOdd = n => n % 2 !== 0;

const evaluateOdd = (callback, num) => callback(num);

// console.log(evaluateOdd(isOdd, 3));
// console.log(evaluateOdd(isOdd, 4));

// 5. Write a function `returnZero()` that returns 0.
//    Then create `runCallbackTwice(callback)` that returns the sum of two callback calls.

const returnZero = () => 0;

const runCallbackTwice = callback => callback() + callback();

// console.log(runCallbackTwice(returnZero));

// 6. Write a function `concatWithExclamation(str)` that adds an exclamation mark to the end of the string.
//    Then write `shout(callback, word)` that calls the callback with word and returns the result.

const concatWithExclamation = str => str = str.concat("!");

const shout = (callback, word) => callback(word);

// console.log(shout(concatWithExclamation, "shut up"));

// 7. Write a function `isUpperCase(char)` that checks if a character is uppercase.
//    Then write `checkFirstIsUpper(str, callback)` that returns the result of applying callback to the first character of str.

const isUpperCase = char => char === char.toUpperCase();

const checkFirstIsUpper = (str, callback) => callback(str[0]);

// console.log(checkFirstIsUpper("Andreo", isUpperCase));
// console.log(checkFirstIsUpper("andrew", isUpperCase));

// 8. Write a function `returnLength(str)` that returns the length of the string.
//    Then write `applyAndDouble(callback, str)` that returns double the result of callback(str).

const returnLength = str => str.length;

const applyAndDouble = (callback, str) => callback(str) + callback(str);

// console.log(applyAndDouble(returnLength, "saiyan"));

// 9. Write a function `greetInUrdu()` that returns "Assalam-o-alaikum".
//    Then write `saySomething(callback)` that returns the result of the callback.

const greetInUrdu = () => "Assalam-o-alaikum";

const saySomething = callback => callback();

// console.log(saySomething(greetInUrdu));

// 10. Write a function `squareRoot(n)` that returns the square root of n.
//     Then write `runAndRound(callback, number)` that uses the callback on number and returns the rounded result.

const squareRoot = n => Math.sqrt(n);

const runAndRound = (callback, number) => Math.floor(callback(number));

// console.log(runAndRound(squareRoot, 16));
