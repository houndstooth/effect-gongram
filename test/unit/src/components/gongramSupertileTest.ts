import gongramSupertile from '../../../../src/components/gongramSupertile'

describe('gongram supertile', () => {
	it('makes a rank-2 array of addresses for 5 colors, one dimension by 2s and the other by 1s', () => {
		const actualSupertile = gongramSupertile()

		const expectedSupertile = [
			[ [ 0, 0 ], [ 2, 0 ], [ 4, 0 ], [ 1, 0 ], [ 3, 0 ] ],
			[ [ 0, 1 ], [ 2, 1 ], [ 4, 1 ], [ 1, 1 ], [ 3, 1 ] ],
			[ [ 0, 2 ], [ 2, 2 ], [ 4, 2 ], [ 1, 2 ], [ 3, 2 ] ],
			[ [ 0, 3 ], [ 2, 3 ], [ 4, 3 ], [ 1, 3 ], [ 3, 3 ] ],
			[ [ 0, 4 ], [ 2, 4 ], [ 4, 4 ], [ 1, 4 ], [ 3, 4 ] ],
		]

		expect(actualSupertile).toEqual(expectedSupertile)
	})
})
