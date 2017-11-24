import { ColorSet, constants, to } from '../../src'

const { BLACK, BLUE, GREEN, RED, WHITE } = constants

const GONGRAM_COLOR_SET: ColorSet = to.ColorSet([ BLACK, BLUE, WHITE, GREEN, RED ])

const GONGRAM_COLOR_COUNT: number = GONGRAM_COLOR_SET.length

const COPRIME_OFFSET: number = 2

export {
	COPRIME_OFFSET,
	GONGRAM_COLOR_SET,
	GONGRAM_COLOR_COUNT,
}
