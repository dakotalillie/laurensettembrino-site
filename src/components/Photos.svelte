<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Modal from "../components/Modal.svelte";

  let section: HTMLElement;
  let gap: number;
  let nCols: number;
  let items: HTMLElement[];
  let loadedCount = 0;

  const pictures = [
    { id: "1", alt: "img1" },
    { id: "2", alt: "img2" },
    { id: "3", alt: "img3" },
    { id: "4", alt: "img4" },
    { id: "5", alt: "img5" },
    { id: "6", alt: "img6" },
    { id: "7", alt: "img7" },
    { id: "8", alt: "img8" },
    { id: "9", alt: "img9" },
    { id: "10", alt: "img10" },
    { id: "11", alt: "img11" },
    { id: "12", alt: "img12" },
    { id: "13", alt: "img13" },
    { id: "14", alt: "img14" },
    { id: "15", alt: "img15" },
    { id: "16", alt: "img16" },
    { id: "17", alt: "img17" },
    { id: "18", alt: "img18" },
    { id: "19", alt: "img19" },
    { id: "20", alt: "img20" },
    { id: "21", alt: "img21" },
    { id: "22", alt: "img22" },
    { id: "23", alt: "img23" },
    { id: "24", alt: "img24" },
    { id: "25", alt: "img25" },
  ];
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
      items.forEach((c) => c.removeAttribute("data-measuring"));
    }
  }

  onMount(() => {
    if (section && getComputedStyle(section).gridTemplateRows !== "masonry") {
      gap = parseFloat(getComputedStyle(section).gridRowGap);
      items = Array.from(section.childNodes).filter((c): c is HTMLElement => {
        return c.nodeType === ELEMENT_NODE_TYPE && (c as HTMLElement).tagName === "BUTTON";
      });
      nCols = 0;
    } else {
      Array.from(section.childNodes)
        .filter((c): c is HTMLElement => {
          return c.nodeType === ELEMENT_NODE_TYPE && (c as HTMLElement).tagName === "BUTTON";
        })
        .forEach((c) => c.removeAttribute("data-measuring"));
    }
  });

  onDestroy(() => {
    if (typeof removeEventListener !== "undefined") {
      removeEventListener("resize", layout);
    }
  });

  function handleLoad() {
    loadedCount++;
  }

  $: if (loadedCount && items.length && loadedCount === items.length) {
    layout();
    addEventListener("resize", layout, false);
  }
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
    min-height: 100vh;
  }

  section > * {
    width: var(--width);
  }

  img.thumbnail {
    display: block;
    width: 100%;
  }

  img.full {
    max-width: 100%;
    max-height: 75vh;
  }

  button {
    align-self: start;
    opacity: 1;
    transition: opacity 500ms;
  }

  button[data-measuring] {
    opacity: 0;
  }
</style>

<section bind:this={section}>
  {#each pictures as { id, alt }}
    <Modal let:open>
      <button slot="trigger" data-measuring="true" on:click={open}>
        <picture>
          <source srcset={`img/${id}.webp`} type="image/webp" />
          <source srcset={`img/${id}.jpg`} type="image/jpeg" />
          <img class="thumbnail" src={`img/${id}.jpg`} {alt} on:load={handleLoad} />
        </picture>
      </button>
      <div slot="content">
        <picture>
          <source srcset={`img/${id}-full.webp`} type="image/webp" />
          <source srcset={`img/${id}-full.jpg`} type="image/jpeg" />
          <img class="full" src={`img/${id}-full.jpg`} {alt} />
        </picture>
      </div>
    </Modal>
  {/each}
</section>
