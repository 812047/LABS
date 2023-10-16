
window.addEventListener("load", init);
let canvas, context;
let planets = [];// yeah idk why array if you are doing one of each only
let ships = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanet(1);
    loadShip(1);
   
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runPlanet();
    runShip();
    requestAnimationFrame(animate); // next cycle



}


function runPlanet(){
    for(let i = 0; i < planets.length; i ++){
        planets[i].run();
    }
}

function loadPlanet(n){

    for(let i = 0; i < n; i++){
        planets.push(new Planet(400, 400, 40));
    }
}
function runShip(){
    for(let i = 0; i < planets.length; i ++){
        ships[i].run();
    }
}

function loadShip(n){

    for(let i = 0; i < n; i++){
        ships.push(new Ship(200, 400));
    }
}