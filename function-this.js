// "use strict";
// const Prefixer = {
//   prefix: "pre",
//   prefixArray(strings) {
//     const that = this;
//     return strings.map(function(str) {
//       return that.prefix + "-" + str;
//     });
//   }
// };

// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings);

// "use strict";
// const Prefixer = {
//   prefix: "pre",
//   prefixArray(strings) {
//     return strings.map(function(str) {
//       return this.prefix + "-" + str;
//     }, this);
//   }
// };

// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings);

// "use strict";
// const Prefixer = {
//   prefix: "pre",
//   prefixArray(strings) {
//     return strings.map((str) => {
//       return this.prefix + "-" + str;
//     });
//   }
// };

// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings);
