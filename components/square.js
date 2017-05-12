import mixColors from '../utilities/mixColors'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import drawStripedSquare from '../render/drawStripedSquare'
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
	const yColor = GONGRAM_COLORS[ y % 5 ]

	if (GINGHAM_MODE) {
		drawSolidSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			color: mixColors(xColor, yColor)
		})
	} else {
		drawStripedSquare({
			origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
			size: SQUARE_SIZE,
			originColor: xColor,
			otherColor: yColor
		})
	}
}