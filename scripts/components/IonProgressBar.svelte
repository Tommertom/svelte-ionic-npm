<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonProgressBar } from '@ionic/core/components/ion-progress-bar';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-progress-bar';
    //@ts-ignore
   export let type: 'determinate' | 'indeterminate' = 'determinate';
 //@ts-ignore
   export let reversed = false;
 //@ts-ignore
   export let value = 0;
 //@ts-ignore
   export let buffer = 1;
 //@ts-ignore
   export let color: Color = undefined;
 
    defineComponent('ion-progress-bar', IonProgressBar);
</script>

<svelte:element
this={tag}
{type}
 {reversed}
 {value}
 {buffer}
 {color}
 
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
on:click><slot /></svelte:element
>
