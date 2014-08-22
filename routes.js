var fs = require('fs');

var Route = require('./route');

var Dog = require('./server').models.Dog;

var clientBundle = require('browserify')('./client');


module.exports = [
	Route.get('/', function (request, response) {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		var stream = fs.createReadStream(__dirname + '/views/index.html');
		stream.pipe(response);
	}),

	Route.get('/api/dogs.json', function (request, response) {
		response.writeHead(200, { 'Content-Type': 'application/json' });

		Dog.query().then(function (dogs) {
			response.write(JSON.stringify({ dogs: dogs }));
			response.end();
		});
	}),

	Route.get('/assets/application.js', function (request, response) {
		response.writeHead(200, { 'Content-Type': 'application/javascript' });

		clientBundle.bundle().pipe(response);
	})
];
