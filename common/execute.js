import { GRID_SIZE, SQUARE_SIZE } from '../../shared/common/customize'
import iterator from '../../shared/utilities/iterator'
import tile from '../../shared/components/tile'
import calculateColors from '../utilities/calculateColors'

export default () => {
	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const { originColor, otherColor } = calculateColors({ x, y })
			tile({
				origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
				size: SQUARE_SIZE,
				originColor,
				otherColor
			})
		})
	})
}