var http = require('http');

var app = {};
var Router = require('./router');

Router.load('./routes');

app.server = http.createServer(function (request, response) {
	Router.handle(request.method, request.url).then(function (route) {
		route.handle(request, response);
	}, function (error) {
		response.writeHead(error.status, { 'Content-Type': 'text/plain' });
		response.write(error.message);
		response.end();
	});
});

app.server.listen(8888);
