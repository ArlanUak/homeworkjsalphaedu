const circleBtn = document.getElementById("circleBtn"); 
const squareBtn = document.getElementById("squareBtn");

const containerFigure = document.querySelector(".result");

const btnRed = document.getElementById("btnRed");
const btnYlw = document.getElementById("btnYlw");
const btnGrn = document.getElementById("btnGrn");
const btnBlue = document.getElementById("btnBlue");

const inputTxt = document.getElementById("textInput");
const btnTxt = document.getElementById("addTextBtn");

const clearBtn = document.getElementById("clearBtn");



let shapePamyat = null;

const colors = [
    { title: "Красный", hex: "#E32636" },
    { title: "Жёлтый", hex: "#FDE910" },
    { title: "Зелёный", hex: "#138808" },
    { title: "Синий", hex: "#1560BD" }
];



function createShape(type) {
    containerFigure.innerHTML = "";
    const shape = document.createElement("div");
    shape.classList.add(type);
    containerFigure.appendChild(shape);
    shapePamyat = shape;
    // console.log(shape)
};

circleBtn.addEventListener("click", function () {
    createShape("circle");
});
squareBtn.addEventListener("click", function () {
    createShape("square"); 
});


btnRed.addEventListener("click" , function() {
    shapeColor(colors[0].hex);
});

btnYlw.addEventListener("click", function(){
    shapeColor(colors[1].hex);
});

btnGrn.addEventListener("click", function(){
    shapeColor(colors[2].hex);
});

btnBlue.addEventListener("click", function(){
    shapeColor(colors[3].hex);
});

function shapeColor(color) {
    if(shapePamyat) {
        shapePamyat.style.backgroundColor = color;
    }
    else {
        alert("Сначало выберите фигуру")
    }
};

addTextBtn.addEventListener("click", function(){
    const text = inputTxt.value;
    if(!shapePamyat) {
        alert("Сначало выберите фигуру");
        return
    }
    if(!text) {
        alert("Сначало напишите текст");
        return
    }
    shapePamyat.textContent = text;
});

clearBtn.addEventListener("click", function(){
    if (shapePamyat) {
        containerFigure.innerHTML = "";
        shapePamyat = null;   
    }
});