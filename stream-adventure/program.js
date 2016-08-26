var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();
var stream = through(write, done);

var loud = tr.select('.loud').createStream();

loud.pipe(stream).pipe(loud);

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function done(done) {
  done();
}

process.stdin.pipe(tr).pipe(process.stdout);
