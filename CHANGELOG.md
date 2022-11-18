
# Change Log Ionic-Svelte-NPM
All notable changes to this project will be documented in this file.
 
## 0.5.10
- starting with changelog
- added "experimental" components - in order to move from kebab-case/webcomponent usage to tree-shakeable and type-safe Pascalcase. So moving from `<ion-button>A great button</ion-button>` to 

```
import { IonButton } from 'ionic-svelte/experimental/components/IonButton.svelte';
<IonButton>A great button</IonButton>
```

Experimental also has version of `setupIonicSvelte`. 