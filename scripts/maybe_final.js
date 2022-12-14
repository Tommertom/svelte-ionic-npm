// todo - using https://unpkg.com/@ionic/docs@6.3.8/core.json
const fs = require("fs");

const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter;
  }).join('');
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

// load static
const coreJson = require("./core.json"); // 6.3.8 downloaded

const doStuff = () => {
  var dir = "./generated";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const { components } = coreJson;

  console.log('Component count', components.length);

  let typingOutput = '';
  let baseTemplate = `
  // Generated by scripts/maybe_final.js
 
  /* eslint-disable */
  /* tslint:disable */
  import type { HTMLAttributes } from 'svelte/elements';
  import type { AccordionGroupChangeEventDetail, ActionSheetAttributes, ActionSheetButton, AlertButton, AlertInput, AnimationBuilder, AutocompleteTypes, BreadcrumbCollapsedClickEventDetail, CheckboxChangeEventDetail, Color, ComponentProps, ComponentRef, DatetimeChangeEventDetail, DatetimePresentation, DomRenderFn, FooterHeightFn, FrameworkDelegate, HeaderFn, HeaderHeightFn, InputChangeEventDetail, ItemHeightFn, ItemRenderFn, ItemReorderEventDetail, LoadingAttributes, MenuChangeEventDetail, ModalAttributes, ModalBreakpointChangeEventDetail, ModalHandleBehavior, NavComponent, NavComponentWithProps, NavOptions, OverlayEventDetail, PickerAttributes, PickerButton, PickerColumn, PopoverAttributes, PopoverSize, PositionAlign, PositionReference, PositionSide, RadioGroupChangeEventDetail, RangeChangeEventDetail, RangeKnobMoveEndEventDetail, RangeKnobMoveStartEventDetail, RangeValue, RefresherEventDetail, RouteID, RouterDirection, RouterEventDetail, RouterOutletOptions, RouteWrite, ScrollBaseDetail, ScrollDetail, SearchbarChangeEventDetail, SegmentButtonLayout, SegmentChangeEventDetail, SelectChangeEventDetail, SelectInterface, SelectPopoverOption, Side, SpinnerTypes, StyleEventDetail, SwipeGestureHandler, TabBarChangedEventDetail, TabButtonClickEventDetail, TabButtonLayout, TextareaChangeEventDetail, TextFieldTypes, TitleSelectedDatesFormatter, ToastButton, ToggleChangeEventDetail, TransitionDoneFn, TransitionInstruction, TriggerAction, ViewController } from "@ionic/core";
  import type { IonicSafeString, AlertAttributes, CounterFormatter, PinFormatter, SelectCompareFn, ToastAttributes } from "@ionic/core";
  import { Cell } from '@ionic/core';
 
  // not exported by @ionic/core
  export type NavigationHookResult = boolean | NavigationHookOptions;
  export interface NavigationHookOptions {
    redirect: string;
 }
  export interface HTMLBaseAttributes extends HTMLAttributes<HTMLBaseElement> {
  }
  
  declare global {

    namespace svelteHTML {
   
    <COMPONENTTYPES>

      interface IntrinsicElements {

      <COMPONENTDECLARATIONS>

      }
    }
  }     
  `;



  //
  // PART 1 - Typings file
  //
  let componentTypes = ``;
  let componentDeclarations = '';

  components
    //  .filter(component => component.tag == 'ion-button')
    .forEach(component => {
      const { props, events } = component;

      const tagWithoutIon = component.tag.replace('ion-', '');
      const tagAsPascal = toPascalCase(component.tag);

      // pre-amble of this tag
      console.log('Processing ', component.tag, toPascalCase(component.tag))
      componentDeclarations = componentDeclarations + `
  /**
   * ${component.tag}
   * More info: https://ionicframework.com/docs/api/${tagWithoutIon}
   */    
  '${component.tag}': ${tagAsPascal} | HTMLBaseAttributes; \n`;

      // slots support
      componentTypes = componentTypes + `interface ${tagAsPascal} extends EventTarget {\n`;

      // let's dump the props
      console.log('has props', props);
      props.forEach(prop => {

        //   "disabled"?: boolean;
        componentTypes = componentTypes + `
          /**
          * ${prop.docs.replace(/\n/g, ' ')}
          * API info: https://ionicframework.com/docs/api/${tagWithoutIon}#${prop.name.toLowerCase()}
          */
          "${kebabize(prop.name)}"?: ${prop.type};
        `;
      })

      // let's dump the events
      console.log('has props', events);
      events.forEach(event => {

        //     "on:ionSlideReachEnd"?: () => void;
        componentTypes = componentTypes + `
              /**
              * (event : ${event.detail}) => void :  ${event.docs.replace(/\n/g, ' ')}
              */
              "on:${event.event}"?: (event : ${event.detail}) => void;
            `;
      })

      // close definition
      componentTypes = componentTypes + `\n}\n\n`;
    });


  // generate final template
  typingOutput = baseTemplate.replace('<COMPONENTTYPES>', componentTypes).replace('<COMPONENTDECLARATIONS>', componentDeclarations)

  // console.log('Typings output', typingOutput)

  fs.writeFile(
    "../experimental_index.d.ts",
    typingOutput,
    function (err) {
      if (err) return console.log(err);
    }
  );


  //
  // PART 2 - Code splitted imports
  //
  // create the module imports
  let allImportsCode = ``;
  components
    // .filter(component => component.tag == 'ion-input')
    .forEach(component => {
      const { tag } = component;
      const componentCode = `import { defineCustomElement } from '@ionic/core/components/${tag}';\ndefineCustomElement();`;

      allImportsCode = allImportsCode + `import 'ionic-svelte/components/${tag}';\n`;

      fs.writeFile(
        `../components/${tag}.js`,
        componentCode,
        function (err) {
          if (err) return console.log(err);
        }

      );
    })

  // all code imports
  fs.writeFile(
    `../components/all.js`,
    allImportsCode,
    function (err) {
      if (err) return console.log(err);
    }
  );
};

doStuff();


