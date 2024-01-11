
window.addEventListener("load", init);
let canvas, context;
let planets, snakes; 
let obstacles = [];
function init() {
  //its a 50 x 40 block system (put that in the locs)
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
snakes = new Snake(20,2);//the third value is i-1 # of lineSegments
planets = new Planet(10,5,40)
 for(let i = 0; i < 0; i ++) {
  let x = Math.floor(Math.random() * 50); 
  let y =  Math.floor(Math.random() * 40);
  obstacles.push(new Obstacle(x, y));

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
  for( let i = 0; i < obstacles.length; i ++){
    obstacles[i].run();
 
  }

}

