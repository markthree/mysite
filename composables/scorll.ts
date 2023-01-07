export function useBackTop() {
	let visible = $ref(false)

	function backtop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	onMounted(() => {
		const { arrivedState } = useScroll(window)
		watchEffect(() => {
			visible = !arrivedState.top
		})
	})

	return $$({
		visible,
		backtop
	})
}
