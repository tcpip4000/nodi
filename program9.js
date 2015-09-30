// program9.js

var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket) {
		var date = new Date();
		var content = date.getFullYear() + "-" + date.getMonth() +
		"-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
		socket.write(content);
		socket.end();
});
server.list(port);
