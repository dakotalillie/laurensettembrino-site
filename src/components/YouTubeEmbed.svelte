<script>
  export let isReel = false;
  export let hasCaption = false;
  export let src;
  export let title;

  const slots = $$props.$$slots;
</script>

<style>
  div,
  div.reel {
    height: 204px;
  }

  @screen sm {
    div,
    div.reel {
      height: 342px;
    }
  }

  @screen md {
    div {
      height: 185px;
    }

    div.reel {
      height: 396px;
    }
  }

  @screen lg {
    div {
      height: 240px;
    }

    div.reel {
      height: 450px;
    }
  }

  @screen xl {
    div {
      height: 320px;
    }
  }

  @screen 2xl {
    div {
      height: 394px;
    }
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
