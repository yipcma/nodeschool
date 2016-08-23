var http = require('http');
var url = require('url');

var port = process.argv[2];

var result;

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}

function unixTime(time) {
  return {
    unixtime: time.getTime(),
  }
}

var server = http.createServer(function(req, res) {
  if (req.method !== 'GET')
    return res.end('not a GET\n');
  var route = url.parse(req.url, true);
  var time = new Date(route.query.iso);
  if (route.pathname === '/api/parsetime') {
    result = parseTime(time);
  }
  if (route.pathname === '/api/unixtime') {
    result = unixTime(time);
  }
  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write(data); res.end(); => res.end(data);
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
})

server.listen(port);
