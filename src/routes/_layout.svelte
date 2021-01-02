<script lang="ts">
  import { onMount } from "svelte";
  import Background from "../components/Background.svelte";
  import GlobalStyles from "../components/GlobalStyles.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import debounce from "../utils/debounce";

  export let segment: string;

  const measureVh = debounce(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, 250);

  onMount(() => {
    measureVh();
    addEventListener("resize", measureVh);
    return () => removeEventListener("resize", measureVh);
  });
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
