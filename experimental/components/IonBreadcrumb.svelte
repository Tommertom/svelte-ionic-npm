<script lang="ts">
  import type { Color, RouterDirection, AnimationBuilder } from "@ionic/core";
  import { IonBreadcrumb } from "@ionic/core/components/ion-breadcrumb";
  import { defineComponent } from "ionic-svelte";

  //@ts-ignore
  export let collapsed = false;
  //@ts-ignore
  export let last: boolean;
  //@ts-ignore
  export let showCollapsedIndicator: boolean;
  //@ts-ignore
  export let color: Color = undefined;
  //@ts-ignore
  export let active = false;
  //@ts-ignore
  export let disabled = false;
  //@ts-ignore
  export let download: string | undefined = undefined;
  //@ts-ignore
  export let href: string | undefined = undefined;
  //@ts-ignore
  export let rel: string | undefined = undefined;
  //@ts-ignore
  export let separator: boolean | undefined = undefined;
  //@ts-ignore
  export let target: string | undefined = undefined;
  //@ts-ignore
  export let routerDirection: RouterDirection = "forward";
  //@ts-ignore
  export let routerAnimation: AnimationBuilder | undefined = undefined;

  defineComponent("ion-breadcrumb", IonBreadcrumb);
</script>

<ion-breadcrumb
  {collapsed}
  {last}
  {showCollapsedIndicator}
  {color}
  {active}
  {disabled}
  {download}
  {href}
  {rel}
  {separator}
  {target}
  {routerDirection}
  {routerAnimation}
  on:ionFocus
  on:ionBlur
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
  ><slot /><slot name="start" /><slot name="end" /><slot name="separator" />
</ion-breadcrumb>
