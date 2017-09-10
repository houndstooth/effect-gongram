import codeUtilities from '../../../../src/utilities/codeUtilities'

export default () => codeUtilities.iterator(5).map(x => codeUtilities.iterator(5).map(y => [ (y * 2) % 5, x ]))
