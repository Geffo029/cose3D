class Display {

	static canvas = null;
	static backgroundColor = 'black';
	static center = null;
	static meter2Pixel = 22;		
	static hud = new HUD();


	static resizeCanvas(width, height) {
		this.canvas.width = width;
		this.canvas.height = height;
		this.center = [this.canvas.width/2, this.canvas.height/2];
	}

	static clearCanvas() {
		CTX.rectangle(0, 0, this.canvas.width, this.canvas.height, this.backgroundColor);
	}

	// set canvas(canvas) {
	// 	this.__canvas = canvas;
	// }
	// get canvas() {
	// 	return this.__canvas;
	// }

	// set backgroundColor(color) {
	// 	this.__backgroundColor = color;
	// }

	// get center() {
	// 	return this.__center;
	// }

	// get meter2Pixel() {
	// 	return this.__meter2Pixel;
	// }

	// get hud() {
	// 	return this.__hud;
	// }

}