<script>
  export let isReel = false;
  export let hasCaption = false;
  export let src;
  export let title;

  const slots = $$props.$$slots;
</script>

<style>
  div {
    height: 350px;
  }

  div.reel {
    height: 420px;
    width: 745px;
  }
</style>

<figure class="space-y-2">
  <div class:reel={isReel}>
    <iframe
      {src}
      {title}
      height="100%"
      width="100%"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
  </div>
  {#if hasCaption}
    <figcaption class="space-y-1">
      <slot />
    </figcaption>
  {/if}
</figure>
