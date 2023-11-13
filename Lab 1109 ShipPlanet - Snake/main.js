
window.addEventListener("load", init);
let canvas, context;
let planets
let snakes;
function init() {
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
snakes = new Snake(200, 400, 13);//the third value is i-1 # of lineSegments
planets = new Planet(200,200,60)
  // ships = new Ship(Math.random() * canvas.width / 2 + canvas.width / 4, Math.random() * canvas.height / 2 + canvas.height / 4);
  // planets = new Planet(Math.random() * canvas.width / 2 + canvas.width / 4, Math.random() * canvas.height / 2 + canvas.height / 4, 30);
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

