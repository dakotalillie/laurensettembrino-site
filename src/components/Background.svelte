<script lang="ts">
  export let segment: string;

  $: isBlurred = segment !== undefined;
</script>

<style>
  div {
    @apply h-screen fixed left-0 top-0 w-screen;
    background: transparent url("/img/home-bg-mobile.jpg") no-repeat 30% center;
    background-size: cover;
    z-index: -1;
  }

  :global(.webp) div {
    background-image: url("/img/home-bg-mobile.webp");
  }

  div.blurred {
    filter: blur(12px);
  }

  @screen md {
    div {
      background-image: url("/img/home-bg-tablet.jpg");
    }

    :global(.webp) div {
      background-image: url("/img/home-bg-tablet.webp");
    }
  }

  @screen lg {
    div {
      background-image: url("/img/home-bg-laptop.jpg");
    }

    :global(.webp) div {
      background-image: url("/img/home-bg-laptop.webp");
    }
  }

  @screen xl {
    div,
    :global(.webp) div {
      background-image: url("/img/home-bg.jpg");
    }
  }
</style>

<div class:blurred={isBlurred} />
