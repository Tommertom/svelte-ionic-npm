<script lang="ts">
    
    import { IonSelectPopover } from '@ionic/core/components/ion-select-popover';
	import { defineComponent } from 'ionic-svelte';
    
    

    //@ts-ignore
   export let header: string = undefined;
 //@ts-ignore
   export let subHeader: string = undefined;
 //@ts-ignore
   export let message: string = undefined;
 //@ts-ignore
   export let multiple: boolean = undefined;
 //@ts-ignore
   export let options: SelectPopoverOption[] = [];
 
    defineComponent('ion-select-popover', IonSelectPopover);
</script>

<ion-select-popover
{header}
 {subHeader}
 {message}
 {multiple}
 {options}
 

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
on:click><slot/> </ion-select-popover>
