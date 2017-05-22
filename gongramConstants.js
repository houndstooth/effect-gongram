import iterator from '../shared/utilities/iterator'
import { BLACK, BLUE, WHITE, GREEN, RED } from '../shared/render/colors'

const GONGRAM_COLORS = [ BLACK, BLUE, WHITE, GREEN, RED ]

const GONGRAM_SUPERTILE = iterator(5).map(x => iterator(5).map(y => {
    return [
        GONGRAM_COLORS[ (y * 2) % 5 ],
        GONGRAM_COLORS[ x % 5 ]
    ]
}))

export {
    GONGRAM_SUPERTILE
}