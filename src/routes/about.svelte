<script>
  import ContentContainer from "../components/ContentContainer.svelte";
  import Modal from "../components/Modal.svelte";
  import Blockquote from "../components/Blockquote.svelte";

  let modalContentVisible = false;

  function handleLoad() {
    modalContentVisible = true;
  }

  function handleClose() {
    modalContentVisible = false;
  }
</script>

<svelte:head>
  <title>About | Lauren Settembrino</title>
  <meta property="og:site_name" content="Lauren Settembrino" />
  <meta property="og:title" content="About | Lauren Settembrino" />
  <meta property="og:description" content="Lauren Settembrino is a dancer and choreographer based in New York City." />
  <meta property="og:image" content="https://laurensettembrino.com/img/home-bg-mobile.jpg" />
  <meta property="og:url" content="https://laurensettembrino.com/about/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ContentContainer page="About">
  <Modal isVisible={modalContentVisible} onClose={handleClose} let:open>
    <button slot="trigger" on:click={open}>
      <picture>
        <source srcset="img/headshot.webp" type="image/webp" />
        <source srcset="img/headshot.jpg" type="image/jpeg" />
        <img width="340px" height="510px" class="thumbnail" src="img/headshot.jpg" alt="Headshot" />
      </picture>
    </button>
    <figure class="relative" slot="content">
      <picture>
        <source srcset="img/headshot-full.webp" type="image/webp" />
        <source srcset="img/headshot-full.jpg" type="image/jpeg" />
        <img class="full" src="img/headshot-full.jpg" alt="Headshot" on:load={handleLoad} />
      </picture>
      <figcaption class="text-xs md:text-sm absolute bottom-0 p-4 text-white bg-black bg-opacity-50 w-full">
        Photo Credit: Travis Magee
      </figcaption>
    </figure>
  </Modal>
  <div class="space-y-6 md:text-lg">
    <h2>About the Artist</h2>
    <p>
      As a dancer, Lauren is most interested in working from a place of honesty — with the body, with others, and with
      choreography. She has been noted for the sincerity and openness she brings to her movement. Lauren cares deeply
      about bridging the too-common gap between intimacy and dynamics, balancing tactility and explosiveness. She brings
      an inherent emotional connection to her movement that allows her to approach her work with palpable sensitivity.
    </p>
    <p>
      As a choreographer, Lauren shifts her explorations between deep emotionality and joyful reminders not to take
      things too seriously.
    </p>
    <div class="w-auto overflow-hidden">
      <Blockquote className="md:mx-8">
        <span slot="quote" let:class={className} class={className}
          ><em
            >Lauren has a specificity and exactness to the ways she moves. She has deep understanding and appreciation
            for classical forms, and a willingness to explore and play with new ideas. Her technique is clean and
            powerful in a way that slowly draws you in, and then keeps you there with an honest and nuanced performance
            quality.</em
          ></span
        >
        <span slot="attribution" let:class={className} class={className}> — Angie Moon Conte</span>
      </Blockquote>
    </div>
    <h2>Artist Bio</h2>
    <p>
      Lauren Settembrino (she/her) is a New York-based dancer and wordsmith. She began her movement journey in central
      New Jersey, competing throughout the Tri-state area and earning accolades including scholarships and a regional
      Top 12 finish in contemporary at Youth America Grand Prix.
    </p>
    <p>
      She went on to earn her BFA in Dance from NYU’s Tisch School of the Arts, where she graduated cum laude and was
      named a University Honors Scholar. While there, Lauren also completed a double major in English, where she focused
      largely on how sound sense and rhythm influence the unconscious emotional effects of poetry. Some of Lauren’s
      additional training includes programs at Central Pennsylvania Youth Ballet and in Quebec City with RUBBERBANDance
      Group.
    </p>
    <p>
      At NYU, Lauren had the pleasure of performing works by Stefanie Batten Bland, Ori Flomin, Elizabeth Coker, and
      Giada Ferrone. She has continued to work with Ori Flomin since, performing at Astor Alive! and the Israeli Culture
      and Arts Awards at Jazz at Lincoln Center. Lauren was also selected among Tisch dancers to perform in Lincoln
      Center’s White Light Festival; she worked alongside Kidd Pivot to dance Crystal Pite’s
      <em>Polaris</em>
      at New York City Center.
    </p>
    <p>
      Lauren has performed throughout the greater NYC area at venues including BAM, Dixon Place, Triskelion Arts, SMUSH
      Gallery, Jamaica Performing Arts Center, and the Ailey Citigroup Theater. She has also toured through New York
      State and the Midwest. Lauren is currently a member of
      <a href="https://www.nevilledance.org/" target="_blank" rel="noopener noreferrer">Neville Dance Theatre</a>
      and
      <a href="https://www.angiemoondance.com/" target="_blank" rel="noopener noreferrer">Angie Moon Dance Theatre</a>,
      alongside freelance projects.
    </p>
    <div class="w-auto overflow-hidden">
      <Blockquote className="md:mx-8">
        <span slot="quote" let:class={className} class={className}
          ><em
            >Beyond Lauren’s incredible technical prowess, she also brings a calm and warm presence to the rehearsal
            space. She is a brilliant mind, and makes connections within the work that I often don’t even find myself.
            She is communicative, reliable, and the kind of artist who fully commits to every project she is a part of.
            She is a grounding presence for the group, and for me. It’s an honor to work alongside her.</em
          ></span
        >
        <span slot="attribution" let:class={className} class={className}> — Angie Moon Conte</span>
      </Blockquote>
    </div>
  </div>
</ContentContainer>

<style>
  button {
    @apply mb-6 sm:float-left sm:mr-6 sm:mb-0;
  }

  img.thumbnail {
    @apply w-full object-cover sm:w-auto;

    min-height: 24rem;
    max-height: 36rem;
    object-position: center top;
  }

  h2 {
    @apply text-2xl font-bold;
  }

  a {
    @apply underline;
  }

  img.full {
    max-width: 100%;
    max-height: calc(var(--vh, 1vh) * 75);
  }

  @media screen(sm) {
    img.thumbnail {
      height: 30rem;
      min-height: unset;
    }
  }

  @media screen(lg) {
    img.thumbnail {
      height: 21rem;
    }
  }

  @media screen(xl) {
    img.thumbnail {
      height: 26rem;
    }
  }

  @media screen(2xl) {
    img.thumbnail {
      height: 30rem;
    }
  }
</style>
