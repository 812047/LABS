
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


    let x = (Math.random()*canvas.width/2 + canvas.width/4);
    let y = (Math.random()*canvas.height/2 + canvas.height/4);
    let loc = new JSVector(x, y);
    let v = 4;
    let vx = Math.random()*v-(v/2);
    let vy = Math.random()*v-(v/2);
    let vel = new JSVector(vx, vy);

    let nOfC = Math.floor(Math.random()*5+8);
    // let sWidth = Math.random()*15+20;
    // let sHeight = Math.random()*20+20;

    let sWidth = 40; sHeight = 40;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.01 + ')';
    snakes.push(new Snake(loc, vel, nOfC, sWidth, sHeight, c));
    
  }
}
