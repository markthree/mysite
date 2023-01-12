import { green } from 'kolorist'
import { invokeCommand } from './help'

function preview() {
	console.log('Listening', green('http://localhost:3000'))

	console.log()

	invokeCommand('node .output/server/index.mjs')
}

preview()
