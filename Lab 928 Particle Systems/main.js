
window.addEventListener("load", init);
let canvas, context;
let particles = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

    loadParticles();
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runParticles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
   


}


function loadParticles(n) {
    
    for (let i = 0; i < n; i++) {
        
        let x = 1/2*canvas.width;
        let y = 1/2 * canvas.height;
        let w = new JSVector(x, y)
        let r = 15;
        
       
            particles[i] = new Particle(w, 300, r);
        
   

    }
}


// move the circle to a new location
function runParticles() {
    for (let i = 0; i < movers.length; i++) {
        particles[i].run();
    }
}
