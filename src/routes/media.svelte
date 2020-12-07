<script lang="ts">
  import { onMount } from "svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import pictures from "../utils/pictures";

  let section: HTMLElement;
  let gap: number;
  let nCols: number;
  let items: HTMLElement[];

  const ELEMENT_NODE_TYPE = 1;

  function layout() {
    const newNCols = getComputedStyle(section).gridTemplateColumns.split(" ").length;

    if (nCols !== newNCols) {
      nCols = newNCols;
      items.forEach((c) => c.style.removeProperty("margin-top"));
      if (nCols > 1) {
        items.slice(nCols).forEach((col, i) => {
          const prevFin = items[i].getBoundingClientRect().bottom; // bottom edge of item above
          const currIni = col.getBoundingClientRect().top; // top edge of current item
          col.style.marginTop = `${prevFin + gap - currIni}px`;
        });
      }
      items.forEach((c) => c.removeAttribute("data-src"));
    }
  }

  onMount(() => {
    if (section && getComputedStyle(section).gridTemplateRows !== "masonry") {
      gap = parseFloat(getComputedStyle(section).gridRowGap);
      items = Array.from(section.childNodes).filter((c): c is HTMLElement => c.nodeType === ELEMENT_NODE_TYPE);
      nCols = 0;
      setTimeout(layout, 1000);
      addEventListener("resize", layout, false);
    }
  });
</script>

<style>
  section {
    --space: 0.5em;
    --width: min(25em, 100%);

    display: grid;
    grid-template-columns: repeat(auto-fit, var(--width));
    justify-content: center;
    grid-gap: var(--space);
    padding: var(--space);
    grid-template-rows: masonry;
  }

  section > * {
    width: var(--width);
  }

  img {
    opacity: 1;
    transition: opacity 1s;
  }

  img[data-src] {
    opacity: 0;
  }
</style>

<svelte:head>
  <title>Lauren Settembrino - Media</title>
</svelte:head>

<ContentContainer page="Media">
  <section bind:this={section}>
    {#each pictures as { src, alt }}<img data-src={src} {src} {alt} loading="lazy" />{/each}
  </section>
</ContentContainer>
