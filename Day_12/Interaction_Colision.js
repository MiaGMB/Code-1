"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
canvas.addEventListener("click", placeObject);
let shapes = [];
function placeObject(_event) {
    console.log(_event);
    let x = _event.offsetX;
    let y = _event.offsetY;
    if (Math.random() < 0.5) {
        let shape = { x: x, y: y, shape: 1, color: `hsl(${Math.random() * 360}, 100%, 50%)`, size: Math.random() * 20 + 10 };
        shapes.push(shape);
    }
    else {
        let shape = { x: x, y: y, shape: 2, color: `hsl(${Math.random() * 360}, 100%, 50%)`, size: Math.random() * 20 + 10 };
        shapes.push(shape);
    }
}
function drawShape(_shape) {
    if (_shape.shape == 1) {
        //circles
        crc2.beginPath();
        crc2.ellipse(_shape.x, _shape.y, _shape.size, _shape.size, Math.PI, Math.PI * 180, Math.PI * 90);
        crc2.fillStyle = _shape.color;
        crc2.fill();
        crc2.closePath();
    }
    else {
        //rect
        crc2.beginPath();
        crc2.fillStyle = _shape.color;
        crc2.fillRect(_shape.x, _shape.y, _shape.size, _shape.size);
        crc2.closePath();
    }
}
function drawShapes() {
    shapes.forEach(_shape => { drawShape(_shape); });
}
function moveShape() {
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].y < canvas.height - shapes[i].size)
            shapes[i].y += 3;
    }
}
function animationFrame() {
    crc2.clearRect(0, 0, canvas.width, canvas.height);
    moveShape();
    drawShapes();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
//# sourceMappingURL=Interaction_Colision.js.map