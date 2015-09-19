// program4a.js

var fs = require('fs');
var path = require('path');

if (process.argv.length == 4) {
	var filepath = process.argv[2];
	var extension = "." + process.argv[3];
	fs.readdir(filepath, function(err, list){
		if (err) throw err;
		for (i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === extension) {
				console.log(list[i]);
			}
		}
	});
} else {
	console.log("Usage: program4.js <path_to_file>");
}
