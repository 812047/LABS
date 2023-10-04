
window.addEventListener("load", init);
let canvas, context;
let movers = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

  // runMovers();
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runMovers();   // run bubbles
    requestAnimationFrame(animate); // next cycle
   


}

function addForces(){
   Mover.prototype.addForces();
}
function loadMovers(n) {
    
    for (let i = 0; i < n; i++) {
        
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 10 + 5;
        let dx = Math.random()*2-1;
        let dy = Math.random()*2-1;
        
       
            movers[i] = new Mover(x, y, dx, dy, r);
        
   

    }
}


// move the circle to a new location
function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}
