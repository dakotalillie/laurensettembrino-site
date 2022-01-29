<script>
  import ContentContainer from "../components/ContentContainer.svelte";

  const locations = {
    angieMoon: "Triskelion Arts; Jack Crystal Theater",
    dizzyFeet: "Los Angeles, CA",
    icaAwards: "Rose Theater, Jazz at Lincoln Center",
    neville: "Dixon Place; Martha Graham Studio Theater; JPAC<br />Tours to Milwaukee, WI; Westerly, RI<br />Various video projects",
    nutcracker: "Ailey Citigroup Theater; Stamford, CT",
    secondAve: "Jack Crystal Theater",
    stylePoint: 'Dixon Place',
    tisch: "Jack Crystal Theater",
    whiteLight: "New York City Center"
  }
</script>

<svelte:head>
  <title>Resume | Lauren Settembrino</title>
  <meta property="og:site_name" content="Lauren Settembrino" />
  <meta property="og:title" content="Resume | Lauren Settembrino" />
  <meta property="og:description" content="Lauren Settembrino is a dancer and choreographer based in New York City." />
  <meta property="og:image" content="https://laurensettembrino.com/img/home-bg-mobile.jpg" />
  <meta property="og:url" content="https://laurensettembrino.com/resume/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ContentContainer page="Resume">
  <div slot="actions">
    <a href="doc/LaurenSettembrinoDanceResume.pdf" download>
      <button class="px-4 py-2 bg-blue-600 hover:bg-blue-500" type="button"> Download </button>
    </a>
  </div>
  <div class="content flex flex-col items-center">
    <h2 class="text-4xl">Lauren Settembrino</h2>
    <div class="subheader">
      <span><a href="mailto:lauren.settembrino@gmail.com">lauren.settembrino@gmail.com</a></span>
      <span>she/her</span>
      <span>New York, NY</span>
      <span>5'4"</span>
    </div>
  </div>
  <hr />
  <h3>Professional Experience</h3>
  <div class="section-grid">
    <p><strong>StylePointe, New York Fashion Week</strong> (2021)</p>
    <p class="location">{locations.stylePoint}</p>
    <p><em>Choreography by Jen Roit/Armada Dance</em></p>
    <p class="location-mobile">{locations.stylePoint}</p>
  </div>
  <div class="section-grid">
    <p><strong>America-Israel Cultural Foundation’s ICA Awards</strong> (2019)</p>
    <p class="location">{locations.icaAwards}</p>
    <p>Ori Flomin's <em>Together, together</em></p>
    <p class="location-mobile">{locations.icaAwards}</p>
  </div>
  <div class="section-grid">
    <p><strong>Angie Moon Dance Theatre</strong></p>
    <p><em>Company dancer since August 2018</em></p>
    <p class="location">{locations.angieMoon}</p>
    <ul>
      <li>Angie Moon Conte's <em>HUNTING YEAR, The Drowning Pine</em></li>
    </ul>
    <p class="location-mobile">{locations.angieMoon}</p>
    <ul>
  </div>
  <div class="neville section-grid">
    <p><strong>Neville Dance Theatre</strong></p>
    <p><em>Company dancer since Fall 2017</em></p>
    <div class="location">{@html locations.neville}</div>
    <ul>
      <li>Brenda Neville's <em>Exposed, Elements</em> (pointe), <em>Banter</em></li>
      <li>Originated roles in <em>53 Movements</em>, <em>Beethoven Suite</em> (pointe)</li>
    </ul>
    <div class="location-mobile">{@html locations.neville}</div>
  </div>
  <div class="balasole section-grid">
    <p><strong>BalaSole Dance Company</strong></p>
    <p><em>Featured Soloist</em> (2018)</p>
    <p class="location1">Ailey Citigroup Theater</p>
    <ul>
      <li>Original choreography: <em>B&ndash;Y</em></li>
    </ul>
    <p class="mt-2 md:mt-0"><em>Featured Emerging Artist</em> (2017)</p>
    <p class="location2">BAM Fisher</p>
  </div>
  <div class="section-grid">
    <p><strong>Second Avenue Dance Company</strong> (2016-2017)</p>
    <p class="location">{locations.secondAve}</p>
    <p>Stefanie Batten Bland's <em>Incoming</em></p>
    <p class="location-mobile">{locations.secondAve}</p>
  </div>
  <div class="section-grid">
    <p><strong>Lincoln Center White Light Festival</strong> (2015)</p>
    <p class="location">{locations.whiteLight}</p>
    <p>Crystal Pite's <em>Polaris</em></p>
    <ul>
      <li>One of 60 Tisch students chosen to perform with Kidd Pivot</li>
    </ul>
    <p class="location-mobile">{locations.whiteLight}</p>
  </div>
  <div class="section-grid">
    <p><strong>The Nutcracker NYC</strong> (2015, 2016)</p>
    <p class="location">{locations.nutcracker}</p>
    <p>Choreography and direction by Giada Matteini</p>
    <ul>
      <li>Soloist and ensemble roles</li>
    </ul>
    <p class="location-mobile">{locations.nutcracker}</p>
  </div>
  <div class="section-grid">
    <p><strong>Tisch School of the Arts, New York University</strong> (2014-2017)</p>
    <p class="location">{locations.tisch}</p>
    <p>Elizabeth Coker's <em>From Then To</em></p>
    <p>Numerous contemporary and contemporary ballet student works</p>
    <p class="location-mobile">{locations.tisch}</p>
  </div>
  <div class="section-grid">
    <p><strong>Dizzy Feet Foundation - Celebration of Dance Gala</strong> (2015)</p>
    <p class="location">{locations.dizzyFeet}</p>
    <p>Erin McNerney's <em>Feed the Birds</em></p>
    <p class="location-mobile">{locations.dizzyFeet}</p>
  </div>
  <hr />
  <h3>Training/Education</h3>
  <div class="section-grid">
    <p><strong>Tisch School of the Arts, New York University</strong></p>
    <p class="location">New York, NY</p>
    <p><em>BFA in Dance, May 2017</em></p>
    <ul>
      <li><em>Contemporary</em>: Rashaun Mitchell, Pamela Pietro, Elizabeth Coker, Ori Flomin</li>
      <li>
        <em>Ballet</em>: Giada Matteini, Cherylyn Lavagnino, James Martin, Jolinda Menendez (pointe)
      </li>
      <li><em>Composition and improvisation</em>: Rashaun Mitchell, Jermey Nelson, Sean Curran</li>
    </ul>
  </div>
  <div class="section-grid">
    <p><strong>College of Arts and Sciences, New York University</strong></p>
    <p class="location">New York, NY</p>
    <p><em>Double major in English</em> (2017)</p>
    <ul>
      <li>Cum Laude, University Honors Scholar</li>
    </ul>
  </div>
  <div class="section-grid">
    <p><strong>Domaine Forget Summer Dance Academy</strong> (2016)</p>
    <p class="location">Quebec, CAN</p>
    <p><em>RUBBERBANDance Group's summer residency program</em></p>
    <ul>
      <li>Trained with Victor Quijada, Anne Plamondon, and members of RUBBERBANDance Group</li>
    </ul>
  </div>
  <div class="section-grid">
    <p>
      <strong>Other dance skills:</strong>
      pointe, improvisation, contemporary and ballet partnering, choreography (concert and commercial), tap, music theater,
      hip hop (some breaking/bboying, popping, locking, vogue)
    </p>
  </div>
  <hr />
  <div class="section-grid">
    <p>
      <strong>Other skills:</strong>
      acting, singing, grant writing, editing/proofreading, search engine optimization (SEO)
    </p>
  </div>
</ContentContainer>

<style>
  .location {
    @apply hidden md:block;
  }

  .location-mobile {
    @apply md:hidden
  }

  .subheader {
    @apply flex flex-col space-y-2 mt-6 w-full sm:flex-row sm:space-y-0 sm:space-x-4 sm:mt-4 sm:justify-center;
  }

  .subheader > span:before,
  li:before {
    @apply mr-2 text-red-700 sm:text-xl;
    content: "\25c6";
  }

  .subheader > span:not(:first-of-type):before {
    @apply sm:mr-4;
  }

  .subheader > span:first-of-type:before {
    @apply sm:mr-0;
  }

  .section-grid {
    @apply grid mt-8;
    grid-template-columns: 1fr;
  }

  .section-grid > * {
    grid-column: 1;
  }

  .content a {
    @apply underline;
  }

  h3 {
    @apply mt-8 font-bold text-2xl;
  }

  hr {
    @apply mt-8 border-red-700;
  }

  @media screen(sm) {
    .subheader > span:first-of-type:before {
      content: "";
    }
  }

  @media screen(md) {
    .section-grid {
      grid-template-columns: 1fr auto;
    }

    .section-grid .location {
      grid-row: 1;
      grid-column: 2;
      text-align: right;
    }

    .neville .location {
      grid-row: 1 / 4;
    }

    .balasole .location1 {
      grid-row: 2;
      grid-column: 2;
      text-align: right;
    }

    .balasole .location2 {
      grid-row: 4;
      grid-column: 2;
      text-align: right;
    }
  }
</style>
