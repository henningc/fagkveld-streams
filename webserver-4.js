var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.on('data', function(data){
		res.write(data);
	});
	stream.on('end', function(data){
		res.end(data);
	});

}).listen(5000);