<script lang="ts">
  import Background from "../components/Background.svelte";
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
<Background />
<Nav {segment} />

<main>
  <slot />
</main>
