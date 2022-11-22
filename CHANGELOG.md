
# Change Log Ionic-Svelte-NPM
All notable changes to this project will be documented in this file.
 
## 0.5.15
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