//creating squars inside sketch:
let sketch = document.getElementById("sketch");
let squareRange = document.getElementById("range");
let rangeNum = document.getElementById("range-num");
let newDivs;
let squaresStyling;

function changeRange() {
    squaresStyling = `background-color: #fff; width:calc(100% /${range.value});
height:calc(100% /${squareRange.value});
border: ${1 / squareRange.value}px solid #a9a8a8;
border-bottom: none;
border-right: none;
cursor: crosshair`;
    if (squareRange.value > 0) {
        sketch.innerHTML = "";
        color.value = "#ffffff"
        for (let i = 0; i < squareRange.value * squareRange.value; i++) {
            rangeNum.textContent = range.value;
            newDivs = document.createElement("div");
            newDivs.className = "newClassList";
            newDivs.style.cssText = `${squaresStyling}`;
            sketch.appendChild(newDivs);
        }
    }
    return squaresStyling, newDivs;
}
changeRange();
squareRange.addEventListener("input", changeRange);
//coloring
let colorPalet = document.getElementById("color");
let paletOne = document.getElementById("palet-one");
let paletTwo = document.getElementById("palet-two");
let eraser = document.getElementById("eraser");
let clear = document.getElementById("clear");
let paletOneColors = ["#a9def9", "#e4c1f9", "#d0f4de", "#fcf6bd", "#ff99c8", "#0077b6", "#b5e48c", "#7b2cbf", "#ffb3c6"];
let paletTwoColors = ["#fe6d73", "#000000", "#ffcb77", "#17c3b2", "#227c9d", "#9b5de5", "#ff9770", "#00bbf9", "#80ed99"];

//coloring with color input value
colorPalet.addEventListener("click", function () {
    for (const sketChild of sketch.children) {
        sketChild.addEventListener("mousemove", function () {
            sketChild.style.cssText = `${squaresStyling}; background-color: ${color.value};`;
        });
    }
});

//choosing randomly from palets
function randomColor(palet) {
    return Math.floor(Math.random() * palet.length);
}
//coloring with palet one colors
paletOne.addEventListener("click", function () {
    for (const sketChild of sketch.children) {
        sketChild.addEventListener("mousemove", function () {
            let chosenColor1 = randomColor(paletOneColors);
            sketChild.style.cssText = `${squaresStyling}; background-color: ${paletOneColors[chosenColor1]};`;
        });
    }
});

//coloring with palet two colors
paletTwo.addEventListener("click", function () {
    for (const sketChild of sketch.children) {
        sketChild.addEventListener("mousemove", function () {
            let chosenColor2 = randomColor(paletTwoColors);
            sketChild.style.cssText = `${squaresStyling}; background-color: ${paletTwoColors[chosenColor2]};`;
        });
    }
});

//remove colors by mouseovering the grid items
eraser.addEventListener("click", function () {
    for (const sketChild of sketch.children) {
        sketChild.addEventListener("mousemove", function () {
            sketChild.style.cssText = `background-color: #fff; ${squaresStyling}; cursor:pointer`;
        });
    }
});

//clear all sketch
clear.addEventListener("click", function () {
    for (const sketChild of sketch.children) {
        sketChild.style.cssText = squaresStyling;
    }
});
