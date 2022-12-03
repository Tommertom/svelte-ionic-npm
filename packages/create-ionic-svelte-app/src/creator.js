// Types
import { create } from 'create-svelte';
import process from 'process';
import { spawnSync } from 'node:child_process';
import fs from 'fs-extra';
import path from 'path';
import { dist, whichPMRuns, mkdirp, getIonicVariables, getDemoIonicApp } from './utils.js';
import { bold, red, cyan, grey } from 'kleur/colors';

// NOTE: Any changes here must also be reflected in the --help output in utils.ts and shortcut expansions in bin.ts.
// Probably a good idea to do a search on the values you are changing to catch any other areas they are used in
// Codebase would be a lot cleaner if Reflect() actually returned anything useful.
// unbuild doesn't seem to like it when SkeletonOptions implements the Options type from create-svelte's internal type definitions
// so they are copied over here just to make everything even more brittle.

export class IonicSvelteOptions {
	// svelte-create expects these options, do not change the names or values.
	name = 'new-ionic-svelte-app';
	template = 'skeleton';
	types = 'typescript';
	prettier = true;
	eslint = true;
	playwright = false;
	vitest = false;

	// Ionic
	ionicons = false;

	// create-skeleton-app additions
	// _ = []; //catch all for extraneous params from mri, used to capture project name.
	help = false;
	quiet = false;
	framework = 'svelte-kit';
	path = '.';
	// forms = false;
	// typography = false;
	// lineclamp = false;
	// skeletontheme = 'skeleton';
	// skeletontemplate = 'bare';
	packagemanager = 'npm';
	// // props below are private to the Skeleton team
	verbose = false;
	// monorepo = false;
	packages = [];
	// skeletonui = true;
	// skeletontemplatedir = '../templates';
	workspace = '';
}

export async function createIonicSvelte(opts) {
	//create-svelte will happily overwrite an existing directory, foot guns are bad mkay

	opts.path = path.resolve(
		opts?.path,
		opts.name.replace(/\s+/g, '-').toLowerCase(),
	);

	if (fs.existsSync(opts.path)) {
		console.error(red(bold('Install directory already exists!')));
		process.exit();
	}

	if (!(opts?.quiet)) {
		console.log('Working: Creating base Svelte Kit install supercharged with Ionic.');
	}
	fs.mkdirp(opts.path);

	//create-svelte will build the base install for us
	create(opts.path, opts);
	process.chdir(opts.path);

	// install packages
	opts.packagemanager = whichPMRuns()?.name || 'npm';

	// the order matters due to dependency resolution, because yarn
	let packages = [
		'svelte-preprocess',
		'@sveltejs/adapter-static'

	];

	// packages = [];

	// if (opts?.typography) packages.push('@tailwindcss/typography');
	// if (opts?.forms) packages.push('@tailwindcss/forms');
	// if (opts?.lineclamp) packages.push('@tailwindcss/line-clamp');

	if (!(opts?.quiet)) {
		console.log('Working: Installing project dependencies ' + grey(packages.toString()));
	}

	let result = spawnSync(opts.packagemanager, ['add', '-D', ...packages], {
		shell: true,
	});
	// Capture any errors from stderr and display for the user to report it to us
	if (!(opts.packagemanager == 'yarn') && result?.stderr.toString().length) {
		console.log(
			'An error has occurred trying to install packages with your package manager, please send us the following text onto our Github or Discord:\n',
			result?.stderr.toString(),
		);
		process.exit();
	}


	packages = ['@ionic/core', 'ionic-svelte']
	if (opts?.ionicons) packages.push('ionicons/icons');
	console.log('....adding ' + grey(packages.toString()));
	result = spawnSync(opts.packagemanager, ['add', '-S', ...packages], {
		shell: true,
	});


	packages = ['@sveltejs/adapter-auto']
	console.log('... removing ' + grey(packages.toString()));
	result = spawnSync(opts.packagemanager, ['remove', '-D', ...packages], {
		shell: true,
	});
	if (!(opts.packagemanager == 'yarn') && result?.stderr.toString().length) {
		console.log(
			'An error has occurred trying to remove packages with your package manager, please send us the following text onto our Github or Discord:\n',
			result?.stderr.toString(),
		);
		process.exit();
	}

	// Just to help with any user error reports
	if (opts.verbose) {
		const stdout = result?.stdout.toString();
		if (stdout.length) console.log(bold(cyan('stdout:')), stdout);
		const stderr = result?.stderr.toString();
		if (stderr.length) console.log(bold(red('stderr:')), stderr);
	}


	console.log('... writing configs and default files');
	// write out config files
	out('svelte.config.js', createSvelteConfig());
	//	out('tailwind.config.cjs', createTailwindConfig(opts));
	//	out('postcss.config.cjs', createPostCssConfig());

	// add vite.server.fs.allow of skeleton path for sites in monorepo
	// if (opts.monorepo) {
	// 	//		createViteConfig(opts)
	// }
	if (opts.framework == 'svelte-kit' || opts.framework == 'svelte-kit-lib') {
		mkdirp(path.join('src', 'lib'))
		mkdirp(path.join('src', 'theme'))

		out(
			path.resolve(process.cwd(), 'src/routes/', '+layout.svelte'),
			createSvelteKitLayout(opts),
		);

		out(
			path.resolve(process.cwd(), 'src/routes/', '+layout.ts'),
			`export const ssr = false;`
		);

		out(
			path.resolve(process.cwd(), 'src/theme/', 'variables.css'),
			getIonicVariables()
		);


		out(
			path.resolve(process.cwd(), 'src/routes/', '+page.svelte'),
			getDemoIonicApp()
		);




		//	out(
		//		path.resolve(process.cwd(), 'src/', 'app.postcss'),
		//		'/*place global styles here */',
		//	);
	}

	// copy over selected template
	//	copyTemplate(opts);

	return opts;
}

function createSvelteConfig() {
	const str = `import adapter from '@sveltejs/adapter-static'
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
	}
};

export default config;
`;
	return str;
}


// TODO - this is for monorepos only, need to see everything that needs to be modified for monorepos
// currently packages are automatically added as a workspace reference if in a mono
function createViteConfig(opts) {

	let filename = '';
	if (opts.types == 'typescript') {
		filename = 'vite.config.ts'
	} else {
		filename = 'vite.config.js'
	}
	let vite = fs.readFileSync(filename)
	const insertString = `,
	server: {
		fs: {
			allow: ['../../packages/skeleton/']
		}
	}`
	const token = 'kit()]'
	const insertPoint = vite.indexOf(token) + token.length
	const str = vite.slice(0, insertPoint) + insertString + vite.slice(insertPoint)
	fs.writeFileSync(filename, str)
}


function createSvelteKitLayout(opts) {
	const str = `<script${opts.types == 'typescript' ? ` lang='ts'` : ''}>
	import { setupIonicSvelte } from 'ionic-svelte';

	/* Theme variables */
	import '../theme/variables.css';

	setupIonicSvelte();
</script>

<ion-app>
	<slot />
</ion-app>
`;
	return str;
}

function copyTemplate(opts) {
	const src = path.resolve(
		dist(opts.skeletontemplatedir),
		opts.skeletontemplate,
	);

	fs.copySync(src + '/src', './src', { overwrite: true });
	fs.copySync(src + '/static', './static', { overwrite: true });

	// patch back in their theme choice - it may have been replaced by the theme template, it may still be the correct auto-genned one, depends on the template - we don't care, this fixes it.
	// let content = fs.readFileSync('./src/routes/+layout.svelte', {
	// 	encoding: 'utf8',
	// 	flag: 'r',
	// });
	// const reg = /theme-.*\.css';$/gim;
	// fs.writeFileSync(
	// 	'./src/routes/+layout.svelte',
	// 	content.replace(reg, `theme-${opts.skeletontheme}.css';`),
	// );
	// // update the <body> to have the data-theme
	// content = fs.readFileSync('./src/app.html', { encoding: 'utf8', flag: 'r' });
	// fs.writeFileSync(
	// 	'./src/app.html',
	// 	content.replace('<body>', `<body data-theme="${opts.skeletontheme}">`),
	// );
}

function out(filename, data) {
	// console.log('WRITING', filename)
	fs.writeFileSync(filename, data);
}
