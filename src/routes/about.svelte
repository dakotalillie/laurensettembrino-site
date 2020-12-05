<style>
  .headshot {
    max-height: 32rem;
  }

  p {
    @apply text-lg;
  }

  .bg {
    background: transparent url("/img/home-bg.jpg") no-repeat 25% fixed;
    background-size: cover;
    filter: blur(12px);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="bg" />
<div class="container mx-auto pt-64">
  <div class="bg-gray-300 text-black p-16 overflow-hidden">
    <img class="headshot float-left mr-4" src="/img/headshot.jpg" alt="Headshot" />
    <div class="space-y-8">
      <h1 class="text-4xl">About</h1>
      <p>
        Lauren Settembrino is a New York-based dancer and wordsmith. She began her movement journey in central New
        Jersey and went on to earn her BFA in Dance from NYU’s Tisch School of the Arts, where she graduated cum laude
        and was named a University Honors Scholar. Her additional training includes programs at Central Pennsylvania
        Youth Ballet and in Quebec City with RUBBERBANDance Group.
      </p>
      <p>
        Lauren has had the pleasure of performing works by Crystal Pite, Stefanie Batten Bland, Ori Flomin, Elizabeth
        Coker, and Giada Ferrone, and has found herself on the stages of BAM, Jazz at Lincoln Center, and New York City
        Center. She has performed as a featured soloist with BalaSole Dance Company, and is currently a dancer with
        Neville Dance Theatre and Angie Moon Dance Theatre.
      </p>
      <p>
        Dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino dino
        dino dino. Dino dino dino dino dino dino dino dino dino dino dino.
      </p>
    </div>
  </div>
</div>
