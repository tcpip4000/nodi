// program11.js

var http = require("http");
var bl = require("bl");
var map = require("through2-map");

var port = Number(process.argv[2]);

http.createServer(function(req, res) {
	if (req.method === 'POST') {

		var body = '';
		req.on('data', function(data) {
			body += data;
		});

		req.on('end', function() {
			res.writeHeader(200, {"content-type": "text-plain"});
			res.write(body.toUpperCase());
			res.end();
		});
	}
}).listen(port);



