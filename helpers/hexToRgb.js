// Converting your hex to some RGB.

module.exports = hex => {
	return hex
		.replace(
			/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			(m, r, g, b) => '#' + r + r + g + g + b + b
		)
		.substring(1)
		.match(/.{2}/g)
		.map(x => parseInt(x, 16));
};
