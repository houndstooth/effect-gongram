import { codeUtilities, Weave } from '../../../../src'
import { COPRIME_OFFSET, GONGRAM_COLOR_COUNT } from '../../constants'

const gongramWeave: () => Weave =
	(): Weave => ({
		columns: codeUtilities.iterator(GONGRAM_COLOR_COUNT),
		rows: codeUtilities.iterator(GONGRAM_COLOR_COUNT).map((y: number): number =>
			y * COPRIME_OFFSET % GONGRAM_COLOR_COUNT),
	})

export { gongramWeave }
