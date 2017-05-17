import { UNIT, STRIPE_COUNT } from '../../shared/common/customize'
import render from '../../shared/render/render'
import iterator from '../../shared/utilities/iterator'
import scalePoint from '../../shared/utilities/scalePoint'

export default ({ origin, size, originColor, otherColor }) => {
	origin = scalePoint({ point: origin })
	const sizedUnit = size * UNIT

	let color
	let stripeWidthInTermsOfPerimeter = 2 / STRIPE_COUNT
	let currentPositionAlongPerimeter

	iterator(STRIPE_COUNT).forEach(i => {
		currentPositionAlongPerimeter = i * stripeWidthInTermsOfPerimeter
		color = i % 2 == 1 ? originColor : otherColor

		let coordinates
		if (currentPositionAlongPerimeter <= 1) {
			// in the top left triangular half of the square
			coordinates = [
				[
					origin[ 0 ] + currentPositionAlongPerimeter * sizedUnit,
					origin[ 1 ]
				],
				[
					origin[ 0 ] + (currentPositionAlongPerimeter + stripeWidthInTermsOfPerimeter) * sizedUnit,
					origin[ 1 ]
				],
				[
					origin[ 0 ],
					origin[ 1 ] + (currentPositionAlongPerimeter + stripeWidthInTermsOfPerimeter) * sizedUnit
				],
				[
					origin[ 0 ],
					origin[ 1 ] + currentPositionAlongPerimeter * sizedUnit
				]
			]
		} else {
			// in the bottom right triangular half of the square
			coordinates = [
				[
					origin[ 0 ] + sizedUnit,
					origin[ 1 ] + (currentPositionAlongPerimeter - 1) * sizedUnit
				],
				[
					origin[ 0 ] + sizedUnit,
					origin[ 1 ] + (currentPositionAlongPerimeter - 1 + stripeWidthInTermsOfPerimeter) * sizedUnit
				],
				[
					origin[ 0 ] + (currentPositionAlongPerimeter - 1 + stripeWidthInTermsOfPerimeter) * sizedUnit,
					origin[ 1 ] + sizedUnit
				],
				[
					origin[ 0 ] + (currentPositionAlongPerimeter - 1) * sizedUnit,
					origin[ 1 ] + sizedUnit
				]
			]
		}

		render({color, coordinates})
	})
}