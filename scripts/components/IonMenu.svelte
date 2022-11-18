<script lang="ts">
    
    import { IonMenu } from '@ionic/core/components/ion-menu';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-menu';
    //@ts-ignore
   export let contentId: string = undefined;
 //@ts-ignore
   export let menuId: string = undefined;
 //@ts-ignore
   export let type: string = undefined;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let side: Side = 'start';
 //@ts-ignore
   export let swipeGesture = true;
 //@ts-ignore
   export let maxEdgeStart = 50;
 
    defineComponent('ion-menu', IonMenu);
</script>

<svelte:element
this={tag}
{contentId}
 {menuId}
 {type}
 {disabled}
 {side}
 {swipeGesture}
 {maxEdgeStart}
 
{...$$props}
 on:ionWillOpen
 on:ionWillClose
 on:ionDidOpen
 on:ionDidClose
 on:ionMenuChange

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
