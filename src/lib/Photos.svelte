<script lang="ts">
  import { onMount, tick } from "svelte";
  import Modal from "./Modal.svelte";
  import debounce from "./debounce";

  import "@splidejs/splide/dist/css/themes/splide-default.min.css";
  import IntersectionObserver from "./IntersectionObserver.svelte";

  const pictures = [
    {
      id: "29",
      alt: "Lauren Settembrino in white pants kneels while clutching chest",
      caption: "Photo Credit: Andrew Mauney / <em>Flee porneia</em> by Lauren Settembrino",
      height: 333,
    },
    {
      id: "18",
      alt: "Lauren Settembrino in green shirt hinges backward toward floor",
      caption: "Photo Credit: Eric Bandiero / <em>B&ndash;Y</em> by Lauren Settembrino with BalaSole Dance Company",
      height: 400,
    },
    {
      id: "2",
      alt: "Lauren Settembrino mid-jump in gray jumpsuit",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
      height: 750,
    },
    {
      id: "21",
      alt: "Lauren Settembrino, in pink, white, and gray leotard, performs layout with leg in attitude front",
      caption: "Photo Credit: Alex Tenreiro Theis",
      height: 317,
    },
    {
      id: "26",
      alt: "Lauren Settembrino, wearing all white, arches back in center split",
      caption: "Photo Credit: Andrew Mauney / <em>Flee porneia</em> by Lauren Settembrino",
      height: 333,
    },
    {
      id: "1",
      alt: "Lauren Settembrino with leg held side against pink background",
      caption: "Photo Credit: Ella Bromblin / <em>Together, together</em> by Ori Flomin",
      height: 419,
    },
    {
      id: "9",
      alt: "Lauren Settembrino holds open hand near face with leg raised behind her",
      caption: "Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal",
      height: 333,
    },
    {
      id: "14",
      alt: "Lauren Settembrino and partner hold right leg up in front of her",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
      height: 333,
    },
    {
      id: "4",
      alt: "Lauren Settembrino in orange leotard held by partner in arabesque press lift",
      caption: "Neville Dance Theatre rehearsal",
      height: 541,
    },
    {
      id: "17",
      alt: "Lauren Settembrino in green shirt tosses right arm up and head back with legs wide",
      caption: "Photo Credit: Eric Bandiero / <em>B&ndash;Y</em> by Lauren Settembrino with BalaSole Dance Company",
      height: 400,
    },
    {
      id: "3",
      alt: "Lauren Settembrino with leg in passe surrounded by large plastic sheets",
      caption: "Photo Credit: Ella Bromblin / <em>Layers</em> by Janae Bonnen, Angie Lu, Evita Zacharioglou",
      height: 501,
    },
    {
      id: "11",
      alt: "Lauren Settembrino reaching arms vertically in opposite directions against blue background",
      caption: "Photo Credit: Andrea Pugliese Trager / <em>Wear and Tear</em> by Hayoung Roh",
      height: 333,
    },
    {
      id: "27",
      alt: "Lauren Settembrino, facing away from camera, squats with head turned toward side",
      caption: "Photo Credit: Andrew Mauney / <em>Flee porneia</em> by Lauren Settembrino",
      height: 333,
    },
    {
      id: "15",
      alt: "Spotlight on Lauren Settembrino in arabesque holding on to group of dancers",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
      height: 333,
    },
    {
      id: "8",
      alt: "Profile of Lauren Settembrino curling fingers near mouth while dancing",
      caption: "Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal",
      height: 333,
    },
    {
      id: "24",
      alt: "Lauren Settembrino, on pointe, hinges away from hands pushing down",
      caption: "Neville Dance Theatre",
      height: 715,
    },
    {
      id: "28",
      alt: "Lauren Settembrino, wearing all white, moving away from outstretched hand",
      caption: "Photo Credit: Andrew Mauney / <em>Flee porneia</em> by Lauren Settembrino",
      height: 750,
    },
    {
      id: "20",
      alt: "Lauren Settembrino, in green shirt and black pants, kicks leg to head",
      caption: "Photo Credit: Eric Bandiero / <em>B&ndash;Y</em> by Lauren Settembrino with BalaSole Dance Company",
      height: 400,
    },
    {
      id: "12",
      alt: "Lauren Settembrino holds right leg in high side attitude in rehearsal studio",
      caption: "Photo Credit: Alex Tenreiro Theis",
      height: 333,
    },
    {
      id: "16",
      alt: "Lauren Settembrino in front of group of dancers dressed in white holding releve",
      caption: "Photo Credit: Haleigh Dalke / <em>I Am ___</em> by Chad Vaught",
      height: 333,
    },
    {
      id: "7",
      alt: "Lauren Settembrino in peach skirt arches back during outdoor performance",
      caption: "Photo Credit: Ori Highbloom / <em>Together, together</em> by Ori Flomin",
      height: 500, // not the actual height, but what it would be if the width of the image were 500 like it is for all the others
    },
    {
      id: "10",
      alt: "Black and white photo of Lauren Settembrino looking away with one arm extended",
      caption: "Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal",
      height: 333,
    },
    {
      id: "25",
      alt: "Lauren Settembrino in spotlight arches back to show neck and collarbone",
      caption: "Photo Credit: Benny Krown / <em>The Drowning Pine</em>, Angie Moon Dance Theatre",
      height: 333,
    },
    {
      id: "22",
      alt: "Lauren Settembrino in green shirt and black pants performs on stage",
      caption: "Photo Credit: Eric Bandiero / <em>B&ndash;Y</em> by Lauren Settembrino with BalaSole Dance Company",
      height: 400,
    },
    {
      id: "6",
      alt: "Lauren Settembrino holding high arabesque against blue background",
      caption: "Photo Credit: Ella Bromblin / <em>Snowflakes, The Nutcracker NYC</em> by Giada Matteini",
      height: 498,
    },
    {
      id: "5",
      alt: "Lauren Settembrino kicks while rehearsing with male dancer in studio",
      caption: "Neville Dance Theatre rehearsal",
      height: 403,
    },
    {
      id: "19",
      alt: "Lauren Settembrino, with relaxed expression, extends right leg with flexed foot",
      caption: "Photo Credit: Eric Bandiero / <em>B&ndash;Y</em> by Lauren Settembrino with BalaSole Dance Company",
      height: 400,
    },
    {
      id: "23",
      alt: "Lauren Settembrino in burgundy leotard extends leg to the side while on pointe",
      caption: "Neville Dance Theatre",
      height: 716,
    },
    {
      id: "13",
      alt: "Lauren Settembrino squats low with legs crossed in gray, white, and pink leotard",
      caption: "Photo Credit: Alex Tenreiro Theis",
      height: 347,
    },
  ];

  const MAX_COLUMN_WIDTH = 500;
  const ELEMENT_NODE_TYPE = 1;

  let section = $state<HTMLElement>();
  let gap: number;
  let items: HTMLElement[];
  let modalContentVisible = $state(false);
  let measured = $state(false);
  let carousel = $state();
  let Splide: any;
  let splideInstance: any;
  let currentIndex = $state();

  const layout = debounce(() => {
    const numberOfColumns = Math.ceil(section!.clientWidth / MAX_COLUMN_WIDTH);
    const allGapsWidth = (numberOfColumns - 1) * gap;
    const width = (section!.clientWidth - allGapsWidth) / numberOfColumns;

    section!.style.gridTemplateColumns = `repeat(${numberOfColumns}, ${width}px)`;
    items.forEach((c) => {
      c.style.removeProperty("margin-top");
      c.style.height = `${+c.dataset.height! * (width / MAX_COLUMN_WIDTH)}px`;
    });

    if (numberOfColumns > 1) {
      items.slice(numberOfColumns).forEach((col, i) => {
        const prevFin = items[i].getBoundingClientRect().bottom; // bottom edge of item above
        const currIni = col.getBoundingClientRect().top; // top edge of current item
        col.style.marginTop = `${prevFin + gap - currIni}px`;
      });
    }

    measured = true;
  }, 250);

  onMount(() => {
    gap = parseFloat(getComputedStyle(section!).gridRowGap);
    items = Array.from(section!.childNodes).filter((c): c is HTMLElement => {
      return c.nodeType === ELEMENT_NODE_TYPE && (c as HTMLElement).tagName === "BUTTON";
    });
    layout();
    addEventListener("resize", layout, false);
    return () => removeEventListener("resize", layout);
  });

  function handleLoadFull() {
    modalContentVisible = true;
  }

  function handleClick(open: () => void, index: number) {
    import("@splidejs/splide").then((res) => {
      // The type seems to be incorrect here
      Splide = res.default;
      currentIndex = index;
      open();
    });
  }

  function handleCarouselResize() {
    tick().then(() => {
      const contentWrapperStyle = getComputedStyle(document.querySelector(".content-wrapper")!);
      splideInstance.options.fixedWidth =
        parseFloat(contentWrapperStyle.maxWidth) - parseFloat(contentWrapperStyle.paddingLeft) * 2;
    });
  }

  function handleOpen() {
    tick().then(() => {
      const contentWrapperStyle = getComputedStyle(document.querySelector(".content-wrapper")!);
      splideInstance = new Splide(carousel, {
        autoHeight: true,
        fixedWidth: parseFloat(contentWrapperStyle.maxWidth) - parseFloat(contentWrapperStyle.paddingLeft) * 2,
        gap: 0,
        lazyLoad: "nearby",
        padding: 0,
        pagination: false,
        perPage: 1,
        speed: 0,
        start: currentIndex,
        type: "fade",
      }).mount();
      splideInstance.on("moved", (newIndex: number) => (currentIndex = newIndex));
      addEventListener("resize", handleCarouselResize);
    });
  }

  function handleClose() {
    modalContentVisible = false;
    currentIndex = undefined;
    splideInstance.off("moved");
    removeEventListener("resize", handleCarouselResize);
  }
</script>

<section bind:this={section}>
  {#each pictures as { id, alt, height }, index}
    <Modal isVisible={modalContentVisible} onClose={handleClose} onOpen={handleOpen}>
      {#snippet trigger(open)}
        <button
          data-height={height}
          style={`height: ${height}px`}
          data-measuring="true"
          onclick={() => handleClick(open, index)}
        >
          <IntersectionObserver top={80} once>
            {#snippet children({ intersecting })}
              {#if measured && intersecting}
                <picture>
                  <source srcset={`/img/${id}.webp`} type="image/webp" />
                  <source srcset={`/img/${id}.jpg`} type="image/jpeg" />
                  <img class="thumbnail" src={`/img/${id}.jpg`} {alt} />
                </picture>
              {/if}
            {/snippet}
          </IntersectionObserver>
        </button>
      {/snippet}
      {#snippet content()}
        <div
          bind:this={carousel}
          data-active={currentIndex === 0 ? "first" : currentIndex === pictures.length - 1 ? "last" : undefined}
          class="relative"
        >
          <div class="splide__track">
            <div class="splide__list">
              {#each pictures as { id, alt, caption }}
                <div class="splide__slide flex items-center justify-center bg-black">
                  <figure class="relative">
                    <picture>
                      <source data-splide-lazy-srcset={`/img/${id}-full.webp`} type="image/webp" />
                      <source data-splide-lazy-srcset={`/img/${id}-full.jpg`} type="image/jpeg" />
                      <img class="full" data-splide-lazy={`/img/${id}-full.jpg`} {alt} onload={handleLoadFull} />
                    </picture>
                  </figure>
                  <p class="text-xs md:text-sm absolute bottom-0 p-4 text-white bg-black bg-opacity-50 w-full">
                    {@html caption}
                  </p>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/snippet}
    </Modal>
  {/each}
</section>

<style>
  section {
    --space: 0.5em;

    display: grid;
    justify-content: center;
    grid-gap: var(--space);
    min-height: calc(var(--vh, 1vh) * 100);
  }

  img.thumbnail {
    display: block;
    width: 100%;
  }

  img.full {
    max-width: 100%;
    max-height: calc(var(--vh, 1vh) * 75);
  }

  button {
    align-self: start;
  }

  :global(.splide__arrow) {
    background: #ccc !important;
  }

  :global(.splide__spinner) {
    @apply hidden;
  }

  :global(.splide--fade[data-active="first"] .splide__arrow--prev) {
    @apply hidden;
  }

  :global(.splide--fade[data-active="last"] .splide__arrow--next) {
    @apply hidden;
  }

  @media (max-width: 639px) {
    :global(.splide__arrow) {
      height: 1.5em;
      width: 1.5em;
    }

    :global(.splide__arrow svg) {
      height: 0.9em;
      width: 0.9em;
    }
  }
</style>
