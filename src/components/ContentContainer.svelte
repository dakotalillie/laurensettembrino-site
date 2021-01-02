<script lang="ts">
  export let page: string;
</script>

<div class="container mx-auto my-2 md:my-4 lg:my-8 xl:my-16">
  <div class="py-4 flex flex-row justify-between items-center">
    <h1 class="text-4xl">{page}</h1>
    <slot name="actions" />
  </div>
  <div class="bg-gray-300 text-black p-4 md:p-8 lg:p-16 overflow-hidden">
    <slot />
  </div>
</div>
