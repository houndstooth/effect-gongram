import { constants, to } from '../../src'

const { BLACK, BLUE, GREEN, RED, WHITE } = constants

const GONGRAM_COLOR_SET = to.ColorSet([ BLACK, BLUE, WHITE, GREEN, RED ])

const GONGRAM_COLOR_COUNT = GONGRAM_COLOR_SET.length

const COPRIME_OFFSET = 2

export {
	COPRIME_OFFSET,
	GONGRAM_COLOR_SET,
	GONGRAM_COLOR_COUNT,
}
