import iterator from '../shared/utilities/iterator'
import { BLACK, BLUE, GREEN, RED, WHITE } from '../shared/application/constants'

export default {
	state: {
		shared: {
			color: {
				set: [ BLACK, BLUE, WHITE, GREEN, RED ],
				assignment: {
					supertile: iterator(5).map(x => iterator(5).map(y => [ (y * 2) % 5, x ])),
					weave: {
						rows: iterator(5).map(y => (y * 2) % 5),
						columns: iterator(5)
					}
				},
				houndazzle: {
					color: {
						set: [ BLACK, BLUE, WHITE, GREEN, RED ],
						assignment: {
							supertile: iterator(5).map(x => iterator(5).map(y => [ (y * 3 + 1) % 5, (x + 4) % 5 ])),
							weave: {
								rows: iterator(5).map(y => (y * 3 + 1) % 5),
								columns: iterator(5).map(x => (x + 4) % 5)
							}
						}
					}
				}
			}
		}
	},
	iterations: {},
	animations: {}
}
