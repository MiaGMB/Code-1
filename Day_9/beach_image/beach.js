"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
let c1 = { xPos: 100, yPos: 100 };
function drawCloud(cloud) {
    crc2.beginPath();
    crc2.ellipse(30 + cloud.xPos, 40 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(10 + cloud.xPos, 0 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(50 + cloud.xPos, 10 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(60 + cloud.xPos, 40 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.ellipse(0 + cloud.xPos, 40 + cloud.yPos, 30, 30, Math.PI, Math.PI * 180, Math.PI * 90);
    crc2.fillStyle = "beige";
    crc2.fill();
    crc2.closePath();
}
let cloudDefinitions = [{ xPos: 100, yPos: 100 }, { xPos: 200, yPos: 150 },{ xPos: 360, yPos: 130 },{ xPos: 500, yPos: 100 },{ xPos: 800, yPos: 80 }];
function drawClouds(clouds) {
    clouds.forEach(cloud => {
        drawCloud(cloud);
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
crc2.fillStyle = "orange";
crc2.fillRect(0, 0, 1000, 250);
//sun
crc2.beginPath();
crc2.ellipse(200, 250, 70, 70, Math.PI, Math.PI * 90, Math.PI * 45);
crc2.fillStyle = "yellow";
crc2.fill();
crc2.closePath();
//clouds
let i = 0;
let c = 500;
// Palm
drawClouds(cloudDefinitions);
//# sourceMappingURL=beach.js.map