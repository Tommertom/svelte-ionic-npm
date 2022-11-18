<script lang="ts">
  import { IonVirtualScroll } from "@ionic/core/components/ion-virtual-scroll";
  import { defineComponent } from "ionic-svelte";

  const tag = "ion-virtual-scroll";
  //@ts-ignore
  export let approxItemHeight = 45;
  //@ts-ignore
  export let approxHeaderHeight = 30;
  //@ts-ignore
  export let approxFooterHeight = 30;
  //@ts-ignore
  export let headerFn: HeaderFn = undefined;
  //@ts-ignore
  export let footerFn: HeaderFn = undefined;
  //@ts-ignore
  export let items: any[] = undefined;
  //@ts-ignore
  export let itemHeight: ItemHeightFn = undefined;
  //@ts-ignore
  export let headerHeight: HeaderHeightFn = undefined;
  //@ts-ignore
  export let footerHeight: FooterHeightFn = undefined;
  //@ts-ignore
  export let renderItem: (item: any, index: number) => any;
  //@ts-ignore
  export let renderHeader: (item: any, index: number) => any;
  //@ts-ignore
  export let renderFooter: (item: any, index: number) => any;
  //@ts-ignore
  export let nodeRender: ItemRenderFn = undefined;
  //@ts-ignore
  export let domRender: DomRenderFn = undefined;

  defineComponent("ion-virtual-scroll", IonVirtualScroll);
</script>

<svelte:element
  this={tag}
  {approxItemHeight}
  {approxHeaderHeight}
  {approxFooterHeight}
  {headerFn}
  {footerFn}
  {items}
  {itemHeight}
  {headerHeight}
  {footerHeight}
  {renderItem}
  {renderHeader}
  {renderFooter}
  {nodeRender}
  {domRender}
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
  on:click
  ><slot />
</svelte:element>
