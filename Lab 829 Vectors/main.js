
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
 
let v1 = new JSVector(4, 4);
let v2 = new JSVector(6, 6);


console.log(v1.toString());
console.log(v1.distanceSquared(v2));
}
