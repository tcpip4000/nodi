// progra8.js

var http = require('http');
var mymod = require('./program8mod.js');

var count = 0;
var pos = 0;
var result = [];
for (var i = 2; i < 5; i++) {
	mymod(pos, process.argv[i], function(err, data) {
		count++;
		result[data[0]] = data[1];
		complete();
	});
	pos++;
}

function complete()  {
	if (count == 3) {
		for(var i=0; i<result.length; i++) {
			console.log(result[i]);
		}
	}
}

