<script lang="ts">
  import { onMount, type SvelteComponent } from "svelte";
  export let NavHome;

  //@ts-ignore
  export let ionNav: HTMLIonNavElement = undefined; // can this be used by the parent to get the ionNav inside?

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

  let root;

  onMount(() => {
    root = createHTMLCompFromSvelte(NavHome, {});
  });

  // needs to implement all props and slots https://ionicframework.com/docs/api/nav
  // and how to expose methods?
</script>

<ion-nav bind:this={ionNav} {...$$props} {root} on:ionNavDidChange on:ionNavWillChange />
