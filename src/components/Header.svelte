<script lang="ts">
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

  export let segment: string;
</script>

<style>
  .logo {
    right: 4rem;
    top: 1.5rem;
  }

  .logo li {
    @apply px-4;
  }

  .logo li:first-of-type {
    @apply pl-0;
  }

  @media (max-width: 1100px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 2rem;
      right: 0;
      top: 0;
    }
  }
</style>

<div class="w-full py-6 px-16 text-white flex flex-row justify-between">
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
