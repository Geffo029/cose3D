class Renderer {

	loadEntity(entity) {
		CTX.loadVtxBuffer(entity.mesh.vertexes);
	}

	renderEntity(entity, cameraTransform) {		//DA SPOSTAREERE
		let newVertexes = this.editVertexs(entity.mesh.vertexes, entity.transform.position, cameraTransform.position);
		//CTX.loadVtxBuffer(newVertexes);
		CTX.renderVtxBuffer(entity.mesh.color, 5);	//aaa
	}

	editVertexs(vertexes, entPos, camPos) {		//DA SPOSTARE PROPIO
		let newVertexes = [];
		for (let i = 0; i < vertexes.length-1; i += 2) {
			newVertexes[i]		= Display.center[0]	+ (vertexes[i]		+ entPos.x - camPos.x) * Display.meter2Pixel;
			newVertexes[i+1]	= Display.center[1]	- (vertexes[i+1]	+ entPos.y - camPos.y) * Display.meter2Pixel;
		}
		return newVertexes;
	}


}