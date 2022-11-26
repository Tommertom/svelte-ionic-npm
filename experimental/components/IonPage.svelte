<script>
  import { fly } from "svelte/transition";

  import { onDestroy, onMount } from "svelte";
  // import { beforeNavigate } from "@sveltejs/kit/src/runtime/app/navigation"; // gives error - https://github.com/sveltejs/kit/issues/5879

  export const ionViewWillEnter = () => {};
  export const ionViewDidEnter = () => {};
  export const ionViewWillLeave = () => {};
  export const ionViewDidLeave = () => {};

  ionViewWillEnter();

  // to include when beforeNavigate issue is fixed
  //  beforeNavigate(() => {
  //    ionViewWillLeave();
  //    return true;
  //  });

  onMount(() => {
    ionViewDidEnter();
  });

  onDestroy(() => {
    ionViewWillLeave(); // to be removed once beforeNavigate is fixed
    ionViewDidLeave();
  });
</script>

<div
  class="ion-page"
  in:fly={{ x: 1000, duration: 300 }}
  out:fly={{ x: -1000, duration: 300 }}
>
  <slot />
</div>
