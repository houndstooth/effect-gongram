import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../src/constants'
import { gongramSupertile, gongramWeave } from '../src'

const gongramEffect = {
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

export default gongramEffect
