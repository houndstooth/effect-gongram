import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../src/constants'
import gongramSupertile from '../src/utilities/gongramSupertile'
import gongramWeave from '../src/utilities/gongramWeave'

export default {
	basePattern: {
		colorSettings: {
			set: [ BLACK, BLUE, WHITE, GREEN, RED ],
			assignment: {
				supertile: gongramSupertile(),
				weave: gongramWeave(),
			},
		},
	},
}
