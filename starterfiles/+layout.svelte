<script lang="ts">
  // here your menu component
  import Menu from "$lib/components/Menu.svelte";

  import { setupIonicSvelte } from "ionic-svelte";

  /* Theme variables */
  import "../theme/variables.css";

  setupIonicSvelte();
</script>

<ion-app>
  <ion-split-pane content-id="main">
    <Menu />
    <div class="ion-page" id="main">
      <slot />
    </div>
  </ion-split-pane>
</ion-app>
