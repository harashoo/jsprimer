// const emptyArray = [];
// const numbers = [1, 2, 3];

// const matrix = [
//   ["a", "b"],
//   ["c", "d"]
// ];

// console.log(matrix[0][0]);

// const array = ["one", "two", "three"];
// console.log(array[0]);

// console.log(array[array.length - 1]);

// const obj = {};
// const array = [];
// console.log(Array.isArray(obj));
// console.log(Array.isArray(array));

// console.log(typeof array);
// const array = ["one", "two", "three"];
// const [first, second, third] = array;
// console.log(first);
// console.log(second);
// console.log(third);

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];

// const indexOfBlue = colors.findIndex((obj) => {
//   return obj.color === "blue";
// });

// console.log(indexOfBlue);

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];

// const blueColor = colors.find((obj) => {
//   return obj.color === "blue";
// });

// console.log(blueColor);

// const array = ["Java", "JavaScript", "Ruby"];

// if (array.includes("JavaScript")) {
//   console.log("OK");
// }

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];

// const isIncludedBlueColor = colors.some((obj) => {
//   return obj.color === "blue";
// });

// console.log(isIncludedBlueColor);

// const array = ["A", "B", "C"];
// array.push("D");
// console.log(array);
// const poppedItem = array.pop();
// console.log(poppedItem);
// console.log(array);

// const newArray = array.concat(["D", "E"]);
// console.log(newArray);

// const newArray2 = array.concat("new");
// console.log(newArray2);

// array.length = 0;
// console.log(array);
// let array = ["A", "B", "C"];
// array = [];
// console.log(array.length);

// function removeAtIndex(array, index) {
//   const copiedArray = array.slice();
//   copiedArray.splice(index, 1);
//   return copiedArray;
// }

// const array = ["A", "B", "C"];
// const newArray = removeAtIndex(array, 1);
// console.log(newArray);
// console.log(array);

// const array = [1, 2, 3];
// array.forEach((currentValue, index, array) => {
//   console.log(currentValue, index, array);
// });

// const newArray = array.filter((currentValue, index, array) => {
//   return currentValue % 2 === 1;
// });
// console.log(newArray);
// console.log(array !== newArray);

// const array = [1, 2, 3];
// const totalValue = array.reduce((accumulator, currentValue, index, array) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(totalValue);

// function myFunc() {
//   const argumentsArray = Array.from(arguments);
//   console.log(Array.isArray(argumentsArray));

//   argumentsArray.forEach(arg => {
//     console.log(arg);
//   });
// }
// myFunc("a", "b", "c");

const ECMAScriptVersions = [
  { name: "ECMAScript 1", year: 1997 },
  { name: "ECMAScript 2", year: 1998 },
  { name: "ECMAScript 3", year: 1999 },
  { name: "ECMAScript 5", year: 2009 },
  { name: "ECMAScript 5.1", year: 2011 },
  { name: "ECMAScript 2015", year: 2015 },
  { name: "ECMAScript 2016", year: 2016 },
  { name: "ECMAScript 2017", year: 2017 },
];

const before2000_versions = ECMAScriptVersions
                              .filter(version => version.year <= 2000)
                              .map((version) => version.name);
console.log(before2000_versions);