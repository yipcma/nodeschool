'use-strict';

const promise = new Promise((fulfill, reject) => {
    const error = new Error("REJECTED!");
    setTimeout(() => reject(error), 300);
})

function onReject (error) {
  console.log(error.message);
}

promise.then(console.log, onReject);
