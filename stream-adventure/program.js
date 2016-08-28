var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function(counter) {
  var counts = {};

  // use through for procecssing the strem (read docs)
  var input = through(write, end);

  function write (row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1;
    next();
  }

  function end (done) {
    counter.setCounts(counts);
    done();
  }

  // use objectMode on duplexer
  return duplexer({objectMode: true}, input, counter);
};
