// program3.js

var fs = require('fs');

if (process.argv.length == 3) {
	var filename = process.argv[2];
	var buffer = fs.readFile(filename, 'utf8', function(err, data){
		if (err) throw err;
		var fileSplitted = data.split('\n');
		console.log(fileSplitted.length - 1);
	});
} else {
	console.log("Usage: program2.js <path_to_file>");
}
