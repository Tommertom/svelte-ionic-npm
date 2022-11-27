<script lang="ts">
    
    import { IonCol } from '@ionic/core/components/ion-col';
	import { defineComponent } from 'ionic-svelte';
    
    

    //@ts-ignore
   export let offset: string = undefined;
 //@ts-ignore
   export let offsetXs: string = undefined;
 //@ts-ignore
   export let offsetSm: string = undefined;
 //@ts-ignore
   export let offsetMd: string = undefined;
 //@ts-ignore
   export let offsetLg: string = undefined;
 //@ts-ignore
   export let offsetXl: string = undefined;
 //@ts-ignore
   export let pull: string = undefined;
 //@ts-ignore
   export let pullXs: string = undefined;
 //@ts-ignore
   export let pullSm: string = undefined;
 //@ts-ignore
   export let pullMd: string = undefined;
 //@ts-ignore
   export let pullLg: string = undefined;
 //@ts-ignore
   export let pullXl: string = undefined;
 //@ts-ignore
   export let push: string = undefined;
 //@ts-ignore
   export let pushXs: string = undefined;
 //@ts-ignore
   export let pushSm: string = undefined;
 //@ts-ignore
   export let pushMd: string = undefined;
 //@ts-ignore
   export let pushLg: string = undefined;
 //@ts-ignore
   export let pushXl: string = undefined;
 //@ts-ignore
   export let size: string = undefined;
 //@ts-ignore
   export let sizeXs: string = undefined;
 //@ts-ignore
   export let sizeSm: string = undefined;
 //@ts-ignore
   export let sizeMd: string = undefined;
 //@ts-ignore
   export let sizeLg: string = undefined;
 //@ts-ignore
   export let sizeXl: string = undefined;
 
    defineComponent('ion-col', IonCol);
</script>

<ion-col
{offset}
 {offsetXs}
 {offsetSm}
 {offsetMd}
 {offsetLg}
 {offsetXl}
 {pull}
 {pullXs}
 {pullSm}
 {pullMd}
 {pullLg}
 {pullXl}
 {push}
 {pushXs}
 {pushSm}
 {pushMd}
 {pushLg}
 {pushXl}
 {size}
 {sizeXs}
 {sizeSm}
 {sizeMd}
 {sizeLg}
 {sizeXl}
 

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
on:click><slot/> </ion-col>
