<script lang="ts">
    import type {Color} from '@ionic/core';
    import { IonSearchbar } from '@ionic/core/components/ion-searchbar';
	import { defineComponent } from 'ionic-svelte';

    
      import { config } from '@ionic/core'
      import { arrowBackSharp, closeCircle, closeSharp, searchOutline, searchSharp } from 'ionicons/icons';
      

    const tag='ion-searchbar';
    //@ts-ignore
   export let color: Color = undefined;
 //@ts-ignore
   export let animated = false;
 //@ts-ignore
   export let autocomplete: AutocompleteTypes = 'off';
 //@ts-ignore
   export let autocorrect: 'on' | 'off' = 'off';
 //@ts-ignore
   export let cancelButtonIcon = config.get('backButtonIcon', arrowBackSharp) as string;
 //@ts-ignore
   export let cancelButtonText = 'Cancel';
 //@ts-ignore
   export let clearIcon: string = undefined;
 //@ts-ignore
   export let debounce = 250;
 //@ts-ignore
   export let disabled = false;
 //@ts-ignore
   export let inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' = undefined;
 //@ts-ignore
   export let enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' = undefined;
 //@ts-ignore
   export let placeholder = 'Search';
 //@ts-ignore
   export let searchIcon: string = undefined;
 //@ts-ignore
   export let showCancelButton: 'never' | 'focus' | 'always' = 'never';
 //@ts-ignore
   export let showClearButton: 'never' | 'focus' | 'always' = 'always';
 //@ts-ignore
   export let spellcheck = false;
 //@ts-ignore
   export let type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' = 'search';
 //@ts-ignore
   export let value: string | null = '';
 
    defineComponent('ion-searchbar', IonSearchbar);
</script>

<svelte:element
this={tag}
{color}
 {animated}
 {autocomplete}
 {autocorrect}
 {cancelButtonIcon}
 {cancelButtonText}
 {clearIcon}
 {debounce}
 {disabled}
 {inputmode}
 {enterkeyhint}
 {placeholder}
 {searchIcon}
 {showCancelButton}
 {showClearButton}
 {spellcheck}
 {type}
 {value}
 
{...$$props}
 on:ionInput
 on:ionChange
 on:ionCancel
 on:ionClear
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
