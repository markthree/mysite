export function useElInitialRenderStatus() {
	let status = $ref(false)
	let el = $ref<HTMLElement>()

	const visible = useElementVisibility($$(el))

	watchOnce(visible, () => {
		status = true
	})

	return $$({
		el,
		status
	})
}
