<script lang="ts">
  import GlobalStyles from "../components/GlobalStyles.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<style>
  main {
    @apply text-white min-h-screen;
  }
</style>

<GlobalStyles />
<Nav {segment} />

<main>
  <slot />
</main>
