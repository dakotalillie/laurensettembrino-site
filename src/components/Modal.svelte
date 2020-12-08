<script lang="ts">
  let isOpen = false;
  const open = () => (isOpen = true);
  const close = () => (isOpen = false);

  function handleKeyDown(e: KeyboardEvent) {
    e.stopPropagation();
    if (e.key === "Escape") {
      close();
    }
  }
</script>

<style>
  .modal {
    @apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-transparent;
  }

  .backdrop {
    @apply absolute w-full h-full bg-black bg-opacity-40;
  }

  .content-wrapper {
    @apply z-10 rounded bg-white overflow-hidden;
    max-width: 70vw;
  }

  .content {
    @apply overflow-auto;
    max-height: 50vh;
  }
</style>

<slot name="trigger" {open}><button on:click={open}>Open Modal</button></slot>

{#if isOpen}
  <dialog class="modal" on:keydown={handleKeyDown}>
    <div class="backdrop" on:click={close} />
    <div class="content-wrapper">
      <slot name="header">
        <div>
          <h3>Your modal heading goes here</h3>
        </div>
      </slot>
      <div class="content">
        <slot name="content" />
      </div>
      <slot name="footer" {close}>
        <div>
          <h3>Your modal footer goes here</h3>
          <button on:click={close}>close</button>
        </div>
      </slot>
    </div>
  </dialog>
{/if}
