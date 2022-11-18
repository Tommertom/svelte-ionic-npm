<script lang="ts">
  import type { SpinnerTypes, IonicSafeString } from "@ionic/core";
  import { IonRefresherContent } from "@ionic/core/components/ion-refresher-content";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-refresher-content";
  //@ts-ignore
  export let pullingIcon: SpinnerTypes | string | null = undefined;
  //@ts-ignore
  export let pullingText: string | IonicSafeString = undefined;
  //@ts-ignore
  export let refreshingSpinner: SpinnerTypes | null = undefined;
  //@ts-ignore
  export let refreshingText: string | IonicSafeString = undefined;

  defineComponent("ion-refresher-content", IonRefresherContent);
</script>

<svelte:element
  this={tag}
  {pullingIcon}
  {pullingText}
  {refreshingSpinner}
  {refreshingText}
  {...$$props}
  on:focus
  on:blur
  on:fullscreenchange
  on:fullscreenerror
  on:scroll
  on:cut
  on:copy
  on:paste
  on:keydown
  on:keypress
  on:keyup
  on:auxclick
  on:click
  on:contextmenu
  on:dblclick
  on:mousedown
  on:mouseenter
  on:mouseleave
  on:mousemove
  on:mouseover
  on:mouseout
  on:mouseup
  on:pointerlockchange
  on:pointerlockerror
  on:select
  on:wheel
  on:drag
  on:dragend
  on:dragenter
  on:dragstart
  on:dragleave
  on:dragover
  on:drop
  on:touchcancel
  on:touchend
  on:touchmove
  on:touchstart
  on:pointerover
  on:pointerenter
  on:pointerdown
  on:pointermove
  on:pointerup
  on:pointercancel
  on:pointerout
  on:pointerleave
  on:gotpointercapture
  on:lostpointercapture
  on:click
  ><slot />
</svelte:element>
