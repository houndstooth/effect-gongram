import codeUtilities from '../../../../src/utilities/codeUtilities'

export default () => ({
	rows: codeUtilities.iterator(5).map(y => (y * 2) % 5),
	columns: codeUtilities.iterator(5),
})
