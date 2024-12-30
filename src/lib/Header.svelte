<script lang="ts">
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";
</script>

<header>
  <Nav />
  <div class="logo xl:mt-0">
    <a aria-label="Lauren Settembrino logo" href=".">
      <Logo />
    </a>
  </div>
  <ul class="text-xs flex flex-row justify-center divide-x-2 divide-red-700 mt-2 lg:text-base">
    <li>Dancer️</li>
    <li>Choreographer</li>
    <li>Performer</li>
  </ul>
</header>

<style>
  header {
    @apply w-full py-6 px-4 text-white grid;
    grid-template-columns: auto 1fr auto;
  }

  ul {
    grid-column: 1;
    grid-row: 2;
  }

  li {
    @apply px-4;
  }

  li:first-of-type {
    @apply pl-0;
  }

  @media (max-width: 350px) {
    ul {
      display: none;
    }
  }

  @media screen(lg) {
    .logo {
      grid-column: 3;
      grid-row: 1;
    }

    ul {
      grid-column: 3;
      grid-row: 2;
    }
  }

  @media (min-width: 1680px) {
    header {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
</style>
