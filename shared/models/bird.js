var Bird = function (name) {
	this.name = name;
}

Bird.prototype.speak = function () {
	return 'cheep';
};

module.exports = Bird;
