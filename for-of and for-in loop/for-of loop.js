// // 1. Print each character of the string "hello" using a for...of loop.
// let str1 = "hello";
// // your code here

// for(let char of str1){
//     // console.log(char);
// }

// // 2. Print each number in the array [1, 2, 3, 4, 5] using a for...of loop.
// let nums1 = [1, 2, 3, 4, 5];
// // your code here

// for(let num of nums1){
// //    console.log(num);
// }

// // 3. Print the square of each number in the array [2, 4, 6, 8].
// let nums2 = [2, 4, 6, 8];
// // your code here

// for(let num of nums2){
//     // console.log(num * num);
// }

// // 4. Count how many times the letter 'a' appears in the array ['a', 'b', 'a', 'c', 'a', 'd'].
// let letters1 = ['a', 'b', 'a', 'c', 'a', 'd'];
// // your code here

// let count = 0;
// for(let letter of letters1){
//     if(letter === "a"){
//         count++
//     }
// }
// // console.log(count)

// // 5. Concatenate all strings in the array ['Java', 'Script', 'Rocks'] to form one word.
// let words = ['Java', 'Script', 'Rocks'];
// // your code here

// let concatenatedWord = "";
// for(let word of words){
//     concatenatedWord += word
// }
// // console.log(concatenatedWord)

// // 6. Print only the even numbers from the array [10, 15, 20, 25, 30].
// let nums3 = [10, 15, 20, 25, 30];
// // your code here

// for(let num of nums3){
//     if(num % 2 === 0){
//         // console.log(num);
//     }
// }

// // 7. Add all numbers in the array [1, 3, 5, 7, 9] and print the total.
// let nums4 = [1, 3, 5, 7, 9];
// // your code here

// let total = 0;
// for(let num of nums4){
//     total += num;
// }
// // console.log(total);

// // 8. Print each word from the string "I love coding" (Hint: use .split(" ") once before the loop).
// let sentence = "I love coding";
// // let wordArray = sentence.split(" ");
// let currentWord = "";
// // your code here

// // for(let word of sentence){
// //     if(word === " "){
// //         console.log(currentWord);
// //         currentWord = ""
// //     } else{
// //         currentWord += word;
// //     }
// // }

// // if(currentWord !== ""){
// //     console.log(currentWord)
// // }


// // 9. Print the length of each string in the array ['apple', 'banana', 'kiwi'].
// let fruits = ['apple', 'banana', 'kiwi'];
// // your code here

// for(let fruit of fruits){
//     // console.log(fruit.length);
// }

// // 10. Print characters of the string "loop" in uppercase using a for...of loop.
// let str2 = "loop";
// // your code here

// for(let char of str2){
//     // console.log(char.toUpperCase());
// }

// // ------------------------------------------------------------------------------------------------------------------------------------------

// // 1. Print each vowel from the string "education".
// let strA = "education";
// // your code here

// for(let alphabet of strA){
//     if(alphabet.toLowerCase() === "a" || alphabet.toLowerCase() === "e" || alphabet.toLowerCase() === "i" || alphabet.toLowerCase() === "o" || alphabet.toLowerCase() === "u"){
//         // console.log(alphabet.toLowerCase());
//     }
// }

// // 2. Count how many negative numbers are in the array [3, -1, -7, 8, -2].
// let numsA = [3, -1, -7, 8, -2];
// // your code here

// let negativeCount = 0;
// for(let num of numsA){
//     if(num < 0){
//         negativeCount++;
//     }
// }
// // console.log(negativeCount);

// // 3. Print the reverse of the string "loop" using a for...of loop.
// let strB = "loop";
// // your code here

// let reversed = ""
// for(let char of strB){
//     reversed = char + reversed;
// }

// // console.log(reversed);

// // 4. Multiply each number in the array [1, 2, 3, 4] by 3 and print the result.
// let numsB = [1, 2, 3, 4];
// // your code here

// for(let num of numsB){
//     // console.log(num * 3);
// }

// // 5. Print the first letter of each word in the array ["dog", "cat", "bird"].
// let animals = ["dog", "cat", "bird"];
// // your code here

// for(let animal of animals){
//     // console.log(animal[0]);
// }

// // 6. Print all characters in the string "OpenAI" except for the letter 'A'.
// let strC = "OpenAI";
// // your code here

// for(let str of strC){
//     if(str === "A"){
//         continue;
//     }
//     // console.log(str);
// }

// // 7. Count how many words in the array ["yes", "no", "yes", "maybe"] are equal to "yes".
// let responses = ["yes", "no", "yes", "maybe"];
// // your code here

// let yesCount = 0;
// for(let response of responses){
//     if(response === "yes"){
//         yesCount++
//     }
// }

// // console.log(yesCount);

// // 8. Print the ASCII code of each character in the string "code".
// let strD = "code";
// // your code here

// for(let str of strD){
//     // console.log(str.charCodeAt(0));
// }

// // 9. Print each number in the array [2, 4, 6, 8, 10] divided by 2.
// let numsC = [2, 4, 6, 8, 10];
// // your code here

// for(let num of numsC){
//     if(num % 2 === 0){
//         // console.log(num);
//     }
// }

// // 10. Print only the uppercase letters from the string "HeLLo WoRLd".
// let strE = "HeLLo WoRLd";
// // your code here


// for(let str of strE){
//     if(str >= "A" && str <= "Z"){
//         // console.log(str);
//     } 
// }

// ---------------------------------------------------------------- Medium ---------------------------------------------------------------------

// 1. Count how many words in the string "This is a test sentence" have more than 2 letters.
let sentenceA = "This is a test sentence";
// your code here
let sentenceB = sentenceA.split(" ");

let twoLettersWordCount = 0
for(let word of sentenceB){
    if(word.length > 2){
        twoLettersWordCount++;
    }
}

// console.log(twoLettersWordCount);

// 2. Print all numbers from the array [4, 9, 16, 25] that are perfect squares (Hint: use Math.sqrt).
let numsD = [4, 9, 16, 25];
// your code here

for (let num of numsD) {
    if (Math.sqrt(num) % 1 === 0) {
        // console.log(num); 
    }
}

// 3. From the array ["apple", "banana", "kiwi"], print only the words that have the letter "a".
let fruitsA = ["apple", "banana", "kiwi"];
// your code here

for(let fruit of fruitsA){
    if(fruit.includes("a")){
        // console.log(fruit);
    }
}

// 4. Reverse each word in the array ["car", "bus", "train"] and print it. (Output: "rac", "sub", "niart")
let vehicles = ["car", "bus", "train"];
let reversed = ""
// your code here

for (let word of vehicles) {
    let reversed = "";
    for (let char of word) {
        reversed = char + reversed;
    }
    // console.log(reversed);
}


// 5. From the string "ab1c2d3", print only the numbers.
let mixedString = "ab1c2d3";
// your code here

for(let str of mixedString){
    if(str >= 0 || str <= 9){
        // console.log(str);
    }
}

// 6. Count how many uppercase letters are in the string "WeLoVeJS".
let strF = "WeLoVeJS";
// your code here

let uppercaseCount = 0;

for(let str of strF){
    if(str >= "A" && str <= "Z"){
        uppercaseCount++
    }
}

// console.log(uppercaseCount);

// 7. Print the sum of all digits in the string "a1b2c3d4".
let digitString = "a1b2c3d4";
// your code here

let digitSum = 0;
for(let str of digitString){
    if(!isNaN(str) && str !== " "){
        digitSum += Number(str);
    } 
}
// console.log(digitSum);


// 8. From the array ["Hi", "hello", "Hey", "yo"], print only the words that start with uppercase letter.
let greetings = ["Hi", "hello", "Hey", "yo"];
// your code here

for(let greet of greetings){
    if(greet[0] >= "A" && greet[0] <= "Z"){
        // console.log(greet);
    }
}

// 9. Create a new string from "hello" by inserting a dash (-) between each character. Output: "h-e-l-l-o"
let strG = "hello";
let strG_ = ""
// your code here
let index = 0
for(let str of strG){
    strG_ += str;
    if(index < strG.length - 1){
        strG_ += "-";
    }
index++;
}
// console.log(strG_);

// 10. From the array [5, 10, 15, 20], print only the numbers that are divisible by both 5 and 10.
let numsE = [5, 10, 15, 20];
// your code here

for(let num of numsE){
    if(num % 5 === 0 && num % 10 === 0){
        // console.log(num);
    }
}

