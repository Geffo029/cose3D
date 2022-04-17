class CTX {
	static ctx = undefined;
	static vtxBuffer = [];
	//static meshBuffer = [];


	static loadVtxBuffer(vtxBuffer) {
		this.vtxBuffer.push(vtxBuffer);
	}

	//static loadMesh() {}

	static renderBuffer(mode) {

		let pixelsCoords = Perspectivator.vertexToScreenCoords(this.vtxBuffer[0], mode);
		this.polygon(pixelsCoords, 'red', false, 5);		//aaoidd
	}

	static renderVtxBuffer(color, width) {
		this.polygon(this.vtxBuffer[0], color, false, width);
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

}