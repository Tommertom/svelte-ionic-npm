<script lang="ts">
    import type {Color,RouterDirection,AnimationBuilder} from '@ionic/core';
    import { IonButton } from '@ionic/core/components/ion-button';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-button';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let buttonType = 'button';
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let expand: 'full' | 'block' = undefined;
 //@ts-ignore
   export let fill: 'clear' | 'outline' | 'solid' | 'default' = undefined;
 //@ts-ignore
   export let routerDirection: RouterDirection = 'forward';
 //@ts-ignore
   export let routerAnimation: AnimationBuilder | undefined = undefined;
 //@ts-ignore
   export let download: string | undefined = undefined;
 //@ts-ignore
   export let href: string | undefined = undefined;
 //@ts-ignore
   export let rel: string | undefined = undefined;
 //@ts-ignore
   export let shape: 'round' = undefined;
 //@ts-ignore
   export let size: 'small' | 'default' | 'large' = undefined;
 //@ts-ignore
   export let strong = false;
 //@ts-ignore
   export let target: string | undefined = undefined;
 //@ts-ignore
   export let type: 'submit' | 'reset' | 'button' = 'button';
 //@ts-ignore
   export let form: string | HTMLFormElement = undefined;
 
    defineComponent('ion-button', IonButton);
</script>

<svelte:element
this={tag}
{color}
 {buttonType}
 {disabled}
 {expand}
 {fill}
 {routerDirection}
 {routerAnimation}
 {download}
 {href}
 {rel}
 {shape}
 {size}
 {strong}
 {target}
 {type}
 {form}
 
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
