import { Weave } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'

const gongramWeave: { (): Weave } = () => ({
	columns: iterator(5),
	rows: iterator(5).map(y => y * 2 % 5),
})

export default gongramWeave
