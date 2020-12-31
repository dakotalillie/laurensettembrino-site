<script>
  import YouTubeEmbed from "./YouTubeEmbed.svelte";
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

  blockquote {
    @apply pl-6 pt-2 pb-2 border-l-4 mr-8 border-red-700 text-gray-700 leading-6;

    margin-top: 1rem !important;
  }

  blockquote .quote {
    @apply mr-4;
  }

  blockquote .quote::before {
    @apply text-red-700 text-2xl;
    content: open-quote;
    position: absolute;
    transform: translate(-110%, -11%);
  }

  blockquote .quote::after {
    @apply text-red-700 text-2xl;
    content: close-quote;
    position: absolute;
    transform: translate(5%, -11%);
  }

  blockquote .attribution {
    @apply whitespace-nowrap;
  }
</style>

<div class="space-y-16">
  <section>
    <div class="w-full flex flex-row justify-center">
      <YouTubeEmbed isReel src="https://www.youtube.com/embed/bnrbjHcfaFM" title="Lauren Settembrino Dance Reel" />
    </div>
  </section>
  <section class="space-y-4">
    <h2>Dance Bites</h2>
    <div class="grid grid-cols-2 gap-2">
      <YouTubeEmbed src="https://www.youtube.com/embed/q5vMiz7ZPbg" title="Subway dance" />
      <YouTubeEmbed src="https://www.youtube.com/embed/iCOW7laCRac" title="Living room fun" />
      <YouTubeEmbed src="https://www.youtube.com/embed/mUWEIdx9I2c" title="Golden boy peanuts" />
      <YouTubeEmbed src="https://www.youtube.com/embed/Fl8rvKC9yXc" title="Hometown showdown" />
    </div>
  </section>
  <section class="space-y-4">
    <h2>Choreography</h2>
    <div class="grid grid-cols-2 gap-x-2 gap-y-8">
      <YouTubeEmbed hasCaption src="https://www.youtube.com/embed/4kDathC_yzM" title="B-Y">
        <h3>B-Y</h3>
        <p>Choreography and Performance: Lauren Settembrino</p>
        <p>Sound: Booker T. And the M.G.’s</p>
        <p>Lighting Design: Deborah Kengmana</p>
        <p>Length: 4 minutes</p>
        <p class="description"><em>A study of effort and the challenge to dance through its spectrum.</em></p>
        <blockquote cite="https://oberon481.typepad.com/oberons_grove/2018/08/balasole-presents-mezcla.html">
          <span class="quote">
            The solo, entitled <strong>B–Y</strong>, was performed with total, devil-may-care assurance by Ms.
            Settembrino, a natural mover whose energy and space-covering combinations suited the music to perfection.</span>
          <span class="attribution">
            —
            <a href="https://oberon481.typepad.com/oberons_grove/2018/08/balasole-presents-mezcla.html">Oberon’s Grove</a>
          </span>
        </blockquote>
      </YouTubeEmbed>
      <YouTubeEmbed
        hasCaption
        src="https://www.youtube.com/embed/GBNGa4-cHc4"
        title="and being able to share that with someone is an amazing thing">
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
      <YouTubeEmbed hasCaption src="https://www.youtube.com/embed/D35ypLnPmbU" title="which is sometimes known as">
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
      <YouTubeEmbed hasCaption src="https://www.youtube.com/embed/d-2NmqQ2Fyg" title="JFK and Stalin Weren't Strippers">
        <h3>JFK and Stalin Weren’t Strippers</h3>
        <p>Choreography: Lauren Settembrino in collaboration with the dancers</p>
        <p>Sound: Murcof, Apex Twin</p>
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
