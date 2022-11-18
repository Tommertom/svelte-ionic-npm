<script lang="ts">
    
    import { IonHeader } from '@ionic/core/components/ion-header';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-header';
    //@ts-ignore
   export let collapse: 'condense' | 'fade' = undefined;
 //@ts-ignore
   export let translucent = false;
 
    defineComponent('ion-header', IonHeader);
</script>

<svelte:element
this={tag}
{collapse}
 {translucent}
 
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
