class Time {
	static __currentTime = 0;	//millisec
	static __lastFrameTime;		//sec
	static __now;
	static __FPS = 30;

	static update() {
		this.__now = performance.now();
		this.__lastFrameTime = (this.__now - this.__currentTime)/1000; 
		this.__currentTime = this.__now;
	}

	static get currentTime() {
		return this.__currentTime;
	}
	static get lastFrameTime() {
		return this.__lastFrameTime;
	}
	static get now() {
		return this.__now;
	}
	static get FPS() {
		return this.__FPS;
	}
}