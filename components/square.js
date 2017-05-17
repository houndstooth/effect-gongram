import mixColors from '../utilities/mixColors'
import drawStripedSquare from '../../shared/render/drawStripedSquare'
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

	if (GINGHAM_MODE) {
		const mixedColor = mixColors(xColor, yColor)
		drawStripedSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			originColor: mixedColor,
			otherColor: mixedColor
		})
	} else {
		drawStripedSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			originColor: yColor,
			otherColor: xColor
		})
	}
}