<script lang="ts">
  import Background from "../components/Background.svelte";
  import GlobalStyles from "../components/GlobalStyles.svelte";
  import Header from "../components/Header.svelte";

  export let segment: string;
</script>

<style>
  main {
    @apply text-white min-h-screen;
  }
</style>

<GlobalStyles />
<Background {segment} />
<Header {segment} />

<main>
  <slot />
</main>
