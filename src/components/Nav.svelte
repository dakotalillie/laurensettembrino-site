<script lang="ts">
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

  @media (max-width: 1750px) {
    nav {
      @apply justify-start;
    }
  }

  @media (max-width: 1100px) {
    nav {
      @apply justify-center;
    }
  }
</style>

<nav class="flex flex-row justify-start thing">
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
</nav>
