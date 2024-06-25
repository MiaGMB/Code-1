let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = 'World'

let newSpan: HTMLSpanElement= document.createElement("span");
newSpan.textContent = "Hello"
document.body.appendChild(newSpan);

console.log(newSpan);

let i:number = 0
do {
    i++;
    console.log(i);
    let newSpan: HTMLSpanElement= document.createElement("span");
newSpan.textContent = "Hello"
document.body.appendChild(newSpan);

} while(i < 10)
