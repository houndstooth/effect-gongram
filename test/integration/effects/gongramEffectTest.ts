import { BLACK, BLUE, GREEN, RED, WHITE } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import { state } from '../../../../../src/state'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { standardTileIsColors } from '../../../../../test/integration/helpers/standardTileIsColors'
import { gongramEffect } from '../../../effects/gongramEffect'

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
					canvasSize: sufficientGridSizeToDemonstratePattern * tileSize as any,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		let baseId = -8
		const rowOneTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ tileSize * 0 as any, tileSize * 0 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLUE ],
				tileOrigin: [ tileSize * 1 as any, tileSize * 0 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, WHITE ],
				tileOrigin: [ tileSize * 2 as any, tileSize * 0 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, GREEN ],
				tileOrigin: [ tileSize * 3 as any, tileSize * 0 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, RED ],
				tileOrigin: [ tileSize * 4 as any, tileSize * 0 as any ] as Coordinate,
				tileSize,
			},
		]
		const rowTwoTiles = [
			{
				baseId: baseId += 8,
				colors: [ WHITE, BLACK ],
				tileOrigin: [ tileSize * 0 as any, tileSize * 1 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, BLUE ],
				tileOrigin: [ tileSize * 1 as any, tileSize * 1 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, WHITE ],
				tileOrigin: [ tileSize * 2 as any, tileSize * 1 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, GREEN ],
				tileOrigin: [ tileSize * 3 as any, tileSize * 1 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ WHITE, RED ],
				tileOrigin: [ tileSize * 4 as any, tileSize * 1 as any ] as Coordinate,
				tileSize,
			},
		]
		const rowThreeTiles = [
			{
				baseId: baseId += 8,
				colors: [ RED, BLACK ],
				tileOrigin: [ tileSize * 0 as any, tileSize * 2 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, BLUE ],
				tileOrigin: [ tileSize * 1 as any, tileSize * 2 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, WHITE ],
				tileOrigin: [ tileSize * 2 as any, tileSize * 2 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, GREEN ],
				tileOrigin: [ tileSize * 3 as any, tileSize * 2 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ RED, RED ],
				tileOrigin: [ tileSize * 4 as any, tileSize * 2 as any ] as Coordinate,
				tileSize,
			},
		]
		const rowFourTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLUE, BLACK ],
				tileOrigin: [ tileSize * 0 as any, tileSize * 3 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, BLUE ],
				tileOrigin: [ tileSize * 1 as any, tileSize * 3 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, WHITE ],
				tileOrigin: [ tileSize * 2 as any, tileSize * 3 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, GREEN ],
				tileOrigin: [ tileSize * 3 as any, tileSize * 3 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ BLUE, RED ],
				tileOrigin: [ tileSize * 4 as any, tileSize * 3 as any ] as Coordinate,
				tileSize,
			},
		]
		const rowFiveTiles = [
			{
				baseId: baseId += 8,
				colors: [ GREEN, BLACK ],
				tileOrigin: [ tileSize * 0 as any, tileSize * 4 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, BLUE ],
				tileOrigin: [ tileSize * 1 as any, tileSize * 4 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, WHITE ],
				tileOrigin: [ tileSize * 2 as any, tileSize * 4 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, GREEN ],
				tileOrigin: [ tileSize * 3 as any, tileSize * 4 as any ] as Coordinate,
				tileSize,
			},
			{
				baseId: baseId += 8,
				colors: [ GREEN, RED ],
				tileOrigin: [ tileSize * 4 as any, tileSize * 4 as any ] as Coordinate,
				tileSize,
			},
		]
		const tiles = rowOneTiles.concat(rowTwoTiles).concat(rowThreeTiles).concat(rowFourTiles).concat(rowFiveTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
