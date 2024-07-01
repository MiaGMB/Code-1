let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface cloud {
    xPos: number,
    yPos: number,
}

let c1: cloud = { xPos: 100, yPos: 100 }
function drawCloud(cloud: cloud) {
    crc2.beginPath();
    crc2.ellipse(30 + cloud.xPos, 40 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(10 + cloud.xPos, 0 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(50 + cloud.xPos, 10 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(60 + cloud.xPos, 40 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(0 + cloud.xPos, 40 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.fillStyle = "beige";
    crc2.fill();
    crc2.closePath()
}

let cloudDefinitions: cloud[] = [{ xPos: 100, yPos: 100 },{ xPos: 200, yPos: 150 }]
function drawClouds(clouds: cloud[]): void{
    clouds.forEach(cloud => {
        drawCloud(cloud)
    });
}

//Beach/Sand
crc2.fillStyle = "yellow";
crc2.fillRect(0, 400, 1000, 100);

//waves
crc2.fillStyle = "cyan";
crc2.fillRect(0, 350, 1000, 50);

//ocean
crc2.fillStyle = "blue";
crc2.fillRect(0, 250, 1000, 100);

//sky
crc2.fillStyle = "orange"
crc2.fillRect(0, 0, 1000, 250)

//sun
crc2.beginPath();
crc2.ellipse(200, 250, 70, 70, Math.PI, Math.PI * 90, Math.PI * 45);
crc2.fillStyle = "yellow";
crc2.fill()
crc2.closePath();

//clouds
let i: number = 0
let c: number = 500

// Palm

drawClouds(cloudDefinitions)