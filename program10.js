// program10.js

var http = require("http");
var fs = require("fs");

var port = Number(process.argv[2]);
var path = process.argv[3];

http.createServer(function(req, res) {
	res.writeHead(200, { "content-type": "text-plain" });
	fs.createReadStream(path).pipe(res);
}).listen(port);
