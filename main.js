
Display.canvas = document.getElementById('canvas');
Display.resizeCanvas(500, 400);
Display.backgroundColor = 'rgba(230, 230, 230, 1)';
CTX.ctx = Display.canvas.getContext('2d');

const renderer = new Renderer();
const world = new World();
const camera = new Camera();
const hud = new HUD();


camera.transform.position = new Vector3(0, 0);


const e1 = new Entity();
e1.transform.position = new Vector3(0, 0);
e1.mesh.vertexes = [
	+0.0, +0.0, 
	+2.0, +3.5,
	-1.0, +3.5,
	-1.0, -1.0
]; 

world.addEntity(e1);
world.entities.forEach((ent) => {
	renderer.loadEntity(ent);
});
Time.update();

//GAME LOOOOOOOOOOOOOOOOOOOOOOOOOOP
setInterval(loop, 1000/Time.FPS);

function loop() {
	Display.clearCanvas();
	Time.update();

	camera.move(
		new Vector3(Input.xAxis, Input.yAxis, 0)
		.normalized
		.multiply(Time.lastFrameTime*5)		//SPEEDDD
	);

	world.entities.forEach((ent) => {
		renderer.renderEntity(ent, camera.transform);
	})

	//world.drawCenter(camera.transform);
	hud.center();

}


document.addEventListener('keydown', (ev) => { Input.takeInput(ev.key, true) });
document.addEventListener('keyup', (ev) => { Input.takeInput(ev.key, false) });