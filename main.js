
Display.canvas = document.getElementById('canvas');
Display.resizeCanvas(500, 400);
Display.backgroundColor = 'rgba(230, 230, 230, 1)';
CTX.ctx = Display.canvas.getContext('2d');

const renderer = new Renderer();
const world = new World();
const camera = new Camera();
const hud = new HUD();


camera.transform.position = new Vector3(0, 1, 0);


const e1 = new Entity(1);
e1.transform.position = new Vector3(0, 0, 3);
e1.mesh.vertexes = [
	+0.0, +0.0, +0.0, 
	+2.0, +3.5, +0.0,
	-1.0, +3.5, +0.0,
	-1.0, -1.0, +0.0
]; 

const e2 = new Entity(2);
e2.transform.position = new Vector3(-1, -1, 3);
e2.mesh.vertexes = [
	+2.0, +0.0, -1.0, 
	+2.0, +0.0, +1.0,
	-2.0, +0.0, +1.0,
	-2.0, +0.0, -1.0,
]; 

const e3 = new Entity(3);
e3.transform.position = new Vector3(-1, -1, 3);
e3.mesh.vertexes = [
	-2.0, +0.0, +1.0, 
	-2.0, +3.0, +1.0,
	-2.0, +3.0, -1.0,
	-2.0, +0.0, -1.0,
]; 

world.addEntity(e1);
world.addEntity(e2);
world.addEntity(e3);

world.entities.forEach((ent) => {
	renderer.loadEntity(ent);
});

Time.update();


//GAME LOOOOOOOOOOOOOOOOOOOOOOOOOOP
let STOP = false;
let loopId = null;
loopId = setInterval(loop, 1000/Time.FPS);

function stop() {
	STOP = !STOP;
	if (!STOP) {
		loopId = setInterval(loop, 1000/Time.FPS);
	}
	else {
		clearInterval(loopId);
	}
}


function loop() {
	Display.clearCanvas();
	Time.update();

	camera.move(
		//new Vector3(Input.xAxis, Input.yAxis, 0)
		new Vector3(Input.xAxis, Input.yAxis, Input.zAxis)
		.normalized
		.multiply(Time.lastFrameTime*3)		//SPEEDDD
	);

	console.log('Posizione camera: ' + camera.transform.position.x + ', ' + camera.transform.position.y + ', ' + camera.transform.position.z);
	console.log('Posizione e1: ' + e1.transform.position.x + ', ' + e1.transform.position.y + ', ' + e1.transform.position.z);
	console.log('Posizione e2: ' + e2.transform.position.x + ', ' + e2.transform.position.y + ', ' + e2.transform.position.z);
	console.log('/////////////////////////')

	Perspectivator.cameraTransform = camera.transform;

	world.entities.forEach((ent) => {
		Perspectivator.entityTransform = ent.transform;
		renderer.renderEntity(ent);
	})

	//world.drawCenter(camera.transform);
	//hud.center();

}


document.addEventListener('keydown', (ev) => { console.log(ev.key);Input.takeInput(ev.key, true) });
document.addEventListener('keyup', (ev) => { Input.takeInput(ev.key, false) });