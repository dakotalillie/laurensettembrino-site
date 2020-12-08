<script lang="ts">
  export let segment: string;

  $: isBlurred = segment !== undefined;
</script>

<style>
  div {
    @apply h-screen fixed left-0 top-0 w-screen;
    background: transparent url("/img/home-bg-mobile.jpg") no-repeat 30% fixed;
    background-size: cover;
    z-index: -1;
  }

  div.blurred {
    filter: blur(12px);
  }

  @screen md {
    div {
      background-image: url("/img/home-bg-tablet.jpg");
    }
  }

  @screen lg {
    div {
      background-image: url("/img/home-bg-laptop.jpg");
    }
  }

  @screen xl {
    div {
      background-image: url("/img/home-bg.jpg");
    }
  }
</style>

<div class={isBlurred ? 'blurred' : ''} />
