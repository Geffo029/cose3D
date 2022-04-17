class Input {
	static __xAxis = {positive: 'd', negative: 'a'};
	static __yAxis = {positive: 'w', negative: 's'};
	static __zAxis = {positive: ' ', negative: null};

	static __keys = {
		'a': {last: false, now: false},
		'd': {last: false, now: false},
		's': {last: false, now: false},
		'w': {last: false, now: false},
		' ': {last: false, now: false}
	};



	static takeInput(key, down) {
		if (this.__keys[key] != undefined) {
			this.__keys[key].last = this.__keys[key].now;
			this.__keys[key].now = down;
		}
	}

	static get xAxis() {
		let value = 0;
		if (this.__keys[this.__xAxis.positive].now) value += 1; 
		if (this.__keys[this.__xAxis.negative].now) value -= 1; 
		return value;
	}
	static get yAxis() {
		let value = 0;
		if (this.__keys[this.__yAxis.positive].now) value += 1; 
		if (this.__keys[this.__yAxis.negative].now) value -= 1; 
		return value;
	}
	static get zAxis() {
		let value = 0;
		if (this.__keys[this.__zAxis.positive].now) value += 1;
		if (this.__keys[this.__zAxis.negative].now) value -= 1;
		return value;
	}
}