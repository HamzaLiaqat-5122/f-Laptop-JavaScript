/* Exercise 1:
	 ----------- 
	 Write a Javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
*/

// function checkSumis100(a, b){
//   if(a === 100 || b === 100 || (a + b) === 100){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkSumis100(100));
// console.log(checkSumis100(0, 100));
// console.log(checkSumis100(50, 50));
// console.log(checkSumis100(75, 25));
// console.log(checkSumis100(100, 0));
// console.log(checkSumis100(10, 0));
// console.log(checkSumis100(10, 20));

/* Exercise 2:
	 -----------
	 Write a Javascript program to get the extension of a filename.
*/

// const getExtension = (file) => {
//   let lastDotIndex = -1;

//   for (let i = 0; i < file.length; i++) {
//     if (file[i] === '.') {
//       lastDotIndex = i;
//     }
//   }

//   if (lastDotIndex !== -1) {
//     return file.slice(lastDotIndex);
//   }
// }

// console.log(getExtension("index.html"));
// console.log(getExtension("index.js"));
// console.log(getExtension("index.css"));
// console.log(getExtension("webpack.config.js"));

/* Exercise 3:
	 -----------
	 Write a Javascript program to replace every character in a given string with the character following it in the alphabet
*/

// function moverCharsForward(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     let nextChar = String.fromCharCode(str.charCodeAt(i) + 1);
//     result += nextChar;
//   }
//   return result;
// }

// console.log(moverCharsForward('abcd'));

/* Exercise 4:
	 -----------
	 Write a Javascript program to get the current date.
	 Expected output :
	 mm-dd-yy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// const date = new Date();
// console.log(date.toLocaleDateString())

/* Exercise 5:
	 -----------
	 Write a Javascript program to create a new string "New!" in front of a given string. If the given string begins with "New!" already then return the original string.
*/

// const addNew = (str) => {
//    if (
//       str[0] === "N" &&
//       str[1] === "e" &&
//       str[2] === "w" &&
//       str[3] === "!"
//    ) {
//       return str;
//    } else {
//       return "New! " + str;
//    }
// }

// console.log(addNew('offer'));       // "New! offer"
// console.log(addNew('New! offer'));  // "New! offer"
// console.log(addNew('aloo'));        // "New! aloo"

/*
 Exercise 6:
 -----------
 Write a Javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.
*/

// const makeNewString = (str) => {
//    let slicedStr1 = str.slice(0, 3);
//    let slicedStr2 = str.slice(-3);
//    let newStr = '';
//    if(str.length < 3){
//       return str;
//    } else if(str.length >= 3) {
//       newStr += slicedStr1 + slicedStr2;
//    }
//    return newStr;
// }

// console.log(makeNewString('ab'));
// console.log(makeNewString('abc'));  
// console.log(makeNewString('abcdef'));   
// console.log(makeNewString('magnificient'));   

/*
	Exercise 7:
	Write a Javascript to extract the first half of a string of even length;
*/

// const halfLength = (str) => {
//    if(str.length % 2 === 0){
//       return str.slice(0, str.length / 2);
//    } else {
//       return str.slice(0, Math.floor(str.length / 2));
//    }
// }

// console.log(halfLength('abcd'))
// console.log(halfLength('abc'))
// console.log(halfLength('subhan'))
// console.log(halfLength('hamza'))

/*
 Exercise 8:
 -----------
 Write a Javascript program to concatenate two strings except their first character.
*/

// const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

// console.log(concatenate('ham', 'za'))

/*
 Exercise 9:
 -----------
 Given two values, write a javascript program to find out which one is nearest to 100
*/

// const closestTo100 = (a, b) => 100 - a < 100 - b ? a : b;

// console.log(closestTo100(99, 1))
// console.log(closestTo100(49, 51))
// console.log(closestTo100(50, 50))

/* Exercise 10:
 -------------
 Write a Javascript program to check a given string contains 2 to 4 occurrences of a specified character.
*/

// const countChar = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// const contains2To4 = (str, char) => {
//   const count = countChar(str, char);
//   return count >= 2 && count <= 4;
// }

// console.log(contains2To4('ooh!', 'o'));
// console.log(contains2To4('oh!', 'o'));
// console.log(contains2To4('oooh!', 'o'));
// console.log(contains2To4('ooooh!', 'o'));
// console.log(contains2To4('oooooh!', 'o'));

/* 
 Exercise 11:
 ------------
 Write a Javascript program to find the number of even digits in an array of integers
 */

// const evenDigits = (arr) => {
//    let evenCount = 0;
//    arr.forEach(element => {
//       if(element % 2 === 0) evenCount++;
//    });
//    return evenCount;
// }

// console.log(evenDigits([1,2,3,4,5,6,7,8,9,10]))

/* 
 Exercise 12:
 ------------
 Write a Javascript program to find the number of even values up to a given number
 */

//  const findEvenUptoASpecificNumber = (array, num) => {
//    const splicedArray = array.splice(0, array[num - 1]);
//   return splicedArray.filter(num => num % 2 === 0).length
//  }

//  console.log(findEvenUptoASpecificNumber([1,2,3,4,5], 5))

/* 
 Exercise 13:
 -----------
 Write a Javascript program to check whether a given array of integers is sorted in ascending order
*/

// const isSorted = (arr) => {
//    const sortedArr = [...arr].sort((a, b) => a - b);
//    for(let i = 0; i < sortedArr.length; i++){
//       if(sortedArr[i] === arr[i]){
//          return true;
//       }
//       else {
//          return false;
//       }
//    }
// }

// console.log(isSorted([1, 2, 3, 4, 5]))
// console.log(isSorted([5, 1, 2, 3, 4])) 

/*
 Exercise 14:
 -----------
 Write a Javascript program to get the largest even number from an array of integers.
*/

// const getLargestEvenNumber = (arr) => {
//    let largestEven = -1
//    for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 === 0 && arr[i] > largestEven){
//          largestEven = arr[i];
//       }
//    } 
//    return largestEven;
// }

// console.log(getLargestEvenNumber([1,2,1000,2000, 400]));

/*
 Exercise 15:
 -----------
 Write a Javascript program to replace the first digit in a string (should contain at least digit) with $ character.
*/

// const replaceFirstDigit = str => {
//    let a = ''
//    let count = 0
//    for(let i = 0; i < str.length; i++){
//       if(str[i] >= 0 && str[i] <= 9 && count === 0){
//          a += '$'
//          count++
//          continue
//       }
//       a += str[i]
//    }
//   return a;
// }



// console.log(replaceFirstDigit('abc1345de'))

/*
 Exercise 16:
 -----------
 Given a year, report if it is a leap year.
*/

// const isLeapYear = year => year % 4 === 0;

// console.log(isLeapYear(2024));

/* 
 Exercise 17:
 ------------
 Write a Javascript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)
*/

// const compareObjects = (obj1, obj2) => 
//    Object.keys(obj1).every(key => obj2[key]);

// console.log(compareObjects({name: 'hamza', age: 19}, {name: 'hamza', age: 19}));

// console.log(compareObjects({name: 'hamza', age: 19}, {name: 'hamza', age: 19, role: 'programmer'}));

// console.log(compareObjects({name: 'hamza', age: 19}, {name: 'hamza', agee: 12}));

/*
 Exercise 18:
 ------------
 Write a Javascript program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.

 Example:
 --------
 abc,def,ghi
 jkl,mno,pqr
 stu,vwx,yza
*/

// const parseCSV = (csvString) =>
//    csvString.split('\n').map(row => row.split(','));

// const str = `abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`;

// console.log(parseCSV(str));

/*
 Exercise 19:
 ------------
 Write a Javascript program to generate a random hexadecimal color code.
*/

// const randomHexCodeGenerator = num => {
//    let code = `abcdef0123456789`;
//    let hexCode = ''
//    for(let i = 0; i < num; i++){
//       hexCode += code[Math.floor(Math.random() * code.length)]
//    }
//    return '#' + hexCode;
// }

// console.log(randomHexCodeGenerator(6));

/* 
 Exercise 20:
 -----------
 Write a Javascript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
*/

// const isEveryElem = (arr, fn) => {
//    for(let i = 0; i < arr.length; i++){
//       if(!fn(arr[i])) {
//          return false;
//       }
//    }
//    return true;
// }

// console.log(isEveryElem([1,2,3,4,5], (x) => x > 0))
// console.log(isEveryElem([1,2,3,4,5], (x) => x > 3))

/*
 Exercise 21:
 ------------
 Write a Javascript program that returns a passed string with letters in alphabetical order.
 Example string: 'webmaster'
 Expected Output: 'abeemrstw'
*/

// const sortInAlphabeticalOrder = str => {
//    const reverseStrArr = [...str].sort();
//    let result = '';
//    for(let i = 0; i < reverseStrArr.length; i++){
//       result += reverseStrArr[i];
//    }
//    return result;
// }

// console.log(sortInAlphabeticalOrder('webmaster'));
// console.log(sortInAlphabeticalOrder('javascript'));


/* 
 Exercise 22:
 ------------
 Write a Javascript function that accepts a string as a parameter and count the number of vowels within the string.
*/

// const countVowels = str => {
//    let vowelsCount = 0;
//    for(let i = 0; i < str.length; i++){
//       if(str[i].toLowerCase() === 'a'
//       || str[i].toLowerCase() === 'e'
//       || str[i].toLowerCase() === 'i'
//       || str[i].toLowerCase() === 'o' 
//       || str[i].toLowerCase() === 'e'){
//          vowelsCount++;
//       }
//    }
//    return vowelsCount;
// }

// console.log(countVowels('abcde'));

/* 
 Exercise 23:
 Write a Javascript function to convert an amount to coins.
 Example input: 46 and possible coins 25, 10, 5, 2, 1
 output: 25, 10, 10, 1;
*/

// const countCoins = (money, coins = [25, 10, 5, 2 ,1]) => 
// {
//    const totalCoins = [];
//    for(let i = 0; i < coins.length; i++){
//       const thisCoinNum = Math.floor(money / coins[i]);
//       for(let j = 0; j < thisCoinNum; j++){
//          totalCoins.push(coins[i]);
//       }
//       money -= coins[i] * thisCoinNum;
//    }
//    return totalCoins;
// }

// console.log(countCoins(53));

/*
 Write a Javascript program to extract unique characters from a string.
*/

// const getUniqueChars = str => {
//    let uniqueCharArr = [];
//    for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (!uniqueCharArr.includes(char)) {
//          uniqueCharArr.push(char);
//       }
//    }
//    return uniqueCharArr;
// }

// console.log(getUniqueChars('aaabbbccc'));

/*
 Exercise 25:
 -----------
 Write a JavaScript function to find the first not repeated character
 Example String: 'abacddbec'
 Expected output: 'e';
*/

// const getFirstNonRepeatedChar = str => {
//   for(let i = 0; i < str.length; i++) {
//     let isUnique = true;
//     for(let j = 0; j < str.length; j++) {
//       if(i !== j && str[i] === str[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if(isUnique) return str[i];
//   }
//   return null;
// };

// console.log(getFirstNonRepeatedChar('abacddbec'));

/* 
 Exercise 26:
 ------------
 Write a function getChar(c) which takes a number and returns the corresponding ASC|| char for that value.
*/

// function getChar(c){
//   return String.fromCharCode(c);
// }

// console.log(getChar(55))

// const people = [
//    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/2000', department: 'Development', salary: '35000' },
//    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];

// Exercises

// 1) What is the average income of all the people in the array?

// let count = 0;
// people.forEach(person => {
//    if(person.salary){
//       count++
//    }
//    return count;
// })

// const totalSalary = people.reduce((acc, curr) => {
//    return (acc + parseInt(curr.salary));
// }, 0)

// const averageIncome = totalSalary / count;
// console.log(Math.floor(averageIncome));


// 2) Who are the people that are currently older than 30?

// const olderThan30 = people.filter(person => {
//    const date = new Date();
//    const age = parseInt(date.getFullYear()) - parseInt(person.DOB.slice(-4));
//    console.log(age)
//    if(age > 30){
//       return person;
//    }
// })

// console.log(olderThan30);

// 3) Get a list of the people's full name (firstName and lastName).

// const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);

// console.log(fullNames);


// 4) Get a list of people in the array ordered from youngest to oldest.

// people.sort((personA, personB) => new Date(personB.DOB) - new Date(personA.DOB));
// console.log(people)

// 5) How many people are there in each department?

// const peopleInDepartment = people.reduce((acc, person) => ({...acc, [person.department]: acc[person.department] + 1 || 1}), {});
// console.log(peopleInDepartment); 

// const orders = [
//     { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//         { productId: '123', price: 55 },
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//         { productId: '567', price: 30 },
//         { productId: '678', price: 80 },
//     ]},
//     { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '789', price: 12 },
//         { productId: '890', price: 90 },
//     ]},
//         { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '901', price: 43 },
//         { productId: '123', price: 55 },
//     ]},
// ];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

// orders.map(order => {
//       if(order.customerId === '234' && order.delivered === false){
//          console.log(order);
//       }
// })

// 2) Create a new property on each order with the total price of items ordered.

// orders.map(order => ({
//    ...order,
//    orderTotal: order.items.reduce((acc, item) => acc + item.price, 0)   
// }));

// 3) Have all the orders been delivered?

// console.log(orders.every(order => order.delivered));


// 4) Has the customer with ID '123' made any orders?

// console.log(orders.some(order => order.customerId === '123'));

// 5) Have any products with an id of 123 been sold?

// console.log(orders.reduce((acc, order) => acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0));


// const users = [
// 	{ id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
// 	{ id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
// 	{ id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
// 	{ id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
// 	{ id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
// 	{ id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
// 	{ id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
// 	{ id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
// 	{ id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
// 	{ id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// ];

const comments = [
	{ userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
	{ userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
	{ userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
	{ userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
	{ userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
	{ userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
	{ userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
	{ userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
	{ userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
	{ userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];


// Exercises

// 1) What is Madison Marshall's user id?

// console.log(users.find(user => user.firstName === 'Madison' && user.lastName === 'Marshall'));

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

// users.find(user => {
//     if(comments[0].userId === user.id){
//         console.log(`${user.firstName} ${user.lastName}`)
//     }
// })

// 3) Which user commented 'OK great thanks'?

// users.find(user => {
//     comments.forEach(comment => {
//         if(comment.text === 'OK great thanks'){
//             if(user.id === comment.userId){
//                 console.log(user.firstName, user.lastName)
//             }
//         }
//     })
// })

// 4) Add the user's first and last name to each comment in the comments array

// console.log(comments.map(comment => {
//     const {firstName, lastName} = users.find(user => user.id === comment.userId);
//     return {...comment, firstName, lastName}
// }))


// 5) Get a list of the users who haven't commented

// console.log(users.filter(user => comments.find(comment => comment.userId === user.id)));

/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
	Exercise 01
	-----------
	Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

// const paragraph = document.querySelector("p");
// const words = paragraph.textContent.split(' ');

// const highlightedText = words.map(word => {
// 	if (word.length >= 8) {
// 		return `<span style="background-color: yellow;">${word}</span>`;
// 	} else {
// 		return word;
// 	}
// }).join(' ');

// paragraph.innerHTML = highlightedText;

/*
	Exercise 02
	-----------
	Add a link back to the source of the text after the paragraph tag.
	(https://forcemipsum.com/)
	*/

// const link = `https://forcemipsum.com/`;
// const span = document.createElement('span');
// span.innerHTML = `<a href='${link}'>${link}</a>`
// paragraph.after(span)

/*
	Exercise 03
	-----------
	Split each new sentence on to a separate line in the paragraph text.
	A sentence can be assumed to be a string of text terminated with a period (.)
*/

// paragraph.innerHTML = paragraph.innerHTML
// 	.split(/\.[^\.|<]/)
// 	.join('.</p><p>') + '</p>';

/* 
	Exercise 04
	-----------
	Count the number of words in the paragraph tag and display the count afer the heading.
	You can assume that all words are separated by one singular whitespace.
*/

// const wordsLength = paragraph.innerText.split(' ').length;
// const wordsCount = document.createElement('span');
// wordsCount.innerHTML = `Word Count: ${wordsLength}`;
// document.querySelector("h1").after(wordsCount)

/*
	Exercise 05
	-----------
	Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// document.querySelectorAll('p').forEach(p => {
// 	let originalText = p.innerHTML;
// 	let newText = '';
// 	for (let i = 0; i < originalText.length; i++) {
// 		if (originalText[i] === '?') {
// 			newText += '🤔';
// 		} else if (originalText[i] === '!') {
// 			newText += '😲';
// 		} else {
// 			newText += originalText[i];
// 		}
// 	}
// 	p.innerHTML = newText;
// });


/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */

/*
	Exercises 01
	------------
	Add a label to each of the input fields: username, password, confirm password
*/

// document.getElementById('username')
// 	.insertAdjacentHTML('beforebegin', '<label for="username">Username: </label>');
// document.getElementById('password')
// 	.insertAdjacentHTML('beforebegin', '<label for="password">Password: </label>');
// document.getElementById('confirmPassword')
// 	.insertAdjacentHTML('beforebegin', '<label for="confirmPassword">Confirm Password: </label>');

/*
	Exercise 02
	-----------
	Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

// const allInputs = document.querySelectorAll('input');
// const button = document.querySelector("button");
// button.addEventListener("click", e => {
// 	e.preventDefault();	
// 	allInputs.forEach(input => {
// 		if(input.value.trim() === ''){
// 			input.style.border = '2px solid red'
// 		} else if(input.value.trim !== '') {
// 			input.style.border = '2px solid black'
// 		}
// 	})
// })

// const checkInput = event => {
// 	const errorElement = Array.from(event.target.parentNode.querySelectorAll("span"));
// 	if(event.target.value === '' && !errorElement.length){
// 		event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Required</span>')
// 	}

// 	if (errorElement && event.target.value !== ''){
// 		errorElement.forEach(elem => elem.remove());
// 	}
// }

// document.getElementById('username')
// 	.addEventListener('blur', checkInput);
// document.getElementById('password')
// 	.addEventListener('blur', checkInput);
// document.getElementById('confirmPassword')
// 	.addEventListener('blur', checkInput);

/*
	Exercise 03
	-----------
	Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
	Exercise 04
	-----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
	Exercise 05
	-----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



/*
	Exercise 02
	-----------
	Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

// for(let i = 1; i <= 5; i++){
// 	let pattern = '';
// 	for(let j = 1; j <= i; j++){
// 		pattern += '*' + " ";
// 	}
// 	console.log(pattern);
// }

// for(let i = 5; i >= 1; i--){
// 	let pattern = '';
// 	for(let j = 1; j <=	i; j++){
// 		pattern += '*' + " "
// 	}
// 	console.log(pattern);
// }

// for(let i = 5; i >= 1; i--){
// 	let pattern = '         ';
// 	for(let j = 1; j <= 5; j++){
// 		if(j <= i){
// 			pattern += '* ';
// 		} else {
// 			pattern += ' '
// 		}
// 	}
// 	console.log(pattern);
// }

// . . * . .
// . * . * .
// * . . . *
// . * . * .
// . . * . .

// function printVShapePattern(n) {
//   if (n % 2 === 0) {
//     console.log("Please provide an odd number.");
//     return;
//   }

//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       if (
//         i + j === n - 3 ||         
//         j - i === 2 ||             
//         i + j === n + 1 ||       
//         i - j === 2               
//       ) {
//         row += "* ";
//       } else {
//         row += ". ";
//       }
//     }
//     console.log(row);
//   }
// }

// printVShapePattern(5)

// function checkValidity(inputArray) {
// 	let arr = [];
// 	for (let i = 0; i < inputArray.length; i++) {
// 		let curr = inputArray[i];

// 		if (curr === '{' || curr === '[' || curr === '(') {
// 			arr.push(curr);
// 		} else {
// 			let lastIndex = arr[arr.length - 1];
// 			if (
// 				(curr === '}' && lastIndex === '{') ||
// 				(curr === ']' && lastIndex === '[') ||
// 				(curr === ')' && lastIndex === '(')
// 			) {
// 				arr.pop();
// 			} else {
// 				return false;
// 			}
// 		}
// 	}
// 	return arr.length === 0;
// }

// console.log(checkValidity(['{', '[', '(', ')', ']', '}']));
// console.log(checkValidity(['}', '{', '}']));
// console.log(checkValidity(['{', '}', '}'])); 

// let x = 5;
// for (let i = 0; i < 3; i++) {
//   x += i;
//   i = i + 0.5;
// }
// console.log(x);

// x = 5
// i = 0
// x = 5 + 0, x = 5
// i = 0 + 0.5, i = 0.5
// x = 5

// x = 5;
// i = 1.5
// x = 5 + 1.5, x = 6.5
// i = 1.5 + 0.5, i = 2
// x = 6.5

// x = 6.5
// i = 3 so it will be false

// let count = 0;
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// IDK i forgot it's concept

// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length); // i predicted it to be 10 but it was 11
// console.log(arr[5]); // i predicted it right as undefined


// const arr = [1, 2, 3];
// arr[10] = 4;
// arr.forEach((el, i) => console.log(i, el));

// maybe 11 times

// const set = new Set();
// set.add(1);
// set.add('1');
// console.log(set.size);

// it's size will be two because one is a number and the other is a string.

// const map = new Map();
// map.set('1', 'a');
// map.set(1, 'b');
// console.log(map.get('1')); // a
// console.log(map.get(1)); // b

// const a = { key: 'value' };
// const b = a;
// b.key = 'changed';
// console.log(a.key); // 'changed' because it is reference not the original object 

// const obj = {};
// console.log(obj.hasOwnProperty('toString'));
// i don't know it's answer properly. maybe true because objects behave like strings i don't know this line is correct or not. correct me if i am wrong.

// const obj = {
//   a: 1,
//   b: 2,
//   a: 3
// };
// console.log(obj); // perhaps b: 2 and then a = 3;

// const a = [1, 2];
// const b = [1, 2];
// console.log(a == b); false
// console.log(a === b); false

// because of reference 

// --------------------------------------------------

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log('let:', i), 0);
// }

// for (var j = 0; j < 3; j++) {
//   setTimeout(() => console.log('var:', j), 0);
// }

// 1st loop using let:
//                     It's answer will be 0, 1, 2 because let is function scope not global scope so value of i will keep changing

// 2nd loop using var:
// 										It's answer will be 3, 3, 3 because var is global scope. so it will track the last value of j because of setTimeout.

// console.log(a); // undefined will be printed because variable is var and var is global scope it does not give error on hoisting but gives undefined
// var a = 10;

// const arr = [1, 2, 3];
// console.log(typeof arr); // type of arr is object. because arrays are objects in Javascript.

// const arr = [10, 20, 30];
// arr.length = 1;
// console.log(arr); // i never tried doing this. but i think arr will contain only 10 in it because of first index 0. I am not sure about it.

// let result = '';
// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 2; j++) {
//     result += i + j;
//   }
// }
// console.log(result);

// result = '', // i = 1, j = 1
// result += 1 + 1 = '2' 

// result = '2', i = 2, j = 2;
// result += 2 + 2 = '4'
// according to my dry run. the answer of result will be '24'.
// but i think that when i is 1, j runs two times i.e. from 1 to 2 when i = 2, j again runs 2 times from 1 to 2. so i think it's dry run should be different

// result = '',
// i = 1, j = 1; result += 1 + 1 = '2'
// result = '2', i = 1, j = 2; result += 1 + 2 = '23'
// result = '23', i = 2, j = 1; result += 2 + 1 = '233'
// result = '233', i = 2, j = 2; result += 2 + 2 = '2334'. 
// So the final answer will be: 2334 according to this dry run. which i think is the correct dry run.

// const map = new Map();
// map.set({}, 'a');
// map.set({}, 'b');
// console.log(map.size); // 2, because i am setting object as key and a string as value

// const obj = { x: 10 };
// obj.x = 20;
// console.log(obj.x); // no, it will not throw any error because we are changing the reference not the original obj.

// console.log([1] == true); // It will be true because array is a truthy value. This is the reason i thought it to be true. Tell me if there is any other reason.

// const arr = [];
// arr[3] = 'A';
// arr.forEach((x, i) => console.log(i, x));

// I think only one iteration will happen because indices 0,1,2 are empty. So, forEach will run only for 3rd index.

// const obj = {};
// const key1 = {};
// const key2 = {};
// obj[key1] = 'a';
// obj[key2] = 'b';
// console.log(obj[key1]); // for this question, i saw the console.log, it showed b expect of a. then i changed the console.log to see obj[key2] it also showed b. The answer that i thought of is that key 1 and key 2 were objects. Then i changed the key1 and key2 to be strings 'a' and 'b'. first obj[key1] was 'a' but when i set obj[key2] to b. the obj[key1] also got changed to b. because of reference of that objects that were set earlier as keys.

// for(let i = 0; i <= 2; i++){
// 	let pattern = '';
// 	for(let j = 0; j <= 2; j++){
// 		if(j <= i){
// 			pattern += "*"
// 		} else {
// 			pattern += ' '
// 		}
// 	}
// 	console.log(pattern);
// } 

// for(let i = 3; i >= 0; i--){
// 	let pattern = '';
// 	for(let j = 0; j <= 3; j++){
// 		if(j <= i){
// 			pattern += "*"
// 		} else {
// 			pattern += ' '
// 		}
// 	}
// 	console.log(pattern);
// } 

// let totalRows = 7;

// for(let i = 1; i <= totalRows; i += 2){
// 	let pattern = '';
// 	for(let k = 1; k <= (totalRows - i) / 2; k++){
// 		pattern += ' '
// 	}
// 	for(let j = 1; j <= i; j++){
// 		pattern += '*'
// 	}
// 	console.log(pattern);
// } 
// for(let i = totalRows - 2; i >= 1; i -= 2){
// 	let pattern = '';
// 	for(let k = 1; k <= (totalRows - i) / 2; k++){
// 		pattern += ' '
// 	}
// 	for(let j = 1; j <= i; j++){
// 		pattern += '*'
// 	}
// 	console.log(pattern);
// } 

// * * * * *
// *   *   * 
// * * * * * 
// *   *   * 
// * * * * * 

// let size = 5;

// for(let i = 1; i <= 5; i++){
// 	let pattern = '';
// 	for(let j = 1; j <= 5; j++){
// 		if(i === 1 || i === 5 || j === 1 || j === 5 || j === 3 || i === 3){
// 			pattern += '*'
// 		} else {
// 			pattern += ' '
// 		}
// 	}
// 	console.log(pattern)
// }

// let admin;
// let name;
// name = 'John'
// admin = name;
// alert(admin)

// const ourPlanetName = 'Earth';
// const currentUserName = 'User';

// const result = prompt("What is your name?", 'name');
// alert(result);

// console.log(typeof(''));
// console.log(typeof String(null));
// console.log(String(null));
// console.log(typeof String(undefined));
// console.log(String(undefined));

// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(''));
// console.log(Number(' '));
// console.log(Number(true));
// console.log(Number(false));
// alert( "6" / "2" );
// console.log(Number('   123   '));
// console.log(Number('   123z   '));

// boolean will return true to truthy value and false to falsy value

// important notes:

// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"
// See, it doesn’t matter whether the first operand is a string or the second one.

// Here’s a more complex example:

// alert(2 + 2 + '1' ); // "41" and not "221"
// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

// alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

// alert( 6 - '2' ); // 4, converts '2' to a number
// alert( '6' / '2' ); // 3, converts both operands to numbers


// Precedence	Name	Sign
// …	…	…
// 14	unary plus	+
// 14	unary negation	-
// 13	exponentiation	**
// 12	multiplication	*
// 12	division	/
// 11	addition	+
// 11	subtraction	-
// …	…	…
// 2	assignment	=
// …	…	…

// What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// let a = 2;

// let x = 1 + (a *= 2);

// "10"
// "-1"
// true
// 2
// 6
// 9px
// "$45"
// 2
// NaN
// "  -9  5"
// -14
// 1
// NaN
// -2

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
// 	(age < 18) ? 'Hello!' :
// 	(age < 100) ? 'Greetings!' :
// 	'What an unusual age!';

// alert(message);

// let jsOfficialName = prompt('What is the "official" name of JavaScript?');

// if(jsOfficialName === 'ECMAScript'){
// 	alert('Right');
// } else {
// 	alert('You don\'t know? ECMAScript!')
// }

// let value = +prompt('Enter The Number', 0);

// if(value > 0){
// 	alert(1);
// } else if (value === 0){
// 	alert(0);
// } else {
// 	alert(-1);
// }

// Rewrite 'if' into '?'

// let result;

// if (a + b < 4) {
// 	result = 'Below';
// } else {
// 	result = 'Over';
// }

// Rewriting.....

// let result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite 'if' into '?'

// let message;

// if (login == 'Employee') {
// message = 'Hello';
// 	} else if (login == 'Director') {
// 	message = 'Greetings';
// } else if (login == '') {
// 	message = 'No login';
// } else {
// 	message = '';
// }

// Rewriting.....

// let message = (login === 'Employee' ) ? 'Hello' : (login == 'Director') ? 'Greetings' : 
// (login === '') ? 'No login' : 
// '';

// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

// let age = prompt('Enter Your age');

// if (!(age >= 14 && age <= 90)) {
// 	alert("Valid Age");
// } else {
// 	alert("Invalid Age");
// }


// if (age < 14 || age > 90) {
// 	alert("Valid Age");
// } else {
// 	alert("Invalid Age");
// }

// let login = prompt('Enter Login Name');
// let password;

// if (login === 'Admin') {
// 	password = prompt('Now Enter The Password');
// 	if (password === "TheMaster") {
// 		alert('Welcome!');
// 	} else if (password === '' || password === null) {
// 		alert('Canceled');
// 	}
// 	else {
// 		alert('Wrong password')
// 	}
// } else if (login === '' || login === null) {
// 	alert('Canceled');
// } else {
// 	alert("I don't know you");
// }

// let browser;

// if (browser === 'Edge') {
// 	alert("You've got the Edge!");
// } else if (browser === 'Chrome' 
// 	|| browser === 'Firefox' 
// 	|| browser === 'Safari' 
// 	|| browser === 'Opera') {
// 	alert('Okay we support these browsers too');
// } else {
// 	alert('We hope that this page looks ok!');
// }

// let a = +prompt('a?', '');

// switch (a) {
// 	case 0:
// 		alert( 0 );
// 		break;
// 	case 1:
// 		alert( 1 );
// 		break;
// 	case 2:
// 	case 3:
// 		alert( '2,3' );
// 		break;
// 	default:
// 		break;
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }


// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }

// function min(a, b) {
// 	if (a < b){
// 		return a;
// 	}
// 	return b;
// }

// console.log(min(5, 4))

// function pow(x, n) {
// 	return x ** n;
// }

// console.log(pow(3, 3))

// const ask = (question, yes, no) => {
// 	if(confirm(question)) yes();
// 	else no();
// }

// ask("Do you agree?",
// 	() => alert("You agreed."),
// 	() => alert("You canceled the execution.")
// );

// function pow(x, n) {
// 	let result = 1;

// 	for(let i = 0; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if(n <= 0) {
// 	alert(`Power ${n} is not supported,
// 		please enter an integer number greater than zero`);
// } else {
// 	alert( pow(x, n) );
// }

// pow(x, n)

// ❓ Question: Find the Most Frequent Character
// Write a function called findMostFrequentChar(str) that takes a string as input and returns the character that appears the most times in the string. Ignore spaces and consider case-insensitive matches (i.e., treat A and a the same).

// If there is a tie, return the character that appears first in the string.

// 🔍 Example:
// javascript
// Copy
// Edit
// findMostFrequentChar("JavaScript is amazing"); 
// // Output: "a"
// 🧠 Hints:
// Use an object to count character frequencies.

// Ignore spaces.

// Convert all letters to lowercase.

// Loop through the string only once if possible.

// function findMostFrequentChar(str) {
// 	let obj = {};

// 	for(let i = 0; i < str.length; i++){	
// 		let alphabet = str[i].trim().toLowerCase();
// 		if(alphabet !== ""){
// 			if(!obj[alphabet]){
// 				obj[alphabet] = 1;
// 			} else {
// 				obj[alphabet]++
// 			}
// 		}
// 	}
// 	let count = 0;
// 	let alphabet = '';
// 	for(let key in obj){
// 		if(obj[key] > count){
// 			count = obj[key];
// 			alphabet = key;
// 		}
// 	}
// 	return `${alphabet}`
// }


// console.log(findMostFrequentChar("Javascript is Awesome"));
// console.log(findMostFrequentChar("Python is boring"));

// ❓ Question: Check for Anagrams
// Write a function called areAnagrams(str1, str2) that returns true if the two strings are anagrams of each other and false otherwise.

// Two strings are anagrams if they contain the same characters in any order, ignoring spaces, punctuation, and case.

// 🧠 Hints:
// Normalize the strings by:

// Removing non-letter characters (punctuation, spaces).

// Converting to lowercase.

// Sort both strings and compare them.

// function areAnagrams(str1, str2) {

// 	function compareAndNormalize(str) {

// 		let clean = '';
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i].toLowerCase();
//       if (char >= 'a' && char <= 'z') {
//         clean += char;
//       }
//     }

// 		let arr = [];

// 		for (let i = 0; i < clean.length; i++) {
// 			arr[i] = clean[i];
// 		}

// 		for (let i = 0; i < arr.length - 1; i++) {
// 			for (let j = 0; j < arr.length - i - 1; j++) {
// 				if (arr[j] > arr[j + 1]) {
// 					let temp = arr[j];
// 					arr[j] = arr[j + 1];	
// 					arr[j + 1] = temp;
// 				}
// 			}
// 		}

// 		let sortedStr = '';
// 		for (let i = 0; i < arr.length; i++) {
// 			sortedStr += arr[i];
// 		}
// 		return sortedStr
// 	}
// 	return compareAndNormalize(str1) === compareAndNormalize(str2);
// }

// // // 🔍 Test Cases
// console.log(areAnagrams("Listen", "Silent"));           // true
// console.log(areAnagrams("The eyes", "They see"));       // true
// console.log(areAnagrams("Hello", "Olelh!"));            // true
// console.log(areAnagrams("Hello", "World"));             // false

// function longestConsecutive(nums) {
//   if (nums.length === 0) return 0;

//   nums.sort((a, b) => a - b);  // Sort the array
//   let longest = 1;
//   let count = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       continue; // Skip duplicates
//     } else if (nums[i] === nums[i - 1] + 1) {
//       count++;
//       longest = Math.max(longest, count);
//     } else {
//       count = 1; // Reset count if not consecutive
//     }
//   }

//   return longest;
// }

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9

// Note: 
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction:

// // these properties are all right
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// alert( obj.for + obj.let + obj.return );  // 6

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// function isEmpty(obj) {
// 	for (let key in obj) {
// 		// if the loop has started, there is a property
// 		return false;
// 	}
// 	return true;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// // schedule["8:30"] = "get up";

// // alert(isEmpty(schedule)); // false

// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// let sumSalaries = 0;

// for(let salarie in salaries) {
// 	sumSalaries += salaries[salarie];
// }

// console.log(sumSalaries);

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {

// 	for(let key in obj){
// 		if(typeof obj[key] === "number"){
// 			obj[key] = obj[key] * 2;
// 		}
// 	}
// }

// multiplyNumeric(menu);

// after the call

// let menu = {
// 	width: 400,
// 	height: 600,
// 	title: "My menu"
// };

// let alertName = prompt('What is your name', "Hamza");
// let form;

// if(alertName === "G O K U"){
// 	form = prompt('What form do you want');
// 	alert(form);
// } else {
// 	alert("Don't You Know Who 『G』 『O』 『K』 『U』 is...")
// }

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Read: ${readNumber()}`);

// function OneToN(n){
// 	if(n === 0){
// 		return;
// 	}
// 	OneToN(n - 1);
// 	console.log(n);
// }

// OneToN(5);

// function factorial(n) {
// 	if(n === 1){
// 		return 1;
// 	}
// 	return n * factorial(n - 1);
// }

// console.log(factorial(4));

// function printArray(array, index = 0){
// 	if(index === array.length) return;

// 	console.log(array[index]);
// 	printArray(array, index + 1)
// }

// printArray([2,3,4,53])

// function reverseArray(array, left = 0, right = array.length - 1){
// 	if (left >= right){
// 		return;
// 	}
// 	// swap logic
// 	let temp = array[left];
// 	array[left] = array[right];
// 	array[right] = temp;	
// 	reverseArray(array, left + 1, right - 1);
// }

// const array = [1,2,3,4,5];
// const array2 = [1,2,3,4];
// reverseArray(array);
// reverseArray(array2);
// console.log(array);
// console.log(array2);

// let fruits = ['Apple', 'Orange', 'Apple'];

// console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
// console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// function camelize(str) {
// 	return str
// 		.split('-')
// 		.map(
// 			(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// 		)
// 		.join('');
// }

// console.log(camelize('index-of'))

// function filterRangeInPlace(arr, a, b) {

// 	for (let i = 0; i < arr.length; i++) {
// 		let val = arr[i];

// 		if (val < a || val > b) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = ['HTML', 'JavaScript', 'CSS'];

// function copySorted(arr){
// 	let arr2 = [...arr]
// 	return arr2.sort();
// }

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let persons = [john, pete, mary];

// let names = persons.map(person => person.name);

// console.log(names);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let people = [ john, pete, mary ];

// let usersMapped = people.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(array){
// 	return array.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);
// console.log(arr);

// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// function shuffle(array){
// 	return array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];

// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [2, 1, 3]

// console.log(shuffle(arr));
// // arr = [3, 1, 2]

// function getAverageAge(users){
// 	return users.reduce((acc, curr) => acc + curr.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
// 	let result = [];

// 	for(let str of arr){
// 		if(!result.includes(str)){
// 			result.push(str);
// 		}
// 	}
// 	return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }

// let usersq = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(usersq);
// console.log(usersById	);


// let values = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// console.log( unique(values) ); 

// function spinWords(string) {
//   return string
//     .split(' ')
//     .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
//     .join(' ');
// }

// 1. Write a program to check if a number is a prime number.

function checkPrime(num) {
	if (num < 2) {
		return false
	}

	for (let i = 2; i <= num; i++) {
		if (i % num === 0) {
			return true;
		} else {
			return false;
		}
	}
}

// console.log(checkPrime(1));
// console.log(checkPrime(2));
// console.log(checkPrime(3));
// console.log(checkPrime(4));
// console.log(checkPrime(5));
// console.log(checkPrime(6));
// console.log(checkPrime(7));
// console.log(checkPrime(8));
// console.log(checkPrime(9));
// console.log(checkPrime(10));
// console.log(checkPrime(11));

// 2. Reverse a given string without using built-in reverse() method.

function reverseStr(str) {
	let build = ''
	for (let i = str.length - 1; i >= 0; i--) {
		build += str[i];
	}
	return build;
}

// console.log(reverseStr('hamza'));
// console.log(reverseStr('usman'));
// console.log(reverseStr('faisal'));
// console.log(reverseStr('ahsan'));

// 3. Find the largest number in an array without using Math.max.

function findLargest(nums) {
	let largest = nums[0];
	nums.forEach(num => {
		if (num > largest) {
			largest = num;
		}
	});
	return largest;
}

// console.log(findLargest([3,1,5,34,100,2]))

// 4. Write logic to count the number of vowels in a string.

function countVowels(str) {
	let vowelsCount = 0;
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			vowelsCount++
		}
	}
	return vowelsCount;
}

// console.log(countVowels('arial'));
// console.log(countVowels('aeioul'));

// 5. Check whether a string is a palindrome or not.

function isPalindrome(str) {
	let reverseStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}
	return reverseStr === str;
}

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('car'));
// console.log(isPalindrome('level'));

// 6. Find the factorial of a given number.

function calcFactorial(num) {
	let calc = 1;
	for (let i = 1; i <= num; i++) {
		calc = calc * i;
	}
	return calc;
}

// console.log(calcFactorial(5));

// 7. Print the Fibonacci series up to 'n' terms.

// let n = 10;
// let a = 0;
// let b = 1;
// let temp = a + b;	

// for(let i = 0; i <= n; i++){
// 	console.log(a)
// 	a = b;
// 	b = temp
// 	temp = a + b;
// }

// 8. Count how many times a specific element appears in an array.

function countAppearance(arr) {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			obj[arr[i]] = 1;
		} else {
			obj[arr[i]]++
		}
	}
	return obj
}

// console.log(countAppearance([3, 1, 3, 3, 2, 1, 4]));

// 9. Write a logic to sort an array without using sort() method.

let arr = [3, 300, 1, 9, 34, 2];

for (let i = 0; i < arr.length - 1; i++) {
	for (let j = 0; j < arr.length - i - 1; j++) {
		if (arr[j] > arr[j + 1]) {
			let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
}

// console.log(arr);

// 10. Find the second largest number in an array.

function findSecondLargest(nums) {
	let largest = nums[0];
	let secondLargest = nums[1];

	nums.forEach(num => {
		if (num > largest) {
			secondLargest = largest
			largest = num;
		}
	})

	return secondLargest;
}

// console.log(findSecondLargest([1,4,5,6]))

// 11. Remove duplicate values from an array without using Set.

function removeDuplicates(arr) {
	let sortedArr = arr.sort((a, b) => a - b);
	for (let i = 0; i < sortedArr.length; i++) {
		if (sortedArr[i] === sortedArr[i + 1]) {
			sortedArr.splice(i, 1);
		}
	}
	return sortedArr
}

// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));

// 12. Check if two strings are anagrams of each other.

function isAnagram(str1, str2) {

	if (str1.length !== str2.length) {
		return;
	}

	function check(str) {

		let arr = [];
		for (let i = 0; i < str.length; i++) {
			arr[i] = str[i];
		}

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j]
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}

		let sortedStr = '';
		for (let i = 0; i < arr.length; i++) {
			sortedStr += arr[i];
		}

		return sortedStr
	}
	return check(str1) === check(str2);
}

// console.log(isAnagram('listen', 'silent'))
// console.log(isAnagram('listen', 'listsa'))

// 13. Swap two numbers without using a third variable.

// 14. Find the sum of digits of a given number.

// function findSum(digit){
// 	let sum = 0;
// 	for(let i = 0; i <= digit; i++){
// 		sum += i;
// 	}
// 	return sum 
// }

// console.log(findSum(3));

// 15. Print a pattern like this:
// *
// **
// ***
// ****

for (let i = 0; i < 4; i++) {
	let pattern = '';
	for (let j = 0; j < 4; j++) {
		if (j <= i) {
			pattern += '*';
		} else {
			pattern += ' ';
		}
	}
	// console.log(pattern)
}

// 16. Print a pattern like this:
// 1
// 12
// 123
// 1234

for (let i = 1; i < 5; i++) {
	let pattern = '';
	for (let j = 1; j < 5; j++) {
		if (j <= i) {
			pattern += j;
		} else {
			pattern += ' ';
		}
	}
	// console.log(pattern)
}

// 17. Find the missing number in a sequence of consecutive integers.

function findMissingNumber(arr) {

	let largest = arr[0];

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] > largest) {
			largest = arr[i];

			for (let k = 1; k <= largest; k++) {

				if (!arr.includes(k)) {
					return k
				}
			}
		}
	}

}

// console.log(findMissingNumber([1,2,3, 5]));

// const inputElement = document.querySelector('.input');
// const btn = document.querySelector('button');

// btn.addEventListener("click", () => {
// 	if(btn.innerHTML === 'Show'){
// 		inputElement.type = 'text';
// 		btn.innerHTML = 'Hide';
// 	} else {
// 		inputElement.type = 'password';
// 		btn.innerHTML = 'Show';
// 	}
// });

// const buttonElement = document.querySelector('button');
// const loginModal = document.querySelector('.loginModal');
// const closeBtn = document.querySelector('.loginModal span');
// const body = document.body;


// buttonElement.addEventListener("click", (e) => {
// 	e.stopPropagation();
// 	loginModal.classList.add('cl');
// });

// closeBtn.addEventListener("click", (e) => {
// 	e.stopPropagation();
// 	loginModal.classList.remove('cl');
// });

// loginModal.addEventListener("click", (e) => {
// 	e.stopPropagation();
// });

// document.addEventListener("keydown", (e) => {
// 	if (e.key === "Escape" && loginModal.classList.contains('cl')) {
// 		loginModal.classList.remove('cl');
// 	}
// });

// body.addEventListener("click", e => {
// 	if (loginModal.classList.contains('cl')) {
// 		loginModal.classList.remove("cl");
// 	}
// });

// const allQuestions = document.querySelectorAll('.faq-items h3');

// allQuestions.forEach((item, index) => {

// 	item.addEventListener("click", e => {

// 		allQuestions.forEach((heading, i) => {
// 			if (index !== i) {
// 				heading.nextElementSibling.classList.remove('show-ans');
// 				heading.lastChild.innerHTML = '+'
// 			}
// 		});

// 		if (!item.nextElementSibling.classList.contains('show-ans')) {
// 			item.nextElementSibling.classList.add('show-ans');
// 			item.lastChild.innerHTML = '-'
// 		} else {
// 			item.nextElementSibling.classList.remove('show-ans');
// 			item.lastChild.innerHTML = '+'
// 		};

// 	});

// });

// const box = document.querySelector('.box');

// window.addEventListener("mousemove", e => {
// 	const boxWidth = box.offsetWidth;
// 	const boxHeight = box.offsetHeight;

// 	box.style.top = (e.clientY - boxHeight / 2) + "px";
// 	box.style.left = (e.clientX - boxWidth / 2) + "px";
// });

// function setDarkOrLight() {
// 	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
// 		document.body.classList.add('dark');
// 		document.body.classList.remove('light')
// 	} else {
// 		document.body.classList.add('light')
// 		document.body.classList.remove('dark')
// 	}
// }


// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
// 	if(!localStorage.getItem('theme')){
// 		setDarkOrLight();
// 	}
// });

// const toggleBtn = document.querySelector('.toggle');

// if(localStorage.getItem('theme')){
// 	document.body.classList.add(localStorage.getItem('theme'))
// } else {
// 	setDarkOrLight();
// }


// toggleBtn.addEventListener("click", e => {
// 	if (document.body.classList.contains('dark')) {
// 		document.body.classList.remove('dark');
// 		document.body.classList.add('light');
// 		localStorage.setItem('theme', 'light');
// 	} 

// 	else {
// 		document.body.classList.remove('light');
// 		document.body.classList.add('dark');
// 		localStorage.setItem('theme', 'dark');
// 	}
// })


// let users = [
// 	{
// 		name: "amisha rathore",
// 		pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
// 		bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
// 	},
// 	{
// 		name: "amita mehta",
// 		pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
// 		bio: "main character energy 🎬 | coffee > everything ☕✨",
// 	},
// 	{
// 		name: "isha oberoi",
// 		pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
// 		bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
// 	},
// 	{
// 		name: "Ojin Oklawa",
// 		pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
// 		bio: "too glam to give a damn 💅 | filter free soul",
// 	},
// 	{
// 		name: "diya bansal",
// 		pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
// 		bio: "a little chaos, a lot of art 🎨✨ | just vibes",
// 	},
// 	{
// 		name: "tanay rawat",
// 		pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
// 		bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
// 	},
// 	{
// 		name: "mohit chhabra",
// 		pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
// 		bio: "aesthetic overload 📸🕊️ | living in lowercase",
// 	},
// ];

// function showUsers(arr) {
// 	arr.forEach(user => {
// 		const card = document.createElement("div");
// 		card.classList.add('card');

// 		const img = document.createElement("img");
// 		img.src = user.pic;
// 		img.classList.add("bg-img");

// 		const blurredLayer = document.createElement("div");
// 		blurredLayer.style.backgroundImage = `url(${user.pic})`;
// 		blurredLayer.classList.add("blurred-layer");

// 		const content = document.createElement("div");
// 		content.classList.add("content");

// 		// Create h3 and paragraph
// 		const heading = document.createElement("h3");
// 		heading.textContent = user.name;

// 		const para = document.createElement("p");
// 		para.textContent = user.bio;

// 		// Append heading and paragraph to content
// 		content.appendChild(heading);
// 		content.appendChild(para);

// 		// Append all to card
// 		card.appendChild(img);
// 		card.appendChild(blurredLayer);
// 		card.appendChild(content);

// 		// Finally, append card to the body or any container
// 		document.querySelector(".cards").appendChild(card);
// 	})
// }

// showUsers(users)

// const input = document.querySelector('.inp');

// input.addEventListener("input", e => {
// 	let searchValue = input.value.trim().toLowerCase();

// 	let newUsersArr = users.filter(user => {
// 		return user.name.toLowerCase().startsWith(searchValue);
// 	});

// 	document.querySelector(".cards").innerHTML = '';
// 	if(newUsersArr.length === 0){
// 		const msg = document.createElement('p');
// 		msg.textContent = "No users found...";
// 		msg.classList.add('no-users-msg');
// 		document.querySelector('.cards').append(msg);
// 	} else {
// 		showUsers(newUsersArr)
// 	}
// });


// const gamePart = document.querySelector('.gamePart');
// const hit = document.querySelector('.hit span');
// const timer = document.querySelector('.timer span');
// let score = document.querySelector('.score span');

// let numberScore = 0;
// let randomHit = Math.floor(Math.random() * 11);
// hit.textContent = randomHit;


// function generateBubbles() {
// 	gamePart.innerHTML = '';
// 	for (let i = 0; i < 90; i++) {
// 		let randomNumber = Math.floor(Math.random() * 11);
// 		gamePart.innerHTML += `<div class="bubble">${randomNumber}</div>`
// 	}

// 	const bubbles = document.querySelectorAll('.bubble');

// 	bubbles.forEach(bubble => {
// 		bubble.addEventListener('click', e => {
// 			if (e.target.textContent == hit.textContent) {
// 				numberScore += 10;
// 				score.textContent = numberScore;
// 				randomHit = Math.floor(Math.random() * 11);
// 				hit.textContent = randomHit;
// 				generateBubbles();
// 			}
// 		})
// 	})
// }

// function startTimer() {
// 	let time = 60;
// 	timer.textContent = time;
// 	let id = setInterval(function () {
// 		if (time > 0) {
// 			time--
// 			timer.textContent = time
// 		} else {
// 			clearInterval(id);
// 			alert("Time's up! Your score: " + numberScore);

// 			numberScore = 0;
// 			score.textContent = numberScore;
// 			randomHit = Math.floor(Math.random() * 11);
// 			hit.textContent = randomHit;
// 			startTimer();
// 			generateBubbles();
// 		}
// 	}, 1000)
// }

// generateBubbles();
// startTimer();





// const images = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// nextButton.addEventListener("click", e => {
// 	const activeImg = document.querySelector('.active');
// 	if (activeImg && activeImg.nextElementSibling) {
// 		activeImg.classList.remove('active');
// 		activeImg.nextElementSibling.classList.add('active');
// 	}
// })

// prevButton.addEventListener("click", e => {
// 	const activeImg = document.querySelector('.active');
// 	if (activeImg && activeImg.previousElementSibling) {
// 		activeImg.classList.remove('active');
// 		activeImg.previousElementSibling.classList.add('active');
// 	}
// })


// const autoplayButton = document.querySelector('.autoplay-toggle');

// let id = null;

// autoplayButton.addEventListener('click', () => {
// 	if (id === null) {
// 		id = setInterval(() => {
// 			const activeImg = document.querySelector('.active');
// 			if (activeImg && activeImg.nextElementSibling) {
// 				activeImg.classList.remove('active');
// 				activeImg.nextElementSibling.classList.add('active');
// 			} else if (activeImg && !activeImg.nextElementSibling) {
// 				activeImg.classList.remove('active');
// 				images[0].classList.add('active');
// 			}
// 		}, 1000);
// 		autoplayButton.textContent = '⏸️';
// 	} else {
// 		clearInterval(id);
// 		id = null;
// 		autoplayButton.textContent = '▶️';
// 	}
// });






// const sentences = [
// 	"The quick brown fox jumps over the lazy dog.",
// 	"Typing tests help improve speed and accuracy.",
// 	"Practice every day to become a better developer.",
// 	"JavaScript is a versatile programming language.",
// 	"Frontend development includes HTML, CSS, and JavaScript.",
// 	"Consistency is the key to mastering any skill.",
// 	"A good UI makes the user feel in control.",
// 	"Never stop learning and building cool projects.",
// 	"Debugging is twice as hard as writing the code.",
// 	"Great things take time, keep pushing forward."
// ];


// let randomSentence = sentences[Math.floor(Math.random() * sentences.length)]
// const quote = document.querySelector('#quote');
// const textArea = document.querySelector("#input");
// const wordPerMinute = document.querySelector('#wpm')
// const time = document.querySelector('#time');
// let startTime = null;
// let endTime = null;
// let duration = null;
// let wordCount = null;
// let wpm = null

// quote.dataset.fullText = randomSentence;
// quote.textContent = randomSentence;

// textArea.addEventListener('input', e => {
// 	if (textArea.value.length === 1 && startTime === null) {
// 		startTime = new Date().getTime();
// 	}

// 	if (textArea.value === quote.textContent) {
// 		endTime = new Date().getTime();
// 		duration = (endTime - startTime) / 1000;

// 		wordCount = quote.textContent.trim().split(/\s+/).length;
// 		wpm = Math.floor((wordCount / duration) * 60);
// 		wordPerMinute.textContent = wpm;
// 		time.textContent = duration;
// 	}

// 	quote.innerHTML = ''

// 	const fullText = quote.dataset.fullText;
// 	const typedText = textArea.value;

// 	for (let i = 0; i < fullText.length; i++) {
// 		const span = document.createElement('span');
// 		span.textContent = fullText[i];

// 		if (i < typedText.length) {
// 			if (typedText[i] === fullText[i]) {
// 				span.style.color = '#000';
// 			} else {
// 				span.style.color = 'red';
// 			}
// 		} else {
// 			span.style.color = '#aaa';
// 		}
// 		quote.append(span);
// 	}

// });

// const restartBtn = document.querySelector("#restart");

// restartBtn.addEventListener("click", e => {
// 	randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
// 	textArea.value = '';
// 	textArea.focus();

// 	startTime = null;
// 	endTime = null;
// 	duration = null;
// 	wordCount = null;
// 	wpm = null

// 	time.textContent = '0.0';
// 	wordPerMinute.textContent = '0'

// 	quote.dataset.fullText = randomSentence;
// 	quote.innerHTML = '';

// 	for (let i = 0; i < randomSentence.length; i++) {
// 		const span = document.createElement('span');
// 		span.textContent = randomSentence[i];
// 		span.style.color = '#aaa';
// 		quote.appendChild(span);
// 	}
// })

// textArea.focus();






// const quizData = [
// 	{
// 		question: "What does HTML stand for?",
// 		options: [
// 			"Hyperlinks and Text Markup Language",
// 			"Home Tool Markup Language",
// 			"Hyper Text Markup Language",
// 			"Hyper Tool Multi Language"
// 		],
// 		answer: "Hyper Text Markup Language"
// 	},
// 	{
// 		question: "Which language is used for styling web pages?",
// 		options: [
// 			"HTML",
// 			"JQuery",
// 			"CSS",
// 			"XML"
// 		],
// 		answer: "CSS"
// 	},
// 	{
// 		question: "Which is not a JavaScript Framework?",
// 		options: [
// 			"React",
// 			"Angular",
// 			"Vue",
// 			"Cassandra"
// 		],
// 		answer: "Cassandra"
// 	},
// 	{
// 		question: "Which symbol is used for comments in JavaScript?",
// 		options: [
// 			"// comment",
// 			"/* comment */",
// 			"# comment",
// 			"<!-- comment -->"
// 		],
// 		answer: "// comment"
// 	},
// 	{
// 		question: "What does DOM stand for?",
// 		options: [
// 			"Document Object Model",
// 			"Data Object Management",
// 			"Digital Ordinance Model",
// 			"Desktop Oriented Mode"
// 		],
// 		answer: "Document Object Model"
// 	}
// ];



// const questionPara = document.querySelector("#question");
// const optionButtons = document.querySelectorAll('.option-btn');
// const questionCount = document.querySelector('#question-count');
// const nextBtn = document.querySelector('#next-btn');
// const resultBox = document.querySelector('.result-box');
// const finalScore = document.querySelector('#score')
// const quizBox = document.querySelector('.quiz-box');
// const restartBtn = document.querySelector('#restart-btn');

// questionCount.innerHTML = '';

// let currentQuestion = 0;
// let score = 0;

// questionPara.textContent = quizData[currentQuestion].question;

// optionButtons.forEach((option, i) => {
// 	option.textContent = quizData[currentQuestion].options[i]
// });

// questionCount.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

// optionButtons.forEach(opt => {
// 	opt.disabled = false;
// 	opt.addEventListener('click', e => {
// 		optionButtons.forEach(btn => btn.disabled = true);

// 		if (e.target.textContent === quizData[currentQuestion].answer) {
// 			e.target.style.backgroundColor = 'green';
// 			score++
// 		} else {
// 			e.target.style.backgroundColor = 'red';
// 		}
// 	});
// });

// nextBtn.addEventListener("click", e => {
// 	currentQuestion++

// 	if (currentQuestion < quizData.length) {
// 		questionPara.textContent = quizData[currentQuestion].question;

// 		optionButtons.forEach((option, i) => {
// 			option.textContent = quizData[currentQuestion].options[i]
// 			option.style.backgroundColor = '#f0f0f0'
// 			option.style.cursor = 'pointer'
// 			questionCount.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
// 			option.disabled = false;
// 		});
// 	} else {
// 		quizBox.style.display = 'none';
// 		resultBox.style.display = 'block';
// 		finalScore.textContent = score;
// 	}
// })

// restartBtn.addEventListener("click", e => {
// 	currentQuestion = 0;
// 	score = 0;
// 	questionPara.textContent = quizData[currentQuestion].question;

// 	optionButtons.forEach((option, i) => {
// 		option.textContent = quizData[currentQuestion].options[i]
// 		option.style.backgroundColor = '#f0f0f0'
// 		option.style.cursor = 'pointer'
// 		questionCount.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
// 		option.disabled = false;
// 	});

// 	quizBox.style.display = 'block';
// 	resultBox.style.display = 'none';
// 	finalScore.textContent = score;
// });


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// callback hell


// setTimeout(() => {
// 	heading1.textContent = 'heading 1';
// 	heading1.style.color = 'violet';
// 	setTimeout(() => {
// 		heading2.textContent = 'heading 2';
// 		heading2.style.color = 'purple';
// 		setTimeout(() => {
// 			heading3.textContent = 'heading 3';
// 			heading3.style.color = 'red';
// 			setTimeout(() => {
// 				heading4.textContent = 'heading 4';
// 				heading4.style.color = 'pink';
// 				setTimeout(() => {
// 					heading5.textContent = 'heading 5';
// 					heading5.style.color = 'green';
// 					setTimeout(() => {
// 						heading6.textContent = 'heading 6';
// 						heading6.style.color = 'blue';
// 						setTimeout(() => {
// 							heading7.textContent = 'heading 7';
// 							heading7.style.color = 'brown ';
// 						}, 1000)
// 					}, 3000)
// 				}, 2000)
// 			}, 1000)
// 		}, 2000)
// 	}, 2000)
// }, 1000);


// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
// 	if (element) {
// 		setTimeout(() => {
// 			element.textContent = text;
// 			element.style.color = color
// 			if (onSuccessCallback) {
// 				onSuccessCallback();
// 			} else {
// 				if (onFailureCallback) {
// 					onFailureCallback();
// 				}
// 			}
// 		}, time)
// 	}
// }


// pyramid of doom

// changeText(heading1, 'one', 'blue', 1000, () => {
// 	changeText(heading2, 'two', 'red', 2000, () => {
// 		changeText(heading3, 'three', 'green', 1000, () => {
// 			changeText(heading4, 'four', 'orange', 3000, () => {
// 				changeText(heading5, 'five', 'purple', 2000, () => {
// 					changeText(heading6, 'six', 'violet', 1000, () => {
// 						changeText(heading7, 'seven', 'crimson', 1000, () => {

// 						}, () => { console.log('heading7 does not exist') })
// 					}, () => { console.log('heading6 does not exist') })
// 				}, () => { console.log('heading5 does not exist') })
// 			}, () => { console.log('heading4 does not exist') })
// 		}, () => { console.log('heading3 does not exist') })
// 	}, () => { console.log('heading2 does not exist') })
// }, () => { console.log('heading1 does not exist') });


// Promise, Promise Chaning

// function changeText(element, text, color, time,) {
// 	return new Promise((resolve, reject) => {
// 		if (element) {
// 			setTimeout(() => {
// 				element.textContent = text;
// 				element.style.color = color
// 				resolve();
// 			}, time)
// 		} else {
// 			reject();
// 		}

// 	})
// }

// changeText(heading1, 'one', 'blue', 1000)
// 	.then(() => changeText(heading1, 'two', 'purple', 2000))
// 	.then(() => changeText(heading3, 'three', 'green', 1000))
// 	.then(() => changeText(heading4, 'four', 'red', 2000))
// 	.then(() => changeText(heading5, 'five', 'violet', 3000))
// 	.then(() => changeText(heading6, 'six', 'gray', 1000))
// 	.then(() => changeText(heading7, 'seven', 'crimson', 500))
// 	.catch(error => alert(error));

// fetch api

const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
// 	.then(response => response.json())
// 	.then(data => console.log(data))

// async await with fetch api

// async function getPosts(){
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	return data;
// }

// getPosts()
// 	.then(myData => console.log(myData))