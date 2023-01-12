import { checkDepsFromConfig, invokeCommand } from './help'

async function build() {
	await checkDepsFromConfig()
	invokeCommand('nuxt build --no-clear')
}

build()
