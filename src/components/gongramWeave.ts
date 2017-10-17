import { Weave } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'

const gongramWeave: { (): Weave } = () => ({
	rows: iterator(5).map(y => y * 2 % 5),
	columns: iterator(5),
})

export default gongramWeave
