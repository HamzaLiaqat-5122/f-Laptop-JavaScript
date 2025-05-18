// 1. Print all keys in the given object using a for...in loop.
let person = { name: "Alice", age: 25, city: "New York" };

for(let key in person){
    // console.log(key);
}

// 2. Print all values in the given object using a for...in loop.
let car = { brand: "Toyota", model: "Corolla", year: 2020 };

for(let value in car){
    // console.log(car[value]);
}

// 3. Count how many properties are in the given object.
let student = { id: 101, name: "John", grade: "A", section: "B" };

let propertiesCount = 0;

for(let key in student){
    if(key){
        propertiesCount++;
    }
}
// console.log(propertiesCount);

// 4. Create a new object with only properties whose values are numbers.
let mixed = { a: 10, b: "hello", c: 30, d: true };
let numberObj = {}

for(let key in mixed){
    let number = mixed[key]
    if(typeof number === "number"){
        numberObj[key] = number   
    }
}
// console.log(numberObj)

// 5. Find and print keys whose values are strings.
let data = { one: "apple", two: 22, three: "banana", four: false };

let stringObj = {};
for(let key in data){
    if(typeof data[key] === "string"){
        stringObj[key] = data[key];
    }
}
// console.log(stringObj);

// 6. Change all string values in the object to uppercase.
let fruitBasket = { item1: "apple", item2: "banana", item3: "grapes" };

for(let value in fruitBasket){
    // console.log(fruitBasket[value].toUpperCase());
}

// 7. Create a new object that contains only the properties with values greater than 50.
let scores = { math: 75, english: 45, science: 82, history: 49 };
let scoresGreaterThan50Obj = {};

for(let score in scores){
    if(scores[score] > 50){
    scoresGreaterThan50Obj[score] = scores[score];
    }
}
// console.log(scoresGreaterThan50Obj);

// 8. Print keys and values in the format "key: value".
let book = { title: "1984", author: "George Orwell", pages: 328 };

for(let key in book){
    // console.log(`${key}: ${book[key]}`);
}

// 9. Calculate the sum of all numeric values in the object.
let items = { pen: 5, pencil: 3, notebook: 20 };
let sum = 0;

for(let item in items){
    if(typeof items[item] === "number"){
        sum += items[item];
    }
}

// console.log(sum);

// 10. Count how many values in the object are of type "boolean".
let settings = { darkMode: true, autoSave: false, fontSize: 14, notifications: true };

let booleanCount = 0;
for(let setting in settings){
    if(typeof settings[setting] === "boolean"){
        booleanCount++
    }
}

// console.log(booleanCount);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 1. Print all the keys in the object.
let animal = { type: "dog", legs: 4, color: "brown" };

// for(let key in animal){
//     console.log(key);
// }

// 2. Print all the values in the object.
let laptop = { brand: "HP", ram: "8GB", storage: "512GB" };

for(let key in laptop){
    // console.log(laptop[key]);
}

// 3. Count how many keys start with the letter "c".
let obj = { cat: 1, cow: 2, dog: 3, camel: 4 };
let countC = 0;

for(let key in obj){
    if(key[0] === "c"){
        countC++;
    }
}
// console.log(countC);

// 4. Create a new object that only includes properties with values of type string.
let stuff = { a: "pen", b: 10, c: "notebook", d: true };
let typeStringObj = {};

for(let key in stuff){
    if(typeof stuff[key] === "string"){
        typeStringObj[key] = stuff[key];
    }
}

// console.log(typeStringObj);

// 5. Print all key-value pairs where the value is greater than or equal to 60.
let marks = { english: 55, math: 72, science: 89, history: 48 };
let marksGreaterThan60Obj = {};

for(let key in marks){
    if(marks[key] > 60){
        marksGreaterThan60Obj[key] = marks[key];
    }
}

// console.log(marksGreaterThan60Obj);

// 6. Make a new object that contains only the properties whose keys are exactly 4 letters long.
let fourLetterKeys = { name: "Ali", city: "Lahore", age: 20, code: "JS01" };
let fourLetterKeysObj = {};

for(let key in fourLetterKeys){
    if(key.length === 4){
        fourLetterKeysObj[key] = fourLetterKeys[key];
    }
}

// console.log(fourLetterKeysObj);

// 7. Print all values that are booleans.
let config = { dark: true, fontSize: 14, autoPlay: false, fullscreen: true };

for(let key in config){
    if(typeof config[key] === "boolean"){
        // console.log(config[key]);
    }
}

// 8. Calculate the number of string values in the object.
let mixedTypes = { one: "a", two: 2, three: "b", four: 4 };
let stringValueCount = 0;

for(let key in mixedTypes){
    if(typeof mixedTypes[key] === "string"){
        stringValueCount++
    }
}

// console.log(stringValueCount);

// 9. Replace all string values with the word "REPLACED".
let changes = { a: "apple", b: 10, c: "car", d: false };

for(let key in changes){
    if(typeof changes[key] === "string"){
        changes[key] = "REPLACED";
    }
}

console.log(changes);

// 10. Print all key-value pairs where the key contains the letter "a".
let random = { alpha: 1, beta: 2, gamma: 3, code: 4 };

for (let key in random) {
  if (key.includes("a")) {
    // console.log(key + ": " + random[key]);
  }
}
