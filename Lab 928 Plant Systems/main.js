
window.addEventListener("load", init);
let canvas, context;
let plants = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

    loadPlants(2);
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runPlants();   
    requestAnimationFrame(animate); // next cycle
   


}


function loadPlants(n) {
    
    for (let i = 0; i < n; i++) {
        
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let r = 24;
        let l = Math.random() * 1500 + 750
       
            plants[i] = new Plant(x, y, l, r);
        
   

    }
}





// move the circle to a new location
function runPlants() {
    for (let i = 0; i < plants.length; i++) {
        plants[i].run();
    }
}
