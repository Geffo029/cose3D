class InputManager {
	constructor() {
		this.up = { key: 'w', hold: false};
		this.left = { key: 'a', hold: false};
		this.down = { key: 's', hold: false};
		this.right = { key: 'd', hold: false};
	}

	takeInput(key, hold) {
		let m = null;
	// 	if (this.up.key == key) this.up.hold = hold;
	// 	else if (this.left.key == key) this.left.hold = hold;
	// 	else if (this.down.key == key) this.down.hold = hold;
	// 	else if (this.right.key == key) this.right.hold = hold;
		[this.up, this.left, this.down, this.right].forEach((value) => {
			if(value.key == key) value.hold = hold;
		});

	}

	getMovVector() {
		let m = new Vector2();
		if (this.up.hold) m.y += 0.1;
		if (this.left.hold) m.x += -0.1;
		if (this.down.hold) m.y += -0.1;
		if (this.right.hold) m.x += 0.1;
		return m;
	}
}