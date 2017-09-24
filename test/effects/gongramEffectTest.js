import executeSelectedHoundstoothEffects from '../../../../src/execute/executeSelectedHoundstoothEffects'
import standardTileIsColors from '../../../../test/integration/helpers/standardTileIsColors'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import { BLACK, BLUE, WHITE, GREEN, RED } from '../../../../src/constants'
import state from '../../../../src/state'
import resetState from '../../../../src/store/resetState'
import gongramEffect from '../../effects/gongramEffect'

describe('gongram coloration', () => {
	beforeEach(() => resetState(state))

	it('arranges the 5 MTG colors by rows in the cycle of allies, and by columns in the cycle of enemies', () => {
		const tileSizeInPixels = 50
		const sufficientGridSizeToDemonstratePattern = 10
		state.selectedHoundstoothEffects = [ gongramEffect ]
		const houndstoothOverrides = {
			basePattern: {
				tileSettings: {
					tileSizeSetting: tileSizeInPixels,
				},
				viewSettings: {
					canvasSize: sufficientGridSizeToDemonstratePattern * tileSizeInPixels,
				},
				gridSettings: {
					gridSize: sufficientGridSizeToDemonstratePattern,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const rowOneTiles = [
			{
				baseId: 0,
				originInPixels: [ 0 * tileSizeInPixels, 0 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 0,
				originInPixels: [ 1 * tileSizeInPixels, 0 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLACK, BLUE ],
			},
			{
				baseId: 0,
				originInPixels: [ 2 * tileSizeInPixels, 0 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLACK, WHITE ],
			},
			{
				baseId: 0,
				originInPixels: [ 3 * tileSizeInPixels, 0 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLACK, GREEN ],
			},
			{
				baseId: 0,
				originInPixels: [ 4 * tileSizeInPixels, 0 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLACK, RED ],
			},
		]
		const rowTwoTiles = [
			{
				baseId: 0,
				originInPixels: [ 0 * tileSizeInPixels, 1 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ WHITE, BLACK ],
			},
			{
				baseId: 0,
				originInPixels: [ 1 * tileSizeInPixels, 1 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ WHITE, BLUE ],
			},
			{
				baseId: 0,
				originInPixels: [ 2 * tileSizeInPixels, 1 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ WHITE, WHITE ],
			},
			{
				baseId: 0,
				originInPixels: [ 3 * tileSizeInPixels, 1 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ WHITE, GREEN ],
			},
			{
				baseId: 0,
				originInPixels: [ 4 * tileSizeInPixels, 1 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ WHITE, RED ],
			},
		]
		const rowThreeTiles = [
			{
				baseId: 0,
				originInPixels: [ 0 * tileSizeInPixels, 2 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ RED, BLACK ],
			},
			{
				baseId: 0,
				originInPixels: [ 1 * tileSizeInPixels, 2 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ RED, BLUE ],
			},
			{
				baseId: 0,
				originInPixels: [ 2 * tileSizeInPixels, 2 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ RED, WHITE ],
			},
			{
				baseId: 0,
				originInPixels: [ 3 * tileSizeInPixels, 2 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ RED, GREEN ],
			},
			{
				baseId: 0,
				originInPixels: [ 4 * tileSizeInPixels, 2 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ RED, RED ],
			},
		]
		const rowFourTiles = [
			{
				baseId: 0,
				originInPixels: [ 0 * tileSizeInPixels, 3 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLUE, BLACK ],
			},
			{
				baseId: 0,
				originInPixels: [ 1 * tileSizeInPixels, 3 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLUE, BLUE ],
			},
			{
				baseId: 0,
				originInPixels: [ 2 * tileSizeInPixels, 3 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLUE, WHITE ],
			},
			{
				baseId: 0,
				originInPixels: [ 3 * tileSizeInPixels, 3 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLUE, GREEN ],
			},
			{
				baseId: 0,
				originInPixels: [ 4 * tileSizeInPixels, 3 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ BLUE, RED ],
			},
		]
		const rowFiveTiles = [
			{
				baseId: 0,
				originInPixels: [ 0 * tileSizeInPixels, 4 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ GREEN, BLACK ],
			},
			{
				baseId: 0,
				originInPixels: [ 1 * tileSizeInPixels, 4 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ GREEN, BLUE ],
			},
			{
				baseId: 0,
				originInPixels: [ 2 * tileSizeInPixels, 4 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ GREEN, WHITE ],
			},
			{
				baseId: 0,
				originInPixels: [ 3 * tileSizeInPixels, 4 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ GREEN, GREEN ],
			},
			{
				baseId: 0,
				originInPixels: [ 4 * tileSizeInPixels, 4 * tileSizeInPixels ],
				tileSizeInPixels,
				colors: [ GREEN, RED ],
			},
		]
		const tiles = rowOneTiles.concat(rowTwoTiles).concat(rowThreeTiles).concat(rowFourTiles).concat(rowFiveTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
