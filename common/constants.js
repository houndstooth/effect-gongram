import iterator from '../../shared/utilities/iterator'
import { GRID_SIZE } from '../../shared/common/customize'

const GONGRAM_COLORS = [
	"#000",
	"#00f",
	"#fff",
	"#0f0",
	"#f00"
]

const GONGRAM_SUPERTILE = iterator(GRID_SIZE).map(x => iterator(GRID_SIZE).map(y => ({
	originColor: GONGRAM_COLORS[ (y * 2) % 5 ],
	otherColor: GONGRAM_COLORS[ x % 5 ]
})))

export {
	GONGRAM_SUPERTILE
}