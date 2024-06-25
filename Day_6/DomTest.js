"use strict";
let spanElement = document.querySelector("span#idHello");
spanElement.textContent = 'World';
let newSpan = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
console.log(newSpan);
let i = 0;
do {
    i++;
    console.log(i);
    let newSpan = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
} while (i < 10);
