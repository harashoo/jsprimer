// const num = 1;
// if (num > 10) {
//   console.log(`numは10より大きいです: ${num}`);
// } else {
//   console.log(`numは10以下です: ${num}`);
// }

const year = new Date().getFullYear();
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(`${year}年はうるう年です`);
//     } else {
//       console.log(`${year}年はうるう年ではありません`);
//     }
//   } else {
//     console.log(`${year}年はうるう年です`);
//   }
// } else {
//   console.log(`${year}年はうるう年ではありません`);
// }

// if (year % 400 === 0) {
//   console.log(`${year}年はうるう年です`);
// } else if (year % 100 === 0) {
//   console.log(`${year}年はうるう年ではありません`);
// } else if (year % 4 === 0) {
//   console.log(`${year}年はうるう年です`);
// } else {
//   console.log(`${year}年はうるう年ではありません`);
// }

// const version = "ES6";
// switch (version) {
//   case "ES5":
//     console.log("ECMAScript 5");
//     break;
//   case "ES6":
//     console.log("ECMAScript 6");
//     break;
//   case "ES7":
//     console.log("ECMAScript 7");
//     break;
//   default:
//     console.log("しらないバージョンです");
//     break;
// }

function getECMAScriptName(version) {
  switch(version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    default:
      return "しらないバージョンです";
  }
}

console.log(getECMAScriptName("ES6"));