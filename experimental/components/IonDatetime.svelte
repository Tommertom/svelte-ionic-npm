<script lang="ts">
  import type { Color } from "@ionic/core";
  import { IonDatetime } from "@ionic/core/components/ion-datetime";
  import { defineComponent } from "ionic-svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const ionChange = (event) => {
    value = event.detail.value;
    dispatch("ionChange", event.detail);
  };

  const tag = "ion-datetime";
  //@ts-ignore
  export let color: Color = "primary";
  //@ts-ignore
  export let name: string = "label" + Date.now();
  //@ts-ignore
  export let disabled = false;
  //@ts-ignore
  export let readonly = false;
  //@ts-ignore
  export let isDateEnabled: (dateIsoString: string) => boolean;
  //@ts-ignore
  export let min: string = undefined;
  //@ts-ignore
  export let max: string = undefined;
  //@ts-ignore
  export let presentation: DatetimePresentation = "date-time";
  //@ts-ignore
  export let cancelText = "Cancel";
  //@ts-ignore
  export let doneText = "Done";
  //@ts-ignore
  export let clearText = "Clear";
  //@ts-ignore
  export let yearValues: number[] | number | string = undefined;
  //@ts-ignore
  export let monthValues: number[] | number | string = undefined;
  //@ts-ignore
  export let dayValues: number[] | number | string = undefined;
  //@ts-ignore
  export let hourValues: number[] | number | string = undefined;
  //@ts-ignore
  export let minuteValues: number[] | number | string = undefined;
  //@ts-ignore
  export let locale = "default";
  //@ts-ignore
  export let firstDayOfWeek = 0;
  //@ts-ignore
  export let titleSelectedDatesFormatter: TitleSelectedDatesFormatter = undefined;
  //@ts-ignore
  export let multiple = false;
  //@ts-ignore
  export let value: string | string[] | null = undefined;
  //@ts-ignore
  export let showDefaultTitle = false;
  //@ts-ignore
  export let showDefaultButtons = false;
  //@ts-ignore
  export let showClearButton = false;
  //@ts-ignore
  export let showDefaultTimeLabel = true;
  //@ts-ignore
  export let hourCycle: "h23" | "h12" = undefined;
  //@ts-ignore
  export let size: "cover" | "fixed" = "fixed";
  //@ts-ignore
  export let preferWheel = false;

  defineComponent("ion-datetime", IonDatetime);
</script>

<svelte:element
  this={tag}
  {color}
  {name}
  {disabled}
  {readonly}
  {isDateEnabled}
  {min}
  {max}
  {presentation}
  {cancelText}
  {doneText}
  {clearText}
  {yearValues}
  {monthValues}
  {dayValues}
  {hourValues}
  {minuteValues}
  {locale}
  {firstDayOfWeek}
  {titleSelectedDatesFormatter}
  {multiple}
  {value}
  {showDefaultTitle}
  {showDefaultButtons}
  {showClearButton}
  {showDefaultTimeLabel}
  {hourCycle}
  {size}
  {preferWheel}
  {...$$props}
  on:ionCancel
  on:ionChange={ionChange}
  on:ionFocus
  on:ionBlur
  on:ionStyle
  on:ionRender
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
