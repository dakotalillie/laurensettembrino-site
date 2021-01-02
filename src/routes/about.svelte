<script>
  import ContentContainer from "../components/ContentContainer.svelte";
</script>

<style>
  img {
    @apply w-full object-cover object-center mb-6;
  }

  h2 {
    @apply text-2xl font-bold;
  }

  p {
    @apply text-lg;
  }

  a {
    @apply underline;
  }

  @screen sm {
    img {
      @apply float-left mr-6 mb-0 w-auto;
      max-height: 32rem;
    }
  }
</style>

<svelte:head>
  <title>About — Lauren Settembrino</title>
</svelte:head>

<ContentContainer page="About">
  <picture>
    <source srcset="img/headshot.webp" type="image/webp" />
    <source srcset="img/headshot.jpg" type="image/jpeg" />
    <img src="img/headshot.jpg" alt="Headshot" />
  </picture>
  <div class="space-y-6">
    <h2>About the Artist</h2>
    <p>
      In dance, Lauren is most interested in working from a place of honesty — with the body, with others, and with
      choreography. She has been noted for the sincerity and openness she brings to her movement. Lauren cares deeply
      about bridging the too-common gap between intimacy and dynamics, balancing tactility and explosiveness. She brings
      an inherent emotional connection to her movement that allows her to approach her work with palpable sensitivity.
    </p>
    <p>
      As a choreographer, Lauren shifts her explorations between deep emotionality and joyful reminders not to take
      things too seriously.
    </p>
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
      Center’s White Light Festival. She worked alongside Kidd Pivot to dance Crystal Pite’s Polaris at New York City
      Center.
    </p>
    <p>
      Lauren has performed throughout the greater NYC area at venues including BAM, Dixon Place, Triskelion Arts, SMUSH
      Gallery, Jamaica Performing Arts Center, and the Ailey Citigroup Theater. She has also toured through New York
      State and the Midwest for the Milwaukee Fringe Festival. Lauren has performed as a featured soloist with BalaSole
      Dance Company and is currently a member of
      <a href="https://www.nevilledance.org/" target="_blank">Neville Dance Theatre</a>
      and
      <a href="https://www.angiemoondance.com/">Angie Moon Dance Theatre</a>, alongside freelance projects.
    </p>
  </div>
</ContentContainer>
