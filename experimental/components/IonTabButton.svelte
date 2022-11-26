<script lang="ts">
  import { IonTabButton } from "@ionic/core/components/ion-tab-button";
  import { defineComponent } from "ionic-svelte";

  //@ts-ignore
  export let disabled = false;
  //@ts-ignore
  export let download: string | undefined = undefined;
  //@ts-ignore
  export let href: string | undefined = undefined;
  //@ts-ignore
  export let rel: string | undefined = undefined;
  //@ts-ignore
  export let layout: TabButtonLayout = undefined;
  //@ts-ignore
  export let selected = false;
  //@ts-ignore
  export let tab: string = undefined;
  //@ts-ignore
  export let target: string | undefined = undefined;

  defineComponent("ion-tab-button", IonTabButton);
</script>

<ion-tab-button
  {disabled}
  {download}
  {href}
  {rel}
  {layout}
  {selected}
  {tab}
  {target}
  on:ionTabButtonClick
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
</ion-tab-button>
