console.log(1 + 1);

console.log(10 + 0.5);

const value = "文字列" + "結合";
console.log(value);

console.log(2 ** 4);
console.log(Math.pow(2, 4));

console.log(+"1");

console.log(+"文字列");

console.log(NaN === NaN);

console.log(typeof NaN);

console.log(Number.isNaN(NaN));

console.log(-"文字列");

var num = 1;
console.log(num++);
console.log(num);

var num = 1;
console.log(++num);
console.log(num);

console.log((9).toString(2));
console.log((40).toString(2));

const mori = "森森森本森";
console.log(mori.indexOf("本"));
console.log(mori.indexOf("屁"));

const array = [1, 2];

const [a, b] = array;

console.log(a);
console.log(b);

const obj = {
  "key": "value"
};

const { key } = obj;
console.log(key);

const valueA = true ? "A" : "B";
console.log(valueA);

const valueB = false ? "A" : "B";
console.log(valueB);

function addPrefix(text, prefix) {
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム"));

const d = 1, e = 2, f = d + e;
console.log(f);