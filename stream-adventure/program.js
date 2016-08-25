var http = require('http');
var through = require('through2');

var stream = through(write, end);

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST')
    return res.end('not POST\n');
  req.pipe(stream).pipe(res);
})

server.listen(process.argv[2]);
