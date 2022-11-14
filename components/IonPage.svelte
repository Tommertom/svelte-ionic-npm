<script lang="ts">
	import { fly } from 'svelte/transition';

	import { onDestroy, onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';

	export let ionViewWillEnter = () => {};
	export let ionViewDidEnter = () => {};
	export let ionViewWillLeave = () => {};
	export let ionViewDidLeave = () => {};

	ionViewWillEnter();

	beforeNavigate(() => {
		ionViewWillLeave();
		return true;
	});

	onMount(() => {
		ionViewDidEnter();
	});

	onDestroy(() => {
		ionViewDidLeave();
	});
</script>

<div class="ion-page" in:fly={{ x: 1000, duration: 300 }} out:fly={{ x: -1000, duration: 300 }}>
	<slot />
</div>
