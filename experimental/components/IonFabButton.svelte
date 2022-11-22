<script lang="ts">
    import type {Color,RouterDirection,AnimationBuilder} from '@ionic/core';
    import { IonFabButton } from '@ionic/core/components/ion-fab-button';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-fab-button';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let activated = false;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let download: string | undefined = undefined;
 //@ts-ignore
   export let href: string | undefined = undefined;
 //@ts-ignore
   export let rel: string | undefined = undefined;
 //@ts-ignore
   export let routerDirection: RouterDirection = 'forward';
 //@ts-ignore
   export let routerAnimation: AnimationBuilder | undefined = undefined;
 //@ts-ignore
   export let target: string | undefined = undefined;
 //@ts-ignore
   export let show = false;
 //@ts-ignore
   export let translucent = false;
 //@ts-ignore
   export let type: 'submit' | 'reset' | 'button' = 'button';
 //@ts-ignore
   export let size: 'small' = undefined;
 //@ts-ignore
   export let closeIcon = close;
 
    defineComponent('ion-fab-button', IonFabButton);
</script>

<svelte:element
this={tag}
{color}
 {activated}
 {disabled}
 {download}
 {href}
 {rel}
 {routerDirection}
 {routerAnimation}
 {target}
 {show}
 {translucent}
 {type}
 {size}
 {closeIcon}
 
{...$$props}
 on:ionFocus
 on:ionBlur

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
