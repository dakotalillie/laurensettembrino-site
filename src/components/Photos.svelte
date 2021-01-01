<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Modal from "../components/Modal.svelte";

  const pictures = [
    {
      id: "1",
      alt: "Lauren Settembrino with leg held side against pink background",
      caption: "Photo Credit: Ella Bromblin / <em>Together, together</em> by Ori Flomin",
    },
    {
      id: "2",
      alt: "Lauren Settembrino mid-jump in gray jumpsuit",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
    },
    {
      id: "3",
      alt: "Lauren Settembrino with leg in passe surrounded by large plastic sheets",
      caption: "Photo Credit: Ella Bromblin / <em>Layers</em> by Janae Bonnen, Angie Lu, Evita Zacharioglou",
    },
    {
      id: "4",
      alt: "Lauren Settembrino in orange leotard held by partner in arabesque press lift",
      caption: "Neville Dance Theatre rehearsal",
    },
    {
      id: "18",
      alt: "Lauren Settembrino in green shirt hinges backward toward floor",
      caption: "Photo Credit: Eric Bandiero / <em>B–Y</em> by Lauren Settembrino with BalaSole Dance Company",
    },
    {
      id: "7",
      alt: "Lauren Settembrino in peach skirt arches back during outdoor performance",
      caption: "Photo Credit: Ori Highbloom / <em>Together, together</em> by Ori Flomin",
    },
    {
      id: "8",
      alt: "Profile of Lauren Settembrino curling fingers near mouth while dancing",
      caption: "Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal",
    },
    {
      id: "9",
      alt: "Lauren Settembrino holds open hand near face with leg raised behind her",
      caption: "Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal",
    },
    {
      id: "10",
      alt: "Black and white photo of Lauren Settembrino looking away with one arm extended",
      caption: "Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal",
    },
    {
      id: "11",
      alt: "Lauren Settembrino reaching arms vertically in opposite directions against blue background",
      caption: "Photo Credit: Andrea Pugliese Trager / <em>Wear and Tear</em> by Hayoung Roh",
    },
    {
      id: "12",
      alt: "Lauren Settembrino holds right leg in high side attitude in rehearsal studio",
      caption: "Photo Credit: Alex Tenreiro Theis",
    },
    {
      id: "13",
      alt: "Lauren Settembrino squats low with legs crossed in gray, white, and pink leotard",
      caption: "Photo Credit: Alex Tenreiro Theis",
    },
    {
      id: "14",
      alt: "Lauren Settembrino and partner hold right leg up in front of her",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
    },
    {
      id: "15",
      alt: "Spotlight on Lauren Settembrino in arabesque holding on to group of dancers",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
    },
    {
      id: "16",
      alt: "Lauren Settembrino in front of group of dancers dressed in white holding releve",
      caption: "Photo Credit: Haleigh Dalke / <em>I Am ___</em> by Chad Vaught",
    },
    {
      id: "17",
      alt: "Lauren Settembrino in green shirt tosses right arm up and head back with legs wide",
      caption: "Photo Credit: Eric Bandiero / <em>B–Y</em> by Lauren Settembrino with BalaSole Dance Company",
    },
    {
      id: "6",
      alt: "Lauren Settembrino holding high arabesque against blue background",
      caption: "Photo Credit: Ella Bromblin / <em>Snowflakes, The Nutcracker NYC</em> by Giada Matteini",
    },
    {
      id: "19",
      alt: "Lauren Settembrino, with relaxed expression, extends right leg with flexed foot",
      caption: "Photo Credit: Eric Bandiero / <em>B–Y</em> by Lauren Settembrino with BalaSole Dance Company",
    },
    {
      id: "20",
      alt: "Lauren Settembrino, in green shirt and black pants, kicks leg to head",
      caption: "Photo Credit: Eric Bandiero / <em>B–Y</em> by Lauren Settembrino with BalaSole Dance Company",
    },
    {
      id: "21",
      alt: "Lauren Settembrino, in pink, white, and gray leotard, performs layout with leg in attitude front",
      caption: "Photo Credit: Alex Tenreiro Theis",
    },
    {
      id: "5",
      alt: "Lauren Settembrino kicks while rehearsing with male dancer in studio",
      caption: "Neville Dance Theatre rehearsal",
    },
    {
      id: "22",
      alt: "Lauren Settembrino in green shirt and black pants performs on stage",
      caption: "Photo Credit: Eric Bandiero / <em>B–Y</em> by Lauren Settembrino with BalaSole Dance Company",
    },
    {
      id: "23",
      alt: "Lauren Settembrino in burgundy leotard extends leg to the side while on pointe",
      caption: "Neville Dance Theatre",
    },
    {
      id: "24",
      alt: "Lauren Settembrino, on pointe, hinges away from hands pushing down",
      caption: "Neville Dance Theatre",
    },
    {
      id: "25",
      alt: "Lauren Settembrino in spotlight arches back to show neck and collarbone",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
    },
  ];

  const MAX_COLUMN_WIDTH = 500;
  const ELEMENT_NODE_TYPE = 1;

  let section: HTMLElement;
  let gap: number;
  let items: HTMLElement[];
  let loadedCount = 0;

  function layout() {
    const numberOfColumns = Math.ceil(section.clientWidth / MAX_COLUMN_WIDTH);
    const allGapsWidth = (numberOfColumns - 1) * gap;
    const width = (section.clientWidth - allGapsWidth) / numberOfColumns;

    section.style.gridTemplateColumns = `repeat(${numberOfColumns}, ${width}px)`;
    items.forEach((c) => c.style.removeProperty("margin-top"));

    if (numberOfColumns > 1) {
      items.slice(numberOfColumns).forEach((col, i) => {
        const prevFin = items[i].getBoundingClientRect().bottom; // bottom edge of item above
        const currIni = col.getBoundingClientRect().top; // top edge of current item
        col.style.marginTop = `${prevFin + gap - currIni}px`;
      });
    }

    items.forEach((c) => c.removeAttribute("data-measuring"));
  }

  onMount(() => {
    gap = parseFloat(getComputedStyle(section).gridRowGap);
    items = Array.from(section.childNodes).filter((c): c is HTMLElement => {
      return c.nodeType === ELEMENT_NODE_TYPE && (c as HTMLElement).tagName === "BUTTON";
    });
  });

  onDestroy(() => {
    if (typeof removeEventListener !== "undefined") {
      removeEventListener("resize", layout);
    }
  });

  function handleLoad() {
    loadedCount++;
  }

  $: if (loadedCount && items?.length && loadedCount === items?.length) {
    layout();
    addEventListener("resize", layout, false);
  }
</script>

<style>
  section {
    --space: 0.5em;

    display: grid;
    justify-content: center;
    grid-gap: var(--space);
    min-height: 100vh;
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
  {#each pictures as { id, alt, caption }}
    <Modal let:open>
      <button slot="trigger" data-measuring="true" on:click={open}>
        <picture>
          <source srcset={`img/${id}.webp`} type="image/webp" />
          <source srcset={`img/${id}.jpg`} type="image/jpeg" />
          <img class="thumbnail" src={`img/${id}.jpg`} {alt} on:load={handleLoad} />
        </picture>
      </button>
      <figure class="relative" slot="content">
        <picture>
          <source srcset={`img/${id}-full.webp`} type="image/webp" />
          <source srcset={`img/${id}-full.jpg`} type="image/jpeg" />
          <img class="full" src={`img/${id}-full.jpg`} {alt} />
        </picture>
        <figcaption class="absolute bottom-0 p-4 text-white bg-black bg-opacity-50 w-full">
          {@html caption}
        </figcaption>
      </figure>
    </Modal>
  {/each}
</section>
