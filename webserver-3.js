var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', function (err, data) {
    res.end(data);
  });
}).listen(5000);