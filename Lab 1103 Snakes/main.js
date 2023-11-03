
window.addEventListener("load", init);
let canvas, context;

let snakes = [];
function init() {
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");

  loadSnakes(4);
  animate();

}


// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  runSnakes();
  requestAnimationFrame(animate); // next cycle



}


function runSnakes() {
  for (let i = 0; i < snakes.length; i++) {
      snakes[i].run();
  }
}

function loadSnakes(n) {
  for(let i = 0; i < n; i ++){


    let x = (Math.random()*canvas.width);
    let y = (Math.random()*canvas.height);
    let loc = new JSVector(x, y);

    let vx = Math.random()*2-1;
    let vy = Math.random()*2-1;
    let vel = new JSVector(vx, vy);

    let nOfC = Math.random()*5+8;
    let sDiam = Math.random()*15+10;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
    snakes.push(new Snake(loc, vel, nOfC, sDiam, c));
    
  }
}