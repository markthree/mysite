export function useBackTop() {
  const visible = ref(false);

  function backtop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  onMounted(() => {
    const { arrivedState } = useScroll(window);
    watchEffect(() => {
      visible.value = !arrivedState.top;
    });
  });

  return {
    visible,
    backtop,
  };
}
