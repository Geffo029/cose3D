const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 300;

ctx.fillStyle = 'rgba(230, 230, 230, 1)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const meter2Pixel = 24;

const camera = new Camera();
camera.transform.position = new Vector2();

const square = new Entity();
square.transform.position = new Vector2(0, 0);
square.mesh = [
	+2, -1, 
	+2, +3.5,
	-1, +3.5,
	-1, -1
]; square.mesh.color = 'red';

const square2 = new Entity();
square2.transform.position = new Vector2(2, -2);
square2.mesh = [
	+2, -1, 
	+2, +3.5,
	-1, +3.5,
	-1, -1
]; square2.mesh.color = 'green'


const world = new World();
world.addEntity(square);
world.addEntity(square2);

let entities = world.getEntities();

entities.forEach((entity) => {
	//drawLine(entity.mesh, 5, entity.mesh.color);
	drawEntity(entity, 5);
});

drawGrid();
drawCenter();



function drawEntity(entity, lineWidth) {
	let camPos = camera.transform.position;
	let entPos = entity.transform.location;
	drawLine(entity.mesh, entPos, camPos, lineWidth, entity.mesh.color);
}

function drawLine(vertexes, entPos, camPos, width, color) {
	for (let i = 0; i < vertexes.length-1; i += 2) {
		vertexes[i]		= canvas.width/2	+ (vertexes[i]		+ entPos.x - camPos.x) * meter2Pixel;
		vertexes[i+1]	= canvas.height/2	- (vertexes[i+1]	+ entPos.y - camPos.y) * meter2Pixel;
		//console.log(pos[i])
	}
	ctx.lineWidth = width;
	ctx.beginPath();
	ctx.moveTo(vertexes[0], vertexes[1]);
	for (let i = 2; i < vertexes.length-1; i += 2) {
		ctx.lineTo(vertexes[i], vertexes[i+1]);
	}
	ctx.lineTo(vertexes[0], vertexes[1]);
	ctx.strokeStyle = color;
	ctx.stroke();
	ctx.closePath();
}

function drawGrid() {
	let center = [canvas.width/2, canvas.height/2];
	let cellSize = meter2Pixel;
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'gray';
	ctx.beginPath();
	for (let i = center[0]; i < canvas.width; i += cellSize) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.height);
	}
	for (let i = center[0]; i > 0; i -= cellSize) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.height);
	}
	for (let i = center[1]; i < canvas.height; i += cellSize) {
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.width, i);
	}
	for (let i = center[1]; i > 0; i -= cellSize) {
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.width, i);
	}
	ctx.stroke();
	ctx.closePath();
}

function drawCenter() {
	let center = [canvas.width/2, canvas.height/2];
	let crossLength = meter2Pixel;
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.moveTo(center[0], center[1] - crossLength);
	ctx.lineTo(center[0], center[1] + crossLength);
	ctx.moveTo(center[0] - crossLength, center[1]);
	ctx.lineTo(center[0] + crossLength, center[1]);
	ctx.stroke();
	ctx.closePath();
}

// const image = ctx.getImageData(0, 0, 2, 2);
// console.log(image.data);

// console.log(square.transform.getLocation());
// square.transform.increaseLocation(new Vector2(1, 1));
// square.transform.increaseLocation(new Vector2(1, 1));
// console.log(square.transform.getLocation());

// console.log(square.transform.getRotation());
// square.transform.increaseRotation(new Vector2(45, 45));
// square.transform.increaseRotation(new Vector2(45, 45));
// console.log(square.transform.getRotation());