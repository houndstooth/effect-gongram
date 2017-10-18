import { Weave } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { COPRIME_OFFSET, GONGRAM_COLOR_COUNT } from '../../constants'

const gongramWeave: () => Weave = () => ({
	columns: iterator(GONGRAM_COLOR_COUNT),
	rows: iterator(GONGRAM_COLOR_COUNT).map(y => y * COPRIME_OFFSET % GONGRAM_COLOR_COUNT),
})

export default gongramWeave
