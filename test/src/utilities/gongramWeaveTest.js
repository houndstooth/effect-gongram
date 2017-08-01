import gongramWeave from '../../../src/utilities/gongramWeave'

describe('gongram weave', () => {
	it('rows go by 2s and columns by 1s', () => {
		const actualWeave = gongramWeave()

		const expectedWeave = {
			rows: [ 0, 2, 4, 1, 3 ],
			columns: [ 0, 1, 2, 3, 4 ],
		}

		expect(actualWeave).toEqual(expectedWeave)
	})
})
