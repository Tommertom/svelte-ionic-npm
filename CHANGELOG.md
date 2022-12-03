# Change Log Ionic-Svelte-NPM

All notable changes to this project will be documented in this file.

## 0.5.23
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
