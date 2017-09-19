import { iterator } from '../../../../src/utilities/codeUtilities'

export default () => iterator(5).map(x => iterator(5).map(y => [ (y * 2) % 5, x ]))
