import consola from 'consola'
import { provider } from 'std-env'
import { green, red } from 'kolorist'
import packageJson from '../package.json'
import { exec } from 'node:child_process'
import { createFsComputedWithStream } from 'file-computed'
import { getStaticDepsFromNuxtConfig } from 'nuxt3-intelligence'

const log = consola.withTag('nuxt3-intelligence')

function existPackage(packageName: string) {
	return Boolean(
		// @ts-ignore
		packageJson?.devDependencies?.[packageName] ||
			// @ts-ignore
			packageJson?.dependencies?.[packageName]
	)
}

function listLog(list: string[], color = green) {
	const endIndex = list.length - 1
	return list.reduce((s, v, i) => {
		if (i === endIndex) {
			s += `\n└─ ${color(v)}`
		} else {
			s += `\n├─ ${color(v)}`
		}

		return s
	}, '')
}

export async function getDepsSort() {
	const deps = await getStaticDepsFromNuxtConfig()

	const existDeps = deps.filter(dep => existPackage(dep))

	const notExistDeps = deps.filter(
		dep => !existPackage(dep)
	)

	return {
		existDeps,
		notExistDeps
	}
}

export async function checkDepsFromConfig() {
	if (provider === 'netlify') {
		return
	}

	log.start(`check nuxt deps`)

	const fsComputed = createFsComputedWithStream()

	const { existDeps, notExistDeps } = await fsComputed(
		['nuxt.config.ts', 'nuxt.config.ts'],
		getDepsSort
	)

	console.log()

	if (existDeps.length > 0) {
		log.success('installed', listLog(existDeps))
		console.log()
	}

	if (notExistDeps.length > 0) {
		log.info('not installed', listLog(notExistDeps, red))
		console.log()
		process.exit(0)
	}
}

export function invokeCommand(command: string) {
	const child_process = exec(command)
	child_process.stderr?.pipe(process.stderr)
	child_process.stdin?.pipe(process.stdin)
	child_process.stdout?.pipe(process.stdout)
	child_process.once('close', process.exit)
}
