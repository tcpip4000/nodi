// program5.js

var program5mod = require('./program5mod.js');

if (process.argv.length == 4) {
	program5mod(process.argv[2], process.argv[3], function(error, data) {
		if (error) throw error;
		data.forEach(function(filename) { console.log(filename); });
	});
} else {
	console.log("Usage: program5.js <dir_path> <extension>");
}
