//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
   // this.loc = new JSVector(this.x, this.y);
    this.y = y;
    this.x = x;
    this.diam = diam;
    this.clr = "rgba(255,255,255,255)";
    this.isOverlapping = false;
  }
  
  
  //  placing methods in the prototype (every ball shares functions)
  Bubble.prototype.run = function () {
    this.checkEdges();
    this.checkOverlapping()
    this.update();
    this.render();
  }
  
  
  //  Check to see if buuble leaves canvas area and reposition in necessary
  Bubble.prototype.checkEdges = function () {
    if(this.x  > canvas.width) this.x = 0;
    if(this.x  < 0) this.x = canvas.width;
    if(this.y  > canvas.width) this.y = 0;
    if(this.y  < 0) this.x = canvas.height;
  }
  
  
  //  Sets "this.isOverlapping" to true if bubbles are overlapping
  Bubble.prototype.checkOverlapping = function () {
        this.isOverlapping = false;
        let b = bubbles;
         for(let i = 0; i < b.length; i ++){
            if(this != b[i]){
                let d = Math.sqrt((this.x - b[i].x) * (this.x -b[i].x) + (this.y - b[i].y) * (this.y - b[i].y));
                if(d < this.diam + b[i].diam){
                    this.isOverlapping = true;
                    return;
                }
            }
         }
  }
  
  
  // renders a bubble to the canvas
  Bubble.prototype.render = function () {
     let ctx = context;
     if(this.isOverlapping){
        ctx.strokeStyle = "rgba(255,155,25,1)";
       ctx.fillStyle = "rgba(255,155,25,1)";
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.diam, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.strokeStyle = "rgba(255,5,0,255)";
        ctx.fillStyle = "rgba(255,5,0,255)";
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.diam, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }
  }
  //  update bubble every animation frame
  Bubble.prototype.update = function () {
    let change = -1;
    this.x += Math.random()*change - change/2;
    this.y += Math.random()*change - change/2;
  }
  