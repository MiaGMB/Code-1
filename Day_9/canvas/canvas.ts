let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

crc2.fillStyle ="#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

crc2.beginPath();
crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
crc2.closePath();
crc2.stroke();

let path: Path2D = new Path2D();
path.arc(60, 60, 50, 0, 2 * Math.PI);
crc2.stroke(path);
