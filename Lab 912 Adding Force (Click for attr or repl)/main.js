//Part A Yes (Yellow = Attractor && Blue = Repulsor)
window.addEventListener("load", init);
window.addEventListener("click", addForces);
let canvas, context;
let movers = [];
let attractor;
let repulsor;
let t = false;
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

   loadMovers(60);
   runMovers();
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
    
    for (let i = 0; i < n+1; i++) {
        
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 10 + 5;
        let dx = Math.random()*2-1;
        let dy = Math.random()*2-1;
        
        movers[i] = new Mover(x, y, dx, dy, r, "normal");
        
    }
   movers[movers.length-1] = new Mover(canvas.width/2, canvas.height/2, Math.random()*4-2,Math.random()*4-2, 6, "attractor");
//   movers[movers.length] = new Mover(canvas.width/4, canvas.height/4, Math.random()*4-2, Math.random()*4-2, 6, "repulsor"); 
 //out of bound error prob should fix later
   
}


// move the circle to a new location
function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}
