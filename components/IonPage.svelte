<script>
  import { fly } from "svelte/transition";

  import { onDestroy, onMount } from "svelte";
  // import { beforeNavigate } from "$app/navigation"; -- THIS GIVES ERROR - cannot resolve $app/navigation

  export const ionViewWillEnter = () => {};
  export const ionViewDidEnter = () => {};
  export const ionViewWillLeave = () => {};
  export const ionViewDidLeave = () => {};

  ionViewWillEnter();

  //  beforeNavigate(() => {
  //  ionViewWillLeave();
  //  return true;
  //});

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
