class Mesh {
	constructor() {
		this.__vertexes = [];
		this.__color = 'red';
	}

	set vertexes(vertexes) {
		this.__vertexes = vertexes;
	}
	get vertexes() {
		return this.__vertexes;
	}

	set color(color) {
		this.__color = color;
	}
	get color() {
		return this.__color;
	}
}