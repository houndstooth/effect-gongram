import { Weave } from '../../../../../src'
import { gongramWeave } from '../../../pattern'

describe('gongram weave', () => {
	it('rows go by 2s and columns by 1s', () => {
		const actualWeave: Weave = gongramWeave.main()

		const expectedWeave: Weave = {
			columns: [ 0, 1, 2, 3, 4 ],
			rows: [ 0, 2, 4, 1, 3 ],
		}

		expect(actualWeave).toEqual(expectedWeave)
	})
})
