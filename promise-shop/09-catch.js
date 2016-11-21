'use-strict';

function parsePromised() {
  const promise = new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(process.argv[2]));
    } catch (e) {
      reject(e);
    }
  })
  return promise;
}

parsePromised().catch(console.log);
