<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import Hamburger from "./Hamburger.svelte";

  export let segment: string;

  const links = [
    { href: ".", label: "Home", segment: undefined },
    { href: "about", label: "About", segment: "about" },
    { href: "resume", label: "Resume", segment: "resume" },
    { href: "media", label: "Media", segment: "media" },
    { href: "contact", label: "Contact", segment: "contact" },
  ];

  let showMobileNav = false;
  let hamburgerButton: HTMLButtonElement;
  const toggleNav = () => (showMobileNav = !showMobileNav);

  onMount(() => {
    const listener = (event: MouseEvent) => {
      if (!hamburgerButton.contains(event.target as Node)) {
        showMobileNav = false;
      }
    };
    document.addEventListener("click", listener, false);
    return () => removeEventListener("click", listener);
  });
</script>

<style>
  a[aria-current="page"] {
    @apply border-b-2 border-red-500;
  }

  .mobile-nav {
    @apply absolute bg-black py-2 text-center right-0;
  }

  .mobile-nav li {
    @apply py-2 px-4;
  }

  @screen lg {
    .mobile-nav {
      @apply hidden;
    }
  }
</style>

<nav class="hidden flex-row justify-start thing lg:flex">
  <ul class="flex flex-row justify-center space-x-4">
    {#each links as link}
      <li>
        <a
          aria-current={segment === link.segment ? 'page' : undefined}
          class="p-1 pt-0"
          href={link.href}
          rel={link.href === 'media' ? 'prefetch' : undefined}>{link.label}
        </a>
      </li>
    {/each}

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
        the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li><a rel="prefetch" aria-current={segment === 'blog' ? 'page' : undefined} href="blog">blog</a></li> -->
  </ul>
</nav>
<div class="relative">
  <button aria-label="Toggle mobile nav menu" class="ml-4" bind:this={hamburgerButton} on:click={toggleNav}>
    <Hamburger />
  </button>
  {#if showMobileNav}
    <ul class="mobile-nav" in:slide={{ duration: 250 }}>
      {#each links as link}
        <li>
          <a class="p-1" aria-current={segment === link.segment ? 'page' : undefined} href={link.href}>{link.label}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
