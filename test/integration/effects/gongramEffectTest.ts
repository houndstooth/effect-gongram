import {
	BLACK,
	BLUE,
	executeEffect,
	from,
	GREEN,
	RED,
	to,
	Unit,
	WHITE,
} from '../../../../../src/indexForTest'
import { setAppStateForEffectTests, StandardTileExpectation, standardTileIsColors } from '../../../../../test'
import { gongramEffect } from '../../../effects'

describe('gongram coloration', () => {
	// tslint:disable-next-line:max-line-length
	it('arranges the 5 MTG colors by rows in the cycle of allies, and by columns in the cycle of enemies', (done: DoneFn) => {
		const tileSize: Unit = to.Unit(50)
		const sufficientTileResolutionToDemonstratePattern: number = 10
		setAppStateForEffectTests.setAvailableEffects({ gongram: gongramEffect })
		setAppStateForEffectTests.setSelectedEffects([ 'gongram' ])
		setAppStateForEffectTests.setOverrides({
			basePattern: {
				gridSettings: {
					tileResolution: sufficientTileResolutionToDemonstratePattern,
				},
				tileSettings: {
					tileSize,
				},
			},
		})

		executeEffect.default()

		setTimeout(() => {
			let baseId: number = -8
			const rowOneTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 0 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLUE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 0 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, WHITE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 0 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, GREEN ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 0 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, RED ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 0 ]),
					tileSize,
				},
			]
			const rowTwoTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ WHITE, BLACK ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 1 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ WHITE, BLUE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 1 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ WHITE, WHITE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 1 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ WHITE, GREEN ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 1 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ WHITE, RED ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 1 ]),
					tileSize,
				},
			]
			const rowThreeTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ RED, BLACK ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 2 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ RED, BLUE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 2 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ RED, WHITE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 2 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ RED, GREEN ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 2 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ RED, RED ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 2 ]),
					tileSize,
				},
			]
			const rowFourTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLUE, BLACK ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 3 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLUE, BLUE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 3 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLUE, WHITE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 3 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLUE, GREEN ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 3 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ BLUE, RED ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 3 ]),
					tileSize,
				},
			]
			const rowFiveTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ GREEN, BLACK ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 0, from.Unit(tileSize) * 4 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ GREEN, BLUE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 1, from.Unit(tileSize) * 4 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ GREEN, WHITE ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 2, from.Unit(tileSize) * 4 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ GREEN, GREEN ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 3, from.Unit(tileSize) * 4 ]),
					tileSize,
				},
				{
					baseId: baseId += 8,
					colors: [ GREEN, RED ],
					tileOrigin: to.Coordinate([ from.Unit(tileSize) * 4, from.Unit(tileSize) * 4 ]),
					tileSize,
				},
			]
			const tiles: StandardTileExpectation[] = rowOneTiles
				.concat(rowTwoTiles)
				.concat(rowThreeTiles)
				.concat(rowFourTiles)
				.concat(rowFiveTiles)

			tiles.forEach((tile: StandardTileExpectation) => expect(standardTileIsColors(tile)).toBe(true))

			done()
		},         0)
	})
})
