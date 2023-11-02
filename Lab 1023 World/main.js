//Lab 1023 - 23: World bigger than Canvas
//Oct. 23, 2023
//Logan Thomas
//Yeah I think I hard coded a bit too much stuff + Everything is just kind scuffed but working

//Global
let world;
window.onload = init;

function init(){
    world = new World();
    animate();
}

function animate(){
  world.run();
  requestAnimationFrame(animate);
}
