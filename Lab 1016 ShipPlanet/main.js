
window.addEventListener("load", init);
let canvas, context;
let planets = [];
let ships = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    ships.push(new Ship(Math.random()*canvas.width/2 + canvas.width/4, Math.random()*canvas.height/2 + canvas.height/4));
 //  planets.push(new Planet(Math.random()*canvas.width/2 + canvas.width/4, Math.random()*canvas.height/2 + canvas.height/4, 30));
 planets.push(new Planet(400,400, 20))
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
  planets[0].run();
    ships[0].run();
    requestAnimationFrame(animate); // next cycle



}

//why are you keeping these
// function runPlanet(){
//     for(let i = 0; i < planets.length; i ++){
       
//     }
// }

// function loadPlanet(n){

//     for(let i = 0; i < n; i++){
        
//     }
// }
// function runShip(){
//     for(let i = 0; i < planets.length; i ++){
       
//     }
// }

// function loadShip(n){

//     for(let i = 0; i < n; i++){
        
//     }
// }