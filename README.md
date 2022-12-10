<h1 align="center"> Ionic SvelteKit NPM </h1> <br>
<p align="center">
  <a href="https://ionicsvelte.firebaseapp.com">
    <img alt="IonicSvelte" title="IonicSvelteKit" src="https://github.com/Tommertom/svelte-ionic-app/raw/main/static/assets/svelte-ionic-logo.png" width="350">
  </a>

</p>
<br>
<p align="center">
  A libary to include Ionic in your Svelte and SvelteKit app 
</p>
<brt>

<h1>NPM library to go along with the Ionic Svelte integration demostrated at ionicsvelte.firebaseapp.com.</h1>

<br>

## How to get started - npm create ionic-svelte-app@latest
On the CLI just type `npm create ionic-svelte-app@latest` to spin a SvelteKit project from the CLI. This will
do all the lifting for you to create a SvelteKit SPA app.

<img alt="create ionic-svelte-app@latest" title="create ionic-svelte-app@latest" src="https://github.com/Tommertom/svelte-ionic-npm/raw/main/packages/create-ionic-svelte-app/create-ionic-svelte-app.png" width="45%">

## Show me Ionic!
A showcase app for all Ionic UI elements, Supercharged by SvelteKit can be found at https://ionicsvelte.firebaseapp.com. This also has a handy tool to show the source code for Svelte - and even Angular, VanillaJS, Vue, React and stencil!

And the code on how to use the components - repo at https://github.com/Tommertom/svelte-ionic-app

## How to get started - manual import of ionic-svelte library
Start a new SvelteKit project (or Svelte with Vite, even though I prefer Kit). Skip this part if you already have a project

```
npm create svelte@latest my-app
cd my-app
npm install
```

We need adapter static + `ssr=false`, because Ionic pages must run as SPA.

- `npm i -D @sveltejs/adapter-static`
- `import adapter from '@sveltejs/adapter-static'` in `svelte.config.js`
- `npm remove @sveltejs/adapter-auto`
- Configure adapter static: https://github.com/sveltejs/kit/tree/master/packages/adapter-static

```
adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
```

- Pages that use Ionic must be a SPA - so these routes need to have ssr disabled in their layout files. Kit example: `src/routes/+layout.ts` and add `export const ssr = false;`

Integration of Ionic

- `npm i @ionic/core@6.3.0 ionic-svelte` - using Ionic 6.3.0
- create a theme folder/file that contains the colours for Ionic (see starterfiles/theme). Example: - create a theme folder/file that contains the colours for Ionic (see starterfiles/theme). Example: https://raw.githubusercontent.com/Tommertom/svelte-ionic-npm/main/starterfiles/theme/variables.css
- the top-route layout file `+layout.svelte` (Kit) or top root module (others) needs to run `setupIonicSvelte()` and import the theme stylesheet before anything else - also see starterfiles/+layout.svelte. Example:

```
<script lang="ts">
	import { setupIonicBase } from 'ionic-svelte';

	/* Theme variables */
	import '../theme/variables.css';

	/* load and register all components - you can also import separately to code split */
    import 'ionic-svelte/components/all';

	/* run base configuration code from ionic/core */
	setupIonicSvelte();
</script>

<ion-app>
   <slot />
</ion-app>

```

And then start working on the content of the app in `+page.svelte`:

```
	Hi there <ion-button>test</ion-button>
```

If you get a 500 internal error-error then likely SSR is not disabled. Making a SvelteKit app a real SPA really requires two steps - adapter static and `ssr=false`

Starterfiles on github: https://github.com/Tommertom/svelte-ionic-npm/tree/main/starterfiles
Use these files as reference to see how to do the final steps integrating Ionic in your svelte project.

Code for this library - https://github.com/Tommertom/svelte-ionic-npm

Ionic-svelte on NPMjs- https://www.npmjs.com/package/ionic-svelte

## How to use components
Ionic components are webcomponents, so appear in your template just like other dom elements. They don't need ECMA imports like `import {IonCard} from '...`. 

```
<ion-card>
Here content
</ion-card>
```

`setupIonicBase` - will register all these Ionic components as webcomponents so you can use them easily. But, there is a trade-off - no tree shaking (unless you change `setupIonicBase` a bit).

## Special components
Due to router incompatability, there are three special compontents included that override/replace the ionic standard webcomponents:

- IonTabs - fixing some default selected tabs as well as fixing compatibility with the router
- IonPage - wrapping the page and providing the ion-lifecycle hooks. And implementing a basic animation
- IonBackButton - a rudimentary fix to the IonBackButton

To be imported from the package: `import { IonTab } from 'ionic-svelte';` etc..

## Typesafety and type-ahead support
The package provides typings for all webcomponents. These can be included in your IDE by adding the following to your the `compilerOptions` section in `tsconfig.json`:

```
		"typeRoots": [
			"./node_modules/ionic-svelte"
		],
		"types": [
			"ionic-svelte"
		]
```

Sample `tsconfig.json`:
```
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"typeRoots": [
			"./node_modules/ionic-svelte"
		],
		"types": [
			"ionic-svelte"
		]
	}
}
```

## Code Splitting to reduce bundle size
In order to reduce bundle size or limit the size of individual chunks, you can replace the 
Example: if you replace the line  `import 'ionic-svelte/components/all';` with imports like below. This can reduce the bundle for that chunk drastically. The import of `all` will result to at least an 800kb chunk (80 components), so it is worth it to change this. 

Please note, you only need to import a component only once, as the import registers the webcomponent globally. So this saves you lots of imports, reducing the bundle as well (compared to tree-shaking).

And never forget to at least `import 'ionic-svelte/components/ion-app';`.

```	
	import 'ionic-svelte/components/ion-app';
	import 'ionic-svelte/components/ion-card';
	import 'ionic-svelte/components/ion-card-title';
	import 'ionic-svelte/components/ion-card-subtitle';
	import 'ionic-svelte/components/ion-card-header';
	import 'ionic-svelte/components/ion-card-content';
	import 'ionic-svelte/components/ion-chip';
	import 'ionic-svelte/components/ion-button';
```


## Known issues with the library

IonPage - ionViewWillLeave will fire together with ionViewDidLeave - because of issue in Kit

## How to contribute?
Would you like to contribute to this project? Great!

First and foremost - share you feedback!!!!!
- For issues with `ionic-svelte` library - https://github.com/Tommertom/svelte-ionic-npm/issues
- Or find me on Ionic's discord server, with a separate Ionic Svelte Channel - https://discordapp.com/channels/520266681499779082/1049388501629681675

And if you want to do more - what is there to do:
- EASY - fix typos (also great for your Github online profile - there are many), add examples for components
- MEDIUM - fix some minor bugs ( e.g. SvelteSpring), improve layout of pages (e.g. SvelteTransition) 
- HARD - look at the open issues below

When you do a PR, make sure you explain what you did and why!

## Issues - help needed/workaround provided

- IonTabs and IonPage have their own implementation only accessible as Svelte component, not web component. Need to figure out how to wrap them into a webcomponent, without loosing animation stuff. Webcomponent of ion-page gives known issue on transition (https://github.com/Auroratide/svelte-custom-element-transitions). So no webcomponent of ion-page available for now. IonPage does seem to work nicely though. Later I might try wrapping the ion-nav in other element and see if that makes the animation go?

- Ion Back Button - does not show nor work - rebuild using https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/back-button/back-button.tsx - you can also make your own and do a history.back?

- IonTabs needs to manually call the select method of ion-tabs to ensure the selectedTab prop is really acted upon. Issue known: https://github.com/ionic-team/ionic-framework/issues/20060. Gives a brief undesireable view on the wrong tab. Might need to look into the angular/react/vue way as these packages don't have this issue. Probably tabs is wired up in the router.

- Gestures: Need a timeout to get proper style value even though I am using onMount??

- Ion Footer in Modal looks not ok - need to test in inline modal as well.

- bind:value does not seem to work on input and other form elements, so a click handler is needed - which is cumbersome - https://github.com/sveltejs/svelte/issues/892 - so probably not solvable without support by Ionic or Svelte - or we need to create wrappers for all elements - which is quite some work and you will be required to manually import all elements you use per page (like with Vue and React) - which seems a drag to me?

Please note - if you use a library such as https://svelte-forms-lib-sapper-docs.vercel.app/introduction together with Yup schemas https://github.com/jquense/yup, the bind:value-issue actually becomes less relevant as you will have the library handle the events and you will use the observables to manage validation and final values to use for further processing. See https://blog.logrocket.com/form-validation-in-svelte/ for nice examples.

- Some styles are unused - related to md and ios options for webcomponents? Or need to be discarded. Probably issue with webcomponents and the nature of Ionic being sensitive to md or ios style (as part of its config)

- Add IonPage, IonTabs and IonBackButton are not part of the default export - these are svelte components, so index.ts cannot handle these (?)

- Ion Icons implementation will not support md and ios specific icons etc (yet) - name prop does not function - also happening in Vue/React.Similar icon issues arise with other component that can digest custom icons (to check) - solution could be to make a svelte IonIcon component, but that will likely import all icons in a non-tree-shakable way?

- Adding custom class to Modal/Popover does not work (using controller) - using inline Modal/Popover is probably better anyway

- In some cases IonPage clips the content enclosed - then you need to remove main tags in IonPage

- Routerlink, href and similar props on components like ion-item do not work properly, but I wonder if support is needed

- Menucontroller does not see the menu by default - you need to register the menu item manually - extra function added to help you with that (`registerMenu(menu-id:string)`) - `<ion-menu {side} content-id="main" menu-id="mainmenu">`see Menu.svelte with working example

- Nav component - works nicely, but implementation might be dirty (leaking DOM elements?). ion-nav-link not implemented.

- ItemSliding sometimes does not catch the gesture

- Many "File not found errors" on css.map files. I frankly don't really mind these. Maybe it is easy to get rid of these, but for now, I leave it.


## Things not being implemented

`ion-router-link`, `ion-router`,`ion-route`, `ion-route-redirect` and `ion-router-outlet` - these are imho obsolete because of usage of the router in this project. But tell me if I am wrong here!

`ion-nav-link` - not sure why not, but haven't used it yet in a project. Maybe my bad. What do you think?

## Acknowledgements

Logo by Brett Peary: https://brettpeary.com/

Ionic UI code: https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api

README inspiration: https://github.com/gitpoint/git-point/blob/master/README.md

PWA logo: https://github.com/webmaxru/progressive-web-apps-logo

Borat logo: https://sapper.svelte.dev/

Raymondboswel's repo: https://github.com/raymondboswel/ionic-svelte-example
