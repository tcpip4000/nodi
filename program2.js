// program2.js

var fs = require('fs');

if (process.argv.length == 3) {
	var filename = process.argv[2];
	var buffer = fs.readFileSync(filename, 'utf8');
	var fileSplitted = buffer.split('\n');
	console.log(fileSplitted.length - 1);
} else {
	console.log("Usage: program2.js <path_to_file>");
}
