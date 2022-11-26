<script lang="ts">
    import type {Color,AnimationBuilder,IonicSafeString,ToastButton} from '@ionic/core';
    import { IonToast } from '@ionic/core/components/ion-toast';
	import { defineComponent } from 'ionic-svelte';
    
    

    //@ts-ignore
   export let overlayIndex: number;
 //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let enterAnimation: AnimationBuilder = undefined;
 //@ts-ignore
   export let leaveAnimation: AnimationBuilder = undefined;
 //@ts-ignore
   export let cssClass: string | string[] = undefined;
 //@ts-ignore
   export let duration = 0;
 //@ts-ignore
   export let header: string = undefined;
 //@ts-ignore
   export let message: string | IonicSafeString = undefined;
 //@ts-ignore
   export let keyboardClose = false;
 //@ts-ignore
   export let position: 'top' | 'bottom' | 'middle' = 'bottom';
 //@ts-ignore
   export let buttons: (ToastButton | string)[] = undefined;
 //@ts-ignore
   export let translucent = false;
 //@ts-ignore
   export let animated = true;
 //@ts-ignore
   export let icon: string = undefined;
 //@ts-ignore
   export let htmlAttributes: ToastAttributes = undefined;
 
    defineComponent('ion-toast', IonToast);
</script>

<ion-toast
{overlayIndex}
 {color}
 {enterAnimation}
 {leaveAnimation}
 {cssClass}
 {duration}
 {header}
 {message}
 {keyboardClose}
 {position}
 {buttons}
 {translucent}
 {animated}
 {icon}
 {htmlAttributes}
 
 on:ionToastDidPresent
 on:ionToastWillPresent
 on:ionToastWillDismiss
 on:ionToastDidDismiss

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
on:click><slot/> </ion-toast>
