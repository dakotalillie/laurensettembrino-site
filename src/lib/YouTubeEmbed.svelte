<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount } from "svelte";
  import Spinner from "./Spinner.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";

  interface Props {
    isReel?: boolean;
    hasCaption?: boolean;
    videoId?: string;
    children?: Snippet;
  }

  let { isReel = false, hasCaption = false, videoId = "", children }: Props = $props();

  let videoStatus = $state("thumbnail");
  let title = $state("");
  let isMobile = $state<boolean | null>(null);

  function handleClick() {
    videoStatus = "loading";
  }

  function handleLoad() {
    videoStatus = "loaded";
  }

  onMount(() => {
    isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      // Account for iPad pretending it's a Mac when requesting Desktop sites
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`)
      .then((res) => res.json())
      .then((res) => (title = res.title));
  });
</script>

<figure class="space-y-2">
  <div class="content" class:reel={isReel}>
    <IntersectionObserver once top={120}>
      {#snippet children({ intersecting })}
        {#if intersecting}
          {#if !isMobile && videoStatus !== "loaded"}
            <button class="preview" onclick={handleClick}>
              <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} />
              <div class="thumbnail-title-bar">{title}</div>
              {#if videoStatus === "thumbnail"}
                <div class="video-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" fill="black" opacity="0.7" />
                    <polygon points="37,30 71,50 37,70" fill="white" />
                  </svg>
                </div>
              {:else if videoStatus === "loading"}
                <div class="video-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" fill="black" opacity="0.7" />
                  </svg>
                </div>
                <div class="video-icon flex items-center justify-center">
                  <Spinner />
                </div>
              {/if}
            </button>
          {/if}
          {#if isMobile || videoStatus !== "thumbnail"}
            <iframe
              {title}
              src={`https://www.youtube.com/embed/${videoId}${!isMobile ? "?autoplay=1" : ""}`}
              class={!isMobile && videoStatus === "loading" ? "hidden" : "block"}
              height="100%"
              width="100%"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              onload={handleLoad}
            ></iframe>
          {/if}
        {/if}
      {/snippet}
    </IntersectionObserver>
  </div>
  {#if hasCaption}
    <figcaption class="space-y-1">
      {@render children?.()}
    </figcaption>
  {/if}
</figure>

<style>
  @import "./YouTubeEmbed.css";
</style>
