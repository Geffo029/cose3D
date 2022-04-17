class Renderer {

	loadEntity(entity) {
		CTX.loadVtxBuffer(entity.id, entity.mesh.vertexes);
	}

	renderEntity(entity) {	
		//CTX.loadVtxBuffer(newVertexes);
		//CTX.renderVtxBuffer(entity.mesh.color, 5);	//aaa
		//CTX.renderBuffer(entity.id, Perspectivator._2dOrthogonal)
		 CTX.renderBuffer(entity.id, Perspectivator._3dPerspective);
	}

}