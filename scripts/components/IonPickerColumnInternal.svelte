<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonPickerColumnInternal } from '@ionic/core/components/ion-picker-column-internal';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-picker-column-internal';
    //@ts-ignore
   export let items: PickerColumnItem[] = [];
 //@ts-ignore
   export let value: string | number = undefined;
 //@ts-ignore
   export let color: Color = 'primary';
 //@ts-ignore
   export let numericInput = false;
 
    defineComponent('ion-picker-column-internal', IonPickerColumnInternal);
</script>

<svelte:element
this={tag}
{items}
 {value}
 {color}
 {numericInput}
 
{...$$props}
 on:ionChange

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
