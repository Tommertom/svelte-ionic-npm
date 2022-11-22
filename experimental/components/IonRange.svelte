<script lang="ts">
  import type { Color } from "@ionic/core";
  import { IonRange } from "@ionic/core/components/ion-range";
  import { defineComponent } from "ionic-svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const ionChange = (event) => {
    value = event.detail.value;
    dispatch("ionChange", event.detail);
  };

  const tag = "ion-range";
  //@ts-ignore
  export let color: Color = undefined;
  //@ts-ignore
  export let debounce = 0;
  //@ts-ignore
  export let name = "";
  //@ts-ignore
  export let dualKnobs = false;
  //@ts-ignore
  export let min = 0;
  //@ts-ignore
  export let max = 100;
  //@ts-ignore
  export let pin = false;
  //@ts-ignore
  export let pinFormatter: PinFormatter = (value: number): number => Math.round(value);
  //@ts-ignore
  export let snaps = false;
  //@ts-ignore
  export let step = 1;
  //@ts-ignore
  export let ticks = true;
  //@ts-ignore
  export let activeBarStart: number = undefined;
  //@ts-ignore
  export let disabled = false;
  //@ts-ignore
  export let value: RangeValue = 0;

  defineComponent("ion-range", IonRange);
</script>

<svelte:element
  this={tag}
  {color}
  {debounce}
  {name}
  {dualKnobs}
  {min}
  {max}
  {pin}
  {pinFormatter}
  {snaps}
  {step}
  {ticks}
  {activeBarStart}
  {disabled}
  {value}
  {...$$props}
  on:ionChange={ionChange}
  on:ionStyle
  on:ionFocus
  on:ionBlur
  on:ionKnobMoveStart
  on:ionKnobMoveEnd
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
