
window.addEventListener("load", init);


// global variables
let canvas, context;
let bubbles = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

   loadBubbles(80);//I'm having a problem with my overlapping function so this is now n^2 so high numbers lag a lot.
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
    
    for (let i = 0; i < n; i++) {
     //   for(let j = 0; j < n; j ++){
       // let x = 40+80*j;
        //let y = 40+80*i;
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let dx = Math.random()*3-1.5;
        let dy = Math.random()*3-1.5;
        
        bubbles.push(new Bubble(x, y, dx, dy));
    //    }
    }
}


// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}
