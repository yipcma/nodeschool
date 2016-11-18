'use strict';

// first attempt: wrong use of fulfill and value passing
// const promise = new Promise(function (fulfill, reject) {
  // setTimeout(fulfill, 300);
// })

// promise.then(() => console.log("FULFILLED!"));

// second attemp: right use of fulfill call - create a rpomise, fulfill it with a value

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => fulfill("FULFILLED!"), 300);
})

promise.then(console.log);
