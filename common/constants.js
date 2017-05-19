import iterator from '../../shared/utilities/iterator'
import { GRID_SIZE } from '../../shared/common/customize'

const GONGRAM_COLORS = [
	{ 'r': 0, 'g': 0, 'b': 0, 'a': 1 },       // black
	{ 'r': 0, 'g': 0, 'b': 255, 'a': 1 },     // blue
	{ 'r': 255, 'g': 255, 'b': 255, 'a': 1 }, // white
	{ 'r': 0, 'g': 255, 'b': 0, 'a': 1 },     // green
	{ 'r': 255, 'g': 0, 'b': 0, 'a': 1 }      // red
]

const GONGRAM_SUPERTILE = iterator(GRID_SIZE).map(x => iterator(GRID_SIZE).map(y => {
	return [
		GONGRAM_COLORS[ (y * 2) % 5 ],
		GONGRAM_COLORS[ x % 5 ]
	]
}))

export {
	GONGRAM_SUPERTILE
}