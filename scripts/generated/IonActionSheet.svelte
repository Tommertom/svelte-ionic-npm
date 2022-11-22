<script lang="ts">
    import type {AnimationBuilder,ActionSheetButton} from '@ionic/core';
    import { IonActionSheet } from '@ionic/core/components/ion-action-sheet';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-action-sheet';
    //@ts-ignore
   export let overlayIndex: number;
 //@ts-ignore
   export let keyboardClose = true;
 //@ts-ignore
   export let enterAnimation: AnimationBuilder = undefined;
 //@ts-ignore
   export let leaveAnimation: AnimationBuilder = undefined;
 //@ts-ignore
   export let buttons: (ActionSheetButton | string)[] = [];
 //@ts-ignore
   export let cssClass: string | string[] = undefined;
 //@ts-ignore
   export let backdropDismiss = true;
 //@ts-ignore
   export let header: string = undefined;
 //@ts-ignore
   export let subHeader: string = undefined;
 //@ts-ignore
   export let translucent = false;
 //@ts-ignore
   export let animated = true;
 //@ts-ignore
   export let htmlAttributes: ActionSheetAttributes = undefined;
 
    defineComponent('ion-action-sheet', IonActionSheet);
</script>

<svelte:element
this={tag}
{overlayIndex}
 {keyboardClose}
 {enterAnimation}
 {leaveAnimation}
 {buttons}
 {cssClass}
 {backdropDismiss}
 {header}
 {subHeader}
 {translucent}
 {animated}
 {htmlAttributes}
 
{...$$props}
 on:ionActionSheetDidPresent
 on:ionActionSheetWillPresent
 on:ionActionSheetWillDismiss
 on:ionActionSheetDidDismiss

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
