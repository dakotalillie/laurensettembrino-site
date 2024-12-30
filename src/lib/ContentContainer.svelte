<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    page: string;
    actions?: Snippet<[]>;
    children: Snippet<[]>;
  }

  let { page, actions, children }: Props = $props();
</script>

<div class="container mx-auto my-2 md:my-4 lg:my-8 xl:my-16">
  <div class="py-4 flex flex-row justify-between items-center">
    <h1 class="text-4xl">{page}</h1>
    {@render actions?.()}
  </div>
  <div class="bg-gray-300 text-black p-4 md:p-8 lg:p-16 overflow-hidden">
    {@render children()}
  </div>
</div>
