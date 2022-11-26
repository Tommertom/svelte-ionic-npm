<script lang="ts">
    
    import { IonRippleEffect } from '@ionic/core/components/ion-ripple-effect';
	import { defineComponent } from 'ionic-svelte';
    
    

    //@ts-ignore
   export let type: 'bounded' | 'unbounded' = 'bounded';
 
    defineComponent('ion-ripple-effect', IonRippleEffect);
</script>

<ion-ripple-effect
{type}
 

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
on:click><slot/> </ion-ripple-effect>
