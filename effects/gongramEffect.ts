import { Effect } from '../../../src'
import { GONGRAM_COLOR_SET } from '../constants'
import { gongramSupertile, gongramWeave } from '../pattern'

const gongramEffect: Effect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				supertile: gongramSupertile.default(),
				weave: gongramWeave.default(),
			},
			colorSet: GONGRAM_COLOR_SET,
		},
	},
	name: 'gongram',
}

export { gongramEffect }
