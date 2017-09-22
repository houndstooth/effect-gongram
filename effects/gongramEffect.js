import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../src/constants'
import { gongramSupertile, gongramWeave } from '../src'

export default {
	name: 'gongram',
	basePattern: {
		colorSettings: {
			colorSet: [ BLACK, BLUE, WHITE, GREEN, RED ],
			assignment: {
				supertile: gongramSupertile(),
				weave: gongramWeave(),
			},
		},
	},
}
