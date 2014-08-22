var Q = require('q');

var data = [
	{ name: 'Pepper' },
	{ name: 'Sally' },
	{ name: 'Sarah' }
];

var Dog = function (name) {
	this.name = name;
};

Dog.prototype.speak = function () {
	return 'WOOF!';
};

Dog.fromAttrs = function (attrs) {
	return new Dog(attrs.name);
};

Dog.query = function () {
	return Q.when(data).then(function (attrs) {
		return attrs.map(Dog.fromAttrs);
	});
};

module.exports = Dog;
