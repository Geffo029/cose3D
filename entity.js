class Entity {
	constructor(id) {
		this.__id = id;
		this.__transform = new Transform();
		this.__mesh = new Mesh(id);
	}

	move(dPosition) {
		this.__transform.increasePosition(dPosition);
	}

	set transform(transform) {
		this.__transform = transform;
	}
	get transform() {
		return this.__transform
	}

	set mesh(mesh) {
		this.__mesh = mesh;
	}
	get mesh() {
		return this.__mesh;
	}

	get id() {
		return this.__id;
	}
}