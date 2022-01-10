const inquirer = require('inquirer');
const hexToRgb = require('./hexToRgb');

module.exports = async () => {
	const answers = await inquirer.prompt([
		{
			type: 'list',
			name: 'model',
			message: 'Which model do you want to use?',
			choices: [
				'ui',
				'default',
				'game_of_thrones',
				'lego_movie',
				'maple_story',
				'communist'
			]
		},
		{
			type: 'input',
			name: 'color1',
			message: 'Color1 [ N | #hex ]:',
			default: 'N'
		},
		{
			type: 'input',
			name: 'color2',
			message: 'Color2 [ N | #hex ]:',
			default: 'N'
		},
		{
			type: 'input',
			name: 'color3',
			message: 'Color3 [ N | #hex ]:',
			default: 'N'
		},
		{
			type: 'input',
			name: 'color4',
			message: 'Color4 [ N | #hex ]:',
			default: 'N'
		},
		{
			type: 'input',
			name: 'color5',
			message: 'Color5 [ N | #hex ]:',
			default: 'N'
		}
	]);

	for (identifier in answers) {
		if (Object.prototype.hasOwnProperty.call(answers, identifier)) {
			// Current answer
			const answer = answers[identifier]; // 'N'
			// If answer is not 'N'
			if (
				['color1', 'color2', 'color3', 'color4', 'color5'].includes(
					identifier
				) &&
				answer !== 'N'
			) {
				// Convert hex to rgb
				const rgb = hexToRgb(answer);
				// Set answer to rgb
				answers[identifier] = rgb;
			}
		}
	}

	return answers;
};
