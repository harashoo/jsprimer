// const json = '{"id":1, "name": "js-primer"}';
// const obj = JSON.parse(json);
// console.log(obj.id);
// console.log(obj.name);

// const userInput = "not json value";
// try {
//   const json = JSON.parse(userInput);
// } catch (error) {
//   console.log("パースできませんでした");
// }

// const obj = { id: 1, name: "js-primer" };
// console.log(JSON.stringify(obj));

// const replacer = (key, value) => {
//   if (value === null) {
//     return undefined;
//   }
//   return value;
// };

// const replacer = ["id", "bio"];
// console.log(JSON.stringify(obj, replacer));

// console.log(JSON.stringify(obj, null, 2));
// console.log(JSON.stringify(obj, null, "\t"));

const obj = { foo: "foo" };
obj.self = obj;
console.log(obj);
try {
    JSON.stringify(obj);
} catch (error) {
    console.error(error); // => "TypeError: Converting circular structure to JSON"
}