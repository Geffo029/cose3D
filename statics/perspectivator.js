class Perspectivator {

	static __cameraTransform;
	static __entityTransform;



	static vertexToPixelsCoords(vertexes, mode) {
		let camPos = this.__cameraTransform.position;
		let entPos = this.__entityTransform.position;
		let pixelsCoords = [];
		for (let i = 0; i < vertexes.length-2; i += 3) {
			let newC = mode(vertexes[i], vertexes[i+1], vertexes[i+2], entPos, camPos);
			pixelsCoords = pixelsCoords.concat(newC);
		}
		return pixelsCoords;
	} 

	static _2dOrthogonal(x, y, z, entPos, camPos) {
		let xPixel = Display.center[0] + (x	+ entPos.x - camPos.x) * Display.meter2Pixel;
		let yPixel = Display.center[1] - (y	+ entPos.y - camPos.y) * Display.meter2Pixel;
		return [xPixel, yPixel];
	}

	static _3dPerspective(x, y, z, entPos, camPos) {
		//console.log(x, y, z)
		let xPixel = Display.center[0] + (x + entPos.x - camPos.x)/(z + entPos.z - camPos.z) * Display.meter2Pixel; 
		let yPixel = Display.center[1] - (y + entPos.y - camPos.y)/(z + entPos.z - camPos.z) * Display.meter2Pixel; 
		//console.log(xPixel, yPixel)
		return [xPixel, yPixel];
	}


	static set cameraTransform(cameraTransform) {
		this.__cameraTransform = cameraTransform;
	}

	static set entityTransform(entityTransform) {
		this.__entityTransform = entityTransform;
	}

}