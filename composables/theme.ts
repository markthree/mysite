export function useTheme() {
  const colorMode = useColorMode();

  const isDark = computed(
    () => colorMode.preference === "dark",
  );

  function toggleDark() {
    colorMode.preference = isDark.value ? "light" : "dark";
  }

  return {
    isDark,
    toggleDark,
  };
}
