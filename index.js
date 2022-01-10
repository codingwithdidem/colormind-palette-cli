#!/usr/bin/env node

/**
 * palette-generator
 * Generates a palette of colors.
 *
 * @author codingwithdidem <https://codingwithdidem.me>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const chalk = require('chalk');
const clipboard = require('clipboardy');
const Listr = require('listr');
const getModels = require('./helpers/get-models');
const getPalette = require('./helpers/get-palette');
const interactiveMode = require('./helpers/interactive-mode');
let settings = require('./helpers/default-settings');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log.info(flags);

	if (flags.listModels) {
		try {
			const models = await getModels();
			log.info(
				`Available models: \n ${models
					.map(model => `\t${model}`)
					.join(`\n`)}`
			);
		} catch (error) {
			log.error("Can't get models list.");
		}
	}

	// Interactive mode
	const userAnswers = await interactiveMode();

	// Update settings
	settings = {
		...settings,
		model: userAnswers.model,
		input: [
			userAnswers.color1,
			userAnswers.color2,
			userAnswers.color3,
			userAnswers.color4,
			userAnswers.color5
		]
	};

	// Prepare tasks
	const tasks = new Listr([
		// Task 1 : Generating Palette
		{
			title: `Generating ${settings.model} palette`,
			task: async ctx => {
				const palette = await getPalette(settings);
				ctx.palette = palette;
			}
		},
		// Task 2 : 'Copy' to clipboard
		{
			title: `Copying to clipboard`,
			task: async ctx => {
				const palette = ctx.palette;

				const copyText = palette.map(color => `${color}`).join(`\n`);
				clipboard.write(copyText);
			}
		}
	]);

	const { palette } = await tasks.run();

	console.log(
		`DONE! HERE IS YOUR PALETTE \n ${palette
			.map(color => `\t${chalk.bgHex(color).bold(color)}`)
			.join(`\n`)}`
	);
})();
