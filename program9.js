// program9.js

var net = require('net');
var port = process.argv[2];

function fixZeroes(number) {
	//if (number < 10) {
	//	number = '0' + number;
	//}
	//return number.toString(); 
	return ((number < 10) ? '0' : '') + number;
}

var server = net.createServer(function(socket) {
		var date = new Date();
		var content = date.getFullYear() + "-" + fixZeroes(date.getMonth() + 1) +
		"-" + fixZeroes(date.getDate()) + " " + fixZeroes(date.getHours()) + ":" + fixZeroes(date.getMinutes());
		socket.write(content + "\n");
		socket.end();
});
server.listen(port);
