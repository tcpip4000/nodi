var fs = require('fs');
var path = require('path');

module.exports = function(filepath, extension, callback) {
	fs.readdir(filepath, function(error, list) {
		if (error) return callback(error);
		var listFiltered = [];
		list.forEach(function(file) {
			if (path.extname(file) === "." + extension) {
				listFiltered.push(file);
			}
		});
		callback(null, listFiltered);
	});
	
};
