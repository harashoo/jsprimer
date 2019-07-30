// console.log("\uD83C\uDF4E");

// const [all, fish] = "𩸽のひらき".match(/(.)のひらき/u);
// console.log(all);
// console.log(fish);

// const codePoints = Array.from("リンゴ🍎");
// console.log(codePoints);
// console.log(codePoints.length);

// function countOfCodePoints(str, codePoint) {
//   return Array.from(str).filter(item => {
//     return item === codePoint;
//   }).length;
// }
// console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));

function countOfCodePoints(str, codePoint) {
  let count = 0;
  for (const item of str) {
    if (item === codePoint) {
      count++;
    }
  }
  return count;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));