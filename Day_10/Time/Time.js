"use strict";
function runLater() {
    console.log("run me now!");
}
setTimeout(runLater, 1000);
let runs = 0;
let intervalId = setInterval(runEverySecond, 1000);
function runEverySecond() {
    runs++;
    console.log("i'm running every second. This is run number", runs);
    if (runs > 5) {
        clearInterval(intervalId);
    }
}
function frame() {
    console.log("frame");
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
