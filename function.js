// function fn() {
//   return;
// }

// console.log(fn());

// function fn() {

// }

// console.log(fn());

// function echo(x) {
//   return x;
// }

// console.log(echo(1));
// console.log(echo());

// function argumentsToArray(x, y) {
//   return [x, y];
// }

// console.log(argumentsToArray(1, 2));
// console.log(argumentsToArray(1));

// function echo(x = "デフォルト値") {
//   return x;
// }

// console.log(echo(1));
// console.log(echo());

// function addPrefix(text, prefix = "デフォルト:") {
//   return prefix + text;
// }

// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", ""));
// console.log(addPrefix("文字列", "カスタム"));

// const max = Math.max(1, 5, 10, 20);
// console.log(max);

// function fn(...args) {
//   console.log(args[0]);
//   console.log(args[1]);
//   console.log(args[2]);
// }
// fn("a", "b", "c");

// function fn(arg1, ...restArgs) {
//   console.log(arg1);
//   console.log(restArgs);
// }
// fn("a", "b", "c");

// function fn() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// }
// fn("a", "b", "c");

// function printUserId(user) {
//   console.log(user.id)
// }

// function printUserId({ id }) {
//   console.log(user.id)
// }

// const user = {
//   id: 42
// };
// printUserId(user);

// function print([first, second]) {
//   console.log(first);
//   console.log(second);
// }
// const array = [1, 2];
// print(array);

// function fn() {
//   console.log("fnが呼び出されました");
// }

// const myFunc = fn;
// myFunc();

// const factorial = function innerFact(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * innerFact(n - 1);
// };
// console.log(factorial(3));
// const factorial = function innerFact(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// };
// console.log(factorial(3));

// const array = [1, 2, 3];
// const doubleArray = array.map(value => value * 2);
// console.log(doubleArray);
// const array = [1, 2, 3];
// const output = (value) => {
//   console.log(value);
// };
// array.forEach(output);
// array.map(output);

// const array = [1, 2, 3];
// array.forEach((value) => {
//   console.log(value);
// })

// const obj = {
//   method: function() {
//     return "this is method";
//   }
// };

// console.log(obj.method());

// const obj = {
//   method() {
//     return "this is method";
//   }
// };

// console.log(obj.method());
