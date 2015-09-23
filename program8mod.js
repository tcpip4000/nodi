// program8mod.js

var http = require('http');

module.exports = function(url, callback) {
	http.get(url, function(res) {
		var content = '';
		res.setEncoding('utf8');
		res.on("data", function(data) {
			content += data;
		});
		res.on("end", function(data) {
			callback(null, content);
		});
		res.on("error", console.error);
	});
};

