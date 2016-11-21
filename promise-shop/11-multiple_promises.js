'use-strict';

// remember: promise is not a function, it does't return

function all(p1, p2) {
  const promise = new Promise((fulfill, reject) => {
    let counter = 0;
    let output = [];
    function increment(val, pos) {
      counter = counter + 1;
      output[pos] = val;
      if (counter == 2) {
        fulfill(output);
      }
    }
    p1.then((val) => {return increment(val, 0)});
    p2.then((val) => {return increment(val, 1)});
  })

  return promise;
}
all(getPromise1(), getPromise2()).then(console.log);
