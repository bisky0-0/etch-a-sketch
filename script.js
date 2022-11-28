//creating squars inside sketch:
let sketch = document.getElementById("sketch");
let squareRange = document.getElementById("range");
let rangeNum = document.getElementById("range-num");
let newDivs;

//change sketch squares range
function changeRange() {
    if (squareRange.value > 0) {
        sketch.innerHTML = "";
        for (let i = 0; i < squareRange.value * squareRange.value; i++) {
            rangeNum.textContent = range.value;
            newDivs = document.createElement("div");
            newDivs.className = "newClassList";
            newDivs.style.cssText = `width:calc(100% /${squareRange.value});
             height:calc(100% /${squareRange.value});
             background-color: #fff;
             border: ${1 / squareRange.value}px solid #a9a8a8;
             border-bottom: none;
             border-right:none`;
            sketch.appendChild(newDivs);
        }
        for (sketchChild of sketch.children) {
            removeEventListener("mouseover", coloring, true)
            sketchChild.addEventListener("mouseover", coloring);
        }

    }
    return newDivs;
}
changeRange()
squareRange.addEventListener('input', changeRange);

//coloring 
let colorPalet = document.getElementById("color");
let paletOne = document.getElementById("palet-one");
let paletTwo = document.getElementById("palet-two");
let eraser = document.getElementById("eraser");
let clear = document.getElementById("clear");

let paletOneColors = ['#e4c1f9', '#a9def9', '#d0f4de', '#fcf6bd', '#ff99c8'];
let paletTwoColors = ['#fe6d73', '#fef9ef', '#ffcb77', '#17c3b2', '#227c9d'];


function coloring(event) {
    event.target.style.cssText = `background-color: ${colorPalet.value}; width:calc(100% /${range.value});
        height:calc(100% /${squareRange.value});
        border: ${1 / squareRange.value}px solid #a9a8a8;
        border-bottom: none;
        border-right:none`;
}


let choosingColor = Math.floor(Math.random() * paletOneColors.length);
console.log(choosingColor);

