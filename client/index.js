var models = module.exports.models = require('./models');
var shared = module.exports.shared = require('../shared');

var Cat = models.Cat;
var Bird = shared.models.Bird;

var cat = new Cat('Thomas');
var bird = new Bird('Allea');

console.log(cat.speak());
console.log(bird);
