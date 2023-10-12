
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
    runMovers();  
    if(Math.random()*100 > 90){// there is proboly a smarter way to do this
    loadMovers(1);
    }
    requestAnimationFrame(animate); // next cycle
   


}

function loadMovers(n) {
    
   // for (let i = 0; i < n; i ++) {
        
        let x = canvas.width/2;
        let y = canvas.height/2;
        let r = Math.random() * 15 + 5;
        let s = Math.floor(Math.random()*2);
       
        
        
            movers.push(new Mover(x, y, r, s));
        
   

  //  }
}


// move the circle to a new location
function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}
