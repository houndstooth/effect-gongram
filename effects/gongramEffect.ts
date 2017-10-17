import { constants, Houndstooth } from '../../../src'
import { gongramSupertile, gongramWeave } from '../src'

const { BLACK, BLUE, GREEN, RED, WHITE } = constants

const gongramEffect: Houndstooth = {
	basePattern: {
		colorSettings: {
			assignment: {
				supertile: gongramSupertile(),
				weave: gongramWeave(),
			},
			colorSet: [ BLACK, BLUE, WHITE, GREEN, RED ],
		},
	},
	name: 'gongram',
}

export default gongramEffect
