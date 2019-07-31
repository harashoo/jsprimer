// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const point = new Point(3, 4);
// console.log(point.x);
// console.log(point.y);

// class Thing {}
// const thing = new Thing();

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterA = new Counter();
// const counterB = new Counter();

// counterA.increment();

// console.log(counterA.count);
// console.log(counterB.count);

// console.log(counterA.increment === counterB.increment);

// class Counter {
//   constructor() {
//     this.count = 0;
//     this.increment = () => {
//       this.count++;
//     };
//   }
// }

// const counterA = new Counter();
// const counterB = new Counter();
// // `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
// counterA.increment();
// // 各インスタンスのもつプロパティ(状態)は異なる
// console.log(counterA.count); // => 1
// console.log(counterB.count); // => 0

// console.log(counterA.increment === counterB.increment);

// class ArrayLike {
//   constructor(items = []) {
//     this._items = items;
//   }

//   get items() {
//     return this._items;
//   }

//   get length() {
//     return this._items.length;
//   }

//   set length(newLength) {
//     const currentItemLength = this.items.length;
//     if (newLength < currentItemLength) {
//       this._items = this.items.slice(0, newLength);
//     } else if (newLength > currentItemLength) {
//       this._items = this.items.concat(new Array(newLength - currentItemLength));
//     }
//   }
// }

// const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// console.log(arrayLike.items);
// console.log(arrayLike.length);

// arrayLike.length = 2;

// console.log(arrayLike.items.join(", "));

// arrayLike.length = 5;
// console.log(arrayLike.items.join(", "));

// class ArrayWrapper {
//   constructor(array = []) {
//     this.array = array;
//   }

//   static of(...items) {
//     return new ArrayWrapper(items);
//   }

//   get length() {
//     return this.array.length;
//   }
// }

// const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
// const arrayWrapperB = ArrayWrapper.of(1,2, 3);
// console.log(arrayWrapperA.length);
// console.log(arrayWrapperB.length);

// class MyClass {
//   method() {
//     console.log("プロトタイプのメソッド");
//   }
// }
// const instance = new MyClass();
// instance.method();

// class Parent {
//   constructor() {
//     this.name = "Parent";
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super();
//     this.name = "Child";
//   }
// }

// const parent = new Parent();
// console.log(parent.name);
// const child = new Child();
// console.log(child.name);

// class Parent {
//   static hello() {
//     return "Hello";
//   }
// }

// class Child extends Parent {}
// console.log(Child.hello());

class MyArray extends Array {
  get first() {
    if (this.length === 0) {
      return undefined;
    } else {
      return this[0];
    }
  }

  get last() {
    if (this.length === 0) {
      return undefined;
    } else {
      return this[this.length -1];
    }
  }
}

const array = MyArray.from([1, 2, 3, 4, 5]);
console.log(array.length);
console.log(array.first);
console.log(array.last);