
window.addEventListener("load", init);
let canvas, context;
let planets, snakes;
let obstacles = [];
function init() {
  //its a 50 x 40 block system (put that in the locs)
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
  let x = Math.floor(Math.random() * 50);
  let y = Math.floor(Math.random() * 40);

  snakes = new Snake(x, y);//the third value is i-1 # of lineSegments
  x = Math.floor(Math.random() * 50);
  y = Math.floor(Math.random()* 40);

  planets = new Planet(x, y, 40);
  for (let i = 0; i < 100; i++) {
    let p = Math.floor(Math.random() * 50);
    let g = Math.floor(Math.random() * 40);
    obstacles.push(new Obstacle(p, g));

  }
  animate();

}


// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate); // next cycle

  planets.run();

    snakes.run();



  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].run();

  }

}

