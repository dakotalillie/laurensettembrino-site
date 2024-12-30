<script lang="ts">
  import type { Snippet } from "svelte";
  import { onDestroy, tick } from "svelte";
  import { createFocusTrap } from "focus-trap";
  import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
  import CloseIcon from "./CloseIcon.svelte";
  import type { FocusTrap } from "focus-trap";

  interface Props {
    isVisible?: boolean;
    onOpen?: any;
    onClose?: any;
    trigger?: Snippet<[() => void]>;
    content?: Snippet;
  }

  let { isVisible = false, onOpen = () => {}, onClose = () => {}, trigger, content }: Props = $props();

  let modal = $state<HTMLDialogElement>();
  let button = $state<HTMLButtonElement>();
  let focusTrap: FocusTrap;
  let isOpen = $state(false);

  const open = () => {
    console.log("open called");
    isOpen = true;
    onOpen();
  };

  const close = () => {
    isOpen = false;
    onClose();
  };

  onDestroy(() => {
    clearAllBodyScrollLocks();
  });

  async function enableLocks() {
    if (modal === undefined) return;
    await tick();
    focusTrap = createFocusTrap(modal, {
      escapeDeactivates: false,
      fallbackFocus: button,
      preventScroll: true,
    });
    focusTrap.activate();
    disableBodyScroll(modal);
  }

  function disableLocks() {
    focusTrap?.deactivate();
    modal && enableBodyScroll(modal);
  }

  $effect(() => {
    if (isOpen) {
      enableLocks();
    } else if (!isOpen) {
      disableLocks();
    }
  });

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      isOpen = false;
    }
  }
</script>

{#if trigger}
  {@render trigger(open)}
{:else}
  <button onclick={open}>Open Modal</button>
{/if}

{#if isOpen}
  <dialog class="modal" class:visible={isVisible} onkeydown={handleKeyDown} bind:this={modal}>
    <div class="backdrop" onclick={close}></div>
    <div class="content-wrapper">
      <header class="flex flex-row justify-end">
        <button aria-label="Close modal" bind:this={button} onclick={close}><CloseIcon /></button>
      </header>
      <div class="content">
        {@render content?.()}
      </div>
    </div>
  </dialog>
{/if}

<style>
  .modal {
    @apply fixed p-0 top-0 left-0 w-full h-screen flex justify-center items-center bg-transparent opacity-0;
  }

  .modal.visible {
    @apply opacity-100;
  }

  .backdrop {
    @apply absolute w-full h-full bg-black bg-opacity-40;
  }

  .content-wrapper {
    @apply z-10 rounded bg-gray-300 overflow-hidden p-2 space-y-2 md:p-4 md:space-y-4;
    max-width: min(95vw, 1200px);
  }

  .content {
    @apply overflow-hidden;
    max-height: calc(var(--vh, 1vh) * 80);
  }
</style>
