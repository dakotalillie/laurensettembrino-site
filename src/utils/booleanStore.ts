import { writable } from "svelte/store";

export function booleanStore(initial: boolean) {
  const isOpen = writable<boolean>(initial);
  const { set, update } = isOpen;
  return {
    isOpen,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update((p) => !p),
  };
}
