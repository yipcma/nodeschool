var through = require('through2');
var split = require('split');

var stream = through(write, end);
var lineCount = 0;

function write(buffer, encoding, next) {
  this.push(lineCount % 2 === 0
    ? buffer.toString().toLowerCase() + '\n'
    : buffer.toString().toUpperCase() + '\n'
  );
  lineCount++;
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
