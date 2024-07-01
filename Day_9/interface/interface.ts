interface Adress{
    street: string,
    houseNumber: number,
    //....
}

interface StudentData {
    name: string,
    adress: string,
    matrikle: number,
    exmatriculated: boolean,
}

let student1: StudentData = {
    name: "Max Müller",
    adress: "Hauptstraße 5",
    matrikle: 123456,
    exmatriculated: false,
}

let student2: StudentData = {
    name: "Martina Musterfrau",
    adress: "Musterstraße 1",
    matrikle: 654321,
    exmatriculated: true
}
console.log(student1.adress);
student1.adress = "am Graben 6";

let students: StudentData[] = [student1, student2];

function studentInfo(student: StudentData): void{
    console.log(student.name, "lives at", student.adress, "and has matrikel Number", student.matrikle);
}

for(let i: number = 0; i < students.length; i++) {
    studentInfo(students[i]);
}