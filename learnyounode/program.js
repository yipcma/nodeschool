var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method !== 'GET')
    return res.end('not a GET\n');
  var route = url.parse(req.url, true);
  var time = new Date(route.query.iso);
  if (route.pathname === '/api/parsetime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    }));
  }
  if (route.pathname === '/api/unixtime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      unixtime: time.getTime(),
    }));
  }
})

server.listen(port);
