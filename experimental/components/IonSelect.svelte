<script lang="ts">
    
    import { IonSelect } from '@ionic/core/components/ion-select';
	import { defineComponent } from 'ionic-svelte';

    
        import { createEventDispatcher } from "svelte";
        const dispatch=createEventDispatcher()  
        const ionChange= (event)=>{
        value=event.detail.value;
            dispatch("ionChange", event.detail);
        }
        

    const tag='ion-select';
    //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let cancelText = 'Cancel';
 //@ts-ignore
   export let okText = 'OK';
 //@ts-ignore
   export let placeholder: string = undefined;
 //@ts-ignore
   export let name: string = 'label'+Date.now();
 //@ts-ignore
   export let selectedText: string | null = undefined;
 //@ts-ignore
   export let multiple = false;
 //@ts-ignore
   export let compareWith: string | SelectCompareFn | null = undefined;
 //@ts-ignore
   export let value: any | null = undefined;
 
    defineComponent('ion-select', IonSelect);
</script>

<svelte:element
this={tag}
{disabled}
 {cancelText}
 {okText}
 {placeholder}
 {name}
 {selectedText}
 {multiple}
 {compareWith}
 {value}
 
{...$$props}
 on:ionChange
 on:ionCancel
 on:ionDismiss
 on:ionFocus
 on:ionBlur
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
