import iterator from '../../shared/utilities/iterator'
import { GRID_SIZE } from '../../shared/common/customize'
import { BLACK, BLUE, WHITE, GREEN, RED } from '../../shared/common/constants'

const GONGRAM_COLORS = [ BLACK, BLUE, WHITE, GREEN, RED ]

const GONGRAM_SUPERTILE = iterator(GRID_SIZE).map(x => iterator(GRID_SIZE).map(y => {
	return [
		GONGRAM_COLORS[ (y * 2) % 5 ],
		GONGRAM_COLORS[ x % 5 ]
	]
}))

export {
	GONGRAM_SUPERTILE
}