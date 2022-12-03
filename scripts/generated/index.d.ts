

// manually added afterwards
import { ActionSheetButton, AlertButton, AlertInput, Cell, IonicSafeString, PickerButton, PickerColumn, ToastButton, ViewController } from "@ionic/core";
import { NavigationHookResult } from "@ionic/core/dist/types/components/route/route-interface";

// generated typings
declare namespace svelte.JSX {

  interface IntrinsicElements {

    'ion-button': {

      /**
      * The type of button.
      */
      "buttonType"?: string;

      /**
      * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
      */
      "color"?: "danger" | "dark" | "light" | "medium" | "primary" | "secondary" | "success" | "tertiary" | "warning" | string & Record<never, never> | undefined;

      /**
      * If `true`, the user cannot interact with the button.
      */
      "disabled"?: boolean;

      /**
      * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
      */
      "download"?: string | undefined;

      /**
      * Set to `"block"` for a full-width button or to `"full"` for a full-width button with square corners and no left or right borders.
      */
      "expand"?: "block" | "full" | undefined;

      /**
      * Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is `"solid"` except inside of a toolbar, where the default is `"clear"`.
      */
      "fill"?: "clear" | "default" | "outline" | "solid" | undefined;

      /**
      * The HTML form element or form element id. Used to submit a form when the button is not a child of the form.
      */
      "form"?: HTMLFormElement | string | undefined;

      /**
      * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
      */
      "href"?: string | undefined;

      /**
      * The mode determines which platform styles to use.
      */
      "mode"?: "ios" | "md";

      /**
      * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
      */
      "rel"?: string | undefined;

      /**
      * When using a router, it specifies the transition animation when navigating to another page using `href`.
      */
      "routerAnimation"?: ((baseEl: any, opts?: any) => Animation) | undefined;

      /**
      * When using a router, it specifies the transition direction when navigating to another page using `href`.
      */
      "routerDirection"?: "back" | "forward" | "root";

      /**
      * Set to `"round"` for a button with more rounded corners.
      */
      "shape"?: "round" | undefined;

      /**
      * Set to `"small"` for a button with less height and padding, to `"default"` for a button with the default height and padding, or to `"large"` for a button with more height and padding. By default the size is unset, unless the button is inside of an item, where the size is `"small"` by default. Set the size to `"default"` inside of an item to make it a standard size button.
      */
      "size"?: "default" | "large" | "small" | undefined;

      /**
      * If `true`, activates a button with a heavier font weight.
      */
      "strong"?: boolean;

      /**
      * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
      */
      "target"?: string | undefined;

      /**
      * The type of the button.
      */
      "type"?: "button" | "reset" | "submit";
    }

  }
}
