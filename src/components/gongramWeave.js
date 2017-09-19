import { iterator } from '../../../../src/utilities/codeUtilities'

export default () => ({
	rows: iterator(5).map(y => (y * 2) % 5),
	columns: iterator(5),
})
