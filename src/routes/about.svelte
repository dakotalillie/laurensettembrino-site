<script>
  import ContentContainer from "../components/ContentContainer.svelte";
</script>

<style>
  img {
    @apply w-full object-cover object-center mb-6;
  }

  p {
    @apply text-lg;
  }

  @screen sm {
    img {
      @apply float-left mr-6 mb-0 w-auto;
      max-height: 32rem;
    }
  }
</style>

<svelte:head>
  <title>Lauren Settembrino - About</title>
</svelte:head>

<ContentContainer page="About">
  <picture>
    <source srcset="img/headshot.webp" type="image/webp" />
    <source srcset="img/headshot.jpg" type="image/jpeg" />
    <img src="img/headshot.jpg" alt="Headshot" />
  </picture>
  <div class="space-y-6">
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
