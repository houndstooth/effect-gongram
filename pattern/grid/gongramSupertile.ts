import { codeUtilities, ShapeColorIndex, Supertile } from '../../../../src'
import * as to from '../../../../src/to'
import { COPRIME_OFFSET, GONGRAM_COLOR_COUNT } from '../../constants'

const gongramSupertile: () => Supertile =
	(): Supertile => to.Supertile(codeUtilities.iterator(GONGRAM_COLOR_COUNT).map((x: number): ShapeColorIndex[][] =>
		codeUtilities.iterator(GONGRAM_COLOR_COUNT).map((y: number): ShapeColorIndex[] =>
			to.ShapeColorIndices([ y * COPRIME_OFFSET % GONGRAM_COLOR_COUNT, x ]))))

export { gongramSupertile }
