<script lang="ts">
  import type { AnimationBuilder, Animation } from "@ionic/core";
  import { IonNav } from "@ionic/core/components/ion-nav";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-nav";
  //@ts-ignore
  export let delegate: FrameworkDelegate = undefined;
  //@ts-ignore
  export let swipeGesture: boolean = undefined;
  //@ts-ignore
  export let animated = true;
  //@ts-ignore
  export let animation: AnimationBuilder = undefined;
  //@ts-ignore
  export let rootParams: ComponentProps = undefined;
  //@ts-ignore
  export let root: NavComponent = undefined;

  defineComponent("ion-nav", IonNav);
</script>

<svelte:element
  this={tag}
  {delegate}
  {swipeGesture}
  {animated}
  {animation}
  {rootParams}
  {root}
  {...$$props}
  on:ionNavWillLoad
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
