const axios = require('axios');

const MODELS_URL = 'http://colormind.io/list/';

module.exports = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const {
				data: { result }
			} = await axios.get(MODELS_URL);
			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
