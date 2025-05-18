// 1. Calculate and print the sum of all numbers from 1 to n
let n = 10;
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}

console.log("1.sum of all numbers from 1 to n =",sum);

// 2. Print each number from a to b (inclusive)
let a = 5;
let b = 15;

for(let i = a; i <= b; i++){
    console.log("2.each number from a to b",i);
}

// 3. Print all even numbers from 1 to n
n = 20;

for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log("3.even numbers from 1 to n",i);
    }
}

// 4. Print all odd numbers from 1 to n
n = 20;

for(let i = 1; i <= n; i++){
    if(i % 2 !== 0){
        console.log("4.Odd numbers from 1 to n",i);
    }
}

// 5. Count how many times x appears in the array arr
let arr = [1, 2, 3, 4, 2, 5, 2];
let x = 2;
let count = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === x){
        count++;
    } 
}

console.log("5.The number of times x appears in array is",count);


// 6. Find and print the largest number in arr
let arr1 = [7, 3, 9, 2, 10, 4];
let largestNumber = arr1[0];

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > largestNumber){
        largestNumber = arr1[i];
    }
}

console.log("6.The largest number in arr1 is :",largestNumber);

// 7. Find and print the smallest number in arr
let arr2 = [7, 3, 9, 2, 10, 4];
let smallestNumber = arr2[0];

for(let i = 0; i < arr2.length; i++){
    if(arr2[i] < smallestNumber){
        smallestNumber = arr2[i];
    }
}

console.log("7.The smallest numbers in arr2 is :",smallestNumber);

// 8. Count how many numbers in arr are even
let arr3 = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;

for(let i = 0; i < arr3.length; i++){
    if(arr3[i] % 2 === 0){
        evenCount++
    }
}
console.log("8.The even numbers in arr3 are :",evenCount);

// 9. Print each character of str using a loop
let str = "hello world";

for(let i = 0; i < str.length; i++){
    let eachCharacterOfString = str[i];
    console.log("9.The characters of string are", eachCharacterOfString);
}

// 10. Count and print how many vowels are in the string
let str1 = "javascript loops";
let vowelCount = 0;

for(let i = 0; i < str1.length; i++){
    let char = str1[i].toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
        vowelCount++
    }
}

console.log("10.The number of vowels in str1 are :",vowelCount);

// 11. Calculate and print n! (n factorial)
n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial *= i; 
}

console.log("11.The factorial of n is :",factorial);

// 12. Print all numbers from n to 1 in reverse order
n = 10;

for(let i = n; i > 0; i--){
    console.log("12.All the numbers from n to 1 in reverse order are",i);
}

// 13. Calculate and print the sum of all numbers in arr
let arr4 = [3, 6, 9, 12, 15];
let sum1 = 0;

for(let i = 0; i < arr4.length; i++){
    let num = arr4[i];
    sum1 += num;
}

console.log("13.The sum of all the numbers of arr4 is",sum1);

// 14. Count and print how many numbers in arr are less than 0
let arr5 = [-5, 3, -2, 8, -1, 0, 4];
let lessThan0Count = 0;

for(let i = 0; i < arr5.length; i++){
    let num = arr5[i];
    if(num < 0){
        lessThan0Count++
    }
}

console.log("14.The numbers which are less than 0 in arr5 are:",lessThan0Count);

// 15. Print true if x is found in arr, otherwise false
let arr6 = [10, 20, 30, 40, 50];
let x1 = 30;
let xFound = false;

for(let i = 0; i < arr6.length; i++){
    let num = arr6[i];
    if(num === x1){
        xFound = true;
        break;
    }
}

console.log("15.x1 is found in arr6:",xFound);

// 16. Print all values in arr that are greater than 0
let arr7 = [-3, 7, 0, 5, -1, 9];

console.log("16.The numbers which are greater than 0 are");
for(let i = 0; i < arr7.length; i++){
    let num = arr7[i];
    if(num > 0){
        console.log(num);
    }
}

// 17. Find and print the first index where x appears in arr. Print -1 if not found.
let arr8 = [4, 8, 6, 8, 3];
let x2 = 8;
let xIndex = 0
let found = false;

for(let i = 0; i < arr8.length; i++){
    if(arr8[i] === x2){
        console.log("17.The index when x first time appears:", i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("17.x2 not found, returning -1");
}


// 18. Print all numbers from 1 to n except those divisible by 3
n = 15;
console.log("18.The numbers which are not divisible by 3 are:");


for(let i = 1; i <= n; i++){
    if(i % 3 !== 0){
        console.log(i);
    }
}

// 19. Calculate and print the sum of all digits in num
let num = 12345;
let stringTypeNumber = num.toString();

let numSum = 0;

for(let i = 0; i < stringTypeNumber.length; i++){
    numSum += +stringTypeNumber[i];
}

console.log("19.The sum of digits of num is:",numSum);

// 20. Print the string in reverse order by accessing characters using index
let str2 = "loop practice";
console.log("20. The reversed str2 is:")

for(let i = str2.length - 1; i >= 0; i--){
    console.log(str2[i]);
    
}

