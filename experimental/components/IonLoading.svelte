<script lang="ts">
  import type { AnimationBuilder, IonicSafeString, SpinnerTypes } from "@ionic/core";
  import { IonLoading } from "@ionic/core/components/ion-loading";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-loading";
  //@ts-ignore
  export let overlayIndex: number;
  //@ts-ignore
  export let keyboardClose = true;
  //@ts-ignore
  export let enterAnimation: AnimationBuilder = undefined;
  //@ts-ignore
  export let leaveAnimation: AnimationBuilder = undefined;
  //@ts-ignore
  export let message: string | IonicSafeString = undefined;
  //@ts-ignore
  export let cssClass: string | string[] = undefined;
  //@ts-ignore
  export let duration = 0;
  //@ts-ignore
  export let backdropDismiss = false;
  //@ts-ignore
  export let showBackdrop = true;
  //@ts-ignore
  export let spinner: SpinnerTypes | null = undefined;
  //@ts-ignore
  export let translucent = false;
  //@ts-ignore
  export let animated = true;
  //@ts-ignore
  export let htmlAttributes: LoadingAttributes = undefined;

  defineComponent("ion-loading", IonLoading);
</script>

<svelte:element
  this={tag}
  {overlayIndex}
  {keyboardClose}
  {enterAnimation}
  {leaveAnimation}
  {message}
  {cssClass}
  {duration}
  {backdropDismiss}
  {showBackdrop}
  {spinner}
  {translucent}
  {animated}
  {htmlAttributes}
  {...$$props}
  on:ionLoadingDidPresent
  on:ionLoadingWillPresent
  on:ionLoadingWillDismiss
  on:ionLoadingDidDismiss
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
</svelte:element>
