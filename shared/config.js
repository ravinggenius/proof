var _ = require('lodash');
var fs = require('fs');
var ConfConf = require('conf_conf');

var localEnv;

try {
	localEnv = require('../env_local.json');
} catch (e) {
	localEnv = {};
}

var NODE_ENV = process.env.NODE_ENV || 'development';

var raw = _.merge({}, localEnv.common, localEnv[NODE_ENV], process.env);

module.exports = ConfConf.configure(raw, function (conf) {
	conf.config('nodeEnv', { default: 'development' });

	conf.config('port', { default: '8000' });

	conf.config('databaseUser');
	conf.config('databasePassword');
	conf.config('databaseName');

	conf.config('debugMode', { default: 'false' }, function (value) {
		return value === 'true';
	});
});
