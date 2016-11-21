'use-strict';

// use throw to throw error, instead of return

function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(integer) {
  console.log(integer)
  return integer + 1;
}
Promise.resolve(1).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).catch(console.log);
