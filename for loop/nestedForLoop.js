// for(let i = 0; i < 5; i++){
//     console.log("The current value of i is:", i)
//     for(let j = 0; j < 5; j++){
//         console.log("j", j);
//     }
// }

// multiplication tables from 0 to 10
// for(let i = 0; i < 11; i++){
//     for(let j = 0; j < 11; j++){
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
//     console.log("-----------");
// }

// multiplication table of 5
// for(let i = 5; i < 6; i++){
//     for(let j = 0; j < 11; j++){
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
//     console.log("-----------");
// }

// let storeInventory = [["item : computer", "price : $200", "inventory : 4"], ["item : monitor", "price : $100", "inventory : 7"], ["item : mouse", "price : $50", "inventory : 10"]];

// for(let i = 0; i < storeInventory.length; i++){
//     if(i > 0){
//         console.log("-------------");
//     }
//     for(let j = 0; j < storeInventory[i].length; j++){
//         console.log(storeInventory[i][j]);
//     }
// }

// 1. Print 3 rows of 5 stars
// Output:
// *****
// *****
// *****

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += "*";
  }
  // console.log(row);
}

// 2. Print row numbers in a 3x3 grid
// Output:
// 111
// 222
// 333

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += i;
  }
  //    console.log(row);
}

// 3. Print column numbers in a 3x3 grid
// Output:
// 123
// 123
// 123

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += j;
  }
  // console.log(row);
}

// 4. Print numbers from 1 to 9 in a 3x3 grid
// Output:
// 1 2 3
// 4 5 6
// 7 8 9

let count = 1;

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += count + " ";
    count++;
  }
  // console.log(row.trim())
}

// 5. Print even numbers in a 3x3 grid starting from 2
// Output:
// 2 4 6
// 8 10 12
// 14 16 18

let count1 = 2;

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += count1 + " ";
    count1 = count1 + 2;
  }
  // console.log(row.trim());
}

// 6. Print multiplication table of 2 up to 5 times
// Output:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10

for (let i = 2; i <= 2; i++) {
  for (let j = 1; j <= 5; j++) {
    // console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 7. Print a triangle of stars with increasing count
// Output:
// *
// **
// ***

// let size = 3;

// for(let i = 1; i <= size; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//             row += "*";
//         }
//         console.log(row);
//     }

// 8. Print square of numbers from 1 to 3
// Output:
// 1 1 1
// 2 2 2
// 3 3 3

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += i + " ";
  }
  // console.log(row.trim())
}

// 9. Print a block of 0s (3x3)
// Output:
// 000
// 000
// 000

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += "0";
  }
  // console.log(row);
}

// 10. Print a checkerboard of 1s and 0s (4x4)
// Output:
// 1010
// 0101
// 1010
// 0101

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    // row += (i + j) % 2 === 0 ? "1" : "0";
  }
  // console.log(row)
}

// -------------------------------------------------------------------------------------------------------------------------------------------

// 1. Print a 4x4 grid of hashes (#)
// Output:
// ####
// ####
// ####
// ####

for (let i = 0; i <= 3; i++) {
  let row = "";
  for (let j = 0; j <= 3; j++) {
    row += "#";
  }
  // console.log(row);
}

// 2. Print row numbers in a 4x4 grid
// Output:
// 1111
// 2222
// 3333
// 4444

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += i;
  }
  // console.log(row);
}

// 3. Print column numbers in a 4x4 grid
// Output:
// 1234
// 1234
// 1234
// 1234

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += j;
  }
  // console.log(row);
}

// 4. Print a triangle of stars aligned to the left
// Output:
// *
// * *
// * * *
// * * * *

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*" + " ";
  }
  // console.log(row.trim());
}

// 5. Print a triangle of numbers (same number in each row)
// Output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  // console.log(row.trim());
}

// 6. Print a triangle of increasing numbers
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  // console.log(row.trim());
}

// 7. Print stars in reverse triangle shape
// Output:
// ****
// ***
// **
// *

for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  // console.log(row);
}

// 8. Print numbers in reverse triangle shape
// Output:
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  // console.log(row.trim());
}

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    if (j % 2 === 1) {
      row += "1";
    } else {
      row += "0";
    }
  }
  // console.log(row);
}

// 10. Print pattern of even numbers row-wise
// Output:
// 2 4 6
// 8 10 12
// 14 16 18
// 20 22 24

let count2 = 2;

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += count2 + " ";
    count2 = count2 + 2;
  }
  // console.log(row.trim());
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 1. Print a grid of numbers increasing left to right (4x4)
// Output:
// 1  2  3  4
// 5  6  7  8
// 9 10 11 12
//13 14 15 16

let count3 = 1;

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += count3 + " ";
    count3++;
  }
  // console.log(row.trim());
}

// 2. Print rows of decreasing numbers (4x4)
// Output:
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 4; j >= 1; j--) {
    row += j + " ";
  }
  // console.log(row.trim());
}

// 3. Print a diagonal of stars (4x4)
// Output:
// *
//  *
//   *
//    *

for (let i = 0; i <= 3; i++) {
  let row = "";

  for (let j = 0; j <= 3; j++) {
    if (i === j) {
      row += "*";
    } else {
      row += " ";
    }
  }
  // console.log(row);
}

// 4. Print an inverse diagonal of stars (4x4)
// Output:
//    *
//   *
//  *
// *

let size = 4;

for (let i = 0; i <= size; i++) {
  let row = "";

  for (let j = 0; j <= size; j++) {
    if (i + j === size - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  // console.log(row);
}

// 5. Print a half-pyramid of hashes
// Output:
// #
// # #
// # # #
// # # # #
// # # # # #

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "#" + " ";
  }
  // console.log(row);
}

// 6. Print a number pyramid increasing by row
// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count4 = 1;

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += count4 + " ";
    count4++;
  }
  // console.log(row)
}

// 7. Print a pattern of row + column index sum
// Output:
// 2 3 4
// 3 4 5
// 4 5 6

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += i + j + " ";
  }
  // console.log(row)
}

// 8. Print a checkerboard pattern (5x5)
// Output:
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += ((i + j) % 2 === 0 ? "1" : "0") + " ";
  }
  // console.log(row);
}

// 9. Print a pattern of asterisks and dashes
// Output:
// *-*-
// *-*-
// *-*-
// *-*-

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    let jPlus1 = j + 1;
    if (jPlus1 % 2 === 0) {
      row += "*";
    } else {
      row += "-";
    }
  }
  // console.log(row)
}

// 10. Print a mirrored triangle of numbers
// Output:
//     1
//    1 2
//   1 2 3
//  1 2 3 4

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  // console.log(row);
}
// =============================================================================================================================================

// 1. Print a square of numbers from 1 to 16 (4x4)
// Output:
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

let count5 = 1;

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += count5 + " ";
    count5++;
  }
  // console.log(row)
}

// 2. Print a triangle of stars with fixed width
// Output:
// *
// * *
// * * *
// * * * *

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*" + " ";
  }
  // console.log(row)
}

// 3. Print rows of same letter (4x4)
// Output:
// aaaa
// bbbb
// cccc
// dddd

for (let i = 97; i <= 100; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += String.fromCharCode(i);
  }
  // console.log(row);
}

// 4. Print pattern of increasing letters per row
// Output:
// a
// a b
// a b c
// a b c d

for (let i = 97; i <= 100; i++) {
  let row = "";
  for (let j = 97; j <= i; j++) {
    row += String.fromCharCode(j) + " ";
  }
  // console.log(row);
}

// 5. Print decreasing stars from 5 to 1
// Output:
// *****
// ****
// ***
// **
// *

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  // console.log(row)
}

// 6. Print column-wise letters (4x4)
// Output:
// abcd
// abcd
// abcd
// abcd

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 97; j <= 100; j++) {
    row += String.fromCharCode(j);
  }
  // console.log(row);
}

// 7. Print a border of stars (5x5)
// Output:
// *****
// *   *
// *   *
// *   *
// *****

let size1 = 4;

for (let i = 0; i <= size1; i++) {
  let row = "";
  for (let j = 0; j <= size1; j++) {
    if (i === 0 || i === size1 || j === 0 || j === size1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  // console.log(row);
}

// 8. Print alternate rows of 1s and 0s
// Output:
// 1 1 1 1
// 0 0 0 0
// 1 1 1 1
// 0 0 0 0

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    let iPlusOne = i + 1;
    if (iPlusOne % 2 === 1) {
      row += "0" + " ";
    } else {
      row += "1" + " ";
    }
  }
  // console.log(row)
}

// 9. Print right-aligned  triangle of stars (4 rows)
// Output:
//    *
//   **
//  ***
// ****

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    if (j <= 4 - i) {
      row += " ";
    } else {
      row += "*";
    }
  }
  // console.log(row);
}

// 10. Print a pattern of row numbers repeated
// Output:
// 1 1 1
// 2 2 2
// 3 3 3

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += i + " ";
  }
  // console.log(row)
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 1. Print a 3x3 grid of stars
// Output:
// * * *
// * * *
// * * *

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += "*" + " ";
  }
  // console.log(row.trim());
}

// 2. Print a number pattern (4x3)
// Output:
// 1 2 3
// 1 2 3
// 1 2 3
// 1 2 3

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += j + " ";
  }
  // console.log(row.trim());
}

// 3. Print numbers increasing row-wise (3x3)
// Output:
// 1 2 3
// 4 5 6
// 7 8 9

let count6 = 1;

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += count6 + " ";
    count6++;
  }
  // console.log(row.trim());
}

// 4. Print a square of decreasing numbers (3x3)
// Output:
// 9 8 7
// 6 5 4
// 3 2 1

let count7 = 9;

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += count7 + " ";
    count7--;
  }
  // console.log(row.trim());
}

// 5. Print an L pattern using stars
// Output:
// *
// *
// *
// * * *

for (let i = 0; i <= 3; i++) {
  let row = "";
  for (let j = 0; j <= 2; j++) {
    if (j === 0 || i === 4 - 1) {
      row += "* ";
    } else {
      row += " ";
    }
  }
  // console.log(row.trim());
}

// 6. Print the reverse of a number triangle
// Output:
// 3 2 1
// 2 1
// 1

for (let i = 3; i >= 1; i--) {
  let row = "";
  for (let j = 3; j >= 1; j--) {
    if (j <= i) {
      row += j + " ";
    }
  }
  // console.log(row.trim());
}

// 7. Print a right-aligned triangle of numbers
// Output:
//   1
//  1 2
// 1 2 3

for(let i = 1; i <= 3; i++){
  let row = "";
  for(let s = 1; s <= 3 - i; s++){
    row += " ";
  }
  for(let j = 1; j <= i; j++){
    row += j;
    if(j < i){
      row += " "
    }
  }
  // console.log(row)
}

// 8. Print a checkerboard pattern (3x3)
// Output:
// 1 0 1
// 0 1 0
// 1 0 1

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    if(((i + j) + 1) % 2 === 0){
      row += "0 ";
    } else{
      row += "1 ";
    }
  }
  // console.log(row.trim());
}

// 9. Print rows of letters increasing across columns
// Output:
// a b c
// a b c
// a b c

for(let i = 97; i <= 99; i++){
  let row = "";
  for(let j = 97; j <= 99; j++){
    row += String.fromCharCode(j) + " ";
  }
  // console.log(row.trim());
}

// 10. Print rows of same letter
// Output:
// a a a
// b b b
// c c c

for(let i = 97; i <= 99; i++){
  let row = "";
  for(let j = 97; j <= 99; j++){
    row += String.fromCharCode(i) + " ";
  }
  // console.log(row.trim());
}

// 11. Print a mirrored triangle with numbers
// Output:
//   1
//  2 2
// 3 3 3

for(let i = 1; i <= 3; i++){
  let row = "";
  for(let s = 1; s <= 3 - i; s++){
    row += " ";
  }
  for(let j = 1; j <= i; j++){
    row += i;
    if(j < i){
      row += " "
    }
  }
  // console.log(row)
}


// 12. Print stars in an X shape (5x5)
// Output:
// *   *
//  * *
//   *
//  * *
// *   *

let size2 = 4;

for(let i = 0; i <= 4; i++){
  let row = "";
  for(let j = 0; j <= 4; j++){
    if(i === j || i + j === size){
      row += "*"
    }
    else{
      row += " "
    }
  }
  // console.log(row);
}

// 13. Print numbers with column + row index
// Output:
// 2 3 4
// 3 4 5
// 4 5 6

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
      row += (i + j) + " " ;
  
  }
  // console.log(row.trim());
}

// 14. Print odd numbers in a grid (3x3)
// Output:
// 1 3 5
// 7 9 11
// 13 15 17

let count8 = 1;

for(let i = 1; i <= 3; i++){
  let row = "";
  for(let j = 1; j <= 3; j++){
      row += count8 + " "
      count8 = count8 + 2;
    }
    // console.log(row.trim());
  }

// 15. Print even numbers pattern
// Output:
// 2 4 6
// 8 10 12
// 14 16 18

let count9 = 2;

for(let i = 1; i <= 3; i++){
  let row = "";
  for(let j = 1; j <= 3; j++){
      row += count9 + " "
      count9 = count9 + 2;
    }
    // console.log(row.trim());
  }

// 16. Print a diagonal of numbers
// Output:
// 1
//  2
//   3
//    4

for(let i = 1; i <= 4; i++){
  let row = "";
  for(let j = 1; j <= 4; j++){
    if(i === j){
      row += j;
    } else{row += " "}
  }
  // console.log(row);
}

// 17. Print an inverted right triangle
// Output:
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for(let i = 4; i >= 1; i--){
  let row = "";
  for(let j = 1; j <= i; j++){
    row += j + " ";
  }
  // console.log(row.trim());
}

// 18. Print characters using ASCII codes
// Output:
// A B C
// A B C
// A B C

for(let i = 65; i <= 67; i++){
  let row = "";
  for(let j = 65; j <= 67; j++){
    row += String.fromCharCode(j) + " ";
  }
  // console.log(row);
}

// 19. Print rows of stars with odd counts
// Output:
// *
// * * *
// * * * * *

let stars = 1

for(let i = 1; i <= 3; i++){
  let row = "";
  // for(let s = 1; s <= 3 - i; s++){
  //  row += " "
  // }
  for(let j = 1; j <= stars; j++){
      row += "* "
  }
  // console.log(row)
  stars += 2
}

// let stars = 1

// for(let i = 1; i <= 3; i++){
//   let row = "";
//   for(let j = 1; j <= stars; j++){
//       row += "* "
//   }
//   console.log(row)
//   stars += 2
// }

// 20. Print border of stars in 6x6 grid
// Output:
// ******
// *    *
// *    *
// *    *
// *    *
// ******

let size3 = 5;

for (let i = 0; i <= size3; i++) {
  let row = "";
  for (let j = 0; j <= size3; j++) {
    if (i === 0 || i === size3 || j === 0 || j === size3) {
      row += "*";
    } else {
      row += " ";
    }
  }
  // console.log(row);
}
