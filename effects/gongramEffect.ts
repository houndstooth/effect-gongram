import { Effect } from '../../../src'
import { GONGRAM_COLOR_SET } from '../constants'
import { gongramSupertile, gongramWeave } from '../src'

const gongramEffect: Effect = {
	basePattern: {
		colorSettings: {
			colorAssignment: {
				supertile: gongramSupertile(),
				weave: gongramWeave(),
			},
			colorSet: GONGRAM_COLOR_SET,
		},
	},
	name: 'gongram',
}

export { gongramEffect }
