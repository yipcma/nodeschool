var http = require('http');

var url = process.argv[2];

http.get(url, function callback (response) {
  // setEncoding to avoid toString()
  response.setEncoding('utf8');
  // listen to event; callback function simplified
  response.on('data', console.log);
  // error handling
  response.on('error', console.error);
}).on('error', console.error);
