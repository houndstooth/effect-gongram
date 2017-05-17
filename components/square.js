import mixColors from '../utilities/mixColors'
import tile from '../../shared/components/tile'
import { SQUARE_SIZE } from '../../shared/common/customize'
import { GINGHAM_MODE } from '../common/customize'

const GONGRAM_COLORS = [
	"#000000",
	"#0000ff",
	"#ffffff",
	"#00ff00",
	"#ff0000"
]

export default ({ x, y }) => {
	const xColor = GONGRAM_COLORS[ x % 5 ]
	const yColor = GONGRAM_COLORS[ (y * 2) % 5 ]

	let originColor, otherColor
	if (GINGHAM_MODE) {
		originColor = mixColors(xColor, yColor)
		otherColor = mixColors(xColor, yColor)
	} else {
		originColor = yColor
		otherColor = xColor
	}

	tile({
		origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
		size: SQUARE_SIZE,
		originColor,
		otherColor
	})
}