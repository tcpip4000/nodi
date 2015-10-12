// program12.js

var http = require("http");
var url = require("url");

var port = Number(process.argv[2]);

http.createServer(function(req, res) {
	if (req.method !== 'GET') 
		return res.end("Send get method");

	var urlParsed = url.parse(req.url, true);

	if (urlParsed.pathname === "/api/parsetime") {
		var date = new Date(urlParsed.query["iso"]);
		var response = {};
		response["hour"] = date.getHours();
		response["minute"] = date.getMinutes();
		response["second"] = date.getSeconds();
	}

	if (urlParsed.pathname === "/api/unixtime") {
		var time = new Date(urlParsed.query["iso"]).getTime();
		var response = {"unixtime": time};
	}

	if (response) {
		res.writeHeader(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(response));
	} else {
		res.writeHeader(404);
		res.end();
	}
}).listen(port);
