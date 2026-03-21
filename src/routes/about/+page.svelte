<script>
  import ContentContainer from "$lib/ContentContainer.svelte";
  import Modal from "$lib/Modal.svelte";
  import Blockquote from "$lib/Blockquote.svelte";

  let modalContentVisible = $state(false);

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
  <meta property="og:description" content="Lauren Settembrino is a dancer and choreographer based in San Francisco." />
  <meta property="og:image" content="https://laurensettembrino.com/img/home-bg-mobile.jpg" />
  <meta property="og:url" content="https://laurensettembrino.com/about/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ContentContainer page="About">
  <Modal isVisible={modalContentVisible} onClose={handleClose}>
    {#snippet trigger(open)}
      <button onclick={open}>
        <picture>
          <source srcset="/img/headshot.webp" type="image/webp" />
          <source srcset="/img/headshot.jpg" type="image/jpeg" />
          <img width="340px" height="510px" class="thumbnail" src="/img/headshot.jpg" alt="Headshot" />
        </picture>
      </button>
    {/snippet}
    {#snippet content()}
      <figure class="relative">
        <picture>
          <source srcset="/img/headshot-full.webp" type="image/webp" />
          <source srcset="/img/headshot-full.jpg" type="image/jpeg" />
          <img class="full" src="/img/headshot-full.jpg" alt="Headshot" onload={handleLoad} />
        </picture>
        <figcaption class="text-xs md:text-sm absolute bottom-0 p-4 text-white bg-black/50 w-full">
          Photo Credit: Travis Magee
        </figcaption>
      </figure>
    {/snippet}
  </Modal>
  <div class="space-y-6 md:text-lg">
    <h2>About the Artist</h2>
    <p>
      In her movement practice, Lauren is most interested in bridging the gap between intimate and dynamic energies, delicately balancing tactility and explosiveness. Noted for the sincerity she brings to her dance, Lauren's inherent emotional connection to her movement allows her to approach work with palpable sensitivity.
    </p>
    <div class="w-auto overflow-hidden">
      <Blockquote className="md:mx-8">
        {#snippet quote()}
          <em>
            Lauren has a specificity and exactness to the ways she moves. She has deep understanding and appreciation for classical forms, and a willingness to explore and play with new ideas. Her technique is clean and powerful in a way that slowly draws you in, and then keeps you there with an honest and nuanced performance quality.
          </em>
        {/snippet}
        {#snippet attribution()}
          — Angie Moon Conte
        {/snippet}
      </Blockquote>
    </div>
    <h2>Artist Bio</h2>
    <p>
      Lauren Settembrino (she/her) is a Bay Area-based movement artist. She has been described as an "intensely fierce and magnetic performer," with "commitment and focus that consistently grabs the eye."
    </p>
    <p>
      Throughout her career, Lauren has worked with choreographers Stefanie Batten Bland, Crystal Pite, Ori Flomin, Giada Matteini, Kristen Klein, and more. She has performed throughout the greater NYC area at theaters such as BAM, New York City Center, Jazz at Lincoln Center, and the Ailey Citigroup Theater. She has also toured along the East Coast and Midwest. As a choreographer, Lauren's work has been presented in festivals and showcases throughout the country. Her 2023 solo, titled "Flee porneia," has been regarded as a "deeply personal dance that's impossible to ignore."
    </p>
    <p>
      Before relocating to the Bay Area, Lauren was a principal dancer with Neville Dance Theater and performer/collaborator with installation-focused contemporary company Angie Moon Dance Theater. She holds a BFA in Dance from NYU's Tisch School of the Arts, with additional training with Central Pennsylvania Youth Ballet and RUBBERBANDance Group.
    </p>
    <div class="w-auto overflow-hidden">
      <Blockquote className="md:mx-8">
        {#snippet quote()}
          <em>
            Beyond Lauren's incredible technical prowess, she also brings a calm and warm presence to the rehearsal space. She is a brilliant mind, and makes connections within the work that I often don't even find myself. She is communicative, reliable, and the kind of artist who fully commits to every project she is a part of. She is a grounding presence for the group, and for me. It's an honor to work alongside her.
          </em>
        {/snippet}
        {#snippet attribution()}
          — Angie Moon Conte
        {/snippet}
      </Blockquote>
    </div>
  </div>
</ContentContainer>

<style>
  @import "./about.css";
</style>
