<script lang="ts">
  export let segment: string;

  $: isBlurred = segment !== undefined;
</script>

<style>
  div {
    @apply h-screen fixed left-0 top-0 w-screen;
    background: transparent url("/img/home-bg.jpg") no-repeat 25% fixed;
    background-size: cover;
    z-index: -1;
  }

  div.blurred {
    filter: blur(12px);
  }
</style>

<div class={isBlurred ? 'blurred' : ''} />
