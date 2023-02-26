export function useElInitialRenderStatus() {
  const status = ref(false);
  const el = ref<HTMLElement>();

  const visible = useElementVisibility(el);

  watchOnce(visible, () => {
    status.value = true;
  });

  return {
    el,
    status,
  };
}
