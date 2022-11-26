<script lang="ts">
  import { IonRadioGroup } from "@ionic/core/components/ion-radio-group";
  import { defineComponent } from "ionic-svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const ionChange = (event) => {
    value = event.detail.value;
    dispatch("ionChange", event.detail);
  };

  //@ts-ignore
  export let allowEmptySelection = false;
  //@ts-ignore
  export let name: string = "label" + Date.now();
  //@ts-ignore
  export let value: any | null = undefined;

  defineComponent("ion-radio-group", IonRadioGroup);
</script>

<ion-radio-group
  {allowEmptySelection}
  {name}
  {value}
  on:ionChange={ionChange}
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
</ion-radio-group>
