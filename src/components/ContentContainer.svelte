<script lang="ts">
  export let page: string;
</script>

<div class="container mx-auto mt-2 md:mt-4 lg:mt-8 xl:mt-16">
  <div class="p-4 flex flex-row justify-between items-center">
    <h1 class="text-4xl">{page}</h1>
    <slot name="actions" />
  </div>
  <div class="bg-gray-300 text-black p-4 md:p-8 lg:p-16 overflow-hidden">
    <slot />
  </div>
</div>
