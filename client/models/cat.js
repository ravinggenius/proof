var Cat = function (name) {
	this.name = name;
};

Cat.prototype.speak = function () {
	return 'meow';
};

module.exports = Cat;
