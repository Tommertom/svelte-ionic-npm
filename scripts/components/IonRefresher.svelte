<script lang="ts">
  import { IonRefresher } from "@ionic/core/components/ion-refresher";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-refresher";
  //@ts-ignore
  export let pullMin = 60;
  //@ts-ignore
  export let pullMax: number = pullMin + 60;
  //@ts-ignore
  export let closeDuration = "280ms";
  //@ts-ignore
  export let snapbackDuration = "280ms";
  //@ts-ignore
  export let pullFactor = 1;
  //@ts-ignore
  export let disabled = false;

  defineComponent("ion-refresher", IonRefresher);
</script>

<svelte:element
  this={tag}
  {pullMin}
  {pullMax}
  {closeDuration}
  {snapbackDuration}
  {pullFactor}
  {disabled}
  {...$$props}
  on:ionRefresh
  on:ionPull
  on:ionStart
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
