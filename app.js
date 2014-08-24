var http = require('http');

var Router = require('./server/router');

Router.load('./server/routes');

var app = {};

app.server = http.createServer(function (request, response) {
	Router.handle(request.method, request.url).then(function (route) {
		route.handle(request, response);
	}, function (error) {
		response.writeHead(error.status, { 'Content-Type': 'text/plain' });
		response.write(error.message);
		response.end();
	});
});

if (require.main === module) {
	var config = require('./shared/config');
	app.server.listen(config.port);
} else {
	module.exports = app;
}
