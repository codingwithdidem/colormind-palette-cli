const colormind = require('colormind-magic-palette');

const getRandom = async () => {
	const palette = await colormind.random();
	console.log(palette);
	return palette;
};

generate = async () => {
	const palette = await colormind.generatePalette('default', [
		'#ff0000',
		'#D8A7CA',
		'#C7B8EA',
		'#73A6AD',
		'#4EFFEF'
	]);
	console.log(palette);
	return palette;
};

getRandom();
generate();
