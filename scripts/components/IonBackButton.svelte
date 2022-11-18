<script lang="ts">
  import type { Color, AnimationBuilder } from "@ionic/core";
  import { IonBackButton } from "@ionic/core/components/ion-back-button";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-back-button";
  //@ts-ignore
  export let color: Color = undefined;
  //@ts-ignore
  export let defaultHref: string = undefined;
  //@ts-ignore
  export let disabled = false;
  //@ts-ignore
  export let icon: string | null = undefined;
  //@ts-ignore
  export let text: string | null = undefined;
  //@ts-ignore
  export let type: "submit" | "reset" | "button" = "button";
  //@ts-ignore
  export let routerAnimation: AnimationBuilder | undefined = undefined;

  defineComponent("ion-back-button", IonBackButton);
</script>

<svelte:element
  this={tag}
  {color}
  {defaultHref}
  {disabled}
  {icon}
  {text}
  {type}
  {routerAnimation}
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
