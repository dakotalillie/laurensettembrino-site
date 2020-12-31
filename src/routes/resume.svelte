<script>
  import ContentContainer from "../components/ContentContainer.svelte";
</script>

<style>
  .resume-section {
    @apply mt-8 flex flex-row justify-between;
  }

  .subheader {
    @apply flex flex-row space-x-4 mt-4;
  }

  .subheader > span:not(:first-of-type):before {
    @apply mr-4 text-red-700;
    content: "\2666";
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

  ul {
    @apply pl-8;
  }

  li:before {
    @apply mr-2 text-red-700;
    content: "\2666";
  }
</style>

<svelte:head>
  <title>Resume — Lauren Settembrino</title>
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
  <div class="resume-section">
    <div>
      <p><strong>America-Israel Cultural Foundation’s ICA Awards</strong> (2019)</p>
      <p>Ori Flomin's <em>Together, together</em></p>
    </div>
    <div>Rose Theater, Jazz at Lincoln Center</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Angie Moon Dance Theatre</strong></p>
      <p><em>Company dancer since August 2018</em></p>
      <ul>
        <li>Angie Conte's <em>HUNTING YEAR, The Drowning Pine</em></li>
      </ul>
    </div>
    <div>Venues throughout NYC</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Neville Dance Theatre</strong></p>
      <p><em>Company dancer since Fall 2017</em></p>
      <ul>
        <li>Brenda Neville's <em>Exposed, Elements (pointe), 53 Movements</em></li>
      </ul>
    </div>
    <div>Milwaukee, WI; Venues throughout NYC</div>
  </div>
  <div class="resume-section">
    <div class="w-full">
      <p><strong>BalaSole Dance Company</strong></p>
      <p class="flex flex-row justify-between w-full">
        <span><em>Featured Emerging Artist</em> (2017)</span><span>Brooklyn Academy of Music (Fisher), NYC</span>
      </p>
      <p class="flex flex-row justify-between w-full">
        <span><em>Featured Soloist</em> (2018)</span><span>Ailey Citigroup Theater, NYC</span>
      </p>
      <ul>
        <li>Original choreography: <em>B-Y</em></li>
      </ul>
    </div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Second Avenue Dance Company</strong> (2016-2017)</p>
      <p>Stefanie Batten Bland's <em>Incoming</em></p>
    </div>
    <div>Jack Crystal Theater, NYC</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Lincoln Center White Light Festival</strong> (2015)</p>
      <p>Crystal Pite's <em>Polaris</em></p>
      <ul>
        <li>One of 60 Tisch students chosen to perform with Kidd Pivot</li>
      </ul>
    </div>
    <div>New York City Center, NYC</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>The Nutcracker NYC</strong> (2015, 2016)</p>
      <p>Choreography and direction by Giada Ferrone</p>
      <ul>
        <li>Soloist and ensemble roles</li>
      </ul>
    </div>
    <div>Ailey Citigroup Theater, NYC</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Tisch School of the Arts, New York University</strong> (2014 - 2017)</p>
      <p>Elizabeth Coker's <em>From Then To</em></p>
      <p>Numerous contemporary and contemporary ballet student works</p>
    </div>
    <div>Jack Crystal Theater, NYC</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Dizzy Feet Foundation - Celebration of Dance Gala</strong> (2015)</p>
      <p>Erin McNerney's <em>Feed the Birds</em></p>
    </div>
    <div>Los Angeles, CA</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Classical Repertory Experience:</strong></p>
      <p>Variations from <em>Paquita, Don Quixote, La Fille Mal Gardee, La Bayadere</em></p>
      <p>Grand pas from <em>Paquita</em> and <em>The Nutcracker</em></p>
    </div>
  </div>
  <hr />
  <h3>Training/Education</h3>
  <div class="resume-section">
    <div>
      <p><strong>Tisch School of the Arts, New York University</strong></p>
      <p><em>BFA in Dance, May 2017</em></p>
      <ul>
        <li><em>Contemporary</em>: Rashaun Mitchell, Pamela Pietro, Elizabeth Coker, Ori Flomin</li>
        <li><em>Ballet</em>: Giada Ferrone, Cherylyn Lavagnino, James Martin, Jolinda Menendez (pointe)</li>
        <li><em>Composition and improvisation</em>: Rashaun Mitchell, Jermey Nelson, Sean Curran</li>
      </ul>
    </div>
    <div>New York, NY</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>College of Arts and Sciences, New York University</strong></p>
      <p><em>Double major in English</em> (2017)</p>
      <ul>
        <li>Cum Laude, University Honors Scholar</li>
      </ul>
    </div>
    <div>New York,NY</div>
  </div>
  <div class="resume-section">
    <div>
      <p><strong>Domaine Forget Summer Dance Academy</strong> (2016)</p>
      <p><em>RUBBERBANDance Group's summer residency program</em></p>
      <ul>
        <li>Trained with Victor Quijada, Anne Plamondon, and members of RUBBERBANDance Group</li>
      </ul>
    </div>
    <div>Quebec, CAN</div>
  </div>
  <div class="resume-section">
    <p>
      <strong>Other dance skills:</strong>
      pointe, improvisation, contemporary and ballet partnering, choreography (concert and commercial), tap, music
      theater, hip hop (some breaking/bboying, popping, locking, vogue)
    </p>
  </div>
  <hr />
  <div class="resume-section">
    <p>
      <strong>Other skills:</strong>
      acting, singing, grant writing, editing/proofreading, search engine optimization (SEO)
    </p>
  </div>
</ContentContainer>
