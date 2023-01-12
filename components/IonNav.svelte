<script lang="ts">
  import { onMount, type SvelteComponent } from "svelte";
  import { setActiveNavElement } from "../utils/navcontroller";

  export let NavHome: any;

  //@ts-ignore We need this export so the NavHome element has access to ion-nav and its methods
  export let ionNav: HTMLIonNavElement = undefined;

  const createHTMLCompFromSvelte = (
    component: new (...args: any) => SvelteComponent,
    componentProps: {}
  ) => {
    const divWrapper = document.createElement("div");
    const contentID = "id" + Date.now();
    divWrapper.id = contentID;

    let navContent = document.createElement("div");

    divWrapper.appendChild(navContent);
    document.body.appendChild(divWrapper);

    const props = {
      ...componentProps,
      ionNav,
    };

    const svelteComponent = new component({
      target: navContent,
      props,
    });

    return divWrapper;
  };

  let root: HTMLElement;

  onMount(() => {
    //@ts-ignore
    root = createHTMLCompFromSvelte(NavHome, {});
    setActiveNavElement(ionNav);
  });
</script>

<ion-nav bind:this={ionNav} {...$$props} {root} on:ionNavDidChange on:ionNavWillChange />
