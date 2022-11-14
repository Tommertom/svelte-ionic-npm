<script lang="ts">
  const nav = document.querySelector("ion-nav");

  export let color = undefined;
  export let disabled = false;
  export let icon = undefined;
  export let text = undefined;
  /*
  const isMd = document.querySelector("html").className.includes("md");
  if (!icon) {
    icon = isMd ? "arrow-back" : "arrow-back";
  }

  if (!text && isMd) {
    text = "Back";
  }

  if (!color) {
    color = "primary";
  }

  const popWindow = () => {
    if (!disabled) {
      if (nav) {
        nav.pop();
      } else {
        window.history.back();
      }
    }
  };
*/
</script>

<ion-button on:click={popWindow}>
  <in-icon name={icon} {color} />
</ion-button>
