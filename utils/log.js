const alert = require('cli-alerts');

const info = message => {
	alert({
		type: `info`,
		name: `INFO`,
		msg: message
	});
};

const warning = message => {
	alert({
		type: `warning`,
		name: `WARNING`,
		msg: message
	});
};

const success = message => {
	alert({
		type: `success`,
		name: `SUCCESS`,
		msg: message
	});
};

const error = message => {
	alert({
		type: `error`,
		name: `ERROR`,
		msg: message
	});
};

module.exports = {
	info,
	warning,
	success,
	error
};
