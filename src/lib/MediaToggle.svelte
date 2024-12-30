<script lang="ts">
  interface Props {
    active: "photos" | "videos";
    setActive: (newActive: "photos" | "videos") => void;
  }

  let { active, setActive }: Props = $props();
</script>

<div class="flex flex-row">
  <button aria-pressed={active === "photos"} onclick={() => setActive("photos")} type="button">Photos</button>
  <button aria-pressed={active === "videos"} onclick={() => setActive("videos")} type="button">Videos</button>
</div>

<style>
  button {
    @apply py-1 px-2 border border-white md:py-2 md:px-4;
  }

  button[aria-pressed="true"] {
    @apply bg-white text-black;
  }
</style>
