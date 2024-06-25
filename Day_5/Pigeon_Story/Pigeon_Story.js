"use strict";
console.log("Pidgeon Story Start");
let q1 = prompt("It's a sunny Wednesday morning in the big city. You (a Pigeon) are sitting in your nest an are thinking about what you wanna do today. Should you go to the green PARK or will you go to the noise TRAIN STATION? I think I want to go to the...");
//First question Park of Trainstation?
console.log(q1);
ParkOrTrain();
function ParkOrTrain() {
    let input;
    if (q1 == "park" || q1 == "Park") {
        input = prompt("You get up and fly to the park. After flying around a bit you have two thing you are interested in doing there. On a nearby bench sits an old lady, maybe she got something to feed you with. On the other hand there is a bird bath beside the way, you really should get a bath soon because you are a little bit stinky and feel gross. Will you go get FOOD first or take a BATH? I will take the...");
        // Park
        q1 = "Trainstation";
        ParkOne(input);
    }
    else {
        input = prompt("You get up and fly to the train station. Arriving there you land on a platform. On your left sits a man in a suite eating a sandwich and on your right is standing a train with open doors. Will you go to the man and hope that he will give you a piece of the sandwich or will you get onto the train and see where it will take you? I want to...  RIDE the train EAT sandwich "); // Trainstation
        TrainstationOne(input);
    }
}
function ParkOne(path) {
    if (path == "food") {
        let input = prompt("You want to get food first so you fly to the old lady. Carefully you get near her. She looks at you, gripping her purse that she has in her hand, tight. She decides to give you FOOD or SHOO you away");
        ParkFood(input);
    }
    else {
        let input = prompt("You definitely need a bath first, you little stinky!! You fly down to the bird bath and refresh yourself. It feels good to be clean again. Now that you're done you think about what to do next. Should I STAY here a bit longer or FLY somewhere?I want to...");
        ParkBath(input);
    }
}
function ParkFood(path) {
    let input;
    if (path == "food") {
        alert("She gives you the food. Nice!! Now you are a very happy well fed pigeon [good ending]");
    }
    else {
        let input = prompt("She scares you away. Sad about not getting any food you think about where to go next. Will you go somewhere NEW or will you go back to your NEST?");
        if (input == "new") {
            ParkOrTrain(input);
        }
        else {
            Nest();
        }
    }
}
function ParkBath(path) {
    if (path == "stay") {
        alert("I will stay a little bit longer. getting a bit sleepy you don’t notice the cat approaching you. When you notice it it's already too late. The cat jumped at you and it was sadly your last bath ever… [bad endeing]");
    }
    else {
        let input = prompt("Now that you are back in the air you notice a cat near the bird bath. That was a close one!! Now will you go somewhere NEW or will you go back to your NEST?");
        if (input == "new") {
            ParkOrTrain(input);
        }
        else {
            Nest();
        }
    }
}
function Nest() {
    alert("You fly back to your nest. After arriving there you cuddle up in it and go back to sleep [good ending]");
}
function TrainstationOne(path) {
    if (path == "ride") {
        alert("You are a very curious pigeon and hop onto the train. After a few minutes the train closes its doors and continues its journey. This was a great decision!! The train takes you to a beautiful place where you enjoy a great vacation [good ending]");
    }
    else {
        let input = prompt("After hearing the loud rumbling of your stumage you definitely want the sandwich! Slowly you approach the man in the suite. Looking up from his sandwich the man's gaze lande’s on you. Will he be nice and share a little piece of sandwich with you? The man GIVES you a piece or DOESNT");
        TrainstationMan(input);
    }
}
function TrainstationMan(path) {
    if (path == "gives") {
        alert("The man does indeed give you a small sandwich piece. Nice!! Now you are a very happy well fed pigeon");
    }
    else {
        let input = prompt("Sadly he angrily glares at you and scares you away. Frustrated about his action you think about getting back at him and to drop a big poop on him. Will you POOP or NOT");
        TrainstationPoop(input);
    }
}
function TrainstationPoop(path) {
    if (path == "poop") {
        alert("You definitely want to let a gib poop land on him so you take a big shit flying above his head. The man gets really angry and pulls a AK47 out of his jacket!! Before you can even think about fleeing he already shot you… seems like this was your last poop… [bad ending]");
    }
    else {
        alert("You don’t want to get in trouble so you decide to go back to your nest. After arriving there you cuddle up in it and go back to sleep. It was enough stress for today [happy ending]");
    }
}
