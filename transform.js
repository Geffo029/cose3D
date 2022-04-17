class Transform {
	constructor() {
		this.__position = new Vector3();
		this.__rotation = new Vector3();
		this.__scale = 1;
	}


	increasePosition(dPosition) {
		this.__position.x += dPosition.x;
		this.__position.y += dPosition.y;
		this.__position.z += dPosition.z;
	}

	increaseRotation(dRotation) {
		this.__rotation.x += dRotation.x;
		this.__rotation.y += dRotation.y;
		this.__rotation.z += dRotation.z;
	}

	set position(position) {
		this.__position = position;
	}
	get position() {
		return this.__position;
	}

	set rotation(rotation) {
		this.__rotation = rotation;
	}
	get rotation() {
		return this.__rotation;
	}

	set scale(s) {
		this.__scale = s;
	}
	get scale() {
		return this.__scale;
	}
}