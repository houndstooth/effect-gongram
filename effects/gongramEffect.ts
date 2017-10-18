import { Houndstooth } from '../../../src'
import { GONGRAM_COLOR_SET } from '../constants'
import { gongramSupertile, gongramWeave } from '../src'

const gongramEffect: Houndstooth = {
	basePattern: {
		colorSettings: {
			assignment: {
				supertile: gongramSupertile(),
				weave: gongramWeave(),
			},
			colorSet: GONGRAM_COLOR_SET,
		},
	},
	name: 'gongram',
}

export default gongramEffect
