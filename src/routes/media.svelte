<script lang="ts">
  import ContentContainer from "../components/ContentContainer.svelte";
  import MediaToggle from "../components/MediaToggle.svelte";
  import Photos from "../components/Photos.svelte";

  let activeView: "photos" | "videos" = "photos";
  const setActiveView = (newActiveView: "photos" | "videos") => (activeView = newActiveView);
</script>

<svelte:head>
  <title>Lauren Settembrino - Media</title>
</svelte:head>

<ContentContainer page="Media">
  <div slot="actions">
    <MediaToggle active={activeView} setActive={setActiveView} />
  </div>
  {#if activeView === 'photos'}
    <Photos />
  {:else if activeView === 'videos'}
    <h2>Videos!</h2>
  {/if}
</ContentContainer>
