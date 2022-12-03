<script>
	import { setupIonicSvelte } from 'ionic-svelte';

	/* Theme variables */
	import '../theme/variables.css';

	setupIonicSvelte();
</script>

<ion-app>
	<slot />
</ion-app>
