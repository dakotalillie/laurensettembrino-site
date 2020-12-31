<script lang="ts">
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

  export let segment: string;
</script>

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

  @screen lg {
    .logo {
      grid-column: 3;
      grid-row: 1;
    }

    ul {
      grid-column: 3;
      grid-row: 2;
    }
  }

  @screen xl {
    header {
      @apply px-16;
    }
  }
</style>

<header>
  <Nav {segment} />
  <div class="logo xl:mt-0">
    <Logo />
  </div>
  <ul class="text-xs flex flex-row justify-center divide-x-2 divide-red-700 mt-2 lg:text-base">
    <li>Dancer️</li>
    <li>Choreographer</li>
    <li>Performer</li>
  </ul>
</header>
