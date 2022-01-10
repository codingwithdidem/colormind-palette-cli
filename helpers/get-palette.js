const axios = require('axios');
const rgbToHex = require('./rgbToHex');

const COLORMIND_URL = 'http://colormind.io/api/';

module.exports = args => {
	return new Promise(async (resolve, reject) => {
		try {
			const {
				data: { result }
			} = await axios.post(COLORMIND_URL, args);

			// Convert RGB to Hex
			const hexResult = result.map(rgb =>
				rgbToHex(rgb[0], rgb[1], rgb[2])
			);

			resolve(hexResult);
		} catch (error) {
			reject(error);
		}
	});
};
