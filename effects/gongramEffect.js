import codeUtilities from '../../../src/utilities/codeUtilities'
import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../src/constants'

export default {
	initial: {
		colorSettings: {
			set: [ BLACK, BLUE, WHITE, GREEN, RED ],
			assignment: {
				supertile: codeUtilities.iterator(5).map(x => codeUtilities.iterator(5).map(y => [ (y * 2) % 5, x ])),
				weave: {
					rows: codeUtilities.iterator(5).map(y => (y * 2) % 5),
					columns: codeUtilities.iterator(5),
				},
			},
			houndazzle: {
				colorSettings: {
					assignment: {
						mode: 'SUPERTILE',
						supertile: codeUtilities.iterator(5).map(x => codeUtilities.iterator(5).map(y => [ x, (y * 2) % 5 ])),
					},
				},
				orientationSettings: {
					assignment: {
						mode: 'WEAVE',
						weave: { rows: [ 1, 0 ], columns: [ 0, 1 ] },
					},
				},
			},
		},
	},
}
