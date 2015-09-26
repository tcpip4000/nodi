// program8mod.js

var http = require('http');

module.exports = function(pos, url, callback) {
	http.get(url, function(res) {
		var response = [];
		var content = '';

		response.push(pos);

		res.setEncoding('utf8');
		res.on("data", function(data) {
			content += data;
		});
		res.on("end", function(data) {
			response.push(content);
			callback(null, response);
		});
		res.on("error", console.error);
	});
};

