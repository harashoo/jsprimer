// console.log(hello());

// function hello() {
//   return "Hello";
// }

// (function() {
//   var foo = "foo";
//   console.log(foo);
// })();

// console.log(typeof foo === "undefined");

// {
//   const foo = "foo";
//   console.log(foo);
// }

// console.log(typeof foo === "undefined");

const createCounter = () => {
  let privateCount = 0;
  return () => {
    privateCount ++;
    return `${privateCount}回目`;  
  };
};

const counter = createCounter();
console.log(counter());
console.log(counter());

function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

const greaterThan5 = greaterThan(5);
console.log(greaterThan5(4));
console.log(greaterThan5(5));
console.log(greaterThan5(6));