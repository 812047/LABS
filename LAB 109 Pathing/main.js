
window.addEventListener("load", init);
let canvas, context;
let planets
let snakes;
function init() {
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
snakes = new Snake(Math.random()*1000+ 500, Math.random()*750+ 375);//the third value is i-1 # of lineSegments
planets = new Planet(400,400,50)
 
  animate();

}


// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  requestAnimationFrame(animate); // next cycle

  planets.run();
  snakes.run();

}

