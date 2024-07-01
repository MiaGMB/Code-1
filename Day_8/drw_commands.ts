const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.rect(10, 10, 100, 100);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "rgb(255, 0, 255)";
let path: Path2D = new Path2D();
path.rect(200, 200, 50, 50);
ctx.fill(path);

ctx.rotate(10*Math.PI / 180);
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "rgb(255, 0, 255)";
let path: Path2D = new Path2D();
path.rect(200, 200, 50, 50);
ctx.fill(path);

// draw a gradient rectangle
const gradient = ctx.createLinearGradient(50, 250, 100, 150);
gradient.addColorStop(0, "purple");
gradient.addColorStop(1, "orange");

ctx.fillStyle = gradient;
ctx.fillRect(10, 200, 200, 50)

