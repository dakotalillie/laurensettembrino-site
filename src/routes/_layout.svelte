<script lang="ts">
  import Background from "../components/Background.svelte";
  import GlobalStyles from "../components/GlobalStyles.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string;
</script>

<style>
  div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }
  main {
    @apply text-white mx-4 mb-4;
  }

  :global(html),
  :global(body),
  :global(#sapper) {
    height: 100%;
  }

  :global(body) {
    background-color: black;
    font-family: "Noto Sans";
    overflow-y: scroll;
  }
</style>

<GlobalStyles />
<Background {segment} />
<div>
  <Header {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>
