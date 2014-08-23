var _ = require('lodash');
var fs = require('fs');

var defaults = require('../env.json');
var overrides;

try {
	overrides = require('../env_overrides.json');
} catch (e) {
	console.warn("\n" + e);
	throw(e);
}

var all = _.merge({}, defaults, overrides);
var mode = process.env.NODE_ENV || 'development';

var raw = _.merge({}, all.common, all[mode], process.env);

// TODO typecast, add defaults, enforce required

module.exports = _.merge({}, raw, { _raw: raw });
