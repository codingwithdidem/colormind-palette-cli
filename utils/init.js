const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `palette-generator`,
		tagLine: `by codingwithdidem`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#00F5D4',
		color: '#000000',
		bold: true,
		clear
	});
};
