
window.addEventListener("load", init);
let canvas, context;
let planets
let ships
function init() {
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
ships = new Ship(200, 200);
planets = new Planet(200,200,30)
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
  ships.run();

}

