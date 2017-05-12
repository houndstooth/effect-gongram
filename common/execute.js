import { GRID_SIZE } from '../../shared/common/customize'
import square from '../components/square'
import iterator from '../../shared/utilities/iterator'

export default () => {
	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			square({x, y})
		})
	})
}