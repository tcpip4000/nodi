// progra8.js

var http = require('http');
var mymod = require('./program8mod.js');

var count = 0;
var result = [];
for (var i = 2; i < 5; i++) {
	count++;
	var post = i;
	mymod(process.argv[i], function(err, data) {
		count--;
		//console.log(">>>" + url);
		result.push(data);
		complete();
	});
}

function complete()  {
	if (!count) {
		for(var i=0; i<result.length; i++) {
			console.log(result[i]);
		}
	}
}

