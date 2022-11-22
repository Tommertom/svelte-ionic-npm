<script lang="ts">
  import type { AnimationBuilder, PickerButton, PickerColumn } from "@ionic/core";
  import { IonPicker } from "@ionic/core/components/ion-picker";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-picker";
  //@ts-ignore
  export let overlayIndex: number;
  //@ts-ignore
  export let keyboardClose = true;
  //@ts-ignore
  export let enterAnimation: AnimationBuilder = undefined;
  //@ts-ignore
  export let leaveAnimation: AnimationBuilder = undefined;
  //@ts-ignore
  export let buttons: PickerButton[] = [];
  //@ts-ignore
  export let columns: PickerColumn[] = [];
  //@ts-ignore
  export let cssClass: string | string[] = undefined;
  //@ts-ignore
  export let duration = 0;
  //@ts-ignore
  export let showBackdrop = true;
  //@ts-ignore
  export let backdropDismiss = true;
  //@ts-ignore
  export let animated = true;
  //@ts-ignore
  export let htmlAttributes: PickerAttributes = undefined;

  defineComponent("ion-picker", IonPicker);
</script>

<svelte:element
  this={tag}
  {overlayIndex}
  {keyboardClose}
  {enterAnimation}
  {leaveAnimation}
  {buttons}
  {columns}
  {cssClass}
  {duration}
  {showBackdrop}
  {backdropDismiss}
  {animated}
  {htmlAttributes}
  {...$$props}
  on:ionPickerDidPresent
  on:ionPickerWillPresent
  on:ionPickerWillDismiss
  on:ionPickerDidDismiss
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
