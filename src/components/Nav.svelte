<script lang="ts">
  import Logo from "./Logo.svelte";
  export let segment: string;

  const links = [
    { href: ".", label: "Home", segment: undefined },
    { href: "about", label: "About", segment: "about" },
    { href: "resume", label: "Resume", segment: "resume" },
    { href: "media", label: "Media", segment: "media" },
    { href: "contact", label: "Contact", segment: "contact" },
  ];
</script>

<style>
  a[aria-current="page"] {
    @apply border-b-2 border-red-500;
  }

  .logo {
    position: absolute;
    right: 4rem;
    top: 1.5rem;
  }

  .logo li {
    @apply px-4;
  }

  .logo li:first-of-type {
    @apply pl-0;
  }

  @media (max-width: 1750px) {
    .thing {
      @apply justify-start;
    }
  }

  @media (max-width: 1100px) {
    .thing {
      @apply justify-center;
    }

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 2rem;
      position: relative;
      right: 0;
      top: 0;
    }
  }
</style>

<nav class="fixed w-full py-6 text-white">
  <div class="px-16 mx-auto flex flex-row justify-start thing">
    <ul class="flex flex-row justify-center space-x-4">
      {#each links as link}
        <li>
          <a
            class="p-1 pt-0"
            aria-current={segment === link.segment ? 'page' : undefined}
            href={link.href}>{link.label}</a>
        </li>
      {/each}

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <!-- <li><a rel="prefetch" aria-current={segment === 'blog' ? 'page' : undefined} href="blog">blog</a></li> -->
    </ul>
  </div>
  <div class="logo">
    <Logo />
    <ul class="flex flex-row justify-center divide-x-2 divide-blue-500 mt-2">
      <li>The Best™️</li>
      <li>Boobaloo</li>
      <li>Garbanzo</li>
    </ul>
  </div>
</nav>
