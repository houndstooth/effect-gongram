import { constants } from '../../../src'
import { gongramSupertile, gongramWeave } from '../src'

const { BLACK, BLUE, GREEN, RED, WHITE } = constants

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
