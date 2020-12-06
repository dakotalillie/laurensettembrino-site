<script lang="ts">
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

  export let segment: string;
</script>

<style>
  li {
    @apply px-4;
  }

  li:first-of-type {
    @apply pl-0;
  }
</style>

<div
  class="w-full py-6 px-4 text-white flex flex-row-reverse items-start justify-between lg:flex-row xl:items-start xl:px-16">
  <Nav {segment} />
  <div class="logo xl:mt-0">
    <Logo />
    <ul class="text-xs flex flex-row justify-center divide-x-2 divide-blue-500 mt-2 lg:text-base">
      <li>The Best™️</li>
      <li>Boobaloo</li>
      <li>Garbanzo</li>
    </ul>
  </div>
</div>
