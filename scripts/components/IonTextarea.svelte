<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonTextarea } from '@ionic/core/components/ion-textarea';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-textarea';
    //@ts-ignore
   export let fireFocusEvents = true;
 //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let autocapitalize = 'none';
 //@ts-ignore
   export let autofocus = false;
 //@ts-ignore
   export let clearOnEdit = false;
 //@ts-ignore
   export let debounce = 0;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' = undefined;
 //@ts-ignore
   export let enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' = undefined;
 //@ts-ignore
   export let maxlength: number = undefined;
 //@ts-ignore
   export let minlength: number = undefined;
 //@ts-ignore
   export let name: string = 'label'+Date.now();
 //@ts-ignore
   export let placeholder: string = undefined;
 //@ts-ignore
   export let readonly = false;
 //@ts-ignore
   export let required = false;
 //@ts-ignore
   export let spellcheck = false;
 //@ts-ignore
   export let cols: number = undefined;
 //@ts-ignore
   export let rows: number = undefined;
 //@ts-ignore
   export let wrap: 'hard' | 'soft' | 'off' = undefined;
 //@ts-ignore
   export let autoGrow = false;
 //@ts-ignore
   export let value: string | null = '';
 
    defineComponent('ion-textarea', IonTextarea);
</script>

<svelte:element
this={tag}
{fireFocusEvents}
 {color}
 {autocapitalize}
 {autofocus}
 {clearOnEdit}
 {debounce}
 {disabled}
 {inputmode}
 {enterkeyhint}
 {maxlength}
 {minlength}
 {name}
 {placeholder}
 {readonly}
 {required}
 {spellcheck}
 {cols}
 {rows}
 {wrap}
 {autoGrow}
 {value}
 
{...$$props}
 on:ionChange
 on:ionInput
 on:ionStyle
 on:ionBlur
 on:ionFocus

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
