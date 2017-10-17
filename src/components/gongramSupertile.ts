import { Supertile } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'

const gongramSupertile: () => Supertile = () =>
	iterator(5).map(x =>
		iterator(5).map(y =>
			[ y * 2 % 5, x ])) as Supertile

export default gongramSupertile
