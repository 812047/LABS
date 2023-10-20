
window.addEventListener("load", init);
let canvas, context;
let planets
let ships
function init() {
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");

  ships = new Ship(400, 400)
  planets = new Planet(600,600, 30)

}


// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);
  planets.run();
  ships.run();
  requestAnimationFrame(animate); // next cycle



}

