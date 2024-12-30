<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    cite?: string;
    className?: string;
    quote: Snippet<[]>;
    attribution: Snippet<[]>;
  }

  let { cite = "", className = "", quote, attribution }: Props = $props();
</script>

<blockquote {cite} class={className}>
  <span class="quote">
    {@render quote()}
  </span>
  <span class="attribution">
    {@render attribution()}
  </span>
</blockquote>

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
