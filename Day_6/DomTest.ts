let slayText =[
    "SLAY",
    "QUEEN",
    "NICE",
    "PAPATASTISCH",
    "MITTWOCH"
]
let slayColor = [
    "red",
    "pink",
    "cyan",
    "blue",
    "yellow",
    "orange",
    "green",
    "purple"
]

/*let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = 'World'

let newSpan: HTMLSpanElement= document.createElement("span");
newSpan.textContent = "Hello"
document.body.appendChild(newSpan);

console.log(newSpan)*/

let i:number = 0
do {
    i++;
    console.log(i);
    let newSpan: HTMLSpanElement= document.createElement("span");
newSpan.textContent = slayText [Math.floor(Math.random()*5)]
document.body.appendChild(newSpan);

newSpan.style.color = slayColor[Math.floor(Math.random()*8)];
newSpan.style.backgroundColor = slayColor[Math.floor(Math.random()*8)];
newSpan.style.fontSize = Math.random() * 50 + "pt";
newSpan.style.position = "absolute";

newSpan.style.top = Math.random() * 90 + "%";
newSpan.style.left = Math.random() * 85 + "%";

} while(i < 200)
