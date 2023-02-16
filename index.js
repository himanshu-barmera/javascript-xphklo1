// finding unique numbers in array
// let uniqueArr = (arr) => {
//   let uniqArr = [];
//   arr.map((val) => {
//     if (!uniqArr.includes(val)) {
//       uniqArr.push(val);
//     }
//   });
//   console.log(uniqArr);
// };

// uniqueArr([1, 2, 1, 2, 5, 4, 6, 4, 5, 5, 4]);

//////////////////////////////////////////////////////////

// find pair of number having sum 10
// let twoSum = (array, sum) => {
//   let abc = {},
//     results = [];

//   for (let i = 0; i < array.length; i++) {
// console.log(array[i]);
// console.log('abc[array[i]] ==> ', abc[array[i]]);
//     if (abc[array[i]] !== undefined) {
//       results.push([abc[array[i]], array[i]]);
// console.log('results');
// console.log(results);
//     } else {
//       abc[sum - array[i]] = array[i];
//       console.log('abc');
//       console.log(abc);
//     }
//     console.log('------------------------------------');
//   }
//   return results;
// };
// console.log(twoSum([1, 2, 1, 2, 5, 4, 6, 4, 5, 4], 10));

///////////////////////////////////////////////////////////

// reverse string

// let str = 'himanshu barmera';
// console.log(str);
// console.log(str.split('').reverse().join(''))

// (function () {
//   console.log('himanshu');
// })();

//////////////////////////////////////////////////////////

//strings are anagrams to others
// Mary is an anagram of Army

// let isAnagram = (str1, str2) => {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   str1 = str1.split('').sort().join('');
//   str2 = str2.split('').sort().join('');
//   return str1 === str2 ? true : false;
// };

// console.log(isAnagram('dam', 'mad'));

/////////////////////////////////////////////////////////

//counter function with closure

// function counter() {
//   let cnt = 0;

//   return {
//     add: (increment) => {
//       cnt = cnt + increment;
//     },

//     print: () => {
//       console.log('current value of counter => ', cnt);
//     },
//   };
// }

// let c = counter();
// c.add(5);
// c.add(339);
// c.add(89);
// c.add(79);
// c.add(49);
// c.add(29);
// c.add(99);
// c.add(19);
// c.print();

//////////////////////////////////////////////////////
//call, bind and apply
// let a = {
//   fname: 'himanshu',
//   lname: 'barmera',
// };

// let func = function (city, state) {
//   console.log('firstname => ' + this.fname + ', lastname => ' + this.lname);
//   console.log('city => ' + city + ', state => ' + state);
// };

// func();

// let b = {
//   fname: 'Shree',
//   lname: 'Ram',
// };

// func.call(b, 'Jodhpur', 'Rajasthan');
// func.apply(a, ['Udaipur', 'Rajasthan']);

// let testfunc = func.bind(b, 'Udaipur', 'Rajasthan');
// console.log(testfunc);

//
//
////////////////////////////////////////////////////////////////
//
//
// Find the frequency of elements in array or occurance of number in array
// [1,2,3,1,2,3]

// let cntElement = (arr) => {
//   let cnt = {};
//   arr.map((a) => {
//     if (cnt[a]) {
//       cnt[a]++;
//     } else {
//       cnt[a] = 1;
//     }
//   });
//   return cnt;
// };

// console.log(cntElement([1, 2, 3, 1, 2, 3, 5, 8, 9, 8, 5, 5, 5, 5, 5]));

// var a=3;
// console.log(a)
// var b=a++;
// console.log(a)
// console.log(a,b)
// var c=++a;
// console.log(a,b,c)

///////////////////////////////////////////////////
// groupby age on given array
// let people = [
//   { name: 'Ramesh', age: 22 },
//   { name: 'Suresh', age: 22 },
//   { name: 'Mahesh', age: 25 },
// ];

// let groupByAge = (arr) => {
//   let checkAge = {};

//   arr.map((a) => {
//     if (!checkAge[a.age]) {
//       checkAge[a.age] = [a];
//     } else {
//       checkAge[a.age].push(a);
//     }
//   });
//   console.log(checkAge);
// };

// groupByAge(people);

////////////////////////////////////////////////
//finding missing number in sorted array

// let findMissingNumber = (arr) => {
//   let missingNum = [];

//   arr.map((a, i, arr) => {
//     if (!(arr[i + 1] - arr[i] === 1) && arr[i + 1] != undefined) {
//       missingNum.push(arr[i] + 1);
//     }
//   });
//   return missingNum;
// };

// console.log(findMissingNumber([1, 2, 4, 5, 7, 8,10]));

////////////////////////////////////////////////
//finding missing number in unsorted array

// let arr = [2, 7, 8, 5, 1, 4, 6];

// let findMissingNumberInUnsortedArr = (arr) => {
//   let missingNum = [];

//   //first sort unsorted array
//   let sortedArr = arr.sort((a, b) => a - b);

//   //finding missing number
//   sortedArr.map((a, i, arr) => {
//     if (!(arr[i + 1] - arr[i] === 1) && arr[i + 1] != undefined) {
//       missingNum.push(arr[i] + 1);
//     }
//   });
//   return missingNum;
// };

// console.log(findMissingNumberInUnsortedArr(arr));

////////////////////////////////////////////////////
// palindrome a string

// let isPalindrome = (str) => {
//   return str === str.split('').reverse().join('');
// };

// console.log(isPalindrome('hellolleh'));

/////////////////////////////////////////////////////
// find possible combination of a string
// let possibleCombinations = (str) => {
//   let combinations = [];
//   console.log('str.length ===>', str.length);
//   console.log('str.length+1 ===>', str.length + 1);
//   for (let i = 0; i < str.length; i++) {
//     console.log('i=>', i);
//     for (let j = i + 1; j < str.length + 1; j++) {
//       console.log('j=>', j);
//       console.log('str.length+1 ====', str.length + 1);
//       console.log('string sliced ======> ', str.slice(i, j));
//       combinations.push(str.slice(i, j));
//     }
//   }
//   return combinations;
// };
// console.log(possibleCombinations('ram'));

/////////////////////////////////////////////////////////
//get the number of occurrences of each letter in specified string in JavaScript

// let str = 'hello';
//method1
// let search = (str) => {
//   if (str.length === 0) return;
//   if (str) {
//     for (let i = 0; i < str.length; i++) {
//       let cnt = 0;
//       for (let j = 0; j < str.length; j++) {
//         if (str[i] == str[j] && i > j) {
//           break;
//         }
//         if (str[i] == str[j]) {
//           cnt++;
//         }
//       }
//       if (cnt > 0) {
//         console.log(`count of ${str[i]} is `, cnt);
//       }
//     }
//   }
// };

// method2
// let search = (str) => {
//   if (str.length === 0) return;
//   if (str) {
//     let cnt = 1;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         cnt++;
//       } else {
//         console.log(`count of ${str[i]} is =>`, cnt);
//         cnt = 1;
//       }
//     }
//   }
// };

// console.log(search(str));

////////////////////////////////////////////////
//find the longest word within the string

// let findLargestLength = (str) => {
//   let strArr = str.split(' ');
//   console.log(strArr);

//   return strArr.sort((a, b) => b.length - a.length )[0];
// };

// console.log(findLargestLength('udaipur is awesome place in rajasthan'));

///////////////////////////////////////////////////////////////////////////
//unique character in string

// let uniqueInStr = (str) => {
//   return [...str].reduce((acc, curr) => {
//     return acc.includes(curr) ? acc : acc + curr;
//   }, '');
// };

// console.log(uniqueInStr('rajasthan'));

// let uniqueStr = (str) => {
//   str1 = str.split('');
//   str2 = new Set(['r', 'a', 'j', 'a', 's', 't', 'h', 'a', 'n']);
//   return [...str2].join('');

//   // str = str.split('');
//   // str = new Set(str);
//   // str = [...str].join('');

//   return str;
// };
// console.log(uniqueStr('rajasthan'));

////////////////////////////////////////////////////
//count number of occurrences of repeated names in an array of objects

// let arr = [
//   {
//     employeeName: 'Ram',
//     employeeId: 23,
//   },
//   {
//     employeeName: 'Shyam',
//     employeeId: 24,
//   },
//   {
//     employeeName: 'Ram',
//     employeeId: 21,
//   },
//   {
//     employeeName: 'Ram',
//     employeeId: 25,
//   },
//   {
//     employeeName: 'Kisan',
//     employeeId: 22,
//   },
//   {
//     employeeName: 'Shyam',
//     employeeId: 20,
//   },
// ];

// let funcCntOcc = (arr, key) => {
//   let arrOcc = [];
//   arr.map((a) => {
//     let testK = arrOcc.filter((k) => {
//       return k[key] === a[key];
//     });
//     if (testK.length !== 0) {
//       arrOcc.map((testv) => {
//         if (testv[key] === a[key]) {
//           testv['occurance']++;
//         }
//       });
//     } else {
//       let abc = {};
//       abc[key] = a[key];
//       abc['occurance'] = 1;
//       arrOcc.push(abc);
//     }
//   });
//   return arrOcc;
// };

// console.log(funcCntOcc(arr, 'employeeName'));

/////////////////////////////////////////////////////////////////////
//count number of data types in an array

// Input: [1, true, "hello", [], {}, undefined, function(){}]
// Output: {
//   boolean: 1,
//   function: 1,
//   number: 1,
//   object: 2,
//   string: 1,
//   undefined: 1
// }

// let arr = [1, true, 'hello', [], {}, undefined, function () {}];

// let dataTypeOcc = (arr) => {
//   let dataTypeObj = {};

//   let newArr = arr.map((a) => {
//     return typeof a;
//   });

//   let valueObj = Object.values(newArr);
//   valueObj.map((a) => {
//     if (dataTypeObj[a]) {
//       dataTypeObj[a]++;
//     } else {
//       dataTypeObj[a] = 1;
//     }
//   });

//   return dataTypeObj;
// };

// console.log(dataTypeOcc(arr));

/////////////////////////////////////////////////////////////
// video link : https://www.youtube.com/watch?v=QCQVttjblRs&ab_channel=techsith
// console.log('output =>', String([]));
/////////////////////////////////////////

// function a() {
//   return 'hello';
// }

// const sentence = a`hi`;
// console.log(sentence);

////////////////////////////////////////////////////////
// function y() {
//   console.log(this.length);
// }

// var x = {
//   length: 5,
//   method: function (y) {
//     arguments[0]();
//   },
// };
// x.method(y, 1);

////////////////////////////////////////////////////////
// const x = 'constructor';
// console.log(x[x](01));

///////////////////////////////////
// console.log(0.1 + 0.2);
//////////////////////////////////////////
// console.log('hi'.__proto__);
// console.log('hi'.__proto__.__proto__);
// console.log('hi'.__proto__.__proto__.__proto__);
///////////////////////////////////////////

// function returns total number of arguments, donot use loop
// let x = function () {
//   return [].slice.call(arguments).length;
// };

// console.log(x(1, 2, 3, 4, 5, 6, 7, 8, 9));

////////////////////////////////////////////////
// const x = [1, 2, 3];
// x[-1] = -1;

// console.log(x[x.indexOf(10000)]);
//////////////////////////////////////////////////
// let arr = [1, 2, 15, 30, 5, 45, 7];
// let sortedArr = arr.sort();
// console.log(sortedArr);
///////////////////////////////////////////////
// let i = Number.MIN_VALUE;
// console.log(i * i); //0
// console.log(i + 1); //1
// console.log(i - 1); //-1
// console.log(i / i); //1
///////////////////////////////////////////
// console.log(555555555555555555);
// console.log(Number.MAX_SAFE_INTEGER);
/////////////////////////////////////////////////

// (function () {
//   let a = b = 100;
// })();

// console.log(a);
// console.log(b);
//////////////////////////////////////////////

// console.log(NaN === NaN);

///////////////////////////////////////////////////////
// fix array length
// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// data.length = 3;
// console.log(data);
////////////////////////////////////////////////

// sum of all array element

// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// let sum = data.reduce((x, y) => x + y);
// console.log(sum);

//////////////////////////////////////////////////
// unique value in array
// let data = [4, 7, 1, 4, 9, 2, 4, 1];
// let unq = new Set(data);
// console.log([...unq]);

/////////////////////////////////////////////////

// comma operator
// let x = 10;
// let y = 20;
// x=(x++,x)
// x=(x++,y)
// console.log(x);
// console.log(y);

////////////////////////////////////////////////
// swapping through destructuring

// let x = 20,
//   y = 30;
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);

//////////////////////////////////////////////////

// function foo() {
//   return {
//     name: 'hi',
//   };
// }
// console.log(foo());
///////////////////////////////////////////////

// console.log(1 + '1'); // due to + is concatination operator
// console.log(1 - '1'); //as - is maths operator
// console.log(1 + +'2' + '2');
// console.log(1 + -'2' + +'2');
// console.log('A' - 'B' + '2');

//////////////////////////////////////////////////////////////////
// duplicate element in array from filter
// function removeDuplicates(arr) {
//   return arr.filter((elem, index) => {
//     console.log(elem);
//     console.log('index =>', index);
//     arr.indexOf(elem) === index;
//   });
// }
// console.log(removeDuplicates([1, 2, 2, 3, 3])); // [1, 2, 3]

//////////////////////////////////////////////////////
//prototypal inheritance

// let a = {
//   a1: 1,
//   a2: 2,
//   a3: 3,
// };

// let b = {
//   b1: 1,
// };

// b.__proto__=a

///////////////////////////////////////////////////////////
// console.log(Array.of('value1', 'value2', 'valueN'));

// console.log(Array.from('foo'));
// // Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3]));
// // Expected output: Array [1,2,3]

// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// Array.from(set);
// // [ "foo", "bar", "baz" ]

// const map = new Map([
//   [1, 2],
//   [2, 4],
//   [4, 8],
// ]);
// Array.from(map);
// // [[1, 2], [2, 4], [4, 8]]

// console.log(Array.from(7));
// -----------------------------------

// console.log(Array.of('foo'));
// // Expected output: Array ["foo"]
// console.log(Array.of([1, 2, 3]));
// // Expected output: Array [[1,2,3]]

// console.log(Array.of(7));

/////////////////////////////////////////////////////////////////////

// var cars = ['Audi', 'BMW', 'Mercedes'];
// console.log(cars.pop())
// console.log(cars.shift())
// console.log(cars.unshift('test'))

//////////////////////////////////////////////////////////
// const number = undefined + 11;
// console.log(typeof NAN);
// console.log(typeof 11);
// console.log(typeof 'other');
// if (number === NaN) {
//   console.log('NaN');
// } else if (number === 11) {
//   console.log('11');
// } else {
//   console.log('other');
// }
