<script lang="ts">
    
    import { IonAccordionGroup } from '@ionic/core/components/ion-accordion-group';
	import { defineComponent } from 'ionic-svelte';
    
    

    //@ts-ignore
   export let animated = true;
 //@ts-ignore
   export let multiple: boolean = undefined;
 //@ts-ignore
   export let value: string | string[] | null = undefined;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let readonly = false;
 //@ts-ignore
   export let expand: 'compact' | 'inset' = 'compact';
 
    defineComponent('ion-accordion-group', IonAccordionGroup);
</script>

<ion-accordion-group
{animated}
 {multiple}
 {value}
 {disabled}
 {readonly}
 {expand}
 
 on:ionChange

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
on:click><slot/> </ion-accordion-group>
