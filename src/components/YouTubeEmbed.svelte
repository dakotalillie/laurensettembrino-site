<script lang="ts">
  import { onMount } from "svelte";
  import Spinner from "./Spinner.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";

  export let isReel = false;
  export let hasCaption = false;
  export let videoId = "";

  let videoStatus = "thumbnail";
  let title = "";
  let isMobile = null;

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

<style>
  .content,
  .content.reel {
    height: 204px;
  }

  .thumbnail-title-bar {
    @apply absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent text-white p-2;
    --tw-gradient-from: rgba(0, 0, 0, 0.5);
  }

  .preview {
    @apply h-full w-full relative text-left;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .video-icon {
    @apply absolute;
    height: 40pt;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40pt;
  }

  @screen sm {
    .content,
    .content.reel {
      height: 342px;
    }

    .thumbnail-title-bar {
      @apply text-lg;
    }

    .video-icon {
      height: 60pt;
      width: 60pt;
    }
  }

  @screen md {
    .content {
      height: 185px;
    }

    .content .video-icon {
      height: 40pt;
      width: 40pt;
    }

    .content .thumbnail-title-bar {
      @apply text-base;
    }

    .content.reel {
      height: 396px;
    }

    .content.reel .video-icon {
      height: 60pt;
      width: 60pt;
    }

    .content.reel .thumbnail-title-bar {
      @apply text-lg;
    }
  }

  @screen lg {
    .content {
      height: 240px;
    }

    .content.reel {
      height: 450px;
    }
  }

  @screen xl {
    .content {
      height: 320px;
    }

    .content .video-icon {
      height: 60pt;
      width: 60pt;
    }

    .content .thumbnail-title-bar {
      @apply text-lg;
    }
  }

  @screen 2xl {
    .content {
      height: 394px;
    }
  }
</style>

<figure class="space-y-2">
  <div class="content" class:reel={isReel}>
    <IntersectionObserver once top={120} let:intersecting>
      {#if intersecting}
        {#if !isMobile && videoStatus !== 'loaded'}
          <button class="preview" on:click={handleClick}>
            <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} />
            <div class="thumbnail-title-bar">{title}</div>
            {#if videoStatus === 'thumbnail'}
              <div class="video-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill="black" opacity="0.7" />
                  <polygon points="37,30 71,50 37,70" fill="white" />
                </svg>
              </div>
            {:else if videoStatus === 'loading'}
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
        {#if isMobile || videoStatus !== 'thumbnail'}
          <iframe
            {title}
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}${!isMobile ? '?autoplay=1' : ''}`}
            class={!isMobile && videoStatus === 'loading' ? 'hidden' : 'block'}
            height="100%"
            width="100%"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            on:load={handleLoad} />
        {/if}
      {/if}
    </IntersectionObserver>
  </div>
  {#if hasCaption}
    <figcaption class="space-y-1">
      <slot />
    </figcaption>
  {/if}
</figure>
