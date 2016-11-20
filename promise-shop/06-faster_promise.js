'use-strict';

const promise = new Promise((fulfill, reject) => {
  fulfill('FULFILLED');
  reject(new Error('REJECTED'));
});

const promise1 = Promise.resolve('FULFILLED by Promise.resolve');

const promise2 = Promise.reject(new Error('REJECTED by Promise.reject'));

function onRejected(error) {
  console.error(error.message);
}
promise.catch(onRejected);

promise1.then(console.log, onRejected);

promise2.catch(onRejected);
