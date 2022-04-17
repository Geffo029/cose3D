class HUD {
	constructor() {}

	center() {
		//CTX.drawCenter();
		CTX.line(
			Display.center[0]+10,
			Display.center[1]+10,
			Display.center[0]-10,
			Display.center[1]-10,
			2, 'green'
		);
		CTX.line(
			Display.center[0]-10,
			Display.center[1]+10,
			Display.center[0]+10,
			Display.center[1]-10,
			2, 'green'
		)
	}

	// grid() {
	// 	CTX.drawGrid();
	// }
}