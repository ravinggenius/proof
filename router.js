var _ = require('lodash');
var Q = require('q');

var data = [];

var Router = function () {
};

Router.handle = function (method, path) {
	var route = _.find(data, function (route) {
		return route.matches(method, path);
	});

	if (route) {
		return Q.when(route);
	} else {
		return Q.reject({
			status: 404,
			message: 'not found, sorry'
		});
	}
};

Router.load = function (path) {
	require(path).forEach(Router.register);
};

Router.register = function (route) {
	data.push(route);
};

module.exports = Router;
