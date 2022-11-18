<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonContent } from '@ionic/core/components/ion-content';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-content';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let fullscreen = false;
 //@ts-ignore
   export let forceOverscroll: boolean = undefined;
 //@ts-ignore
   export let scrollX = false;
 //@ts-ignore
   export let scrollY = true;
 //@ts-ignore
   export let scrollEvents = false;
 
    defineComponent('ion-content', IonContent);
</script>

<svelte:element
this={tag}
{color}
 {fullscreen}
 {forceOverscroll}
 {scrollX}
 {scrollY}
 {scrollEvents}
 
{...$$props}
 on:ionScrollStart
 on:ionScroll
 on:ionScrollEnd

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
on:click><slot /></svelte:element
>
