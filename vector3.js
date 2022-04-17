class Vector3 {
	//constructor(x = 0, y = 0, z = 0) {
	constructor(x, y, z) {
		this.__x = x;
		this.__y = y;
		this.__z = z;
		//this.__magnitude = 0; 
		//this.calcMagnitude();
	}


	// calcMagnitude() {
	// 	this.__magnitude = Math.sqrt(
	// 		this.__x * this.__x + 
	// 		this.__y * this.__y +
	// 		this.__z * this.__z
	// 	);
	// }
	
	multiply(scalar) {
		this.__x *= scalar;
		this.__y *= scalar;
		this.__z *= scalar;
		return this;
	}

	normalize() {
		let mag = this.magnitude;
		if (mag != 1 && mag != 0) {
			this.__x /= mag; 
			this.__y /= mag; 
			this.__z /= mag; 
			//this.calcMagnitude();
		}
		return this;
	}

	get magnitude() {
		return Math.sqrt(
			this.__x * this.__x + 
			this.__y * this.__y +
			this.__z * this.__z
		);
	}

	get normalized() {
		let mag = this.magnitude;
		//console.log(mag);
		if (mag != 0)
			return new Vector3(this.__x / mag,	this.__y / mag, this.__z / mag);
		else 
			return new Vector3(0, 0, 0);	
	}

	set x(x) {
		this.__x = x;
		//this.calcMagnitude();
	} 
	get x() {
		return this.__x;
	}

	set y(y) {
		this.__y = y;
		//this.calcMagnitude();
	} 
	get y() {
		return this.__y;
	}

	set z(z) {
		this.__z = z;
		//this.calcMagnitude();
	} 
	get z() {
		return this.__z;
	}

	static get zero() {
		return new Vector3(0, 0, 0);
	}



	// static multiply(vector3, scalar) {
	// 	return new Vector3(
	// 		vector3.x * scalar,
	// 		vector3.y * scalar,
	// 		vector3.z * scalar,
	// 	)
	// }
}