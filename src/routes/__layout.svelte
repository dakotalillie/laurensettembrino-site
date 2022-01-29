<script lang="ts">
  import { onMount } from "svelte";
  import Background from "../components/Background.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import debounce from "../utils/debounce";
  import "../app.css";

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

<Background />
<div>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }
  main {
    color: white;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  :global(html),
  :global(body),
  :global(#svelte) {
    height: 100%;
  }

  :global(body) {
    background-color: black;
    font-family: "Noto Sans";
    overflow-y: scroll;
    overscroll-behavior-y: none;
  }
</style>
