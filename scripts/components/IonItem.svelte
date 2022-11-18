<script lang="ts">
    import type {Color,AnimationBuilder,RouterDirection} from '@ionic/core';
    import { IonItem } from '@ionic/core/components/ion-item';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-item';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let button = false;
 //@ts-ignore
   export let detail: boolean = undefined;
 //@ts-ignore
   export let detailIcon = chevronForward;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let download: string | undefined = undefined;
 //@ts-ignore
   export let fill: 'outline' | 'solid' = undefined;
 //@ts-ignore
   export let shape: 'round' = undefined;
 //@ts-ignore
   export let href: string | undefined = undefined;
 //@ts-ignore
   export let rel: string | undefined = undefined;
 //@ts-ignore
   export let lines: 'full' | 'inset' | 'none' = undefined;
 //@ts-ignore
   export let counter = false;
 //@ts-ignore
   export let routerAnimation: AnimationBuilder | undefined = undefined;
 //@ts-ignore
   export let routerDirection: RouterDirection = 'forward';
 //@ts-ignore
   export let target: string | undefined = undefined;
 //@ts-ignore
   export let type: 'submit' | 'reset' | 'button' = 'button';
 //@ts-ignore
   export let counterFormatter: CounterFormatter = undefined;
 
    defineComponent('ion-item', IonItem);
</script>

<svelte:element
this={tag}
{color}
 {button}
 {detail}
 {detailIcon}
 {disabled}
 {download}
 {fill}
 {shape}
 {href}
 {rel}
 {lines}
 {counter}
 {routerAnimation}
 {routerDirection}
 {target}
 {type}
 {counterFormatter}
 
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
