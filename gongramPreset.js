import iterator from '../shared/utilities/iterator'

import { BLACK, BLUE, WHITE, GREEN, RED } from '../shared/application/constants'

const GONGRAM_SUPERTILE = iterator(5).map(x => iterator(5).map(y => {
	return [
		(y * 2) % 5,
		x % 5
	]
}))

export default {
	state: {
		shared: {
			color: {
				colors: [ BLACK, BLUE, WHITE, GREEN, RED ],
				colorAssignment: {
					supertile: {
						tiles: GONGRAM_SUPERTILE
					}
				}
			}
		}
	},
	iterations: {},
	animations: {}
}