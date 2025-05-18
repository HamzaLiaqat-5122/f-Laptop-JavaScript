// Q1: Fill the entire 'arr1' array with the number 5.
let arr1 = [0, 0, 0, 0, 0];

arr1.fill(5);
// console.log(arr1);

// Q2: Fill the first three elements of 'arr2' with the string "hello".
let arr2 = ["", "", "", "", ""];

arr2.fill("hello", 0, 3);
// console.log(arr2);

// Q3: Fill 'arr3' with the value 9, but only from index 1 to index 3 (exclusive).
let arr3 = [1, 2, 3, 4, 5];

arr3.fill(9, 1, 3);
// console.log(arr3);

// Q4: Fill the entire 'arr4' array with false.
let arr4 = [true, true, true, true];

arr4.fill(false);
// console.log(arr4);

// Q5: Fill only the last two elements of 'arr5' with the number 0.
let arr5 = [5, 6, 7, 8, 9];

arr5.fill(0, -2);
// console.log(arr5);

// Q6: Fill 'arr6' starting from index 2 with the word "done" until the end.
let arr6 = ["a", "b", "c", "d", "e", "f"];

arr6.fill("done", 2);
// console.log(arr6);

// Q7: Fill the whole 'arr7' with null values.
let arr7 = [1, 2, 3, 4];

arr7.fill(null);
// console.log(arr7);

// Q8: Fill from index 0 to 2 (exclusive) in 'arr8' with the number 100.
let arr8 = [10, 20, 30, 40, 50];

arr8.fill(100, 0, 2);
// console.log(arr8);

// Q9: Fill 'arr9' from index 1 to the end with the letter "x".
let arr9 = ["o", "o", "o", "o"];

arr9.fill("x", 1);
// console.log(arr9);

// Q10: Fill only index 2 and index 3 of 'arr10' with the value "mid".
let arr10 = ["start", "start", "middle", "middle", "end"];

arr10.fill("mid", 2, 4);
// console.log(arr10);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Q1: Fill the entire 'arr11' with the string "yes".
let arr11 = ["no", "no", "no", "no"];

arr11.fill("yes");
// console.log(arr11);

// Q2: Fill only the first two elements of 'arr12' with the number 1.
let arr12 = [0, 0, 0, 0, 0];

arr12.fill(1, 0, 2);
// console.log(arr12);

// Q3: Fill 'arr13' from index 3 to the end with the value "done".
let arr13 = ["a", "b", "c", "d", "e", "f"];

arr13.fill("done", 3);
// console.log(arr13);

// Q4: Fill only the last element of 'arr14' with the number 99.
let arr14 = [11, 22, 33, 44, 55];

arr14.fill(99, -1);
// console.log(arr14);

// Q5: Fill the entire 'arr15' array with the boolean value true.
let arr15 = [false, false, false];

arr15.fill(true);
// console.log(arr15);

// Q6: Fill from index 2 to 4 (exclusive) in 'arr16' with the value "midway".
let arr16 = ["start", "middle", "middle", "end"];

arr16.fill("midway", 2, 3);
// console.log(arr16);

// Q7: Fill only the second and third elements of 'arr17' with the number 7.
let arr17 = [0, 0, 0, 0];

arr17.fill(7, 1, 3);
// console.log(arr17);

// Q8: Fill 'arr18' from index 0 to index 1 (exclusive) with the word "first".
let arr18 = ["a", "b", "c"];

arr18.fill("first", 0, 1);
// console.log(arr18);

// Q9: Fill the entire 'arr19' with undefined.
let arr19 = [5, 10, 15, 20];

arr19.fill(undefined);
// console.log(arr19);

// Q10: Fill 'arr20' starting from index 1 until index 4 (exclusive) with "go".
let arr20 = ["stop", "wait", "pause", "resume", "end"];

arr20.fill("go", 1, 4);
// console.log(arr20);

// Medium 1

// Q: Fill 'arr21' in such a way that only the second, third, and fourth elements become "updated", without changing the first and last elements.
let arr21 = ["keep", "change", "change", "change", "keep"];

arr21.fill("updated", 1, 4); // or arr21.fill("updated", 1, -1);
// console.log(arr21);

// Medium 2

// Q: Fill 'arr22' so that only the last three elements become "end", without changing the first two elements.
let arr22 = ["start", "start", "middle", "middle", "middle"];

arr22.fill("end", 2, 5);
// console.log(arr22);

// Last

// Q: Fill 'arr23' so that only the first three elements become "start", without changing the last two elements. Use negative indices.
let arr23 = ["middle", "middle", "middle", "end", "end"];

arr23.fill("start", -5, -2);
console.log(arr23);