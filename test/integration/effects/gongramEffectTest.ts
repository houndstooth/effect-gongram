import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import standardTileIsColors from '../../../../../test/integration/helpers/standardTileIsColors'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { BLACK, BLUE, WHITE, GREEN, RED } from '../../../../../src/constants'
import state from '../../../../../src/state'
import gongramEffect from '../../../effects/gongramEffect'
import CanvasSize from '../../../../../src/canvas/types/CanvasSize'

describe('gongram coloration', () => {
	it('arranges the 5 MTG colors by rows in the cycle of allies, and by columns in the cycle of enemies', () => {
		const tileSize = 50
		const sufficientGridSizeToDemonstratePattern = 10
		state.selectedHoundstoothEffects = [ gongramEffect ]
		const houndstoothOverrides = {
			basePattern: {
				tileSettings: {
					tileSizeSetting: tileSize,
				},
				viewSettings: {
					canvasSize: sufficientGridSizeToDemonstratePattern * tileSize as CanvasSize,
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
				tileOrigin: [ 0 * tileSize, 0 * tileSize ],
				tileSize,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize, 0 * tileSize ],
				tileSize,
				colors: [ BLACK, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize, 0 * tileSize ],
				tileSize,
				colors: [ BLACK, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize, 0 * tileSize ],
				tileSize,
				colors: [ BLACK, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize, 0 * tileSize ],
				tileSize,
				colors: [ BLACK, RED ],
			},
		]
		const rowTwoTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize, 1 * tileSize ],
				tileSize,
				colors: [ WHITE, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize, 1 * tileSize ],
				tileSize,
				colors: [ WHITE, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize, 1 * tileSize ],
				tileSize,
				colors: [ WHITE, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize, 1 * tileSize ],
				tileSize,
				colors: [ WHITE, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize, 1 * tileSize ],
				tileSize,
				colors: [ WHITE, RED ],
			},
		]
		const rowThreeTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize, 2 * tileSize ],
				tileSize,
				colors: [ RED, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize, 2 * tileSize ],
				tileSize,
				colors: [ RED, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize, 2 * tileSize ],
				tileSize,
				colors: [ RED, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize, 2 * tileSize ],
				tileSize,
				colors: [ RED, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize, 2 * tileSize ],
				tileSize,
				colors: [ RED, RED ],
			},
		]
		const rowFourTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize, 3 * tileSize ],
				tileSize,
				colors: [ BLUE, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize, 3 * tileSize ],
				tileSize,
				colors: [ BLUE, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize, 3 * tileSize ],
				tileSize,
				colors: [ BLUE, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize, 3 * tileSize ],
				tileSize,
				colors: [ BLUE, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize, 3 * tileSize ],
				tileSize,
				colors: [ BLUE, RED ],
			},
		]
		const rowFiveTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize, 4 * tileSize ],
				tileSize,
				colors: [ GREEN, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize, 4 * tileSize ],
				tileSize,
				colors: [ GREEN, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize, 4 * tileSize ],
				tileSize,
				colors: [ GREEN, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize, 4 * tileSize ],
				tileSize,
				colors: [ GREEN, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize, 4 * tileSize ],
				tileSize,
				colors: [ GREEN, RED ],
			},
		]
		const tiles = rowOneTiles.concat(rowTwoTiles).concat(rowThreeTiles).concat(rowFourTiles).concat(rowFiveTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
