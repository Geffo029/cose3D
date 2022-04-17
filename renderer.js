class Renderer {

	loadEntity(entity) {
		CTX.loadVtxBuffer(entity.mesh.vertexes);
	}

	renderEntity(entity, cameraTransform) {		//DA SPOSTAREERE
		//let newVertexes = this.editVertexs(entity.mesh.vertexes, entity.transform.position, cameraTransform.position);
		//CTX.loadVtxBuffer(newVertexes);
		//CTX.renderVtxBuffer(entity.mesh.color, 5);	//aaa
		CTX.renderBuffer(Perspectivator._2dOrthogonal)
	}

}