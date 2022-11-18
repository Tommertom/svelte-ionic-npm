<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonInput } from '@ionic/core/components/ion-input';
	import { defineComponent } from 'ionic-svelte';

    

    const tag='ion-input';
    //@ts-ignore
   export let fireFocusEvents = true;
 //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let accept: string = undefined;
 //@ts-ignore
   export let autocapitalize = 'off';
 //@ts-ignore
   export let autocomplete: AutocompleteTypes = 'off';
 //@ts-ignore
   export let autocorrect: 'on' | 'off' = 'off';
 //@ts-ignore
   export let autofocus = false;
 //@ts-ignore
   export let clearInput = false;
 //@ts-ignore
   export let clearOnEdit: boolean = undefined;
 //@ts-ignore
   export let debounce = 0;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' = undefined;
 //@ts-ignore
   export let inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' = undefined;
 //@ts-ignore
   export let max: string | number = undefined;
 //@ts-ignore
   export let maxlength: number = undefined;
 //@ts-ignore
   export let min: string | number = undefined;
 //@ts-ignore
   export let minlength: number = undefined;
 //@ts-ignore
   export let multiple: boolean = undefined;
 //@ts-ignore
   export let name: string = 'label'+Date.now();
 //@ts-ignore
   export let pattern: string = undefined;
 //@ts-ignore
   export let placeholder: string = undefined;
 //@ts-ignore
   export let readonly = false;
 //@ts-ignore
   export let required = false;
 //@ts-ignore
   export let spellcheck = false;
 //@ts-ignore
   export let step: string = undefined;
 //@ts-ignore
   export let size: number = undefined;
 //@ts-ignore
   export let type: TextFieldTypes = 'text';
 //@ts-ignore
   export let value: string | number | null = '';
 
    defineComponent('ion-input', IonInput);
</script>

<svelte:element
this={tag}
{fireFocusEvents}
 {color}
 {accept}
 {autocapitalize}
 {autocomplete}
 {autocorrect}
 {autofocus}
 {clearInput}
 {clearOnEdit}
 {debounce}
 {disabled}
 {enterkeyhint}
 {inputmode}
 {max}
 {maxlength}
 {min}
 {minlength}
 {multiple}
 {name}
 {pattern}
 {placeholder}
 {readonly}
 {required}
 {spellcheck}
 {step}
 {size}
 {type}
 {value}
 
{...$$props}
 on:ionInput
 on:ionChange
 on:ionBlur
 on:ionFocus
 on:ionStyle

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
