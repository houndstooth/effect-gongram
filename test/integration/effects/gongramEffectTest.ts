import CanvasSize from '../../../../../src/canvas/types/CanvasSize'
import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../../../src/constants'
import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import Coordinate from '../../../../../src/space/types/Coordinate'
import state from '../../../../../src/state'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import standardTileIsColors from '../../../../../test/integration/helpers/standardTileIsColors'
import gongramEffect from '../../../effects/gongramEffect'

describe('gongram coloration', () => {
	it('arranges the 5 MTG colors by rows in the cycle of allies, and by columns in the cycle of enemies', () => {
		const tileSize = 50 as any
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
				tileOrigin: [ 0 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLACK, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLACK, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLACK, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLACK, RED ],
			},
		]
		const rowTwoTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ WHITE, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ WHITE, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ WHITE, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ WHITE, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ WHITE, RED ],
			},
		]
		const rowThreeTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ RED, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ RED, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ RED, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ RED, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ RED, RED ],
			},
		]
		const rowFourTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLUE, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLUE, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLUE, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLUE, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ BLUE, RED ],
			},
		]
		const rowFiveTiles = [
			{
				baseId: 0,
				tileOrigin: [ 0 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ GREEN, BLACK ],
			},
			{
				baseId: 0,
				tileOrigin: [ 1 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ GREEN, BLUE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 2 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ GREEN, WHITE ],
			},
			{
				baseId: 0,
				tileOrigin: [ 3 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ GREEN, GREEN ],
			},
			{
				baseId: 0,
				tileOrigin: [ 4 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
				colors: [ GREEN, RED ],
			},
		]
		const tiles = rowOneTiles.concat(rowTwoTiles).concat(rowThreeTiles).concat(rowFourTiles).concat(rowFiveTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
