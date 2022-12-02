#!/usr/bin/env node
import { IonicSvelteOptions, createIonicSvelte } from './creator.js';
import fs from 'fs-extra';
import mri from 'mri';
import prompts from 'prompts';
import { bold, cyan, gray, grey, red, green } from 'kleur/colors';
import { dist, getHelpText } from './utils.js';
import path from 'path';

/* Ionic Svelte Create NPM script

Fully taken from 
https://github.com/skeletonlabs/create-skeleton-app

https://www.reddit.com/r/sveltejs/comments/z9fg0r/comment/iyil17f/?utm_source=share&utm_medium=web2x&context=3

So all kudos to the Skeleton crew

Go to their Discord - https://discord.com/invite/EXqV7W8MtY
Use their great tools - https://www.skeleton.dev/

*/


async function main() {
	// grab any passed arguments from the command line
	let opts = await parseArgs();

	if ('quiet' in opts) {
		// in quiet mode we prefill the defaults, then overlay the passed options and bypass all of askForMissingParams so that it
		// doesn't have to constantly check for quietmode all the time.
		let defaults = new IonicSvelteOptions();
		opts = Object.assign(defaults, opts);
	} else {
		// in interactive mode we ask the user to fill anything not passed in
		opts = await askForMissingParams(opts);
	}

	// Now that we have all of the options, lets create it. 
	await createIonicSvelte(opts);

	// And give the user some final information on what to do Next
	if (!(opts?.quiet)) {
		// @ts-ignore
		const pm = opts.packagemanager;
		let runString = `${pm} dev`;

		if (pm == 'npm') {
			runString = 'npm run dev';
		}

		const options = opts;
		// below taken from SvelteKit's bin.js in packages/create-svelte
		// https://raw.githubusercontent.com/sveltejs/kit/master/packages/create-svelte/bin.js
		console.log(bold(green('\nYour project is ready!')));

		if (options.types === 'typescript') {
			console.log(bold('✔ Typescript'));
			console.log('  Inside Svelte components, use <script lang="ts">');
		} else if (options.types === 'checkjs') {
			console.log(bold('✔ Type-checked JavaScript'));
			console.log('  https://www.typescriptlang.org/tsconfig#checkJs');
		}

		if (options.eslint) {
			console.log(bold('✔ ESLint'));
			console.log(cyan('  https://github.com/sveltejs/eslint-plugin-svelte3'));
		}

		if (options.prettier) {
			console.log(bold('✔ Prettier'));
			console.log(cyan('  https://prettier.io/docs/en/options.html'));
			console.log(cyan('  https://github.com/sveltejs/prettier-plugin-svelte#options'));
		}

		if (options.playwright) {
			console.log(bold('✔ Playwright'));
			console.log(cyan('  https://playwright.dev'));
		}

		if (options.vitest) {
			console.log(bold('✔ Vitest'));
			console.log(cyan('  https://vitest.dev'));
		}

		console.log('\nInstall community-maintained integrations:');
		console.log(cyan('  https://github.com/svelte-add/svelte-adders'));

		console.log('\nNext steps:');
		let i = 1;

		const relative = opts.name;
		if (relative !== '') {
			console.log(`  ${i++}: ${bold(cyan(`cd ${relative}`))}`);
		}

		//	console.log(`  ${i++}: ${bold(cyan('npm install'))} (or pnpm install, etc)`);
		// prettier-ignore
		console.log(`  ${i++}: ${bold(cyan('git init && git add -A && git commit -m "Initial commit"'))} (optional)`);
		console.log(`  ${i++}: ${bold(cyan('npm run dev -- --open'))}`);

		console.log(`\nTo close the dev server, hit ${bold(cyan('Ctrl-C'))}`);
		console.log(`\nStuck? Visit us at ${cyan('https://svelte.dev/chat')}`);

		console.log(grey(`\nNeed some help or found an issue with this installer? Visit us on Github https://github.com/Tommertom/svelte-ionic-npm`));
	}
	process.exit();
}

async function parseArgs() {
	const argv = process.argv.slice(2);

	// mri will parse argv and expand any shorthand args.  Accepted args are the literal props of SkelOptions
	const opts = mri(argv, {
		alias: {
			h: 'help',
			f: 'framework',
			n: 'name',
			p: 'path',
			m: 'monorepo',
			q: 'quiet',
			v: 'verbose',
		},
		boolean: [
			'help',
			'quiet',
			'monorepo',
			'prettier',
			'eslint',
			'playwright',
			'verbose',
			'vitest'
		],
	});

	// If a user invokes 'create-app blah foo', it falls into the _ catch all list, the best we can do is take the first one and use that as the name
	// if args are passed in incorrectly such as --prettier=0 instead of --prettier=false then a 0 will be added to the _ collection, we check that the
	// first one isn't a bungled arg set to 0
	if (opts._.length && opts._[0] != 0) {
		opts.name = opts._[0];
	}
	// Show help if specified regardless of how many other options are specified, have fun updating the text string in utils.ts :(
	if ('help' in opts) {
		console.log(getHelpText());
		process.exit();
	}
	return opts;
}


export async function askForMissingParams(opts) {
	// prettier-ignore
	const disclaimer = `
${bold(cyan('Welcome to Ionic Svelte '))}

${bold(red('This is BETA software; expect bugs and missing features.'))}

Problems? Open an issue on ${cyan('https://github.com/Tommertom/svelte-ionic-npm/issues')} if none exists already.
`;

	const { version } = JSON.parse(
		fs.readFileSync(dist('../package.json'), 'utf-8'),
	);

	console.log(gray(`\ncreate-ionic-svelte-app version ${version}`));
	console.log(disclaimer);

	const questions = [];

	//NOTE: When doing checks here, make sure to test for the presence of the prop, not the prop value as it may be set to false deliberately.

	if (!('name' in opts)) {
		questions.push({
			type: 'text',
			name: 'name',
			message: 'Name for your new project:',
		});
	}

	// if (!('framework' in opts)) {
	// 	const q = {
	// 		type: 'select',
	// 		name: 'framework',
	// 		message: 'Select what framework you wish to use:',
	// 		choices: [
	// 			{ title: 'Svelte Kit', value: 'svelte-kit' },
	// 			{ title: 'Svelte Kit Library', value: 'svelte-kit-lib' }
	// 			// { title: 'Vite (Svelte)', value: 'vite' },
	// 			// { title: 'Astro', value: 'astro' }
	// 		]
	// 	};
	// 	questions.push(q);
	// }

	if (!('types' in opts)) {
		const q = {
			type: 'select',
			name: 'types',
			message: 'Add type checking with TypeScript?',
			initial: false,
			choices: [
				{
					title: 'Yes, using JavaScript with JSDoc comments',
					value: 'checkjs',
				},
				{
					title: 'Yes, using TypeScript syntax',
					value: 'typescript',
				},
				{ title: 'No', value: null },
			],
		};
		questions.push(q);
	}

	if (!('eslint' in opts)) {
		const q = {
			type: 'toggle',
			name: 'eslint',
			message: 'Add ESLint for code linting?',
			initial: false,
			active: 'Yes',
			inactive: 'No',
		};
		questions.push(q);
	}

	if (!('prettier' in opts)) {
		const q = {
			type: 'toggle',
			name: 'prettier',
			message: 'Add Prettier for code formatting?',
			initial: false,
			active: 'Yes',
			inactive: 'No',
		};
		questions.push(q);
	}

	if (!('playwright' in opts)) {
		const q = {
			type: 'toggle',
			name: 'playwright',
			message: 'Add Playwright for browser testing?',
			initial: false,
			active: 'Yes',
			inactive: 'No',
		};
		questions.push(q);
	}

	if (!('vitest' in opts)) {
		const q = {
			type: 'toggle',
			name: 'vitest',
			message: 'Add Vitest for unit testing?',
			initial: false,
			active: 'Yes',
			inactive: 'No'
		}
		questions.push(q);
	}

	const onCancel = () => {
		console.log('Exiting');
		process.exit();
	};

	// Get user responses to missing args
	//@ts-ignore
	const response = await prompts(questions, { onCancel });

	//Prompts returns the twplugins as an array, but it makes it easier to use on the command line if they are seperated booleans
	//We map them out from the array here and delete the now useless twplugins prop before proceeding to overlay the response values onto opts
	//@ts-ignore
	if (response.twplugins != undefined) Object.keys(response.twplugins).forEach((index) => (opts[response.twplugins[index]] = true));
	delete response.twplugins;
	Object.assign(opts, response);
	const skelOpts = new IonicSvelteOptions();
	Object.assign(skelOpts, opts);

	// console.log('skelOpts', skelOpts)

	//Map some values for compat with what svelte-create expects.  Note that the skeleton references below
	//have nothing to do with us, but rather create-svelte's internal naming for their starter templates.
	if (opts.framework == 'svelte-kit') {
		opts.template = 'skeleton';
	}
	if (opts.framework == 'svelte-kit-lib') {
		opts.template = 'skeletonlib';
	}
	return skelOpts;
}
main();
