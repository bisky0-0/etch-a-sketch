//creating squars inside sketch:
let sketch = document.getElementById("sketch");
let squareRange = document.getElementById("range");
let rangeNum = document.getElementById("range-num");

//change sketch squares range
function changeRange() {
    if (range.value > 0) {
        sketch.innerHTML = "";
        for (let i = 0; i < range.value * range.value; i++) {
            rangeNum.textContent = range.value;
            newDivs = document.createElement("div");
            newDivs.style.cssText = `width:calc(100% /${range.value});
             height:calc(100% /${range.value});
             background-color: #fff;
             border: ${1 / range.value}px solid #a9a8a8;
             border-bottom: none;
             border-right:none`;
            sketch.appendChild(newDivs);
        }
    }
}
changeRange()
squareRange.addEventListener('input', changeRange);

//coloring 

