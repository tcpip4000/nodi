// program2.js

var fs = require('fs');

if (process.argv.length == 3) {
	var buffer = fs.readFileSync(filename);
	filename = process.argv[2];
	console.log(filename);
} else {
	console.log("Usage: program2.js <path_to_file>");
}
