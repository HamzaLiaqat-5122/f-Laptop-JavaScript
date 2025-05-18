// 1. Write a function `outer1()` that returns a function which returns the number 10.

const outer1 = () => () => 10;

// console.log(outer1()()); // Output: 10

// 2. Write a function `greetUser()` that returns a function which returns "Hi there!".

const greetUser = () => () => "Hi there!";

// console.log(greetUser()()); // Output: "Hi there!"

// 3. Write a function `multiplyBy(n)` that returns a function which takes a number and multiplies it by `n`.

const multiplyBy = n => (x) => x * n

// console.log(multiplyBy(3)(5)); // Output: 15

// 4. Write a function `returnName()` that returns a function which returns the string "Gohan".

const returnName = () => () => "Gohan";

// console.log(returnName()()); // Output: "Gohan"

// 5. Write a function `addCreator(name)` that returns a function which returns "Created by [name]".

const addCreator = name => () => `Created by ${name}`;

// console.log(addCreator("Hamza")()); // Output: "Created by Hamza"

// 6. Write a function `constantValue(x)` that returns a function which always returns `x`.

const constantValue = x => () => x; 

// console.log(constantValue(99)()); // Output: 99

// 7. Write a function `addTwoNumbers(a)` that returns a function which takes another number `b` and returns `a + b`.

const addTwoNumbers = a => (b) => a + b;

// console.log(addTwoNumbers(7)(8)); // Output: 15

// 8. Write a function `outerMessage()` that returns a function which returns a function that returns "Deep call!".

const outerMessage = () => () => () => "Deep call!";

// console.log(outerMessage()()()); // Output: "Deep call!"

// 9. Write a function `createMultiplier()` that returns a function which takes two numbers and returns their product.

const createMultiplier = () => (a, b) => a * b;

// console.log(createMultiplier()(6, 2)); // Output: 12

// 10. Write a function `getDayMessage(day)` that returns a function which returns "Today is [day]".

const getDayMessage = day => () => `Today is ${day}`;

// console.log(getDayMessage("Monday")()); // Output: "Today is Monday"

// -----------------------------------------------------------------------------------------------------------------------------

// 1. Write a function sayHello() that returns a function which returns "Hello, world!".

const sayHello = () => () => "Hello, world!";

// console.log(sayHello()()); // Output: "Hello, world!"

// 2. Write a function createAdder(x) that returns a function which takes a number and returns the sum of x and that number.

const createAdder = x => n => x + n;

// console.log(createAdder(10)(20)); // Output: 30

// 3. Write a function alwaysFalse() that returns a function which always returns false.

const alwaysFalse = () => () => false;

// console.log(alwaysFalse()()); // Output: false

// 4. Write a function getPowerFunction(exponent) that returns a function which raises a number to that exponent.

const getPowerFunction = exponent => n => n ** exponent;

// console.log(getPowerFunction(3)(2)); // Output: 8

// 5. Write a function labelWrapper(label) that returns a function which takes a string and returns "[label]: [string]".

const labelWrapper = label => string => `${label}: ${string}`; 

// console.log(labelWrapper("Note")("This is a test")); // Output: "Note: This is a test"

// 6. Write a function buildLogger(prefix) that returns a function which takes a message and returns "prefix - message".

const buildLogger = prefix => message => `${prefix} - ${message}`;

// console.log(buildLogger("INFO")("System ready")); // Output: "INFO - System ready"

// 7. Write a function doubleReturn() that returns a function which returns another function that returns 100.

const doubleReturn = () => () => () => 100;

// console.log(doubleReturn()()()); // Output: 100

// 8. Write a function generateBoolean(bool) that returns a function which always returns that boolean value.

const generateBoolean = bool => () => bool;

// console.log(generateBoolean(true)()); // Output: true

// 9. Write a function formatter(prefix, suffix) that returns a function which takes a word and returns it with prefix and suffix added.

const formatter = (prefix, suffix) => word => `${prefix}${word}${suffix}`;

// console.log(formatter("<", ">")("hi")); // Output: "<hi>"

// 10. Write a function squareWrapper() that returns a function which takes a number and returns its square.

const squareWrapper = () => n => n * n;

// console.log(squareWrapper()(6)); // Output: 36
