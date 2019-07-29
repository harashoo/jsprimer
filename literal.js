// const multiline = "1行目\n2行目\n3行目";
// console.log(multiline);

// const spaceCount = 3;

// const pattern = new RegExp(`\\s{${spaceCount}}`);

// console.log(pattern);

// const str = "ABC123EFG";
// const searchPattern = /\d{3}/;
// console.log(str.search(searchPattern));

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
let matches;
while (matches = alphabetsPattern.exec(str)) {
  console.log(`match: ${matches[0]}, lastIndex: ${alphabetsPattern.lastIndex}`);
}