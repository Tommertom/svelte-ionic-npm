<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonBreadcrumbs } from '@ionic/core/components/ion-breadcrumbs';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-breadcrumbs';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let maxItems: number = undefined;
 //@ts-ignore
   export let itemsBeforeCollapse = 1;
 //@ts-ignore
   export let itemsAfterCollapse = 1;
 
    defineComponent('ion-breadcrumbs', IonBreadcrumbs);
</script>

<svelte:element
this={tag}
{color}
 {maxItems}
 {itemsBeforeCollapse}
 {itemsAfterCollapse}
 
{...$$props}
 on:ionCollapsedClick

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
