import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../src/constants'
import gongramSrc from '../src'

export default {
	name: 'gongram',
	basePattern: {
		colorSettings: {
			colorSet: [ BLACK, BLUE, WHITE, GREEN, RED ],
			assignment: {
				supertile: gongramSrc.gongramSupertile(),
				weave: gongramSrc.gongramWeave(),
			},
		},
	},
}
