import { checkDepsFromConfig, invokeCommand } from './help'

async function dev() {
	await checkDepsFromConfig()
	invokeCommand('nuxt dev --no-clear')
}

dev()
