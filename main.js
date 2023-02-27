const button = document.querySelector("button");

const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const a = document.querySelector(".a");
const h = document.querySelector(".h");
const c2 = document.querySelector(".c2");
const d2 = document.querySelector(".d2");
const e2 = document.querySelector(".e2");

const cSharp = document.querySelector(".cSharp");
const dSharp = document.querySelector(".dSharp");

const fSharp = document.querySelector(".fSharp");
const gSharp = document.querySelector(".gSharp");
const aSharp = document.querySelector(".aSharp");

const cSharp2 = document.querySelector(".cSharp2");
const dSharp2 = document.querySelector(".dSharp2");

var soundC = new Audio ("/sounds/C.wav");
var soundD = new Audio ("/sounds/D.wav");
var soundE = new Audio ("/sounds/E.wav");
var soundF = new Audio ("/sounds/F.wav");
var soundG = new Audio ("/sounds/G.wav");
var soundA = new Audio ("/sounds/A.wav");
var soundH = new Audio ("/sounds/H.wav");
var soundC2 = new Audio ("/sounds/C2.wav");
var soundD2 = new Audio ("/sounds/D2.wav");
var soundE2 = new Audio ("/sounds/E2.wav");

var soundCSharp = new Audio ("/sounds/CSharp.wav");
var soundDSharp = new Audio ("/sounds/DSharp.wav");

var soundFSharp = new Audio ("/sounds/FSharp.wav");
var soundGSharp = new Audio ("/sounds/GSharp.wav");
var soundASharp = new Audio ("/sounds/ASharp.wav");

var soundCSharp2 = new Audio ("/sounds/CSharp2.wav");
var soundDSharp2= new Audio ("/sounds/DSharp2.wav");

c.addEventListener("click", (event) => {
    soundC.currentTime = 0;
    soundC.play();
    document.querySelector("p").innerHTML = "C";
})

cSharp.addEventListener("click", (event) => {
    soundCSharp.currentTime = 0;
    soundCSharp.play();
    document.querySelector("p").innerHTML = "C#";
})

d.addEventListener("click", (event) => {
    soundD.currentTime = 0;
    soundD.play();
    document.querySelector("p").innerHTML = "D";
})

dSharp.addEventListener("click", (event) => {
    soundDSharp.currentTime = 0;
    soundDSharp.play();
    document.querySelector("p").innerHTML = "D#";
})

e.addEventListener("click", (event) => {
    soundE.currentTime = 0;
    soundE.play();
    document.querySelector("p").innerHTML = "E";
})

f.addEventListener("click", (event) => {
    soundF.currentTime = 0;
    soundF.play();
    document.querySelector("p").innerHTML = "F";
})

fSharp.addEventListener("click", (event) => {
    soundFSharp.currentTime = 0;
    soundFSharp.play();
    document.querySelector("p").innerHTML = "F#";
})

g.addEventListener("click", (event) => {
    soundG.currentTime = 0;
    soundG.play();
    document.querySelector("p").innerHTML = "G";
})

gSharp.addEventListener("click", (event) => {
    soundGSharp.currentTime = 0;
    soundGSharp.play();
    document.querySelector("p").innerHTML = "G#";
})

a.addEventListener("click", (event) => {
    soundA.currentTime = 0;
    soundA.play();
    document.querySelector("p").innerHTML = "A";
})

aSharp.addEventListener("click", (event) => {
    soundASharp.currentTime = 0;
    soundASharp.play();
    document.querySelector("p").innerHTML = "A#";
})

h.addEventListener("click", (event) => {
    soundH.currentTime = 0;
    soundH.play();
    document.querySelector("p").innerHTML = "H";
})

c2.addEventListener("click", (event) => {
    soundC2.currentTime = 0;
    soundC2.play();
    document.querySelector("p").innerHTML = "C";
})

cSharp2.addEventListener("click", (event) => {
    soundCSharp2.currentTime = 0;
    soundCSharp2.play();
    document.querySelector("p").innerHTML = "C#";
})

d2.addEventListener("click", (event) => {
    soundD2.currentTime = 0;
    soundD2.play();
    document.querySelector("p").innerHTML = "D";
})

dSharp2.addEventListener("click", (event) => {
    soundDSharp2.currentTime = 0;
    soundDSharp2.play();
    document.querySelector("p").innerHTML = "D#";
})

e2.addEventListener("click", (event) => {
    soundE2.currentTime = 0;
    soundE2.play();
    document.querySelector("p").innerHTML = "E";
})

// Press A
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 65)
    {
        soundC.currentTime = 0;
        soundC.play();
        document.querySelector("p").innerHTML = "C";
    }
})

// Press W
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 87)
    {
        soundCSharp.currentTime = 0;
        soundCSharp.play();
        document.querySelector("p").innerHTML = "C#";
    }
})

// Press S
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 83)
    {
        soundD.currentTime = 0;
        soundD.play();
        document.querySelector("p").innerHTML = "D";
    }
})

// Press E
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 69)
    {
        soundDSharp.currentTime = 0;
        soundDSharp.play();
        document.querySelector("p").innerHTML = "D#";
    }
})

// Press D
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 68)
    {
        soundE.currentTime = 0;
        soundE.play();
        document.querySelector("p").innerHTML = "E";
    }
})

// Press F
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 70)
    {
        soundF.currentTime = 0;
        soundF.play();
        document.querySelector("p").innerHTML = "F";
    }
})

// Press T
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 84)
    {
        soundFSharp.currentTime = 0;
        soundFSharp.play();
        document.querySelector("p").innerHTML = "F#";
    }
})

// Press G
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 71)
    {
        soundG.currentTime = 0;
        soundG.play();
        document.querySelector("p").innerHTML = "G";
    }
})

// Press Z
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 90)
    {
        soundGSharp.currentTime = 0;
        soundGSharp.play();
        document.querySelector("p").innerHTML = "G#";
    }
})

// Press H
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 72)
    {
        soundA.currentTime = 0;
        soundA.play();
        document.querySelector("p").innerHTML = "A";
    }
})

// Press U
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 85)
    {
        soundASharp.currentTime = 0;
        soundASharp.play();
        document.querySelector("p").innerHTML = "A#";
    }
})

// Press J
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 74)
    {
        soundH.currentTime = 0;
        soundH.play();
        document.querySelector("p").innerHTML = "H";
    }
})

// Press K
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 75)
    {
        soundC2.currentTime = 0;
        soundC2.play();
        document.querySelector("p").innerHTML = "C";
    }
})

// Press O
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 79)
    {
        soundCSharp2.currentTime = 0;
        soundCSharp2.play();
        document.querySelector("p").innerHTML = "C#";
    }
})

// Press L
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 76)
    {
        soundD2.currentTime = 0;
        soundD2.play();
        document.querySelector("p").innerHTML = "D";
    }
})

// Press P
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 80)
    {
        soundDSharp2.currentTime = 0;
        soundDSharp2.play();
        document.querySelector("p").innerHTML = "D#";
    }
})

// Press Ö
window.addEventListener("keydown", ({keyCode}) => {
    if (keyCode === 59)
    {
        soundE2.currentTime = 0;
        soundE2.play();
        document.querySelector("p").innerHTML = "E";
    }
})
