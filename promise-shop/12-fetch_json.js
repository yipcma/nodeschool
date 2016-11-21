'use-strict';

const HTTP = require('q-io/http');

// remember to call .done() to catch any exceptions

HTTP.read("http://localhost:1337").then(JSON.parse).then(console.log).done();
