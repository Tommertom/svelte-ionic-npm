<script lang="ts">
    
    import { IonTab } from '@ionic/core/components/ion-tab';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-tab';
    //@ts-ignore
   export let active = false;
 //@ts-ignore
   export let delegate: FrameworkDelegate = undefined;
 //@ts-ignore
   export let tab: string;
 //@ts-ignore
   export let component: ComponentRef = undefined;
 
    defineComponent('ion-tab', IonTab);
</script>

<svelte:element
this={tag}
{active}
 {delegate}
 {tab}
 {component}
 
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
on:click><slot /> </svelte:element
>
