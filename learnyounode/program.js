var http = require('http');
var bl = require('bl');
var results = [];
var done = 0;
var urls = process.argv.slice(2, process.argv.length);

function printAll () {
  for (var i = 0; i < urls.length; i++) {
    console.log(results[i]);
  }
}

function getData (i) {
    http.get(urls[i], function callback (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err);
        data = data.toString();
        results[i] = data;
        // the counter lives inside the callback
        done++;
        if (done === urls.length) {
          printAll();
        }
      }))
    }).on('error', console.error);
}

for (var i = 0; i < urls.length; i++) {
  getData(i);
}
