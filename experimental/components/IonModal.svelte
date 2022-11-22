<script lang="ts">
  import type { AnimationBuilder } from "@ionic/core";
  import { IonModal } from "@ionic/core/components/ion-modal";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-modal";
  //@ts-ignore
  export let hasController = false;
  //@ts-ignore
  export let overlayIndex: number;
  //@ts-ignore
  export let delegate: FrameworkDelegate = undefined;
  //@ts-ignore
  export let keyboardClose = true;
  //@ts-ignore
  export let enterAnimation: AnimationBuilder = undefined;
  //@ts-ignore
  export let leaveAnimation: AnimationBuilder = undefined;
  //@ts-ignore
  export let breakpoints: number[] = undefined;
  //@ts-ignore
  export let initialBreakpoint: number = undefined;
  //@ts-ignore
  export let backdropBreakpoint = 0;
  //@ts-ignore
  export let handle: boolean = undefined;
  //@ts-ignore
  export let handleBehavior: ModalHandleBehavior = "none";
  //@ts-ignore
  export let component: ComponentRef = undefined;
  //@ts-ignore
  export let componentProps: ComponentProps = undefined;
  //@ts-ignore
  export let cssClass: string | string[] = undefined;
  //@ts-ignore
  export let backdropDismiss = true;
  //@ts-ignore
  export let showBackdrop = true;
  //@ts-ignore
  export let animated = true;
  //@ts-ignore
  export let swipeToClose = false;
  //@ts-ignore
  export let presentingElement: HTMLElement = undefined;
  //@ts-ignore
  export let htmlAttributes: ModalAttributes = undefined;
  //@ts-ignore
  export let isOpen = false;
  //@ts-ignore
  export let trigger: string | undefined = undefined;
  //@ts-ignore
  export let keepContentsMounted = false;
  //@ts-ignore
  export let canDismiss: undefined | boolean | (() => Promise<boolean>) = undefined;

  defineComponent("ion-modal", IonModal);
</script>

<svelte:element
  this={tag}
  {hasController}
  {overlayIndex}
  {delegate}
  {keyboardClose}
  {enterAnimation}
  {leaveAnimation}
  {breakpoints}
  {initialBreakpoint}
  {backdropBreakpoint}
  {handle}
  {handleBehavior}
  {component}
  {componentProps}
  {cssClass}
  {backdropDismiss}
  {showBackdrop}
  {animated}
  {swipeToClose}
  {presentingElement}
  {htmlAttributes}
  {isOpen}
  {trigger}
  {keepContentsMounted}
  {canDismiss}
  {...$$props}
  on:ionModalDidPresent
  on:ionModalWillPresent
  on:ionModalWillDismiss
  on:ionModalDidDismiss
  on:ionBreakpointDidChange
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
  on:click
  ><slot />
</svelte:element>
