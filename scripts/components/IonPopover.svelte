<script lang="ts">
    import type {AnimationBuilder} from '@ionic/core';
    import { IonPopover } from '@ionic/core/components/ion-popover';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-popover';
    //@ts-ignore
   export let hasController = false;
 //@ts-ignore
   export let delegate: FrameworkDelegate = undefined;
 //@ts-ignore
   export let overlayIndex: number;
 //@ts-ignore
   export let enterAnimation: AnimationBuilder = undefined;
 //@ts-ignore
   export let leaveAnimation: AnimationBuilder = undefined;
 //@ts-ignore
   export let component: ComponentRef = undefined;
 //@ts-ignore
   export let componentProps: ComponentProps = undefined;
 //@ts-ignore
   export let keyboardClose = true;
 //@ts-ignore
   export let cssClass: string | string[] = undefined;
 //@ts-ignore
   export let backdropDismiss = true;
 //@ts-ignore
   export let event: any;
 //@ts-ignore
   export let showBackdrop = true;
 //@ts-ignore
   export let translucent = false;
 //@ts-ignore
   export let animated = true;
 //@ts-ignore
   export let htmlAttributes: PopoverAttributes = undefined;
 //@ts-ignore
   export let triggerAction: TriggerAction = 'click';
 //@ts-ignore
   export let trigger: string | undefined = undefined;
 //@ts-ignore
   export let size: PopoverSize = 'auto';
 //@ts-ignore
   export let dismissOnSelect = false;
 //@ts-ignore
   export let reference: PositionReference = 'trigger';
 //@ts-ignore
   export let side: PositionSide = 'bottom';
 //@ts-ignore
   export let alignment: PositionAlign = undefined;
 //@ts-ignore
   export let arrow = true;
 //@ts-ignore
   export let isOpen = false;
 //@ts-ignore
   export let keyboardEvents = false;
 //@ts-ignore
   export let keepContentsMounted = false;
 
    defineComponent('ion-popover', IonPopover);
</script>

<svelte:element
this={tag}
{hasController}
 {delegate}
 {overlayIndex}
 {enterAnimation}
 {leaveAnimation}
 {component}
 {componentProps}
 {keyboardClose}
 {cssClass}
 {backdropDismiss}
 {event}
 {showBackdrop}
 {translucent}
 {animated}
 {htmlAttributes}
 {triggerAction}
 {trigger}
 {size}
 {dismissOnSelect}
 {reference}
 {side}
 {alignment}
 {arrow}
 {isOpen}
 {keyboardEvents}
 {keepContentsMounted}
 
{...$$props}
 on:ionPopoverDidPresent
 on:ionPopoverWillPresent
 on:ionPopoverWillDismiss
 on:ionPopoverDidDismiss
 on:ionMount

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
