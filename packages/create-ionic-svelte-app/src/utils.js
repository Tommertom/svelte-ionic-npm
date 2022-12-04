import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs'

export function whichPMRuns() {
  const userAgent = process.env.npm_config_user_agent;
  if (!userAgent) {
    return undefined;
  }
  const pmSpec = userAgent.split(' ')[0] || '';
  const separatorPos = pmSpec.lastIndexOf('/');
  const name = pmSpec?.substring(0, separatorPos);
  return {
    name: name === 'npminstall' ? 'cnpm' : name,
    version: pmSpec?.substring(separatorPos + 1),
  };
}

/** @param {string} dir */
export function mkdirp(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (e) {
    if (e.code === 'EEXIST') return;
    throw e;
  }
}

export function dist(pathToFind) {
  let pathAdjust = '';
  let base = fileURLToPath(new URL(`./`, import.meta.url).href);
  if (base.endsWith('shared', base.length - 1)) {
    pathAdjust = '../';
  }

  const res = path.resolve(base, pathAdjust, pathToFind);
  // console.log('Requested:', pathToFind);
  // console.log('resolved:', res);
  return res;
}

export function getHelpText() {
  // Must use spaces for adjustments as output can get very wonky with tab output
  // Why not array of arrays, TBH it's more readable in source like this and easy to edit with column selection etc.
  // But the advantage would be that padEnd could be adjusted to the console.width... will wait for feedback.
  return `
Option              Short   Quiet Default   Values                      Description
--help              -h                                                  This help screen
--quiet             -q                                                  Quiet mode - see below
--verbose           -v                                                  Show shell output for troubleshooting
--name              -n      new-skel-app    string, no spaces           Name of the directory for the project
--types                     typescript      typescript|checkjs          Typescipt of Javascript with JSDoc
--prettier                  true            true|false                  Whether Prettier is added
--eslint                    true            true|false                  Whether ESLint is added
--playwright                false           true|false                  Whether Playwright is added
--framework         -f      svelte-kit      svelte-kit|svelte-kit-lib   Setup as Svelte Kit library project or library
--path              -p      ''              relative or absolute path   Location to install, name is appended
--ionicons          -i      false           true|false                  Ìnclude Ionic icon library Ionicons
--capacitor         -c      false           true|false                  Install dependencies for Capacitor

Quiet mode is for automated installs for testing, CI/CD.  It will take all of the default values in the
Quiet Default column, but you can provide any other flags to override as you see fit.  If you just want
to generate a new project but still ask for a name, you need to provide all the other args except the 
ones to be filled in by the user.
`;
}


export function getIonicVariables() {

  return `
  /* Ionic Variables and Theming. For more info, please see:
http://ionicframework.com/docs/theming/ */

/** Ionic CSS Variables **/
:root {
    /*  tailored elements */
    --ion-background-color: #ffffff;
  
    /** primary **/
    --ion-color-primary: #3880ff;
    --ion-color-primary-rgb: 56, 128, 255;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255, 255, 255;
    --ion-color-primary-shade: #3171e0;
    --ion-color-primary-tint: #4c8dff;
  
    /** secondary **/
    --ion-color-secondary: #3dc2ff;
    --ion-color-secondary-rgb: 61, 194, 255;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255, 255, 255;
    --ion-color-secondary-shade: #36abe0;
    --ion-color-secondary-tint: #50c8ff;
  
    /** tertiary **/
    --ion-color-tertiary: #5260ff;
    --ion-color-tertiary-rgb: 82, 96, 255;
    --ion-color-tertiary-contrast: #ffffff;
    --ion-color-tertiary-contrast-rgb: 255, 255, 255;
    --ion-color-tertiary-shade: #4854e0;
    --ion-color-tertiary-tint: #6370ff;
  
    /** success **/
    --ion-color-success: #2dd36f;
    --ion-color-success-rgb: 45, 211, 111;
    --ion-color-success-contrast: #ffffff;
    --ion-color-success-contrast-rgb: 255, 255, 255;
    --ion-color-success-shade: #28ba62;
    --ion-color-success-tint: #42d77d;
  
    /** warning **/
    --ion-color-warning: #ffc409;
    --ion-color-warning-rgb: 255, 196, 9;
    --ion-color-warning-contrast: #000000;
    --ion-color-warning-contrast-rgb: 0, 0, 0;
    --ion-color-warning-shade: #e0ac08;
    --ion-color-warning-tint: #ffca22;
  
    /** danger **/
    --ion-color-danger: #eb445a;
    --ion-color-danger-rgb: 235, 68, 90;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255, 255, 255;
    --ion-color-danger-shade: #cf3c4f;
    --ion-color-danger-tint: #ed576b;
  
    /** dark **/
    --ion-color-dark: #222428;
    --ion-color-dark-rgb: 34, 36, 40;
    --ion-color-dark-contrast: #ffffff;
    --ion-color-dark-contrast-rgb: 255, 255, 255;
    --ion-color-dark-shade: #1e2023;
    --ion-color-dark-tint: #383a3e;
  
    /** medium **/
    --ion-color-medium: #92949c;
    --ion-color-medium-rgb: 146, 148, 156;
    --ion-color-medium-contrast: #ffffff;
    --ion-color-medium-contrast-rgb: 255, 255, 255;
    --ion-color-medium-shade: #808289;
    --ion-color-medium-tint: #9d9fa6;
  
    /** light **/
    --ion-color-light: #f4f5f8;
    --ion-color-light-rgb: 244, 245, 248;
    --ion-color-light-contrast: #000000;
    --ion-color-light-contrast-rgb: 0, 0, 0;
    --ion-color-light-shade: #d7d8da;
    --ion-color-light-tint: #f5f6f9;
  }
  `
};


export function getDemoIonicApp() {
  return `
  <ion-card>
	<ion-card-header>
		<ion-card-subtitle>Great success!!</ion-card-subtitle>
		<ion-card-title>Welcome to your app!</ion-card-title>
	</ion-card-header>

	<ion-card-content>
		Thank you for using this starter. Click buttons below to open these guides (will
		open in new window). Don't forget to open DevTools to see this app in mobile mode. Happy coding!!!
	</ion-card-content>

	<ion-item>
		<ion-label>Visit Ionic Showcase app with sourceviewer</ion-label>
		<ion-button href="https://ionicsvelte.firebaseapp.com/" target="_new" fill="outline" slot="end"
			>View</ion-button
		>
	</ion-item>

	<ion-item>
		<ion-label>Visit Ionic component docs</ion-label>
		<ion-button
			href="https://ionicframework.com/docs/components"
			target="_new"
			fill="outline"
			slot="end">View</ion-button
		>
	</ion-item>
	<ion-item>
		<ion-label>Visit Svelte Kit docs</ion-label>
		<ion-button
			href="https://kit.svelte.dev/docs/introduction"
			target="_new"
			fill="outline"
			slot="end">View</ion-button
		>
	</ion-item>
	<ion-item>
		<ion-label>Visit Svelte docs</ion-label>
		<ion-button href="https://svelte.dev/docs" target="_new" fill="outline" slot="end"
			>View</ion-button
		>
	</ion-item>
</ion-card>

  `
}

