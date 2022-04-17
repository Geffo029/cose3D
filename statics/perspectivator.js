class Perspectivator {

	static __cameraTransform;
	static __entityTransform;



	static vertexToScreenCoords(vertexes, mode) {
		let camPos = this.__cameraTransform.position;
		let entPos = this.__entityTransform.position;
		let coords = [];
		for (let i = 0; i < vertexes.length-2; i += 3) {
			let newC = mode(vertexes[i], vertexes[i+1], entPos, camPos);
			coords = coords.concat(newC);
		}
		return coords;
	} 

	static _2dOrthogonal(x, y, entPos, camPos) {
		x = Display.center[0] + (x	+ entPos.x - camPos.x) * Display.meter2Pixel;
		y = Display.center[1] - (y	+ entPos.y - camPos.y) * Display.meter2Pixel;
		return [x, y];
	}


	static set cameraTransform(cameraTransform) {
		this.__cameraTransform = cameraTransform;
	}

	static set entityTransform(entityTransform) {
		this.__entityTransform = entityTransform;
	}

}