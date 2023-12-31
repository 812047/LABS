
window.addEventListener("load", init);
let canvas, context;
let plants = [];
let creatures = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
  

    loadPlants(3);
    console.log(plants)
    loadCreatures(4);
    animate();

}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runCreatures();
    runPlants();   

    requestAnimationFrame(animate); // next cycle
   


}


function loadPlants(n) {
    
    for (let i = 0; i < n; i++) {
        
        let x = Math.random()*canvas.width/2+canvas.width/4;
        let y = Math.random()*canvas.height/2+canvas.height/4;
        let r = 24;
        let l = Math.random() * 1500 + 750;
       
            plants.push(new Plant(x, y, l, r));
        
   

    }
}

function runPlants() {
    for (let i = 0; i < plants.length; i++) {
        plants[i].run();
    }
}

function loadCreatures(n) {
    
    for (let i = 0; i < n; i++) {
        
        let x = 400+i*50;
        let y = 400+i*50;
        let r = 12;
       
            creatures.push(new Creature(x, y, r));
   

    }
}

function runCreatures() {
    for (let i = 0; i < creatures.length; i++) {
        creatures[i].run();
    }
}
