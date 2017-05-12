import ctx from '../../shared/render/ctx'
import { SQUARE_SIZE, GRID_SIZE } from '../../shared/common/customize'

export default () => {

	const COLOR_A = "#000000";
	const COLOR_B = "#0000ff";
	const COLOR_C = "#ffffff";
	const COLOR_D = "#00ff00";
	const COLOR_E = "#ff0000";

	let color_1, color_2;

	const GINGHAM_MODE = false;
	const STRIPES_PER_SQUARE = 16;

	for (let x = 0; x < GRID_SIZE; x++) {
		for (let y = 0; y < GRID_SIZE; y++) {
			if (x % 5 === 0) color_1 = COLOR_A;
			if (x % 5 === 1) color_1 = COLOR_B;
			if (x % 5 === 2) color_1 = COLOR_C;
			if (x % 5 === 3) color_1 = COLOR_D;
			if (x % 5 === 4) color_1 = COLOR_E;

			if (y % 5 === 0) color_2 = COLOR_A;
			if (y % 5 === 2) color_2 = COLOR_B;
			if (y % 5 === 4) color_2 = COLOR_C;
			if (y % 5 === 1) color_2 = COLOR_D;
			if (y % 5 === 3) color_2 = COLOR_E;

			if (GINGHAM_MODE) {
				solidSquare(mixColors(color_1, color_2), x, y);
			} else {
				stripedSquare(color_1, color_2, x, y);
			}
		}
	}

	function mixColors(color_1, color_2) {
		let result = "#";
		for (let i = 1; i <= 6; i++) {
			if (color_1[ i ] === color_2[ i ]) {
				result += color_1[ i ];
			} else {
				result += "8";
			}

			//alternate "OR" method
			// if (color_1[i] === "f" || color_2[i] === "f") {
			//   result += "f"
			// } else {
			//   result += "0"
			// }
		}
		return result;
	}

	function solidSquare(color, x, y) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.rect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
		ctx.fill();
	}

	function scaledCoords(x, y) {
		return [ x * SQUARE_SIZE, y * SQUARE_SIZE ];
	}

	function moveTo(x, y) {
		ctx.moveTo.apply(ctx, scaledCoords(x, y));
	}

	function lineTo(x, y) {
		ctx.lineTo.apply(ctx, scaledCoords(x, y));
	}

	function stripedSquare(color_1, color_2, x, y) {
		ctx.fillStyle = color_1;

		let unit = 2 / STRIPES_PER_SQUARE;
		let pos;

		for (let i = 0; i < STRIPES_PER_SQUARE; i++) {
			pos = i * unit;
			ctx.beginPath();

			if (pos <= 1) {
				moveTo(x + pos, y);
			} else {
				moveTo(x + 1, y + (pos - 1));
			}

			if (pos <= 1) {
				lineTo(x + pos + unit, y);
			} else {
				lineTo(x + 1, y + pos - 1 + unit);
			}

			if (pos <= 1) {
				lineTo(x, y + pos + unit);
			} else {
				lineTo(x + pos - 1 + unit, y + 1);
			}

			if (pos <= 1) {
				lineTo(x, y + pos);
			} else {
				lineTo(x + (pos - 1), y + 1);
			}

			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = ctx.fillStyle === color_1 ? color_2 : color_1;
		}
	}
}