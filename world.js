class World {
	constructor() {
		this.__entities = [];
	}


	addEntity(entity) {
		this.__entities.push(entity);
	}

	drawCenter(cameraTransform) {
		CTX.line(
			Display.center[0]-Display.meter2Pixel, Display.center[1],
			Display.center[0]+Display.meter2Pixel, Display.center[1],
			2, 'black'
		);

	}

	drawGrid() {
		// for (let i = center[0]; i < canvas.width; i += Display.meter2Pixel) {
		// 	this.ctx.moveTo(i, 0);
		// 	this.ctx.lineTo(i, canvas.height);
		// }
		// for (let i = center[0]; i > 0; i -= Display.meter2Pixel) {
		// 	this.ctx.moveTo(i, 0);
		// 	this.ctx.lineTo(i, canvas.height);
		// }
		// for (let i = center[1]; i < canvas.height; i += Display.meter2Pixel) {
		// 	this.ctx.moveTo(0, i);
		// 	this.ctx.lineTo(canvas.width, i);
		// }
		// for (let i = center[1]; i > 0; i -= Display.meter2Pixel) {
		// 	this.ctx.moveTo(0, i);
		// 	this.ctx.lineTo(canvas.width, i);
		// }
	}

	get entities() {
		return this.__entities;
	}
}