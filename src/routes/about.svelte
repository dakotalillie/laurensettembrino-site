<script>
  import BlurredBackground from "../components/BlurredBackground.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
</script>

<style>
  img {
    max-height: 32rem;
  }

  p {
    @apply text-lg;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<BlurredBackground />
<ContentContainer>
  <img class="float-left mr-4" src="/img/headshot.jpg" alt="Headshot" />
  <div class="space-y-8">
    <h1 class="text-4xl">About</h1>
    <p>
      Lauren Settembrino is a New York-based dancer and wordsmith. She began her movement journey in central New Jersey
      and went on to earn her BFA in Dance from NYU’s Tisch School of the Arts, where she graduated cum laude and was
      named a University Honors Scholar. Her additional training includes programs at Central Pennsylvania Youth Ballet
      and in Quebec City with RUBBERBANDance Group.
    </p>
    <p>
      Lauren has had the pleasure of performing works by Crystal Pite, Stefanie Batten Bland, Ori Flomin, Elizabeth
      Coker, and Giada Ferrone, and has found herself on the stages of BAM, Jazz at Lincoln Center, and New York City
      Center. She has performed as a featured soloist with BalaSole Dance Company, and is currently a dancer with
      Neville Dance Theatre and Angie Moon Dance Theatre.
    </p>
    <p>
      Dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino
      dino. Dino dino dino dino dino dino dino dino dino dino dino.
    </p>
  </div>
</ContentContainer>