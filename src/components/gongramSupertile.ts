import { iterator } from '../../../../src/utilities/codeUtilities'
import { Supertile } from '../../../../src'

const gongramSupertile: { (): Supertile } = () => {
	return iterator(5).map(x => {
		return iterator(5).map(y => {
			return [ y * 2 % 5, x ]
		})
	}) as Supertile
}

export default gongramSupertile
