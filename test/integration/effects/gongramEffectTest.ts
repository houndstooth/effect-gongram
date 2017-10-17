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
				gridSettings: {
					gridSize: sufficientGridSizeToDemonstratePattern,
				},
				tileSettings: {
					tileSizeSetting: tileSize,
				},
				viewSettings: {
					canvasSize: sufficientGridSizeToDemonstratePattern * tileSize as CanvasSize,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const rowOneTiles = [
			{
				baseId: 0,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 0 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLACK, BLUE ],
				tileOrigin: [ 1 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLACK, WHITE ],
				tileOrigin: [ 2 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLACK, GREEN ],
				tileOrigin: [ 3 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLACK, RED ],
				tileOrigin: [ 4 * tileSize as any, 0 * tileSize as any ] as Coordinate,
				tileSize,
			},
		]
		const rowTwoTiles = [
			{
				baseId: 0,
				colors: [ WHITE, BLACK ],
				tileOrigin: [ 0 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ WHITE, BLUE ],
				tileOrigin: [ 1 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ WHITE, WHITE ],
				tileOrigin: [ 2 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ WHITE, GREEN ],
				tileOrigin: [ 3 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ WHITE, RED ],
				tileOrigin: [ 4 * tileSize as any, 1 * tileSize as any ] as Coordinate,
				tileSize,
			},
		]
		const rowThreeTiles = [
			{
				baseId: 0,
				colors: [ RED, BLACK ],
				tileOrigin: [ 0 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ RED, BLUE ],
				tileOrigin: [ 1 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ RED, WHITE ],
				tileOrigin: [ 2 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ RED, GREEN ],
				tileOrigin: [ 3 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ RED, RED ],
				tileOrigin: [ 4 * tileSize as any, 2 * tileSize as any ] as Coordinate,
				tileSize,
			},
		]
		const rowFourTiles = [
			{
				baseId: 0,
				colors: [ BLUE, BLACK ],
				tileOrigin: [ 0 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLUE, BLUE ],
				tileOrigin: [ 1 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLUE, WHITE ],
				tileOrigin: [ 2 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLUE, GREEN ],
				tileOrigin: [ 3 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ BLUE, RED ],
				tileOrigin: [ 4 * tileSize as any, 3 * tileSize as any ] as Coordinate,
				tileSize,
			},
		]
		const rowFiveTiles = [
			{
				baseId: 0,
				colors: [ GREEN, BLACK ],
				tileOrigin: [ 0 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ GREEN, BLUE ],
				tileOrigin: [ 1 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ GREEN, WHITE ],
				tileOrigin: [ 2 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ GREEN, GREEN ],
				tileOrigin: [ 3 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: 0,
				colors: [ GREEN, RED ],
				tileOrigin: [ 4 * tileSize as any, 4 * tileSize as any ] as Coordinate,
				tileSize,
			},
		]
		const tiles = rowOneTiles.concat(rowTwoTiles).concat(rowThreeTiles).concat(rowFourTiles).concat(rowFiveTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
