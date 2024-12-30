<script>
  import ContentContainer from "$lib/ContentContainer.svelte";
</script>

<svelte:head>
  <title>Resume | Lauren Settembrino</title>
  <meta property="og:site_name" content="Lauren Settembrino" />
  <meta property="og:title" content="Resume | Lauren Settembrino" />
  <meta property="og:description" content="Lauren Settembrino is a dancer and choreographer based in San Francisco." />
  <meta property="og:image" content="https://laurensettembrino.com/img/home-bg-mobile.jpg" />
  <meta property="og:url" content="https://laurensettembrino.com/resume/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ContentContainer page="Resume">
  {#snippet actions()}
    <div>
      <a href="doc/LaurenSettembrinoDanceResume.pdf" download>
        <button class="px-4 py-2 bg-blue-600 hover:bg-blue-500" type="button"> Download </button>
      </a>
    </div>
  {/snippet}
  <div class="content flex flex-col items-center">
    <h2 class="text-4xl font-bold italic">Lauren Settembrino</h2>
    <div class="subheader">
      <span><a href="mailto:lauren.settembrino@gmail.com">lauren.settembrino@gmail.com</a></span>
      <span>she/her</span>
      <span>San Francisco, CA</span>
      <span>5'4"</span>
    </div>
  </div>
  <hr />
  <h3>PROFESSIONAL EXPERIENCE</h3>
  <div class="section-grid">
    <h4>Neville Dance Theater</h4>
    <p>Company dancer since 2017, Principal Dancer since 2022</p>
    <p>Brenda Neville’s:</p>
    <ul>
      <li><em>Identities</em> (2023) | Manhattan Movement & Arts Center</li>
      <li><em>Amethyst/Rhodochrosite Pas</em> (2022) | Harmony in the Woods, Hawley, PA; and more</li>
      <li>
        <em>Banter</em> (pointe) (2022) | Evening of Contemporary Dance, Rose Nagelberg Theatre, NYC; Harmony in the Woods,
        Hawley, PA
      </li>
      <li><em>53 Movements</em> (2019–2021) | Dixon Place, NYC; The United Theatre, Westerly, RI</li>
      <li><em>Exposed</em> (2017–2023) | Milwaukee Fringe Fesaval; Jamaica Performing Arts Center, NYC; and more</li>
    </ul>
    <p>Kristen Klein’s <em>The Pursuit</em> (2023) | Manhattan Movement & Arts Center</p>
    <p>
      Nanako Kitagawa’s <em>Children’s Corner</em> (pointe) (2021–2022) | Artists In Motion Mini, KnJ Theater, NYC; and more
    </p>
  </div>
  <div class="section-grid">
    <h4>Angie Moon Dance Theatre</h4>
    <p>Company dancer since August 2018</p>
    <p>Angie Moon Conte’s:</p>
    <ul>
      <li>
        <em>Mylar, cellophane, light, and us</em> (2023) | WestFest Dance Festival, Westbeth Artists' Residence, NYC, with
        visuals by Benny Krown
      </li>
      <li><em>The Drowning Pine</em> (2019) | Jack Crystal Theatre</li>
      <li><em>HUNTING YEAR</em> (2018) | Triskelion Arts</li>
    </ul>
  </div>
  <div class="section-grid">
    <h4>Choreography</h4>
    <p><em>Flee porneia</em> (solo) (2023) | Manhattan Movement & Arts Center</p>
    <p><em>B–Y</em> (solo) (2018) | Ailey Citigroup Theatre</p>
  </div>
  <div class="section-grid">
    <h4>Freelance</h4>
    <ul>
      <li>
        <em>In Earnest by Byron Lars</em> (2021, headliner) | choreography by Jen Roit/Armada Dance at StylePointe New York
        Fashion Week
      </li>
      <li>
        Ori Flomin’s <em>Together, together</em> (2019) | America-Israel Cultural Foundation’s ICA Awards, Rose Theatre,
        Jazz at Lincoln Center
      </li>
      <li>BalaSole Dance Company Featured Emerging Arast (2017) | BAM Fisher</li>
      <li>Crystal Pite’s <em>Polaris</em> (2015) | Lincoln Center White Light Festival, New York City Center</li>
      <li>
        Erin McNerney’s <em>Feed the Birds</em> (2015) | Dizzy Feet Foundation Celebration of Dance Gala, The Novo, Los Angeles,
        CA
      </li>
    </ul>
  </div>
  <h3>TRAINING/EDUCATION</h3>
  <div class="section-grid">
    <h4>Tisch School of the Arts, New York University</h4>
    <p><em>BFA in Dance</em></p>
    <ul>
      <li><em>Contemporary:</em> Rashaun Mitchell, Pamela Pietro, Elizabeth Coker, Ori Flomin</li>
      <li><em>Ballet:</em> Giada Matteini, Cherylyn Lavagnino, James Maran, Jolinda Menendez (pointe)</li>
      <li><em>Composition and improvisation:</em> Rashaun Mitchell, Jeremy Nelson, Sean Curran</li>
    </ul>
    <p>Distinctions: University Honors Scholar, Cum Laude</p>
  </div>
  <div class="section-grid">
    <h4>College of Arts and Sciences, New York University</h4>
    <p><em>Double major in English</em></p>
  </div>
  <div class="section-grid">
    <h4>Domaine Forget Summer Dance Academy (Quebec, CAN)</h4>
    <p><em>RUBBERBANDance Group summer residency program</em></p>
    <ul>
      <li>Trained with Victor Quijada, Anne Plamondon, and members of RUBBERBANDance Group</li>
    </ul>
  </div>
  <div class="section-grid">
    <p>
      <strong>Other dance skills:</strong>
      pointe, improvisation, contemporary and ballet partnering, choreography (concert and commercial), tap, musical theater,
      hip hop (some breaking/bboying, popping, locking, vogue)
    </p>
  </div>
  <hr />
  <div class="section-grid">
    <p>
      <strong>Other skills:</strong>
      group fitness instruction, acting, grant writing, editing/proofreading, search engine optimization (SEO)
    </p>
  </div>
</ContentContainer>

<style>
  @import "./resume.css";
</style>
