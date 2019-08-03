// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
// function blockTime(timeout) { 
//   const startTime = Date.now();
//   // `timeout`ミリ秒経過するまで無限ループをする
//   while (true) {
//       const diffTime = Date.now() - startTime;
//       if (diffTime >= timeout) {
//           return; // 指定時間経過したら関数の実行を終了
//       }
//   }
// }
// console.log("処理を開始");
// blockTime(6000); // 他の処理を1000ミリ秒（1秒間）ブロックする
// console.log("この行が呼ばれるまで処理が1秒間ブロックされる");

// function blockTime(timeout) {
//   const startTime = Date.now();
//   while(true) {
//     const diffTime = Date.now() - startTime;
//     if (diffTime >= timeout) {
//       return;
//     }
//   }
// }

// console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
// setTimeout(() => {
//   console.log("3. ブロックする処理を開始します");
//   blockTime(1000);
//   console.log("4. ブロックする処理が完了しました");
// }, 10);
// console.log("2. 同期的な処理を実行します");

// function dummyFetch(path, callback) {
//   setTimeout(() => {
//     if (path.startsWith("/success")) {
//       callback(null, { body: `Resonse body of ${path}`});
//     } else {
//       callback(new Error("NOT FOUND"));
//     }
//   }, 1000 * Math.random());
// }

// dummyFetch("/success/data", (error, response) => {
//   if (error) {

//   } else {
//     console.log(response);
//   }
// })

// dummyFetch("/failure/data", (error, response) => {
//   if (error) {
//     console.log(error.message);
//   } else {

//   }
// });

// function dummyFetch(path, successCallback, failureCallback) {
//   setTimeout(() => {
//     if (path.startsWith("/success")) {
//       successCallback({ body: `Response body of ${path}` });
//     } else {
//       failureCallback(new Error("NOT FOUND"));
//     }
//   }, 1000 * Math.random());
// }

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random());
//   });
// }

// let isLoading = true;
// dummyFetch("/resource/A").then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// }).finally(() => {
//   isLoading = false;
//   console.log("Promise#finally");
// });

// const results = [];
// dummyFetch("/resource/A").then(response => {
//   results.push(response.body);
//   return dummyFetch("/resource/B");
// }).then(response => {
//   results.push(response.body);
// }).then(() => {
//   console.log(results);
// });

// const fetchedPromise = Promise.all([
//   dummyFetch("/resource/A"),
//   dummyFetch("/resource/B")
// ]);

// fetchedPromise.then(([responseA, responseB]) => {
//   console.log(responseA.body);
//   console.log(responseB.body);
// });

// const fetchedPromise = Promise.all([
//   dummyFetch("/resource/A"),
//   dummyFetch("/not/B")
// ]);

// fetchedPromise.then(([responseA, responseB]) => {
//   console.log(responseA.body);
//   console.log(responseB.body);
// }).catch(error => {
//   console.log(error.message);
// });

// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(timeoutMs);
//     }, timeoutMs);
//   });
// }

// const racePromise = Promise.race([
//   delay(1),
//   delay(32),
//   delay(64),
//   delay(128)
// ]);
// racePromise.then(value => {
//   console.log(value);
// });

function timeout(timeoutMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
    }, timeoutMs);
  });
}

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  });
}

Promise.race([
  dummyFetch("/resource/data"),
  timeout(500),
]).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log(error.message);
});