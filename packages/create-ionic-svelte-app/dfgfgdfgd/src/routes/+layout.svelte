<script>
	import { setupIonicSvelte } from 'ionic-svelte';

	/* Call Ionic's setup routine */
	setupIonicSvelte();

	/* Theme variables */
	import '../theme/variables.css';

	/*
		The next command loads and registers all Ionic Webcomponents for you to use.

		This adds at least >800kb (uncompressed) to your bundle.

		You can also choose to import each component you want to use separately.

		It is recommended to do this in this file, as you only need to do such once. But you are free
		to do this elsewhere if you like to code-split differently.

		You can find these import lines to copy here - https://github.com/Tommertom/svelte-ionic-npm/blob/main/components/all.js
	
		Please don't forget to import ion-app in this file when you decide to code-split:
		
	    import 'ionic-svelte/components/ion-app';

		You can report issues here - https://github.com/Tommertom/svelte-ionic-npm/issues

		Want to know what is happening more - follow me on Twitter - https://twitter.com/Tommertomm
	*/
	import 'ionic-svelte/components/all';
</script>

<ion-app>
	<slot />
</ion-app>
