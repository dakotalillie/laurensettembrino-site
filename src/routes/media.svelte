<script lang="ts">
  import { onMount } from "svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import MediaToggle from "../components/MediaToggle.svelte";
  import Photos from "../components/Photos.svelte";
  import Videos from "../components/Videos.svelte";

  let activeView: "photos" | "videos" | undefined;
  const setActiveView = (newActiveView: "photos" | "videos") => {
    activeView = newActiveView;
    window.location.hash = `#${newActiveView}`;
  };

  onMount(() => {
    setActiveView(window.location.hash === "#videos" ? "videos" : "photos");
  });
</script>

<svelte:head>
  <title>Media | Lauren Settembrino</title>
  <meta property="og:site_name" content="Lauren Settembrino" />
  <meta property="og:title" content="Media | Lauren Settembrino" />
  <meta property="og:description" content="Lauren Settembrino is a dancer and choreographer based in New York City." />
  <meta property="og:image" content="https://laurensettembrino.com/img/home-bg-mobile.jpg" />
  <meta property="og:url" content="https://laurensettembrino.com/media/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ContentContainer page="Media">
  <div slot="actions">
    <MediaToggle active={activeView} setActive={setActiveView} />
  </div>
  {#if activeView === "photos"}
    <Photos />
  {:else if activeView === "videos"}
    <Videos />
  {/if}
</ContentContainer>
