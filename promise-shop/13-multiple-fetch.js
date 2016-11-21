'use-strict';

// note the use of the returns and that buffer.toString is not a function

const HTTP = require('q-io/http');

function grabId() {
  return HTTP.read('http://localhost:7000');
}

function fetchData(id) {
  return HTTP.read('http://localhost:7001/' + id);
}

grabId().then((buffer) => {return buffer.toString()}).then((res) => {return fetchData(res)}).then(JSON.parse).then(console.log).done();
