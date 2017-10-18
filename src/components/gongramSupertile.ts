import { Supertile } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { COPRIME_OFFSET, GONGRAM_COLOR_COUNT } from '../../constants'

const gongramSupertile: () => Supertile = () =>
	iterator(GONGRAM_COLOR_COUNT).map(x =>
		iterator(GONGRAM_COLOR_COUNT).map(y =>
			[ y * COPRIME_OFFSET % GONGRAM_COLOR_COUNT, x ])) as Supertile

export default gongramSupertile
