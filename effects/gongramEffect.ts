import { NamedEffect } from '../../../src'
import { GONGRAM_COLOR_SET } from '../constants'
import { gongramSupertile, gongramWeave } from '../pattern'
import GONGRAM_DESCRIPTION from './gongramDescription'

const gongramEffect: NamedEffect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				supertile: gongramSupertile.default(),
				weave: gongramWeave.default(),
			},
			colorSet: GONGRAM_COLOR_SET,
		},
	},
	description: GONGRAM_DESCRIPTION,
	name: 'gongram',
}

export { gongramEffect }
