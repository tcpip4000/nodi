var http = require('http');

if (process.argv.length == 3) {
	http.get(process.argv[2], function(res) {
		var length = 0;
		var content = "";
		res.setEncoding("utf8");
		//console.log(res.statusCode);
		res.on("data", function(data) {
			length += data.length;
			content += data;
		});
		res.on("end", function(data) {
			console.log(length);
			console.log(content);
		}); 
		res.on("error", console.log);
	}).on('error', console.log);
} else {
	console.log("Usage: program7.js <url>");
}
