var Dog = function (name) {
	this.name = name;
};

Dog.prototype.speak = function () {
	return 'WOOF!';
};

module.exports = Dog;
