var http = require('http');

if (process.argv.length === 3) {
	http.get(process.argv[2], function(res) {
		res.setEncoding("utf8");
		res.on('data', function(data){
			console.log(data);
		});

		res.on('error', function(e){
			console.error("Error:" + e.toString());
		});
	});
} else {
	console.log("Usage: program6 <url>");
}
