<script>
  import YouTubeEmbed from "./YouTubeEmbed.svelte";
  import Blockquote from "./Blockquote.svelte";
</script>

<style>
  h2 {
    @apply text-3xl font-bold;
  }

  h3 {
    @apply text-xl font-bold;
  }

  a {
    @apply underline;
  }

  .description {
    margin-top: 1rem !important;
  }

  :global(.blockquote) {
    margin-top: 1rem !important;
  }

  .reel {
    @apply w-full mx-auto;
    max-width: 800px;
  }
</style>

<div class="space-y-16">
  <section>
    <h2 class="mb-4 sm:hidden sm:mb-0">Dance Reel</h2>
    <div class="reel">
      <YouTubeEmbed isReel videoId="bnrbjHcfaFM" />
    </div>
  </section>
  <section class="space-y-4">
    <h2>Dance Bites</h2>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 ">
      <YouTubeEmbed videoId="q5vMiz7ZPbg" />
      <YouTubeEmbed videoId="iCOW7laCRac" />
      <YouTubeEmbed videoId="mUWEIdx9I2c" />
      <YouTubeEmbed videoId="Fl8rvKC9yXc" />
    </div>
  </section>
  <section class="space-y-4">
    <h2>Choreography</h2>
    <div class="grid grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-2">
      <YouTubeEmbed hasCaption videoId="4kDathC_yzM">
        <h3>B&ndash;Y</h3>
        <p>Choreography and Performance: Lauren Settembrino</p>
        <p>Sound: Booker T. & the M.G.’s</p>
        <p>Lighting Design: Deborah Kengmana</p>
        <p>Length: 4 minutes</p>
        <p class="description"><em>A study of effort and a challenge to dance through its spectrum.</em></p>
        <Blockquote
          cite="https://oberon481.typepad.com/oberons_grove/2018/08/balasole-presents-mezcla.html"
          className="blockquote mr-8">
          <span slot="quote" let:class={className} class={className}>
            The solo, entitled <strong>B&ndash;Y</strong>, was performed with total, devil-may-care assurance by Ms.
            Settembrino, a natural mover whose energy and space-covering combinations suited the music to perfection.</span>
          <span slot="attribution" let:class={className} class={className}>
            —
            <a
              href="https://oberon481.typepad.com/oberons_grove/2018/08/balasole-presents-mezcla.html"
              target="_blank"
              rel="noopener noreferrer">Oberon’s Grove</a>
          </span>
        </Blockquote>
      </YouTubeEmbed>
      <YouTubeEmbed hasCaption videoId="GBNGa4-cHc4">
        <h3>and being able to share that with someone is an amazing thing</h3>
        <p>Choreography: Lauren Settembrino in collaboration with the dancers</p>
        <p>Sound: Dakota Lillie, Alex MacKinnon</p>
        <p>Sound Editing: Dakota Lillie</p>
        <p>Lighting Design: Ted Boyce Smith</p>
        <p>Performers: Claire Gieringer, Carly Lepore, Sydney Sorenson, Andrea Pugliese Trager</p>
        <p>Length: 8 minutes</p>
        <p class="description">
          <em>
            By working its way through and beyond the proscenium,
            <strong>and being able to share that with someone is an amazing thing </strong>portrays deep sadness,
            particularly in the context of experiencing it around others. It leans on images of conflict, need, and
            impulsive fears to paint its picture.</em>
        </p>
      </YouTubeEmbed>
      <YouTubeEmbed hasCaption videoId="D35ypLnPmbU">
        <h3>which is sometimes known as</h3>
        <p>Choreography and Performance: Lauren Settembrino and Carly Lepore</p>
        <p>Sound: Ziggy Marley and the Melody Makers, Hank Green, John Green</p>
        <p>Sound Editing: Lauren Settembrino and Carly Lepore</p>
        <p>Lighting Design: Ted Boyce Smith</p>
        <p>Length: 8 minutes</p>
        <p class="description">
          <em>Conceived after the 2015 Paris terrorist attacks and 2016 Brussels bombings,
            <strong>which is sometimes known as</strong>
            explores the different ways people react to tragedy. Abrupt sound shifts facilitate transitions between
            those responses, while the material is refreshed in multiple iterations as new contexts and perspectives are
            layered on.</em>
        </p>
      </YouTubeEmbed>
      <YouTubeEmbed hasCaption videoId="d-2NmqQ2Fyg">
        <h3>JFK and Stalin Weren’t Strippers</h3>
        <p>Choreography: Lauren Settembrino in collaboration with the dancers</p>
        <p>Sound: Murcof, Sutekh, Apex Twin</p>
        <p>Sound Editing: Dakota Lillie</p>
        <p>Lighting Design: Tim Van’t Hof</p>
        <p>
          Performers: Courtney Escoyne, Polly Jacobs, Carly Lepore, Hayoung Roh, Jordan Ryder, Andrea Pugliese Trager
        </p>
        <p>Length: 7 minutes</p>
        <p class="description">
          <em>Born of a love for grammar,
            <strong>JFK and Stalin Weren’t Strippers</strong>
            plays with the impact of intra-sentence punctuation (e.g. comma, semi-colon, em dash) on the rhythm of
            language. Phrase manipulation is inspired by those impacts, while lines of gesture are influenced by the
            presence and absence of each dancer.</em>
        </p>
      </YouTubeEmbed>
    </div>
  </section>
</div>
