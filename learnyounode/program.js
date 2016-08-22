var http = require('http');
var bl = require('bl');
var async = require('async');

var urls = process.argv.slice(2);

function getData (url, callback) {
    http.get(url, function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return callback(err);
        return callback(null, data.toString());
      }))
    }).on('error', console.error);
}

function printAll (err, results) {
  if (err)
    return console.error(err);
  results.forEach(function (result) {
    console.log(result);
  })

}

async.map(urls, getData, printAll);
