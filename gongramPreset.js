import iterator from '../shared/utilities/iterator'
import { BLACK, BLUE, GREEN, RED, WHITE } from '../shared/application/constants'

export default {
	state: {
		shared: {
			color: {
				colors: [ BLACK, BLUE, WHITE, GREEN, RED ],
				colorAssignment: {
					supertile: {
						tiles: iterator(5).map(x => iterator(5).map(y => [ (y * 2) % 5, x ]))
					},
					weave: {
						rows: iterator(5).map(y => (y * 2) % 5),
						columns: iterator(5)
					}
				}
			}
		}
	},
	iterations: {},
	animations: {}
}