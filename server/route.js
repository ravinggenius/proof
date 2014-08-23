var Route = function (method, path, handler) {
	this.method = method.toUpperCase();
	this.path = path;
	this.handle = handler.bind(this);
};

Route.prototype.matches = function (method, path) {
	return (this.method === method) && (this.path === path);
};

Route.build = function (method, path, handler) {
	return new Route(method, path, handler);
};

Route.get = function (path, handler) {
	return Route.build('GET', path, handler);
};

Route.post = function (path, handler) {
	return Route.build('POST', path, handler);
};

Route.put = function (path, handler) {
	return Route.build('PUT', path, handler);
};

Route['delete'] = function (path, handler) {
	return Route.build('DELETE', path, handler);
};

Route.head = function (path, handler) {
	return Route.build('HEAD', path, handler);
};

Route.option = function (path, handler) {
	return Route.build('OPTION', path, handler);
};

module.exports = Route;
