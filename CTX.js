class CTX {
	static ctx = undefined;
	static vtxBuffer = [];

	// static set2dCtx(ctx) {
	// 	this.ctx = ctx;
	// } 

	static loadVtxBuffer(vtxBuffer) {
		this.vtxBuffer = [...vtxBuffer];
	}

	static renderVtxBuffer(color, width) {
		this.polygon(this.vtxBuffer, color, false, width);
	}

	static drawGrid(x, y, w, h, color, cellSize, fromCenter = false) {
		this.ctx.lineWidth = 1;
		this.ctx.strokeStyle = 'gray';
		this.ctx.beginPath();

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
		this.ctx.stroke();
	}

	static drawCenter() {
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = 'black';
		this.ctx.beginPath();
		this.ctx.moveTo(Display.center[0], Display.center[1] - Display.meter2Pixel);
		this.ctx.lineTo(Display.center[0], Display.center[1] + Display.meter2Pixel);
		this.ctx.moveTo(Display.center[0] - Display.meter2Pixel, Display.center[1]);
		this.ctx.lineTo(Display.center[0] + Display.meter2Pixel, Display.center[1]);
		this.ctx.stroke();
		this.ctx.closePath();
	
	}

	static beginPath() {
		this.ctx.beginPath();
	}

	static closePath() {
		this.ctx.closePath();
	}

	static polygon(vertexes, color, fill=true, width=undefined) {
		this.ctx.beginPath();
		if (fill) {
			this.ctx.fillStyle = color;
			this.ctx.moveTo(vertexes[0], vertexes[1]);
			for (let i = 2; i < vertexes.length-1; i+=2) {
				this.ctx.lineTo(vertexes[i], vertexes[i+1]);
			}
			this.ctx.closePath();
			this.ctx.fill();
		}
		else {
			this.ctx.strokeStyle = color;
			this.ctx.lineWidth = width;
			this.ctx.moveTo(vertexes[0], vertexes[1]);
			for (let i = 2; i < vertexes.length-1; i+=2) {
				this.ctx.lineTo(vertexes[i], vertexes[i+1]);
			}
			this.ctx.closePath();
			this.ctx.stroke();
		}
	}

	static line(xStart, yStart, xEnd, yEnd, width, color) {
		this.ctx.lineWidth = width;
		this.ctx.strokeStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(xStart, yStart);
		this.ctx.lineTo(xEnd, yEnd);
		this.ctx.stroke();
	}

	static rectangle(x, y, w, h, color, fill=true, width=undefined) {
		this.ctx.beginPath();
		if (fill) {
			this.ctx.fillStyle = color;
			this.ctx.rect(x, y, w, h);
			this.ctx.fill();
		}
		else {
			this.ctx.strokeStyle = color;
			this.ctx.lineWidth = width;
			this.ctx.rect(x, y, w, h);
			this.ctx.stroke();
		}
	}

}