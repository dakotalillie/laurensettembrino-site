<script lang="ts">
  import Background from "../components/Background.svelte";
  import GlobalStyles from "../components/GlobalStyles.svelte";
  import Header from "../components/Header.svelte";

  export let segment: string;
</script>

<style>
  main {
    @apply text-white mx-4 mb-4;
  }

  :global(body) {
    font-family: "Noto Sans";
  }
</style>

<GlobalStyles />
<Background {segment} />
<Header {segment} />

<main>
  <slot />
</main>
