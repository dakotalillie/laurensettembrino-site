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
  class="w-full py-6 px-16 text-white flex flex-col items-center justify-between space-y-8 xl:items-start xl:flex-row xl:space-y-0">
  <Nav {segment} />
  <div class="logo">
    <Logo />
    <ul class="flex flex-row justify-center divide-x-2 divide-blue-500 mt-2">
      <li>The Best™️</li>
      <li>Boobaloo</li>
      <li>Garbanzo</li>
    </ul>
  </div>
</div>
