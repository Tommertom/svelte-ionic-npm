<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonSegment } from '@ionic/core/components/ion-segment';
	import { defineComponent } from 'ionic-svelte';

    
        import { createEventDispatcher } from "svelte";
        const dispatch=createEventDispatcher()  
        const ionChange= (event)=>{
        value=event.detail.value;
            dispatch("ionChange", event.detail);
        }
        

    const tag='ion-segment';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let scrollable = false;
 //@ts-ignore
   export let swipeGesture = true;
 //@ts-ignore
   export let value: string | null = undefined;
 //@ts-ignore
   export let selectOnFocus = false;
 
    defineComponent('ion-segment', IonSegment);
</script>

<svelte:element
this={tag}
{color}
 {disabled}
 {scrollable}
 {swipeGesture}
 {value}
 {selectOnFocus}
 
{...$$props}
 on:ionChange
 on:ionSelect
 on:ionStyle

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
on:click><slot /> </svelte:element
>
