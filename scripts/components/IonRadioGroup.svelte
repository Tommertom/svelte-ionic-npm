<script lang="ts">
    
    import { IonRadioGroup } from '@ionic/core/components/ion-radio-group';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-radio-group';
    //@ts-ignore
   export let allowEmptySelection = false;
 //@ts-ignore
   export let name: string = 'label'+Date.now();
 //@ts-ignore
   export let value: any | null = undefined;
 
    defineComponent('ion-radio-group', IonRadioGroup);
</script>

<svelte:element
this={tag}
{allowEmptySelection}
 {name}
 {value}
 
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
