// program11a.js
var http = require("http");
var map = require("through2-map");

var port = Number(process.argv[2]);

http.createServer(function(req, res) {
	if (req.method !== 'POST')
		return res.end("Send a post");

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);	
}).listen(port);


