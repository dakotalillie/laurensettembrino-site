<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { createFocusTrap } from "focus-trap";
  import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
  import type { FocusTrap } from "focus-trap";

  let modal: HTMLDialogElement;
  let button: HTMLButtonElement;
  let focusTrap: FocusTrap;
  let isOpen = false;
  const open = () => (isOpen = true);
  const close = () => (isOpen = false);

  onMount(() => {
    focusTrap = createFocusTrap(modal, {
      escapeDeactivates: false,
      fallbackFocus: button,
      preventScroll: true,
    });
  });

  onDestroy(() => {
    clearAllBodyScrollLocks();
  });

  $: if (isOpen && focusTrap) {
    focusTrap.activate();
    disableBodyScroll(modal);
  } else if (!isOpen && focusTrap) {
    focusTrap.deactivate();
    enableBodyScroll(modal);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      isOpen = false;
    }
  }
</script>

<style>
  .modal {
    @apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-transparent;
  }

  .modal[aria-hidden="true"] {
    @apply hidden;
  }

  .backdrop {
    @apply absolute w-full h-full bg-black bg-opacity-40;
  }

  .content-wrapper {
    @apply z-10 rounded bg-white overflow-hidden p-4 space-y-6;
    max-width: 70vw;
  }

  .content {
    @apply overflow-auto;
    max-height: 50vh;
  }
</style>

<slot name="trigger" {open}><button on:click={open}>Open Modal</button></slot>

<dialog aria-hidden={!isOpen} class="modal" class:is-open={isOpen} on:keydown={handleKeyDown} bind:this={modal}>
  <div class="backdrop" on:click={close} />
  <div class="content-wrapper">
    <header class="flex flex-row justify-end">
      <button aria-label="Close modal" bind:this={button} on:click={close}>Close</button>
    </header>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</dialog>
