console.log('8 o\'clock');
console.log("8 o'clock");

console.log('複数行の\n改行を\n入れたい');
console.log(`複数行の
改行を
入れたい`);

const str = "文字列";
console.log(`これは${str}です`);

const foo = null;
console.log(foo);

const obj = {
  "key": "value"
};

console.log(obj.key);
console.log(obj["key"]);

const array = ["index:0", "index:1", "index:2"];
console.log(array[0]);
console.log(array[1]);

const numberRegExp = /\d+/;
console.log(numberRegExp.test(123));

const moji = new String("文字列");

console.log(typeof moji);

console.log(moji.length);

const moji2 = "文字列";

console.log(typeof moji2);

console.log(moji2.length);