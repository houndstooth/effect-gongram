import iterator from '../shared/utilities/iterator'
import state from '../state'
import { BLACK, BLUE, WHITE, GREEN, RED } from '../shared/common/colors'

const GONGRAM_COLORS = [ BLACK, BLUE, WHITE, GREEN, RED ]

const gridSize = state.shared.gridSize
const GONGRAM_SUPERTILE = iterator(gridSize).map(x => iterator(gridSize).map(y => {
    return [
        GONGRAM_COLORS[ (y * 2) % 5 ],
        GONGRAM_COLORS[ x % 5 ]
    ]
}))

export {
    GONGRAM_SUPERTILE
}