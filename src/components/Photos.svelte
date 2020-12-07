<script lang="ts">
  import { onMount } from "svelte";

  let section: HTMLElement;
  let gap: number;
  let nCols: number;
  let items: HTMLElement[];

  const pictures = [
    { src: "img/1.webp", alt: "img1" },
    { src: "img/2.webp", alt: "img2" },
    { src: "img/3.webp", alt: "img3" },
    { src: "img/4.webp", alt: "img4" },
    { src: "img/5.webp", alt: "img5" },
    { src: "img/6.webp", alt: "img6" },
    { src: "img/7.webp", alt: "img7" },
    { src: "img/8.webp", alt: "img8" },
    { src: "img/9.webp", alt: "img9" },
    { src: "img/10.webp", alt: "img10" },
    { src: "img/11.webp", alt: "img11" },
    { src: "img/12.webp", alt: "img12" },
    { src: "img/13.webp", alt: "img13" },
    { src: "img/14.webp", alt: "img14" },
    { src: "img/15.webp", alt: "img15" },
    { src: "img/16.webp", alt: "img16" },
    { src: "img/17.webp", alt: "img17" },
    { src: "img/18.webp", alt: "img18" },
    { src: "img/19.webp", alt: "img19" },
    { src: "img/20.webp", alt: "img20" },
    { src: "img/21.webp", alt: "img21" },
    { src: "img/22.webp", alt: "img22" },
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
      items.forEach((c) => c.removeAttribute("data-src"));
    }
  }

  onMount(() => {
    if (section && getComputedStyle(section).gridTemplateRows !== "masonry") {
      gap = parseFloat(getComputedStyle(section).gridRowGap);
      items = Array.from(section.childNodes).filter((c): c is HTMLElement => c.nodeType === ELEMENT_NODE_TYPE);
      nCols = 0;
      if (document.readyState === "complete") {
        setTimeout(layout, 200);
      } else {
        addEventListener("load", layout), false;
      }
      addEventListener("resize", layout, false);
      return () => {
        removeEventListener("load", layout);
        removeEventListener("resize", layout);
      };
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
    min-height: 100vh;
  }

  section > * {
    width: var(--width);
  }

  img {
    opacity: 1;
    transition: opacity 500ms;
  }

  img[data-src] {
    opacity: 0;
  }
</style>

<section bind:this={section}>
  {#each pictures as { src, alt }}<img data-src={src} {src} {alt} loading="lazy" />{/each}
</section>
