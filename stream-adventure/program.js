var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function(cmd, args) {
  var ps = spawn(cmd, args);
  // why child.stdin is writable etc
  // https://github.com/nodeschool/discussions/issues/915
  return duplexer(ps.stdin, ps.stdout);
}
