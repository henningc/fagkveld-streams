var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(res);

}).listen(5000);