<script lang="ts">
  import { page } from "$app/stores";

  let isBlurred = $derived($page.url.pathname !== "/");
</script>

<div class:blurred={isBlurred}></div>

<style>
  @reference "tailwindcss";
  
  div {
    @apply h-screen fixed left-0 top-0 w-screen;
    background: transparent no-repeat 30% center;
    background-size: cover;
    z-index: -1;
  }

  :global(.no-webp) div {
    background-image: url("/img/home-bg-mobile.jpg");
  }

  :global(.webp) div {
    background-image: url("/img/home-bg-mobile.webp");
  }

  div.blurred {
    filter: blur(12px);
  }

  @media (width >= theme(--breakpoint-md)) {
    :global(.no-webp) div {
      background-image: url("/img/home-bg-tablet.jpg");
    }

    :global(.webp) div {
      background-image: url("/img/home-bg-tablet.webp");
    }
  }

  @media (width >= theme(--breakpoint-lg)) {
    :global(.no-webp) div {
      background-image: url("/img/home-bg-laptop.jpg");
    }

    :global(.webp) div {
      background-image: url("/img/home-bg-laptop.webp");
    }
  }

  @media (width >= theme(--breakpoint-xl)) {
    :global(.no-webp) div,
    :global(.webp) div {
      background-image: url("/img/home-bg.jpg");
    }
  }
</style>
