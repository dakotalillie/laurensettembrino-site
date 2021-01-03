<script lang="ts">
  export let cite = "";
  export let className = "";
</script>

<style>
  blockquote {
    @apply pl-6 pt-2 pb-2 border-l-4 border-red-700 text-gray-700 leading-6;
  }

  blockquote .quote {
    @apply mr-4;
  }

  blockquote .quote::before {
    @apply text-red-700 text-2xl;
    content: open-quote;
    position: absolute;
    transform: translate(-110%, -11%);
  }

  blockquote .quote::after {
    @apply text-red-700 text-2xl;
    content: close-quote;
    position: absolute;
    transform: translate(5%, -11%);
  }

  blockquote .attribution {
    @apply whitespace-nowrap;
  }
</style>

<blockquote {cite} class={className}>
  <slot name="quote" class="quote" />
  <slot name="attribution" class="attribution" />
</blockquote>
