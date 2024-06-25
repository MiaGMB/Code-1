let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = 'World'

let newSpan: HTMLSpanElement= document.createElement("span");
newSpan.textContent = "Hello"
document.body.appendChild(newSpan);

console.log(newSpan);