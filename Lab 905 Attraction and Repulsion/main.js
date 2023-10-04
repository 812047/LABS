
window.addEventListener("load", init);


// global variables
let canvas, context;
let bubbles = [];
let Numbers = [];
let attractor;
let repulsor;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

   loadBubbles(6);

   runBubbles();
    
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
   


}


function loadBubbles(n) {
    
    for (let i = 0; i < n+1; i++) {
        
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 10 + 5;
        let dx = Math.random()*2-1;
        let dy = Math.random()*2-1;
        
        bubbles[i] = new Bubble(x, y, dx, dy, r, "normal");
        
    }
   bubbles[bubbles.length-1] = new Bubble(canvas.width/2, canvas.height/2, Math.random()*4-2,Math.random()*4-2, 6, "attractor");
   bubbles[bubbles.length] = new Bubble(canvas.width/4, canvas.height/4, Math.random()*4-2, Math.random()*4-2, 6, "repulsor"); 
 //out of bound error prob should fix later
   
}


// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}
