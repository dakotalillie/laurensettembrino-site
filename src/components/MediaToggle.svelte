<script lang="ts">
  export let active: "photos" | "videos";
  export let setActive: (newActive: "photos" | "videos") => void;
</script>

<div class="flex flex-row">
  <button aria-pressed={active === "photos"} on:click={() => setActive("photos")} type="button">Photos</button>
  <button aria-pressed={active === "videos"} on:click={() => setActive("videos")} type="button">Videos</button>
</div>

<style>
  button {
    @apply py-1 px-2 border border-white;
  }

  button[aria-pressed="true"] {
    @apply bg-white text-black;
  }

  @screen md {
    button {
      @apply py-2 px-4;
    }
  }
</style>
