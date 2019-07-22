function fn() {
  return;
}

console.log(fn());

function fn() {

}

console.log(fn());

function echo(x) {
  return x;
}

console.log(echo(1));
console.log(echo());

function argumentsToArray(x, y) {
  return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

function echo(x = "デフォルト値") {
  return x;
}

console.log(echo(1));
console.log(echo());

function addPrefix(text, prefix = "デフォルト:") {
  return prefix + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム"));

const max = Math.max(1, 5, 10, 20);
console.log(max);

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

function fn() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
fn("a", "b", "c");