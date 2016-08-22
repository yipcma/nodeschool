var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function (socket) {
  // new Date() implied in second argument to strftime
  var val = strftime('%F %H:%M') + '\n';
  socket.end(val);
})

server.listen(port);
