# Change Log Ionic-Svelte-NPM

All notable changes to this project will be documented in this file.

## 0.5.34
- Minor text update for creator - explanation CapacitorJS
- fixed Vite4 dependency in creator
- Package size reduction

## 0.5.33
- Creator 0.0.15 - some  fixes & better reference for npx cap init (webdir flag) 

## 0.5.32
- Typings - Added on-handlers for all components per component

## 0.5.31
- Capacitor added to creator 0.0.8
- Ionicons bug fix in creator - disabled verbose logging for the time being

## 0.5.30
- Changed the default starter to use the cjs import, also to enable codesplitting - creator 0.0.8
- `setupIonicSvelte()` deprecated -  Changed config routine to `setupIonicBase();` 

```
<script lang="ts">
	import { setupIonicSvelte } from 'ionic-svelte';

	/* Theme variables */
	import '../theme/variables.css';

	/* Call Ionic's setup routine */
	setupIonicSvelte();

</script>

<ion-app>
	<slot />
</ion-app>

```
Should become:
```
<script lang="ts">
	import { setupIonicBase } from 'ionic-svelte';

	/* Call Ionic's setup routine */
	setupIonicBase();

	/* Import all components - or do partial loading - see below */
	import 'ionic-svelte/components/all';

	/* Theme variables */
	import '../theme/variables.css';

	/*
		This part - import 'ionic-svelte/components/all'; -  loads all components at once.

		This adds at least >800kb (uncompressed) to your bundle.

		You can also choose to import each component you want to use separately. Example:

        	import 'ionic-svelte/components/ion-app';
                import 'ionic-svelte/components/ion-card';
                import 'ionic-svelte/components/ion-card-title';
                import 'ionic-svelte/components/ion-card-subtitle';
                import 'ionic-svelte/components/ion-card-header';
                import 'ionic-svelte/components/ion-card-content';
                import 'ionic-svelte/components/ion-chip';
                import 'ionic-svelte/components/ion-button';

		It is recommended to do this in this file, as you only need to do such once. But you are free
		to do this elsewhere if you like to code-split differently.

		You can find these import lines to copy here by going to the imported file below (ionic-svelte/components/all).
	
		Please don't forget to import ion-app in this file when you decide to code-split:
		
	    import 'ionic-svelte/components/ion-app';
	*/
	
</script>

<ion-app>
	<slot />
</ion-app>


```

## 0.5.29
- Updated typings
- Modular imports available, but not defaulted yet

## 0.5.28/27
- Typings for style, default events, class added
- Still problem with ok-text (ion-select), is-open (modal) etc...
- How to deal with svelte specific goodies like use: and bind:....?
- Also padding (with =true), checked (without parameter)
- Fixed issue create-app script (now 0.0.7) - Package warnings are treated as errors 

## 0.5.26
- Ionic event type bindings fix

## 0.5.25
- Fixes in type definitions (slots)

## 0.5.24
- Removed Experimental package - no ES-imports because of style encapsulation
- Added typings (need a bit more testing)

## 0.5.22
- Added create-ionic-svelte-app package

## 0.5.21

- Fixed issue with generation of slots - experimental is working again

## 0.5.20

- Package.json main added - so working with new Kit
- Experimental package is BROKEN

## 0.5.19

- FAIL warning when working with newer SvelteKit versions...

## 0.5.18

- multiple fixes on generate script (slots missing in ion-buttons - source code does not have slots)
- comments added for manual post processing
- removed warning in IonMenu.svelte

## 0.5.17

- added typing in IonTabs
- fixed issue icon in IonItem
- ion-menu warning added
- slot support introduced! (experimental still) - solution found in one of the references in https://github.com/sveltejs/svelte/issues/1689 (ui5 example), but had to tweak it a bit (using $$props, not $$restprops)

## 0.5.16

- fixed issue with not globally replacing tags
- added warning that type conversion is not done (like, translucent="true" will not be converted into translucent={true})

## 0.5.13

- Regenerated all experimental components as they had on:click twice - leading to triggering the event twice
- Support for bind:value bindings by redispatching and using ionChange events, making property binding finally possible

## 0.5.11

- minor updates to experimental components
- added migration script to migrate from kebab-case components to pascal-case - `migrateToImport.js` which you can run using `node migrateToImport <directoryname>`

## 0.5.10

- starting with changelog
- added generator scripts to generate svelte wrappers from Core Stencil code on github
- added "experimental" components - in order to move from kebab-case/webcomponent usage to tree-shakeable and type-safe Pascalcase. So moving from `<ion-button>A great button</ion-button>` to

```
import { IonButton } from 'ionic-svelte/experimental/components/IonButton.svelte';
<IonButton>A great button</IonButton>
```

Experimental also has version of `setupIonicSvelte`.

So if you want to use this, change imports from ` ... from 'ionic-svelte` to ` ... from 'ionic-svelte/experimental`
