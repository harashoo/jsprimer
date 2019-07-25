// const obj = {};

// const obj = {
//   "key": "value"
// };

// const name = "名前";

// const obj = {
//   name
// };

// const obj = new Object();

// console.log(obj);

// const languages = {
//   ja: "日本語",
//   en: "英語"
// };
// const myLang = "ja";
// console.log(languages[myLang]);

// const key = "key-string";
// const obj = {
//   [key]: "value of key"
// };

// console.log(obj[key]);
// console.log(obj);

// {
//   const shallowClone = (obj) => {
//     return Object.assign({}, obj);
//   };
  
//   const obj = {
//     level: 1,
//     nest: {
//       level: 2,
//       nest2: {
//         level: 3
//       }
//     },
//   };
  
//   const cloneObj = shallowClone(obj);
//   console.log(cloneObj);
// }

{
  const shallowClone = (obj) => {
    return Object.assign({}, obj);
  };
  
  function deepClone(obj) {
    const newObj = shallowClone(obj);
  
    Object.keys(newObj)
      .filter(k => typeof newObj[k] === "object")
      .forEach(k => newObj[k] = deepClone(newObj[k]));
    return newObj;
  }
  
  const obj = {
    level: 1,
    nest: {
      level: 2
    }
  };
  
  const cloneObj = deepClone(obj);
  console.log(cloneObj.nest === obj.nest);
  console.log(cloneObj.level === obj.level);
}