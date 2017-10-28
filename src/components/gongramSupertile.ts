import { Supertile, to } from '../../../../src'
import { ShapeColorIndex } from '../../../../src/components/types'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { COPRIME_OFFSET, GONGRAM_COLOR_COUNT } from '../../constants'

const gongramSupertile: () => Supertile =
	(): Supertile => to.Supertile(iterator(GONGRAM_COLOR_COUNT).map((x: number): ShapeColorIndex[][] =>
		iterator(GONGRAM_COLOR_COUNT).map((y: number): ShapeColorIndex[] =>
			to.ShapeColorIndices([ y * COPRIME_OFFSET % GONGRAM_COLOR_COUNT, x ]))))

export { gongramSupertile }
