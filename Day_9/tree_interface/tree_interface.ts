interface trees{
    species: string,
    hight: number,
    habitat: string,
    extinct: boolean,
}

let Weißtanne: trees = {
    species: "silver fir (Abis Alba)",
    hight: 50,
    habitat: "natvie to the mountins of europa",
    extinct: false,
}

let bamboo: trees = {
    species: "Bamboo (Bambusoideae of the grass family Poaceae)",
    hight:46,
    habitat:"native to warm and moist tropical regions",
    extinct: false,
}

let AppleTree: trees = {
    species: "Apple Tree (Genus Malus)",
    hight:4.5,
    habitat:"cultivated worldwide",
    extinct:false,
}

let treelist: trees[] = [Weißtanne, bamboo, AppleTree]

let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

crc2.fillStyle = "brown";
crc2.fillRect(50, 450, 10, 20);

treelist[0].hight

crc2.beginPath();
crc2.moveTo(55, 250);
crc2.lineTo(5, 450);
crc2.lineTo(105, 450);
crc2.fillStyle = "green";
crc2.fill();
crc2.closePath();

crc2.fillStyle = "green";
crc2.fillRect(150, 470, 5, -250);

crc2.fillStyle = "brown";
crc2.fillRect(250, 470, 10, -80);

crc2.ellipse(250, 350, 70, 70, Math.PI, Math.PI * 180, Math.PI * 90 );
crc2.fillStyle = "green";
crc2.fill()


