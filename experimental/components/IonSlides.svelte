<script lang="ts">
  import { IonSlides } from "@ionic/core/components/ion-slides";
  import { defineComponent } from "ionic-svelte";

  //@ts-ignore
  export let options: any = {}; // SwiperOptions;  // TODO
  //@ts-ignore
  export let pager = false;
  //@ts-ignore
  export let scrollbar = false;

  defineComponent("ion-slides", IonSlides);
</script>

<ion-slides
  {options}
  {pager}
  {scrollbar}
  on:ionSlidesDidLoad
  on:ionSlideTap
  on:ionSlideDoubleTap
  on:ionSlideWillChange
  on:ionSlideDidChange
  on:ionSlideNextStart
  on:ionSlidePrevStart
  on:ionSlideNextEnd
  on:ionSlidePrevEnd
  on:ionSlideTransitionStart
  on:ionSlideTransitionEnd
  on:ionSlideDrag
  on:ionSlideReachStart
  on:ionSlideReachEnd
  on:ionSlideTouchStart
  on:ionSlideTouchEnd
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
</ion-slides>
