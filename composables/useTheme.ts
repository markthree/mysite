export function useTheme() {
	const colorMode = useColorMode()

	const isDark = $computed(
		() => colorMode.preference === 'dark'
	)

	function toggleDark() {
		colorMode.preference = isDark ? 'light' : 'dark'
	}

	return $$({
		isDark,
		toggleDark
	})
}
