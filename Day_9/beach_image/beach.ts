let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;



//clouds
interface cloud {
    xPos: number,
    yPos: number,
}

let c1: cloud = { xPos: 100, yPos: 100 }
function drawCloud(cloud: cloud): void {
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

let cloudDefinitions: cloud[] = []
createClouds()
function drawClouds(clouds: cloud[]): void {
    clouds.forEach(cloud => {
        drawCloud(cloud)
    });
}

function createClouds() {
    for (let i: number = 0; i < 5; i = i + 1) {
        let cloud: cloud = { xPos: Math.random() * canvas.width, yPos: Math.random() * 150 };
        cloudDefinitions.push(cloud)
    }
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





//palm
function palm() {
crc2.fillStyle = "brown";
crc2.fillRect(600, 450, 30, -300);

crc2.beginPath();
crc2.moveTo(600, 150);
crc2.lineTo(450, 130);
crc2.lineTo(560, 120);
crc2.lineTo(500, 50);
crc2.lineTo(590, 110);
crc2.lineTo(580, 40);
crc2.lineTo(620, 110);
crc2.lineTo(690, 50);
crc2.lineTo(650, 120);
crc2.lineTo(750, 120);
crc2.lineTo(630, 150);
crc2.lineTo(600, 150)
crc2.fillStyle = "green";
crc2.fill();
crc2.closePath();
}

let imgData: ImageData = crc2.getImageData(0,0,canvas.width, 250)

const speed: number = 0.5;
function updatecloud(){
    for( let i: number = 0; i < cloudDefinitions.length; i++){
        cloudDefinitions[i].xPos += speed;
    }
}

function animationFrame() {
    crc2.clearRect(0, 0, canvas.width, 250);
    crc2.putImageData(imgData, 0, 0);
    updatecloud();
    drawClouds(cloudDefinitions);
    palm()
    requestAnimationFrame(animationFrame)
}
requestAnimationFrame(animationFrame)
