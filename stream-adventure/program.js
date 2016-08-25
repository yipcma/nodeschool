var request = require('request');

var loc = 'http://localhost:8099';

var r = request.post(loc);

process.stdin.pipe(r).pipe(process.stdout);
